const router = require('express').Router();

router.get('/', (req, res) => {
  res.render('index');
});

//rendering info from this page to home index page
router.get('/home', (req, res) => {
  res.render('home', {
    // meme: res.meme || [],
    // favorites: res.favorites || [],
  });
});


module.exports = router;

//reporting info from the router to app.js

