const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const path = require('path');

// requesting extress to simplify http requests
const homeRoute = require('./routes/home');
const libraryRoute = require('./routes/library');
const searchRoute = require('./routes/search');

// making constant variables for the routes to be referencing further down
const app = express();
const PORT = process.argv[2] || process.env.PORT || 3000;

// set up logging so that we can see what's happening
app.use(logger('dev'));

// set static assets path
app.use(express.static(path.join(__dirname, 'public')));

// set default templating engine
app.set('view engine', 'ejs');


// middleware to receive form inputs
app.use(bodyParser.urlencoded({ extended: true }));
app.use(methodOverride('_method'));

// middleware for method override
app.listen(PORT, () => console.warn('server up and running on port ', PORT));

// app listens on PORT as defined above, server in this case listens on port 3000
app.use('/', homeRoute);
app.use('/', libraryRoute);
app.use('/search', searchRoute);

// use the routes defined by consts above. All in reference to home page
