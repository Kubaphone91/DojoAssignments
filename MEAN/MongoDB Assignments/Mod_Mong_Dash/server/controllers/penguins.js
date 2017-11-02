const mongoose = require('mongoose');
const Penguin = mongoose.model('Penguin');

function randImg() {
  return (Math.floor(Math.random() * 5) + 1); 
}

module.exports = {
  show_all: function(req, res){
    Penguin.find({}, function(err, penguins){
      if(err){
        console.log("Something went wrong with displaying the penguins", err);
        res.redirect('/');
      }
      else{
        res.render("index", {penguins, rand: randImg()});
      }
    });
  },
  add_new: function(req, res){
    let rand = randImg();
    res.render("new", { rand: randImg()});
  },
  show_one: function(req, res){
    let rand = randImg();
    Penguin.find({ _id: req.params.id }, function(err, response){
      if(err){
        console.log(err);
      }
      else{
        res.render("show", { rand: randImg(), penguin: response[0] });
      }
    });
  },
  create: function(req, res){
    let penguin = new Penguin({name: req.body.name, type: req.body.type, age: req.body.age, food: req.body.food, created_at: Date.now()});
    penguin.save(function(err){
      if(err){
        console.log("Something went wrong with adding the penguin!", err);
      }
      else{
        console.log("Successfully added a penguin!");
        res.redirect('/');
      }
    });
  },
  edit: function(req,res){
    let rand = randImg();
    Penguin.find({ _id: req.params.id }, function(err, response){
      if(err){
        console.log(err);
      }
      else{
        res.render("edit", { penguin: response[0], rand: randImg()});
      }
    });
  },
  update: function(req, res){
    Penguin.update({ _id: req.params.id }, req.body, function(err, response){
      if(err){
        console.log(err);
      }
      else{
        res.redirect('/');
      }
    });
  },
  destroy: function(req, res){
    Penguin.remove({ _id: req.params.id }, function(err, response){
      if(err){
        console.log(err);
      }
      else{
        res.redirect('/');
      }
    });
  }
}