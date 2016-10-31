const { MongoClient, ObjectID } = require('mongodb');

// I call the data base that I created generate, localhost 27017 comes from my mongod account
// where my data will be stored
const DB_CONNECTION = 'mongodb://localhost:27017/generate';

// get favorites functions allows my library to retrieve data that was saved on the search page
function getFavorites(req, res, next) {
  MongoClient.connect(DB_CONNECTION, (err, db) => {
    if (err) return next(err);
// retrieve information from the collection favorites
    db.collection('favorites')
// the session will depend on the user who is logged in
// aka the library will only display results for that users favorites
      .find({ userId: { $eq: req.session.userId } })
      .toArray((toArrErr, data) => {
        if (toArrErr) return next(toArrErr);
        res.favorites = data;
        db.close();
        next();
      });
    return false;
  });
  return false;
}

// save favorite allows users to save and add images to their personal account based on Id
function saveFavorite(req, res, next) {
// this part below is attributed to trevor, "hacked" a way for userId to appear
  const insertObj = {
    favorite: {
      userId: undefined,
    },
  };
// copying all of req.body into insertObj. this part attributed to I-tunes
  for (key in req.body) {
    insertObj[key] = req.body[key];
  }
// Adding userId to insertObj
  insertObj.favorite.userId = req.session.userId;
// console.log('INSERT OBJECT ****** ', insertObj.favorite);
  MongoClient.connect(DB_CONNECTION, (err, db) => {
    if (err) return next(err);
// adding favorites to collection favorites based on userId
    db.collection('favorites')
      .insert(insertObj.favorite, (insertErr, result) => {
        if (insertErr) return next(insertErr);
        res.saved = result;
        db.close();
        next();
      });
    return false;
  });
  return false;
}

// delete allows you to remove images from your stored database, as they appear in library
function deleteFavorites(req, res, next) {
  MongoClient.connect(DB_CONNECTION, (err, db) => {
    if (err) return next(err);
// removing from favorites
    db.collection('favorites')
      .findAndRemove({ _id: ObjectID(req.params.id) }, (removeErr, result) => {
        if (removeErr) return next(removeErr);
        res.removed = result;
        db.close();
        next();
      });
    return false;
  });
  return false;
}

// exporting my three functions so that they can be called as middleware in my routes
module.exports = { getFavorites, saveFavorite, deleteFavorites };
