const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const port = process.env.PORT || 8000;

app.use(bodyParser.json());

require('./server/config/mongoose.js');

const routes_setter = require('./server/config/routes.js');

routes_setter(app);

const server = app.listen(port, () => console.log(`Listening on port: ${ port }`));