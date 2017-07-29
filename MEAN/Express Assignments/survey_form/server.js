/* jshint esversion: 6 */
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
let app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, './static')));

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.get('/', function(req, res){
  res.render("index");
});

app.post('/results', function(req, res){
  let postData = req.body;
  res.render("results", {postData});
});

app.listen(8000, function(){
  console.log("Listening on Port 8000");
});
