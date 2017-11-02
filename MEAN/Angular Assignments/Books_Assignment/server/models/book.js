const mongoose = require('mongoose');
const { Schema } = mongoose;

const bookSchema = new Schema({
  title: {
    type: String,
    required: true,
    trim: true,
    minlength: [5, 'TITLE MUST BE GREATER THAN 5'],
  },
  year: Number,
  pages: Number,
  author: {
    type: String,
    required: true,
    trim: true,
    minlength: [3, 'AUTHOR MUST BE GREATER THAN 3'],
  },
  publisher: {
    type: String,
  }
}, {
  timestamps: true
});

module.exports = mongoose.model('Book', bookSchema);

