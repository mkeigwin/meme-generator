// this page is a itunes CRUD attribution
const MongoClient = require('mongodb');

// process.env.MONGOLAB_URI is DEPRECATED
// process.env.MONGODB_URI is needed for when we deploy to Heroku
const connectionURL = process.env.MONGODB_URI || 'mongodb://localhost/generate';

function getDB() {
  return MongoClient.connect(connectionURL);
}

module.exports = {
  getDB,
};
