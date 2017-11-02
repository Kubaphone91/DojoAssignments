const mongoose = require('mongoose');
const { Schema } = mongoose;
const QuoteSchema = Schema({
  _user: { type: Schema.Types.ObjectId, ref: 'User'},
  quote: { type: String, required: true}
},
  { timestamps: true}
);

const Quote = mongoose.model('Quote', QuoteSchema);