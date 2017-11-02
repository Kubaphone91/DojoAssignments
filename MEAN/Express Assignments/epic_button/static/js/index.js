$(document).ready(function(){
  const socket = io.connect();

  $('.epic').click( () => {
    socket.emit('epic');
  });

  $('.reset').click( () => {
    socket.emit('reset');
  });

  socket.on('update', (data) => {
    $('.count').text(data);
  });
})