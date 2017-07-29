/* jshint esversion: 6 */
const express = require('express');
const app = express();

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));

const path = require('path');
app.use(express.static(path.join(__dirname, './static')));
app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');

const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/quoting_dojo');

var QuotesSchema = new mongoose.Schema({
  name: { type: String, required: [true, 'Name required'] },
  quote: { type: String, required: [true, 'Quote required'] },
  created_at: { type: Date}
});

mongoose.model('Quote', QuotesSchema);
let Quote = mongoose.model('Quote');

app.get('/', function(req, res){
  res.render("index");
});

app.post('/quotes', function(req, res){
  console.log("POST DATA", req.body);
  let quote = new Quote({name: req.body.name, quote: req.body.quote, created_at: Date.now()});
  quote.save(function(err){
    if(err){
      console.log("Something went wrong: ", err);
    }
    else{
      console.log("Successfully added a quote!");
      res.redirect('/');
    }
  });
});

app.get('/quotes', function(req, res){
  Quote.find({}, null, {sort: {created_at: -1}}, function(err, quotes){
    if(err){
      console.log('Something went wrong with displaying the quotes: ', err);
      res.redirect('/');
    }
    else{
      console.log('Displaying quotes!');
      res.render("quotes", { quotes });
    }
  });
});

app.listen(8000, function(){
  console.log("Listening on port 8000");
});
