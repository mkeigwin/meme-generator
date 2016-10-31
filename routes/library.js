const router = require('express').Router();

const { authenticate } = require('../lib/auth');
const { getFavorites,
        saveFavorite,
        deleteFavorites } = require('../models/favorites');

router.get('/library', authenticate, getFavorites, (req, res) => {
  res.render('library', {
    user: res.user,
    favorites: res.favorites || [],
  });
});

router.delete('/library/:id', deleteFavorites, (req, res) => {
  res.redirect('/library');
});

router.post('/library', saveFavorite, (req, res) => {
  res.redirect('/library');
});

module.exports = router;
