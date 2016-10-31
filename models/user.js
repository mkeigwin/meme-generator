// this page is a itunes CRUD attribution
/* eslint no-multi-spaces: ["error", { exceptions: { "VariableDeclarator": true } }] */
/* eslint no-param-reassign: ["error", { "props": false }] */

const { ObjectID } = require('mongodb');
const { getDB } = require('../lib/dbConnect.js');
const bcrypt = require('bcryptjs');

const SALTROUNDS = 10;

function createUser(req, res, next) {
  const userObject = {
    username: req.body.user.username,
    email: req.body.user.email,

    // Store hashed password
    password: bcrypt.hashSync(req.body.user.password, SALTROUNDS),
  };

  getDB().then((db) => {
    db.collection('users')
      .insert(userObject, (insertErr, dbUser) => {
        if (insertErr) return next(insertErr);

        res.user = dbUser;
        db.close();
        return next();
      });
  });
}

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

function getUserByUsername(username) {
  return getDB().then((db) => {
    const promise = new Promise((resolve, reject) => {
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

function editName (req, res, next) {
  MongoClient.connect(dbConnection, (err, db) => {
    if (err) return next(err);

    db.collection('users')
      .findAndModify({ _id: ObjectID(req.params.id) }, [] /* sort */,
      { $set: req.body.username }, { new: true } /* options */, (updateError, doc) => {
        if (updateError) return next(updateError);

        // return the data
        res.updated = doc;
        db.close();
        return next();
      });
    return false;
  });
  return false;
}

module.exports = {
  createUser,
  getUserById,
  getUserByUsername,
};
