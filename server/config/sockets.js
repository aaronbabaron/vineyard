import sockets from 'socket.io';
import messageController from '../db/controllers/messages';

export default server => {
  var io = sockets.listen(server);

  io.on('connection', socket => {
    socket.emit('connected', 'hello world');
  
    socket.on('this test', socket => {
      console.log('~~~~~~~~~~~~~I dont know what this is doing~~~~~~~~~~~~~~~~~~');
    });

    socket.on('new message', data => {
      console.log('got the socket shit');
      messageController.postMessage(data).then(message => {
        console.log('created msg');
        message.author_name = data.author_name;
        console.log(message);
        io.in(data.room_id).emit('message created', message);
      });
    });

    socket.on('enter rooms', data => {
      data.forEach(item => {
        socket.join(item.id);
      });
    });

    // unsure if bottom two are needed
    socket.on('initial room join', data => {
      console.log('im in the room', data.room_id);
      socket.join(data.room_id);
    });

    socket.on('room change', data => {
      socket.leave(data.old_room_id);
      socket.join(data.new_room_id);
    });
  });

}