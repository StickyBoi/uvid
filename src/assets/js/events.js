import helpers from './helpers.js';

window.addEventListener('load', ()=>{
    document.getElementById('create-room').addEventListener('click', (e)=>{
        e.preventDefault();

        let yourName = document.querySelector('#your-name').value;

        if(yourName){
            document.querySelector('#err-msg').innerHTML = "";
            sessionStorage.setItem('username', yourName);
            let roomLink = `${location.origin}?room=${helpers.generateRandomString()}`;
            document.querySelector('#room-created').innerHTML = `Room created. Click <a href='${roomLink}'>here</a> to enter room.`;
            document.querySelector('#your-name').value = '';
        }

        else{
            document.querySelector('#err-msg').innerHTML = "All fields are required";
        }
    });

    document.getElementById('enter-room').addEventListener('click', (e)=>{
        e.preventDefault();

        let name = document.querySelector('#username').value;

        if(name){
            document.querySelector('#err-msg-username').innerHTML = "";
            sessionStorage.setItem('username', name);
            location.reload();
        }

        else{
            document.querySelector('#err-msg-username').innerHTML = "Please input your name";
        }
    });


    document.addEventListener('click', (e)=>{
        if(e.target && e.target.classList.contains('expand-remote-video')){
            helpers.maximiseStream(e);
        }

        else if(e.target && e.target.classList.contains('mute-remote-mic')){
            helpers.singleStreamToggleMute(e);
        }
    });
})