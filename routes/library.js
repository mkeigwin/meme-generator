const router = require('express').Router();

//requiring express so that server can simplify http requests
router.get('/library', (req, res) => {
  res.render('library');
});

//rendering info from this page to home index page
module.exports = router;

//reporting info from the router to app.js
