const express = require('express');

const indexRouter = express.Router();
const { searchMeme } = require('../services/meme');
const { searchGif } = require('../services/gif');

// This is the route that serves your '/' homepage
indexRouter.get('/guestProfile', (req, res) => {
  res.render('users/guestProfile', {
  });
});

indexRouter.post('/guestSearch', searchMeme, searchGif, (req, res) => {
  res.render('guestSearch', {
    meme: res.meme || [],
    gif: res.gif || [],
    searchQuery: req.body.search,
    numbPage: req.body.number,
    samePage: req.body.page,
  });
});
module.exports = indexRouter;
