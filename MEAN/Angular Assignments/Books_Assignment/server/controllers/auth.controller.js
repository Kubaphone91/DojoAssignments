const User = require('mongoose').model('User');

module.exports = {
  login(request, response){
    User.findOne({email: request.body.email})
    .then(user => {
      if(!user) throw new Error();

      return User.validatePassword(request.body.password, user.password)
      .then( () => {
        completeLogin(request, response, user);
      });
    })
    .catch(error => {
      response.status(401).json('Email/password combination not found');
    });
  },
  register(req, res){
    console.log('registering', request.body);
    User.create(request.body)
    .then(user => {
      console.log('user created', user);
      completeLogin(request, response, user);
    })
    .catch(error => {
      response.status(422).json(
        Object.keys(error.errors).map(key => error.errors[key].message)
      );
    })
  },
  logout(request, response){
    request.session.destroy();
    request.clearCookie('userID');
    request.clearCookie('expiration');

    response.json(true);
  },
};

function completeLogin(request, response, user){
  console.log('complete', user);
  request.session.user = user;

  delete request.session.user.password;
  console.log(request.cookie);
  response.cookie('userID', user._id.toString());
  response.cookie('expiration', Date.now() + 86400 * 1000);
  response.json(user);
}
