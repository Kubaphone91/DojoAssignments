const express = require('express');
const path = require('path');
const session = require('express-session');
const bodyParser = require('body-parser');
const port = process.env.PORT || 8000;

const app = express();

const sessionConfig ={
  saveUninitialized: true,
  secret: 'marketpassword',
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
app.use(express.static(path.join(__dirname, '/Market/dist')));
app.use(session(sessionConfig));

require('./server/config/mongoose.js');
require('./server/config/routes.js')(app);

const server = app.listen(port, () => {
  console.log(`Listening on port: ${ port }`);
})

