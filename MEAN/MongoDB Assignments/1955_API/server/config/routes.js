const mongoose = require('mongoose');
const fifty_five = require('../controllers/1955.js');

module.exports = function(app){
  app.get('/', function(req, res){
    fifty_five.show_all(req, res);
  })

  app.get('/new/:name', function(req, res){
    fifty_five.new_name(req, res);
  })

  app.get('/remove/:name', function(req, res){
    fifty_five.destroy(req, res);
  })

  app.get('/:name', function(req, res){
    fifty_five.show_one(req, res);
  })
}