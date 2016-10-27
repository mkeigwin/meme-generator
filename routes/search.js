const router = require('express').Router();

const { searchMeme } = require('../services/meme');
const { searchGif } = require('../services/gif');

//grabbing information from services page, allowing function to be accessed on router page
router.post('/home/search', searchMeme,searchGif, (req, res) => {
  res.render('search', {
    meme: res.meme || [],
    gif: res.gif || [],
    // favorites: res.favorites || [],
    })
});

module.exports = router;
