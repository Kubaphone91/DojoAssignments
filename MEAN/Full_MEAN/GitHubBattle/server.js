const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const path = require('path');
const express = require('express');
const app = express();
const port = process.env.PORT || 8000;

app.use(bodyParser.urlencoded({ extended: true}));
app.use(express.static(path.join(__dirname, './Battle/dist')));
app.use(bodyParser.json());

require('./server/config/mongoose.js');

app.use('/api', require('./server/config/routes/routes.js'));
app.use(require('./server/config/routes/catch-all.js'));

var server = app.listen(port, () => {
  console.log(`Listening on port: ${ port }`);
})


