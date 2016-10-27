const router = require('express').Router();

const { searchMeme } = require('../services/meme');
const { searchGif } = require('../services/gif');

// grabbing information from services page, allowing function to be accessed on router page
router.post('/', searchMeme, searchGif, (req, res) => {
  res.render('search', {
    meme: res.meme || [],
    gif: res.gif || [],
    searchQuery: req.body.search,
    numbPage: req.body.number,
    // favorites: res.favorites || [],
  });
});

module.exports = router;
