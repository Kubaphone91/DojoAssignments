/* jshint esversion: 6 */
const express = require('express');
const app = express();

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true}));

const path = require('path');
app.use(express.static(path.join(__dirname, './static')));
app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');

const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/mongoose_dashboard');

var PenguinsSchema = new mongoose.Schema({
  name: { type: String, required: [true, 'Name required'], unique: true},
  type: {type: String, required: [true, 'Type required']},
  age: { type: Number, required: [true, 'Age required']},
  food: { type: String, required: [true, 'Food required']},
  created_at: { type: Date }
});

mongoose.model('Penguin', PenguinsSchema);
let Penguin = mongoose.model('Penguin');
function RandImg(){
  return (Math.floor(Math.random() * 5) + 1);
}

app.get('/', function(req, res){
  console.log(RandImg);
  Penguin.find({}, function(err, penguins){
    if(err){
      console.log('Something went wrong with displaying the penguins: ', err);
      res.redirect('/');
    }
    else{
      res.render("index", { penguins, rand: RandImg()});
    }
  });
});

app.get('/penguins/new', function(req,res){
//  let rand = RandImg();
  res.render("new", { rand: RandImg() });
});

app.get('/penguins/:id', function(req, res){
  let rand = RandImg();
  Penguin.find({ _id: req.params.id }, function(err, response){
    if(err){
      console.log(err);
    }
    else{
      res.render('show', { rand: RandImg(), penguin: response[0] });
    }
  });
});

app.post('/penguins', function(req,res){
  console.log("POST DATA", req.body);
  let penguin = new Penguin({name: req.body.name, type: req.body.type, age: req.body.age, food: req.body.food, created_at: Date.now()});
  penguin.save(function(err){
    if(err){
      console.log('Something went wrong with adding the penguin: ', err);
    }
    else{
      console.log('Successfully added a penguin');
      res.redirect('/');
    }
  });
});

app.get('/penguins/edit/:id', function(req,res){
  let rand = RandImg();
  Penguin.find({ _id: req.params.id }, function(err, response){
    if(err){
      console.log(err);
    }
    else{
      res.render('edit', {penguin: response[0], rand: RandImg()});
    }
  });
});

app.post('/penguins/:id', function(req,res){
  Penguin.update({ _id: req.params.id }, req.body, function(err, result){
    if(err){
      console.log(err);
    }
    else{
      res.redirect('/');
    }
  });
});

app.post('/penguins/destroy/:id', function(req, res){
  Penguin.remove({ _id: req.params.id }, function(err, result){
    if(err){
      console.log(err);
    }
    else{
      res.redirect('/');
    }
  });
});

app.listen(8000, function(){
  console.log("Listening on Port 8000");
});
