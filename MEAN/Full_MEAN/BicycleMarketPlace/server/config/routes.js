const path = require('path');
const bikes = require('../controllers/bike_controller.js');
const users = require('../controllers/user_controller.js');

module.exports = (app) => {
  app.get('/bikeOfTheDay', bikes.getRandom);
  app.get('/currentUser', users.current);
  app.get('/logout', users.logout);
  app.post('/register', users.register);
  app.post('/login', users.login);

  app.get('/bicycles', bikes.all);
  app.get('/myBicycles', bikes.allUserBikes);
  app.post('/bicycles/search', bikes.filter);
  app.post('/contact', users.getInfo);
  app.post('/bicycle', bikes.add);
  app.post('/bicycle/edit', bikes.edit);
  app.post('/bicycle/destroy', bikes.destroy);

  app.all('*', (req, res, next) => {
    res.sendFile(path.resolve('./Market/dist/index.html'));
  })
}