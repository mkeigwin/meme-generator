const router = require('express').Router();
// const { searchMeme } = require('../services/meme');
// const { searchGif } = require('../services/gif');
const { authenticate } = require('../lib/auth');
const { getFavorites,
        saveFavorite,
        deleteFavorites } = require('../models/favorites');

// requiring express so that server can simplify http requests

// rendering info from this page to home index page

// reporting info from the router to app.js

// router.get('/library', authenticate, getFavorites, (req, res) => {
//   res.render('library', {
//     user: res.user,
//     meme: res.meme || [],
//     gif: res.gif || [],
//     favorites: res.favorites || [],
//   });
// });

router.get('/library', authenticate, getFavorites, (req, res) => {
  res.render('library', {
    user: res.user,
    meme: res.meme || [],
    gif: res.gif || [],
    favorites: res.favorites || [],
  });
});

router.delete('/library/:id', deleteFavorites, (req, res) => {
  res.redirect('/library');
});

router.post('/library', saveFavorite, (req, res) => {
  // res.redirect('/');
});

module.exports = router;
