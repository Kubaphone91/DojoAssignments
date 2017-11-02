const mongoose = require('mongoose');
const fs = require('fs');
const path = require('path');

const connection = mongoose.connect("mongodb://localhost/discussion_board", { useMongoClient: true });

connection.then(() => {
  console.log("Connected to MongoDB");
}).catch((err) => {
  console.log(`Error connecting to MongoDB: ${ err }`);
});

const models_path = path.join(__dirname, '../models');

fs.readdirSync(models_path).forEach(function(file){
  if(file.indexOf('.js') >= 0){
    require(models_path + "/" + file);
  }
});