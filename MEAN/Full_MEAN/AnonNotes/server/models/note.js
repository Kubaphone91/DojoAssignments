const mongoose = require('mongoose');
const { Schema } = mongoose;
const NoteSchema = Schema({
  note: { type: String, required: true, minlength: 4},
},{
  timestamps: true
});

const Note = mongoose.model('Note', NoteSchema);