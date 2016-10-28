const router = require('express').Router();

const { authenticate } = require('../lib/auth');
const { searchMeme } = require('../services/meme');
const { searchGif } = require('../services/gif');
// const { saveFavorite } = require('../models/favorites');

// grabbing information from services page, allowing function to be accessed on router page
router.post('/', searchMeme, searchGif, authenticate, (req, res) => {
  res.render('search', {
    user: res.user,
    meme: res.meme || [],
    gif: res.gif || [],
    searchQuery: req.body.search,
    numbPage: req.body.number,
    // favorites: res.favorites || [],
  });
});

module.exports = router;
