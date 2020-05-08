const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator');

//route post   api/auth
//description  long in
//access       public
router.post('/', [
   check('email', 'Please include a valid email').isEmail()
],
async (req,res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() })
  }
  const { email } = req.body;

  try {
    let user = await User.findOne({ email })

    //see if user exists
    if (!user) {
      return res.status(400).json({ errors: [ { msg: 'Invalid credentials'}]})
    }
    
    res.send(user);
  }catch(err) {
    console.error(err.message);
    res.status(500).send('Server error')
  }
});

module.exports = router;