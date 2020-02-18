//this file cares about separating the logic to be able to connect to the database

//briging in mongoose, used to connect to the DB
const mongoose = require('mongoose');

//config lets you create global variables to use through out the application
const config = require('config');

//to get any value in the json file:
const db = config.get('mongoURI');

//connecting mongoDB, we need to call within server.js
//wrap it in try - catch block  to catch any error
const connectDB = async () => {
  try {
    await mongoose.connect(db, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false
  });
    console.log('MongoDB Connected...');
  } catch(err) {
    console.error(err.message);
    //to exit process with failure:
    process.exit(1);
  }
}

module.exports = connectDB;