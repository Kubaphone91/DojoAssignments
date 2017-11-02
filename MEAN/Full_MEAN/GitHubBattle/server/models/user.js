const mongoose = require('mongoose');
const { Schema } = mongoose;
const UserSchema = Schema({
  name: { type: String, required: true, minlength: 2 },
  score: { type: Number },
  avatar_url: { type: String }
},{
  timestamps: true
});

const User = mongoose.model('User', UserSchema);