/*jshint esversion: 6 */
let express = require('express');
let path = require('path');
let bodyParser = require('body-parser');
let app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, './static')));

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

let count = 0;

app.get('/', function(req, res){
  count += 1;
  res.render("index", {count: count});
});

app.post('/plus_two', function(req, res){
  count += 1;
  res.redirect('/');
});

app.post('/reset', function(req, res){
  count = 0;
  res.redirect('/');
});

app.listen(8000, function(){
  console.log("Listening on Port 8000");
});
