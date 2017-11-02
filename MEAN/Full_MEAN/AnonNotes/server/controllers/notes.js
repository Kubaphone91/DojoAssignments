const Note = require('mongoose').model('Note');

module.exports = {
  show: function(req, res){
    Note.find({})
    .then((notes) => {
      res.json(notes);
    })
    .catch((err) => {
      console.log(`Error: ${ err }`);
    });
  },
  create: function(req, res){
    Note.create(req.body)
    .then((note) => {
      console.log('Added note');
      res.json(note);
    })
    .catch((err) => {
      console.log(`Error: ${ err }`);
      res.status(500);
    });
  }
}