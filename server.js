const express = require('express');
const connectDB = require('./config/db');
const cors = require('cors');
// node js module to manipulate paths
const path = require('path');

const app = express();

//Connect to the database:
connectDB();

app.use(cors());


//init middleware to have access to the req and res objects
app.use(express.json({extended: false}));

//Define routes
app.use('/api/users', require('./routes/api/users'));
app.use('/api/auth', require('./routes/api/auth'));

// Serve static assets in production
if (process.env.NODE_ENV === 'production') {
  // Set static folder
  app.use(express.static('client/build'));
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port: ${PORT}`));
