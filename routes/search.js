const router = require('express').Router();

const { authenticate } = require('../lib/auth');
const { searchMeme } = require('../services/meme');
const { searchGif } = require('../services/gif');
const { saveFavorite } = require('../models/favorites');

router.post('/', authenticate, searchMeme, searchGif, saveFavorite, (req, res) => {
  res.render('search', {
    user: res.user,
    meme: res.meme || [],
    gif: res.gif || [],
    searchQuery: req.body.search,
    numbPage: req.body.number,
    samePage: req.body.page,
  });
});

module.exports = router;
