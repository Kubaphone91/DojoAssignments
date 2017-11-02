const Player = require('mongoose').model('Player');

module.exports = {
  show: function(req, res){
    Player.find({})
    .then((players) => {
      res.json(players);
    }).catch((err) => {
      console.log(`Error with finding all players: ${ err }`);
    });
  },
  get: function(req, res){
    Player.findOne({ _id: req.params.id })
    .then((player) => {
      res.json(player);
    }).catch((err) => {
      console.log(`Error finding player: ${ err }`);
    });
  },
  create: function(req, res){
    Player.create(req.body)
    .then((player) => {
      console.log("Successfully added a player");
      res.json(player);
    }).catch((err) => {
      console.log(`Error creating player: ${ err }`);
      res.status(500);
    });
  },
  update: function(req, res){
    Player.findByIdAndUpdate(req.params.id, req.body)
    .then((player) => {
      console.log("Updated player");
      res.json(player);
    }).catch((err) => {
      console.log(`Error updating player: ${ err }`);
      res.status(500);
    });
  },
  remove: function(req, res){
    Player.remove({ _id: req.params.id})
    .then(() => {
      console.log("Removed player");
      res.json(true);
    }).catch((err) => {
      console.log(`Error removing player: ${ err }`);
      res.status(500);
    });
  }
}