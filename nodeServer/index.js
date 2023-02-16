// Node server which will handle socket.io connections
const io = require('socket.io')(7500)

const users = {}
const messages = [];

const push = (user, message) => {
    messages.push({username: user, message: message});
}
// this will listen all the connections
io.on('connection', socket => {
    // this will handle users joining
    socket.on('new-user-joined', name=>{
        console.log(socket.id);
        users[socket.id] = name;
        socket.emit('show-all-msg', {id: socket.id, message_info: messages})
        console.log("Hey ", name)
        //emit all the uses when a new user is joined
        socket.broadcast.emit('user-joined', name);
    });

    socket.on('send', message => {
        push(users[socket.id], message);
        socket.broadcast.emit('receive', {message: message, name: users[socket.id]})
    });

    socket.on('disconnect', message => {
        socket.broadcast.emit('leave', users[socket.id]);
        delete users[socket.id];
    });
});