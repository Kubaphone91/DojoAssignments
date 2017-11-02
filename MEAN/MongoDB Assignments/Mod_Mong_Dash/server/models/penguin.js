let mongoose = require('mongoose');

var PenguinsSchema = new mongoose.Schema({
  name: { type: String, required: [true, 'Name required'], unique: true},
  type: {type: String, required: [true, 'Type required']},
  age: { type: Number, required: [true, 'Age required']},
  food: { type: String, required: [true, 'Food required']},
  created_at: { type: Date }
});

mongoose.model('Penguin', PenguinsSchema);