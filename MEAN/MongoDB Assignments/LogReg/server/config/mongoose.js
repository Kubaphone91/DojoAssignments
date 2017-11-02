const mongoose = require('mongoose');
const fs = require('fs');
const path = require('path');

mongoose.Promise = global.Promise;

const connection = mongoose.connect('mongodb://localhost/logQuotes', { useMongoClient: true});

connection.then( () => {
  console.log('MongoDB connected');
})
.catch( (err) => {
  console.log(`Error while trying to connect to MongoDB: ${ err }`);
});

const models_path = path.join(__dirname, './../models');

fs.readdirSync(models_path).forEach(function(file){
  if(file.indexOf('.js') >= 0){
    require(models_path + '/' + file)
  }
});