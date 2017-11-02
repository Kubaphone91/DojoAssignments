const mongoose = require('mongoose');
const Person = mongoose.model('Person');

module.exports = {
  show_all: function(req, res){
    Person.find({}, function(err, persons){
      if(err){
        console.log('Something went wrong with the display', err);
        res.redirect('/');
      }
      else{
        res.json(persons);
      }
    })
  },

  new_name: function(req, res){
    let person = new Person({ name: req.params.name });
    person.save(function(err){
      if(err){
        console.log('Something went wrong with adding a person', err);
        res.redirect('/');
      }
      else{
        console.log('Successfully added', req.params.name, 'to the database');
        res.redirect('/');
      }
    })
  },

  destroy: function(req, res){
    Person.remove({ name: req.params.name }, function(err, results){
      if(err){
        console.log('Error with removing person', err);
        res.redirect('/');
      }
      else{
        console.log('Successfully removed', req.params.name);
        res.redirect('/');
      }
    })
  },

  show_one: function(req, res){
    Person.findOne({ name: req.params.name }, function(err, person){
      if(err){
        console.log('Something went wrong with the display', err);
      }
      else{
        res.json(person);
      }
    })
  }
}