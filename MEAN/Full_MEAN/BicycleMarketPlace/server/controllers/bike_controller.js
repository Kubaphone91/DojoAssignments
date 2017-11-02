const mongoose = require('mongoose');
const Bike = mongoose.model('Bicycle');
const User = mongoose.model('User');

module.exports = {
  add: (req, res, next) => {
    let bicycle = new Bike(req.body);
    bicycle.user_id = req.session.user_id;
    bicycle.save()
    .then(() => {
      res.json(true);
    }).catch((err) => {
      res.status(501).json(err);
    });
  },

  allUserBikes: (req, res, next) => {
    Bike.find({ user_id: req.session.user_id })
    .then((allBikes) => {
      res.json(allBikes);
    }).catch((err) => {
      res.status(502).json(err);
    });
  },

  edit: (req, res, next) => {
    let bicycle = new Bike(req.body);
    Bike.findByIdAndUpdate(bicycle.user_id, bicycle)
    .then(() => {
      res.json(true);
    }).catch((err) => {
      res.status(503).json(err);
    });
  },

  destroy: (req, res, next) => {
    let bicycle = new Bike(req.body);
    Bike.remove(bicycle)
    .then(() => {
      res.json(true);
    }).catch((err) => {
      res.status(504).json(err);
    });
  },

  getRandom: (req, res, next) => {
    Bike.find({})
    .then((bikes) => {
      let numBikes = bikes.length;
      let rand = Math.floor(Math.random() * numBikes);
      res.json(bikes[rand]);
    }).catch((err) => {
      res.status(425).json(err);
    });
  },

  all: (req, res, next) => {
    Bike.find({})
    .then((bikes) => {
      res.json(bikes);
    }).catch((err) => {
      res.status(450).json(err);
    });
  },

  filter: (req, res, next) => {
    Bike.find({ $or: [
      { 'title': { '$regex': req.body.filterBy } },
      { 'description': { '$regex': req.body.filterBy } }
    ]})
    .then((bikes) => {
      res.json(bikes);
    }).catch((err) => {
      res.status(488).json(err);
    });
  }
}