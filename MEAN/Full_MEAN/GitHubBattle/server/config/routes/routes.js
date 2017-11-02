const players = require('../../controllers/users.js');
const router = require('express').Router();

module.exports = router
  .get('/', players.show)
  .post('/addUser', players.create);