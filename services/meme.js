const fetch = require('node-fetch');

const API_URL = 'http://version1.api.memegenerator.net/Generators_Search?';

function searchMeme(req, res, next) {
  const qs = req.body.search;
  const page = req.body.page || 0;
  const number = req.body.number || 10;
  fetch(`${API_URL}q=${qs}&pageIndex=${page}&pageSize=${number}`)
 .then(r => r.json())
 .then((result) => {
   res.meme = result.result;
   next();
 })
 .catch((err) => {
   res.err = err;
   next();
 });
}
module.exports = { searchMeme };
