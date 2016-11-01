// this page is a itunes CRUD attribution and EDIT IS ATTRIBUTED IN PART TO JOEYYYYYYY
/* eslint no-multi-spaces: ["error", { exceptions: { "VariableDeclarator": true } }] */
/* eslint no-param-reassign: ["error", { "props": false }] */

const { ObjectID } = require('mongodb');
const { getDB } = require('../lib/dbConnect.js');
const bcrypt = require('bcryptjs');

const SALTROUNDS = 10;

// function taken from itunes, works with sign in page to create users
function createUser(req, res, next) {
  const userObject = {
    username: req.body.user.username,
    email: req.body.user.email,

// Store hashed password (incripted)
    password: bcrypt.hashSync(req.body.user.password, SALTROUNDS),
  };

  getDB().then((db) => {
// saves user info inside generate to a collection called users
    db.collection('users')
      .insert(userObject, (insertErr, dbUser) => {
        if (insertErr) return next(insertErr);

        res.user = dbUser;
        db.close();
        return next();
      });
  });
}

// get the id of user that is used when sign in and saving to library
// created in itunes
function getUserById(id) {
  return getDB().then((db) => {
    const promise = new Promise((resolve, reject) => {
      db.collection('users')
        .findOne({ _id: ObjectID(id) }, (findError, user) => {
          if (findError) reject(findError);
          db.close();
          resolve(user);
        });
    });
    return promise;
  });
}

// get the username of user that is used when sign in and saving to library
// created in itunes
function getUserByUsername(username) {
  return getDB().then((db) => {
    const promise = new Promise((resolve, reject) => {
// saves user info inside generate to a collection called users
      db.collection('users')
        .findOne({ username }, (findError, user) => {
          if (findError) reject(findError);
          db.close();
          resolve(user);
        });
    });
    return promise;
  });
}

// function that allows a user to edit page once they login
// takes stored information in users collection
function editName(req, res, next) {
  getDB().then((db) => {
    db.collection('users')
    .update({ _id: ObjectID(req.body.id) }, { $set: { username: req.body.username } });
    db.close();
    return next();
  });
  return false;
}

// exports fuctions to be called later in routes middleware
module.exports = {
  createUser,
  getUserById,
  getUserByUsername,
  editName,
};
