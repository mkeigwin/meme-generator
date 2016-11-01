const express = require('express');
// requiring the rounting service to get website to run

const indexRouter = express.Router();

indexRouter.get('/', (req, res) => {
// pass the value error so that any bad username password combo doesn't exist
  res.render('index', { error: null });
});
// Route that serves your '/' homepage, renders the index page

module.exports = indexRouter;
// exports routers so all the pages can be linked
