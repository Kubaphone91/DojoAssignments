const mongoose = require('mongoose');
const fs = require('fs');
const path = require('path');


const connection = mongoose.connect('mongodb://localhost/market', { useMongoClient: true });

connection.then(() => {
  console.log("connected to MongoDB");
}).catch((error) => {
  console.log(`Error connecting to MongoDB: ${ error }`);
});

const models_path = path.join(__dirname, '../models');

fs.readdirSync(models_path).forEach((file) => {
  if(file.indexOf('.js') >= 0){
    require(models_path + '/' + file);
  }
});