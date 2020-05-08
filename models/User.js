//models hold the schema, defines our user
const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    require: true
  },
  email: {
    type: String,
    require: true,
    unique: true
  },
  recipes: [
    {
      recipeID: {
        type: String
      },
      favorite: {
        type: Boolean,
        default: false
      },
      category: {
        type: String
      },
      notepad: {
        type: String
      }
    }
  ]
});

module.exports = User = mongoose.model('user', UserSchema);