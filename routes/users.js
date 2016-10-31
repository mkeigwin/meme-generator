// the create user aspect of this page is a itunes CRUD attribution
const express = require('express');
const { createUser } = require('../models/user.js');
const { authenticate } = require('../lib/auth');

const usersRouter  = express.Router();

/**
 * Creates a new user by handling the POST request from a form with action `/users`
 * It uses the createUser middleware from the user model
 */
usersRouter.post('/', createUser, (req, res) => {
  res.redirect('/');
});

usersRouter.get('/profile', authenticate, (req, res) => {
  res.render('users/profile', {
    user: res.user,
  });
});

usersRouter.get('/homeProfile', authenticate, (req, res) => {
  res.render('users/homeProfile', {
    user: res.user,
  });
});

module.exports = usersRouter;
