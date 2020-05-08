//Not using this at the moment...
const express = require('express');
const router = express.Router();

const Note = require('../../models/Note');
const User = require('../../models/User');

// //route GET   api/recipes/me
// //description get current user's recipes
// //access      private?
// router.get('/', async (req, res) => {
//   try {
//     const note = await (await Recipe.findOne({ user: req.user.id })).populated('user', ['name']);

//     if(!note) {
//       return res.status(400).json({ msg: 'You have no notes saved'});
//     }

//     return res.json(note)

//   } catch(err) {
//     console.error(err.message);
//     res.status(500).send('Server error')
//   }
// });



module.exports = router;