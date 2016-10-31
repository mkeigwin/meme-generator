const router = require('express').Router();
// requiring the rounting service to get website to run

const { authenticate } = require('../lib/auth');
const { getFavorites,
        saveFavorite,
        deleteFavorites } = require('../models/favorites');
// reqiring middleware functions from other pages
// these finctions can be called on sertain pages so actions can trigger them

router.get('/library', authenticate, getFavorites, (req, res) => {
  res.render('library', {
    user: res.user,
    favorites: res.favorites || [],
  });
});
// Route that serves your '/library', renders the library page
// middleware calles authenticate to get your user Id
// also calls get favorites so to retireve your favs from data base

router.delete('/library/:id', deleteFavorites, (req, res) => {
  res.redirect('/library');
});
// library route has a /:id after it so that when the delete fav middleware called,
// specific to your user Id

router.post('/library', saveFavorite, (req, res) => {
  res.redirect('/library');
});
// route posts your saved favorites to library page

module.exports = router;
// exports routers so all the pages can be linked
