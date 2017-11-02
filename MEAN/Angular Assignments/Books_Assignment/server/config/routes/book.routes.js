const bookController = require('../../controllers/book.controller');
const router = require('express').Router();

module.exports = router
  .get('/', bookController.index)
  .get('/:id', bookController.show)
  .post('/', bookController.create)
  .put('/:id', bookController.update)
  .delete('/:id', bookController.destroy);
