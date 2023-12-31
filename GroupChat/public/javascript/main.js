var io=io();

const chatForm = document.getElementById("chat-form")
const { username, room } = Qs.parse(location.search, {
    ignoreQueryPrefix: true,
});

io.emit("joinRoom",{username,room});
io.on("notification",(message)=>{
    console.log(message)
    alert(message)
})
io.on('group-message', (message)=>{
    outputMessage(message)
    console.log(message)
})

chatForm.addEventListener('submit', (e)=>{
        e.preventDefault()
        
        var message = e.target.elements.msg.value;
        const messages={
            text:message,
            time:new Date(Date.now()).toISOString(),
            username:username
        };
        outputMessage(messages);
        io.emit('message', message)
})
/*
<div class='message'>
    <p class="meta">abc <span>34567789789</span></p>
    
    <p class="text">hello<p>
</div>

*/

function outputMessage(message) {
    const div = document.createElement('div');
    div.classList.add('message');
    const p = document.createElement('p');
    p.classList.add('meta');
    p.innerText = message.username;
    p.innerHTML += `<span>${message.time}</span>`;
    div.appendChild(p);
    const para = document.createElement('p');
    para.classList.add('text');
    para.innerText = message.text;
    div.appendChild(para);
    document.querySelector('.chat-messages').appendChild(div);
  }


