const mongoose = require('mongoose');
const User = mongoose.model('Users');
const bcrypt = require('bcrypt');
const session = require('express-session');

mongoose.Promise = global.Promise;

module.exports = {
  register: ( req, res, next) => {
    let newUser = new User(req.body);
    newUser.save()
    .then((user) => {
      req.session.name = user.name;
      req.session.user_id = user._id;
      res.json(true);
    }).catch((err) => {
      res.status(409).json(err);
    });
  },

  login: (req, res, next) => {
    User.findOne({ email: req.body.email.toLowerCase() })
    .then((user) => {
      if(!user){
        err = { err: "No user registered with that email" };
        res.status(401).json(err);
      }
      else if(!bcrypt.compareSync(req.body.password, user.password)){
        res.status(402).json({ err: "Password is incorrect "});
      }
      else{
        req.session.name = user.name;
        req.session.user_id = user._id;
        res.json(true);
      }
    }).catch((err) => {
      res.status(409).json(err);
    });
  },

  logout: (req, res, next) => {
    req.session.destroy();
    res.json(true);
  },

  current: (req, res, next) => {
    if(req.session.user_id){
      let curr = {};
      curr.id = req.session.user_id;
      curr.name = req.session.name;
      res.json(true);
    }
    else{
      res.status(400).json({ err: 'Must be logged in to access page'});
    }
  },

  
}