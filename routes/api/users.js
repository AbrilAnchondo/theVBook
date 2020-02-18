const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator');

//bringing in the User model
const User = require('../../models/User');



//route POST   api/users
//description  register user
//access       public
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
    console.error(err.message);
    res.status(500).send('Server error')
  }
});

module.exports = router;