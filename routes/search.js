const router = require('express').Router();
// requiring the rounting service to get website to run

const { authenticate } = require('../lib/auth');
const { searchMeme } = require('../services/meme');
const { searchGif } = require('../services/gif');
const { saveFavorite } = require('../models/favorites');
// requiring authenticate from lib so that each save will be to personal userId
// seachMeme and searchGif are required from services, allowing API to be accessed
// model save fav allows you to click button and put into database, required from models

router.post('/', authenticate, searchMeme, searchGif, saveFavorite, (req, res) => {
// use all this middleware to do the above mentioned functionality
// authenticate called first so that nothing renders unless server knows userId
  res.render('search', {
    user: res.user,
    meme: res.meme || [],
    gif: res.gif || [],
    searchQuery: req.body.search,
    numbPage: req.body.number,
    samePage: req.body.page,
  });
});
// user pulls some of your user information
// meme and gif pull api info from thier respective locations
// search, numb, and same used to keep track of info when you page scroll and save
module.exports = router;
// exports routers so all the pages can be linked
