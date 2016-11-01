// requiring different plugins to allow server to run properly
const express = require('express');
const logger = require('morgan');
const path = require('path');
const bodyParser = require('body-parser');
const session = require('express-session');
const cookieParser = require('cookie-parser');
const methodOverride = require('method-override');
const libraryRoute = require('./routes/library');
const searchRoute = require('./routes/search');
const indexRouter = require('./routes/index.js');
const authRouter = require('./routes/auth');
const usersRouter = require('./routes/users');
const guestRouter = require('./routes/guest');
// making constant variables for the routes to be referencing further down

// helps browser read the server
const app = express();
const SECRET = 'rafaSquad';
const PORT = process.argv[2] || process.env.PORT || 3000;
// what the server is listening on
// set up logging so that we can see what's happening
app.use(logger('dev'));

// set static assets path
app.use(express.static(path.join(__dirname, 'public')));

// set default templating engine
app.set('view engine', 'ejs');

// parse application/json
app.use(bodyParser.json());

// This is how we read the cookies sent over from the browser
app.use(cookieParser());

// used for creating users
app.use(session({
  resave: false,
  saveUninitialized: false,
  secret: SECRET,
  cookie: { maxAge: 600000 },
}));

// allows use to call req.body
app.use(bodyParser.urlencoded({ extended: true }));
app.use(methodOverride('_method'));

// middleware for method override
app.listen(PORT, () => console.warn('server up and running on port ', PORT));
// app listens on PORT as defined above, server in this case listens on port 3000
// on heroku it's process.env.PORT

app.use('/', indexRouter);
app.use('/', guestRouter);
app.use('/auth', authRouter);
app.use('/users', usersRouter);
app.use('/', libraryRoute);
app.use('/search', searchRoute);
// use the routes defined by consts above. All in reference to home page

