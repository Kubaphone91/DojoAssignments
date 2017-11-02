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

app.get('/', function(req, res){
  res.render('index');
});

var server = app.listen(8000, function(){
  console.log(`Listening on port ${ port }`);
});
var io = require('socket.io').listen(server);

io.sockets.on('connection', function(socket){
  console.log('Client/socket is connected');
  console.log('Client/socket id is: ', socket.id);

  socket.on("posting_form", function(post_data){
    console.log(post_data);
    let rand = Math.floor((Math.random() * 1000) + 1);
    socket.emit('updated_message', { post_data, rand });  
    });
  });
