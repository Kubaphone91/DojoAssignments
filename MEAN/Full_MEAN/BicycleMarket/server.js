const express = require('express');
const session = require('express-session');
const cookieParser = require('cookie-parser');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const path = require('path');
const port = process.env.PORT || 8000;

const app = express();

const sessionConfig ={
  saveUninitialized: true,
  secret: 'marketplacepass',
  resave: false,
  name: 'session',
  rolling: true,
  cookie: {
    secure: false,
    httpOnly: false,
    maxAge: 360000
  }
}

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, './MarketPlace/dist')));
app.use(session(sessionConfig));
app.use(cookieParser('rocketleagueisthebest'));

require('./server/config/mongoose.js');

app.use('/api/bikes', require('./server/config/routes/routes.js'));
app.use('/api/auth', require('./server/config/routes/catch-all.js'));
app.use(require('./server/config/routes/auth.js'));

const server = app.listen(port, () => {
  console.log(`Lisnteing on port:${ port }`);
});