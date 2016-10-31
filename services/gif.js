const fetch = require('node-fetch');
// used to fetch data from API

const API_URL = 'http://api.giphy.com/v1/gifs/search?';
// API info on gif come from

function searchGif(req, res, next) {
  const qs = req.body.search || 'funny';
  const page = (req.body.page + (req.body.number - 1)) || (0 + (req.body.number - 1));
  const number = req.body.number || 10;
// three search peramiters. make them equal qs page number so both api can work together
  fetch(`${API_URL}q=${qs}&api_key=dc6zaTOxFJmzC&limit=${number}&offset=${page}`)
  // parameters are put in query string to render results based on searchs
  // API key is still here!!! but it's ok haha
  // Site I got it from made it publically availible, everyone uses the same key I guess
  //Didn't have to sign up or anything to get the key, posted on site examples
  .then(r => r.json())
  .then((result) => {
    res.gif = result.data;
// responce with results
    next();
  })
  .catch((err) => {
    res.err = err;
    next();
  });
}
module.exports = { searchGif };
// export meme so it can be called as middleware
