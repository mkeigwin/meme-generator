const fetch = require('node-fetch');
const API_URL = 'http://version1.api.memegenerator.net/Generators_Search?';

function searchMeme (req, res, next) {
  const qs = req.body.search;
  let page =  0;
  // let page = req.query.page = 0;
  let number = req.query.number = 12;
  fetch(`${API_URL}q=${qs}&pageIndex=${page}&pageSize=${number}`)
 // fetch(`${API_URL}q=${qs}&pageIndex=0&pageSize=12`)
 .then(r => r.json())
 .then((result) => {
   res.meme = result.result;
   next();
 })
 .catch((err) => {
   res.err = err;
   next();
 })
}
module.exports = { searchMeme };
