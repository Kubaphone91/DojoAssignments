const mongoose = require('mongoose');
const { Schema } = mongoose;
const PlayerSchema = Schema({
  name: { type: String, required: true, minlength: 2},
  position: { type: String },
  game1: { type: Object },
  game2: { type: Object },
  game3: { type: Object },
}, {
  timestamps: true
});

const Player = mongoose.model('Player', PlayerSchema);