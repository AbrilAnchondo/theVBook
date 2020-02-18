const express = require('express');
const connectDB = require('./config/db');

const app = express();

//Connect to the database:
connectDB();

const PORT = process.env.PORT || 5000;

//init middleware to have access to the req and res objects
app.use(express.json({extended: false}));

app.get('/', (req, res) => res.send('API is running...'));



//Define routes
app.use('/api/users', require('./routes/api/users'));
app.use('/api/recipes', require('./routes/api/recipes'));

app.listen(PORT, () => console.log(`Server started on port: ${PORT}`));
