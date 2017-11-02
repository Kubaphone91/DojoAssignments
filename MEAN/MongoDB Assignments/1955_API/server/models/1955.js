const mongoose = require('mongoose');

let personSchema = new mongoose.Schema({
  name: { type: String, required: [true, 'Name required'], unique: true}
});

mongoose.model('Person', personSchema);