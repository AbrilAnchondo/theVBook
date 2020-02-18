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
  }
})

module.exports = User = mongoose.model('user', UserSchema);