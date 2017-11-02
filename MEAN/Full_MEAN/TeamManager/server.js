const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const path = require('path');
const port = process.env.PORT || 8000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, "./Team/dist")));

require('./server/config/mongoose.js');

app.use('/api/players', require('./server/config/routes.js'));
app.use(require('./server/config/catch-all.js'));

var server = app.listen(port, () => console.log(`Listening on port: ${ port }`));