$(document).ready(function(){
  var socket = io.connect();
  var user = prompt("Enter your name: ");
  socket.emit('logged_in');
  socket.on('sign_in', function(data){
    for(var i = 0; i < data.chats.length; i++){
      $('.chats').append("<p>", data.chats[i].name, ": ", data.chats[i].chat, "</p>");
    };
  });
  $('form').submit(function(){
    var data = $(this).serializeArray();
    console.log(data);
    data = data[0].value;
    console.log(data);
    socket.emit('message', {name: user , chat: data});
  });
  socket.on('update', function(data){
    console.log(data.chats[data.chats.length - 1]);
    $('.chats').append("<p>", data.chats[data.chats.length - 1].name, ": ", data.chats[data.chats.length - 1].chat, "</p>");
  });
})