const users = require('../controllers/users.js');
const quotes = require('../controllers/quotes.js');

module.exports = function(app) {
  app.get('/', function(req, res){
    res.render("index");
  });

  app.post('/login', function(req, res){
    users.login(req, res);
  });

  app.post('/register', function(req, res){
    users.register(req, res);
  });

  app.post('/quote/:id', function(req, res){
    quotes.addQuote(req, res);
  });

  app.get('/logout', function(req, res){
    users.logout(req, res);
  });
}