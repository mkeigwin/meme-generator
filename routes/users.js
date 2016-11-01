// the create user aspect of this page is a itunes CRUD attribution
const express = require('express');
const { createUser, editName } = require('../models/user.js');
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
// user passes name of info to homeProfile
    user: res.user,
    id: req.session.userId,
  });
});
// above and below routes used to get to home page
// use auth middleware to get user Id before lets you go to page
usersRouter.get('/homeProfile', authenticate, (req, res) => {
  res.render('users/homeProfile', {
    user: res.user,
    id: req.session.userId,
// user passes name of info to homeProfile
  });
});
// when edit, redirect to homeprofit page, call editName middleware
usersRouter.put('/edit', editName, (req, res) => {
  res.redirect('/users/homeProfile');
});

module.exports = usersRouter;
// exports routers so all the pages can be linked
