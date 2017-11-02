/* jshint esversion: 6 */
const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const port = process.env.PORT || 8000;

let app = express();

app.use(express.static(path.join(__dirname, './static')));
app.use(bodyParser.urlencoded({ extended: true }));

app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');

app.get('/', function(req,res){
  res.render('index');
});

const server = app.listen(8000, () => {
  console.log(`Listening on port ${ port }`);
});
const io = require('socket.io').listen(server);

var chats = [{name: 'Kuba', chat: 'A Song of Fire and Ice'}];
io.sockets.on('connection', function(socket){
  socket.on('logged_in', function(){
    socket.emit('sign_in', {chats: chats});
  })

  socket.on('message', function(data){
    chats.push(data);
    io.emit('update', {chats: chats});
  })
})