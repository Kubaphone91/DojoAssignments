const User = require('mongoose').model('User');

module.exports = {
  show: function(req, res){
    User.find({})
    .then((users) => {
      res.json(users);
    }).catch((err) => {
      console.log(`Error finding users: ${ err }`);
    });
  },
  create: function(req, res){
    let user = new User({ name: req.body.name, score: req.body.score, avatar_url: req.body.avatar_url});
    user.save()
    .then((user) => {
      console.log('Successfully found user');
      res.json(user);
    }).catch((err) => {
      console.log(`Error creating user: ${ err }`);
      res.status(500);
    });
  }
}