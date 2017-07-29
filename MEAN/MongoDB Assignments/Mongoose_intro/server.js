// Require the Express Module
var express = require('express');
// Create an Express App
var app = express();
// Require body-parser (to receive post data from clients)
var bodyParser = require('body-parser');
// Integrate body-parser with our App
app.use(bodyParser.urlencoded({ extended: true }));
// Require path
var path = require('path');
// Setting our Static Folder Directory
app.use(express.static(path.join(__dirname, './static')));
// Setting our Views Folder Directory
app.set('views', path.join(__dirname, './views'));
// Setting our View Engine set to EJS
app.set('view engine', 'ejs');
//Require Mongoose
var mongoose = require('mongoose');
mongoose.Promise = global.Promise;
//Connect Mongoose to MongoDB
mongoose.connect('mongodb://localhost/basic_mongoose');
//Schemas
var UsersSchema = new mongoose.Schema({
  name: String,
  age: Number
});
mongoose.model('User', UsersSchema);
var User = mongoose.model('User');
// Routes
// Root Request
app.get('/', function(req, res) {
    User.find({}, function(err, users){
      if(err){
        console.log('Could not retrieve users');
      }
      else{
        console.log('Successfully retrieved users');
        res.render('index', {users: users});
      }
    });
});
// Add User Request
app.post('/users', function(req, res) {
    console.log("POST DATA", req.body);
    var user = new User({name: req.body.name, age: req.body.age});
    user.save(function(err){
      if(err){
        console.log('Something went wrong');
      }
      else{
        console.log('Successfully added a user!');
        res.redirect('/');
      }
    });
});
// Setting our Server to Listen on Port: 8000
app.listen(8000, function() {
    console.log("listening on port 8000");
});
