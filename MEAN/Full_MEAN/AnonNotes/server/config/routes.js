const notes = require('../controllers/notes.js');

module.exports = function(app) {
  app.get('/notes', function(req, res){
    console.log('In route');
    notes.show(req, res);
  });

  app.post('/notes', function(req, res){
    notes.create(req, res);
  })
}