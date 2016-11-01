// this page is a itunes CRUD attribution
const MongoClient = require('mongodb');

// used mongodb_uri when uploaded to heroku
// local host is this computer (latter half of or), use generate
const connectionURL = process.env.MONGODB_URI || 'mongodb://localhost/generate';

function getDB() {
  return MongoClient.connect(connectionURL);
}

module.exports = {
  getDB,
};
