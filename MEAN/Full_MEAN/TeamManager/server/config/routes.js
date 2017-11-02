const players = require('../controllers/players.js');
const router = require('express').Router();

module.exports = router
  .get('/', players.show)
  .get('/:id', players.get)
  .post('/addPlayer', players.create)
  .put('/:id', players.update)
  .delete('/:id', players.remove);
