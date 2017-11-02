/* jshint esversion: 6 */
const express = require('express');
const mongoose = require('mongoose');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');
const port = process.env.PORT || 8000;

app.use(bodyParser.urlencoded({ extended: true }));
app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');

mongoose.connect('mongodb://localhost/message_board', { useMongoClient: true});
mongoose.Promise = global.Promise;

const { Schema } = mongoose;

const messageSchema = new Schema({
  name: { type: String, min: [4, 'Name must be at least four characters']},
  message_text: { type: String, required: [true, 'Message field cannot be left blank']},
  comments: [{ type: Schema.Types.ObjectId, ref: 'Comment'}]
},
{ timestamps: true }
);

const commentSchema = new Schema({
  name: { type: String, min: [4, 'Name must be at least four characters']},
  _message: { type: Schema.Types.ObjectId, ref: 'Message'},
  comment_text: { type: String, required: [ true, 'Comment field cannot be left blank']},
},
{timestamps : true}
);

const Message = mongoose.model('Message', messageSchema);
const Comment = mongoose.model('Comment', commentSchema);

app.get('/', function(req, res){
  Message.find({}, false, true)
  .populate('comments')
  .then( messages => {
    res.render('index', { messages });
  })
  .catch(err => {
    console.log('Something went wrong', err);
    res.redirect('/')
  })
});

app.post('/messages/new', function(req, res){
  console.log(req.body);
  Message.create(req.body)
  .then(message => {
    res.redirect('/')
  })
  .catch(err => {
    console.log('Something went wrong', err);
    res.redirect('/');
  })
});

app.post('/messages/add_comment/:id', function(req, res){
  console.log(req.body);
  Comment.create({ name: req.body.name, comment_text: req.body.comment_text, _message: req.params.id})
  .then(comment => {
    console.log(comment)
    return Message.findByIdAndUpdate(comment._message, { $push: { comments: comment}})
    .then(message => {
      console.log('message', message);
      res.redirect('/');
    })
  })
  .catch(console.log)
});

app.listen(port, () => console.log(`Listening on port ${ port }`));