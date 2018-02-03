const http = require('http');
const fs = require('fs');
const path = require('path');
const static_contents = require('./modules/static.js');
const server = http.createServer(static_contents);

server.listen(8000);
console.log("Running on localhost port 8000");