const fetch = require('node-fetch');
const API_URL = 'http://api.giphy.com/v1/gifs/search?';

function searchGif (req, res, next) {
  const qs = req.body.search;
  let page = 0;
  // let page = req.query.page = 0;
  let number = req.query.number = 12;
 fetch(`${API_URL}q=${qs}&api_key=dc6zaTOxFJmzC&limit=${number}&offset=${page}`)


  // fetch(`${API_URL}q=${qs}&api_key=dc6zaTOxFJmzC&limit=12&offset=0`)
 .then(r => r.json())
 .then((result) => {
   res.gif = result.data;
   next();
 })
 .catch((err) => {
   res.err = err;
   next();
 })
}
module.exports = { searchGif };
