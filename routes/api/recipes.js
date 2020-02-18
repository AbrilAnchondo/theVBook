const express = require('express');
const router = express.Router();

//route GET   api/recipes
//description test route
//access      public
router.get('/', (req, res) => res.send('Recipe route...'));

module.exports = router;