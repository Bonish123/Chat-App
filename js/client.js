const socket = io('http://localhost:7500', { transports : ['websocket'] });

const form = document.getElementById('send-container');
const messageInput = document.getElementById('messageInp');
const messageContainer = document.querySelector(".container");

const append = (message, position) => {
    const messageElement = document.createElement('div');
    messageElement.innerText = message;
    messageElement.classList.add('message');
    messageElement.classList.add(position);
    messageContainer.append(messageElement);
}

form.addEventListener('submit', (e)=>{
    e.preventDefault();
    const message = messageInput.value
    append(`You: ${message}`, 'right');
    socket.emit('send', message);
    messageInput.value = '';
})

const username = prompt('Enter your name to join');
socket.emit('new-user-joined', username);

socket.on('show-all-msg', data => {
    if (socket.id == data.id){
        message_info = data.message_info
        for(let i=0; i<message_info.length; i++)
        {
            console.log(message_info[i].username);
            append(`${message_info[i].username}': '${message_info[i].message}`, 'left')
        }
    }
});
socket.on('user-joined', data => {
    append(`${data} joined the chat room`, 'right');
});

socket.on('receive', data => {
    append(`${data.name}: ${data.message}`, 'left');
});

socket.on('leave', name => {
    append(`${name} left the chat room`, 'left');
});
