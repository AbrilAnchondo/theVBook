const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator');

//bringing in the User model
const User = require('../../models/User');

// //route GET api/users/:id
// //description get logged in user info
router.get('/:id', async (req, res) => {
  try {
    const user = await User.findOne({ _id: req.params.id });
    res.json(user.recipes);
  } catch(err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

// //route POST   api/users
// //description  register user
// //access       public
 router.post('/', [
  check('name', 'Name is required')
    .not()
    .isEmpty(),
  check('email', 'Please include a valid email').isEmail()
], 
async (req, res) => {
  //req.body is the object of data that will be send to this route
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() })
  }
  //destructuring for easy acces
  const { name, email } = req.body;

  try {
    let user = await User.findOne({ email })

    //see if user exists
    if (user) {
      return res.status(400).json({ errors: [ { msg: 'User already exists'}]})
    }
    user = new User({
      name,
      email
    })
    await user.save();
    res.send('User registered');
  }catch(err) {
    res.status(500).send('Server error')
  }
});

// //route DELETE api/users
// //description delete user
// //acces ? have to figure it out
router.delete('/:id', async (req, res) => {
  try {
    await User.findOneAndRemove({ _id: req.params.id})
    res.json({ msg: 'User deleted' })
  }catch(err) {
    console.error(err.message);
    res.status(500).send('Server error')
  }
});

//route PUT api/users/:id/recipes
//description add to user recipes
//access ?
router.put('/:id/recipes', async (req,res) => {
  const { recipeID, favorite, category, notepad } = req.body;
  const newRecipe = {
    recipeID,
    favorite,
    category,
    notepad
  }

  try {
    const user = await User.findOne({ _id: req.params.id });
    const duplicate = user.recipes.filter(re => re.recipeID === req.body.recipeID);
    if (duplicate.length >= 1) {
      return res.status(400).json({ errors: [ { msg: 'Recipe already saved'}]})
    }else {
      user.recipes.unshift(newRecipe);
      await user.save();
      res.json(user.recipes);
    }
  }catch(err) {
    console.error(err.message);
    res.status(500).send('Server error')
  }
});

//route DELETE api/users/:id/recipes/:re_id
//description Delete recipe from a given user 
//
router.delete('/:id/recipes/:re_id', async (req, res) => {
  try {
    const user = await User.findOne({ _id: req.params.id });
    //get the remove index 
    const removeIndex = user.recipes
      .map(item => item.id)
      .indexOf(req.params.re_id);

    user.recipes.splice(removeIndex, 1);
    await user.save();
    res.json(user);
  }catch(err) {
    console.error(err.message);
    res.status(500).send('Server error')
  }
});

//route PUT api/users/:id/recipes/:re_id/notepad
//description update recipe note for a given recipe
//access?
router.put('/:id/recipes/:re_id/notepad', async (req, res) => {
  let newNote = req.body.notepad;

  try {
    const user = await User.findOne({ _id: req.params.id });
    const targetIndex = user.recipes
      .map(item => item.id)
      .indexOf(req.params.re_id);
    
    user.recipes[targetIndex].notepad = newNote;  
    await user.save();
    res.json(user);
  }catch(err) {
    console.error(err.message);
    res.status(500).send('Server error')
  }
});

//route PUT api/users/:id/recipes/:re_id/category
//description: update recipe category for a give recipe
//
router.put('/:id/recipes/:re_id/category', async (req, res) => {
  let newCategory = req.body.category;

  try {
    const user = await User.findOne({ _id: req.params.id });
    const targetIndex = user.recipes
      .map(item => item.id)
      .indexOf(req.params.re_id);
    
    user.recipes[targetIndex].category = newCategory;
    await user.save();
    res.json(user.recipes)
  }catch(err) {
    console.error(err.message);
    res.status(500).send('Server error')
  }
});

module.exports = router;