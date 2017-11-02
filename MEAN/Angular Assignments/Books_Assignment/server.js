const express = require('express');
const parser = require('body-parser');
const session = require('express-session');
const cookieParser = require('cookie-parser');
const port = process.env.PORT || 8000;
const path = require('path');

const app = express();

const sessionConfig = {
  saveUninitialized: true,
  secret: 'sessionSecret',
  resave: false,
  name: 'session',
  rolling: true,
  cookie: {
    secure: false,
    httpOnly: false,
    maxAge: 360000
  }
};

app.use(express.static(path.join(__dirname, 'dist')));
app.use(parser.urlencoded({ extended: true }));
app.use(parser.json());
app.use(session(sessionConfig));
app.use(cookieParser('alsfghjalksjfhglkajshfglkdjsfh'));

require('./server/config/database');

app.use('/api/books', require('./server/config/routes/book.routes'));
app.use('/api/auth', require('./server/config/routes/auth.routes'));

app.use(require('./server/config/routes/catch-all.routes'));

app.listen(port, () => console.log(`listening on port ${ port }`));
