const express = require('expresss');
const path = require('path');
const bodyParser = require('body-parser');
const session = require('express-session');
const port = process.env.PORT || 8000;
const app = express();

const sessionConfig ={
  saveUninitialized: true,
  secret: 'discussionpassword',
  resave: false,
  name: 'session',
  rolling: true,
  cookie: {
    secure: false,
    httpOnly: false,
    maxAge: 360000
  }
}

const server = app.listen(port, () => {
  console.log(`Listening on port ${ port }`);
});

app.use(express.static(path.join(__dirname, '/Discuss/dist')));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(session(sessionConfig));

require('./server/config/mongoose.js');
require('./server/config/routes.js')(app);

