const express = require('express');
// requiring the rounting service to get website to run

const indexRouter = express.Router();
const { searchMeme } = require('../services/meme');
const { searchGif } = require('../services/gif');
// seachMeme and searchGif are required from services, allowing API to be accessed

// This is the route that serves your guest homepage
// different that login bag as it gives user limited capabilites
indexRouter.get('/guestProfile', (req, res) => {
  res.render('users/guestProfile', {
  });
});

// This is the route that serves your guest search page
// different that login bag as it gives user limited capabilites
indexRouter.post('/guestSearch', searchMeme, searchGif, (req, res) => {
  res.render('guestSearch', {
// use all this middleware to do the above mentioned functionality
// authenticate called first so that nothing renders unless server knows userId
    meme: res.meme || [],
    gif: res.gif || [],
    searchQuery: req.body.search,
    numbPage: req.body.number,
    samePage: req.body.page,
// meme and gif pull api info from thier respective locations
// search, numb, and same used to keep track of info when moving from home to search
  });
});
module.exports = indexRouter;
// exports routers so all the pages can be linked
