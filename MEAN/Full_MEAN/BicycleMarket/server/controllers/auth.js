const User = require('mongoose').model('User');

module.exports = {

  login(req, res){
    User.findOne({ email: req.body.email })
    .then(user => {
      console.log("Found email address");
      if(!user) throw new Error();
      return User.validatePassword(req.body.password, user.password)
      .then(() => {
        console.log("Password validated");
        completeLogin(req, res, user);
      })
    }).catch( error => {
      res.status(401).json('Email/password combination not found');
    })
  },

  register(req, res){
    User.create(req.body)
    .then(user => {
      console.log("Logging in");
      completeLogin(req, res, user);
    }).catch(error => {
      res.status(422).json(
        object.keys(error.errors).map(key => error.errors[key].message)
      );
    })
  },

  logout(req,res){
    req.session.destroy();
    res.clearCookie('userId');
    res.clearCookie('expiration');
    res.json(true);
  }
};

function completeLogin(req, res, user){
  req.session.user = user.toObject();

  delete req.session.user.password;

  res.cookie('userId', user._id.toString());
  res.cookie('expiration', Date.now() + 86400 * 1000);
  res.json(user);
};