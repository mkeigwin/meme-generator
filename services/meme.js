const fetch = require('node-fetch');
// used to fetch data from API

const API_URL = 'http://version1.api.memegenerator.net/Generators_Search?';
// API info on meme come from

function searchMeme(req, res, next) {
  const qs = req.body.search;
  const page = req.body.page || 0;
  const number = req.body.number || 10;
// three search peramiters. make them equal qs page number so both api can work together
  fetch(`${API_URL}q=${qs}&pageIndex=${page}&pageSize=${number}`)
// parameters are put in query string to render results based on searchs
  .then(r => r.json())
  .then((result) => {
    res.meme = result.result;
// responce with results
    next();
  })
  .catch((err) => {
    res.err = err;
    next();
  });
}
module.exports = { searchMeme };
// export meme so it can be called as middleware
