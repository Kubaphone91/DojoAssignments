const mongoose = require('mongoose');
const penguins = require('../controllers/penguins.js');

module.exports = function(app){
  app.get('/', function(req, res){
    penguins.show_all(req, res);
  })

  app.get('/penguins/new', function(req, res){
    penguins.add_new(req, res);
  })

  app.get('/penguins/:id', function(req, res){
    penguins.show_one(req, res);
  })

  app.post('/penguins', function(req, res){
    penguins.create(req, res);
  })

  app.get('/penguins/edit/:id', function(req, res){
    penguins.edit(req, res);
  })

  app.post('/penguins/:id', function(req, res){
    penguins.update(req, res);
  })

  app.post('/penguins/destroy/:id', function(req, res){
    penguins.destroy(req, res);
  })
}