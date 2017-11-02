const mongoose = require('mongoose');
const User = mongoose.model('User');
const Quote = mongoose.model('Quote');
const bcrypt = require('bcrypt-nodejs');

function loadQuotes(user, req, res){
  console.log(typeof(user));
  console.log(user);
  req.session.name = user[0].id;
  Quote.find({}).populate('_user', 'name').exec(function(err, quotes){
    if(err){
      console.log(`There as an error retrieving quotes: ${ err }`);
      res.redirect('/');
    }
    else{
      let session = req.session.name;
      console.log("Successfully loaded the quotes");
      res.render("quotes", { quotes, session });
    }
  });
}

module.exports = {
  login: function(req, res){
    User.find({ email: req.body.email}, (err, user) => {
      if(err){
        console.log(`Login error (Email not found): ${ err }`);
        err = "Login Error: The email address was not found, please try again";
        res.render("index", { err });
      }
      else{
        console.log("Success, email found");
        if(bcrypt.compareSync(req.body.password, user[0].password)){
          loadQuotes(user, req, res);
        }
        else{
          console.log("User password incorrect");
          err = "The password was incorrect, please try again";
          res.render("index", { err });
        }
      };
    });
  },
  register: function(req, res){
    if(!(req.body.password === req.body.confirm_pass)){
      console.log("Passwords do not match");
      let err = "Password and confirm password must match, try again!"
      res.render("index", { err });
    }
    else{
      User.create(req.body)
      .then((user) => {
        console.log("Successfully registered");
        let userArr = [user];
        loadQuotes(userArr, req, res);
      })
      .catch((err) => {
        console.log(`User registration failed: ${ err }`);
        res.render("index", { err });
      });
    }
  },
  logout: function(req, res){
    req.session.destroy();
    res.redirect('/');
  }
}