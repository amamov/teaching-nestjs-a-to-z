const socket = io('/chattings');

const getElementById = (id) => document.getElementById(id) || null;

//* get DOM element
const helloStrangerElement = getElementById('hello_stranger');
const chattingBoxElement = getElementById('chatting_box');
const formElement = getElementById('chat_form');

//* global socket handler
socket.on('user_connected', (username) => {
  drawNewChat(`${username} connected!`);
});
socket.on('new_chat', (data) => {
  const { chat, username } = data;
  drawNewChat(`${username}: ${chat}`);
});

//* event callback functions
const handleSubmit = (event) => {
  event.preventDefault();
  const inputValue = event.target.elements[0].value;
  if (inputValue !== '') {
    socket.emit('submit_chat', inputValue);
    // 화면에다가 그리기
    drawNewChat(`me : ${inputValue}`);
    event.target.elements[0].value = '';
  }
};

//* draw functions
const drawHelloStranger = (username) =>
  (helloStrangerElement.innerText = `Hello ${username} Stranger :)`);
const drawNewChat = (message) => {
  const wrapperChatBox = document.createElement('div');
  const chatBox = `
      <div>
        ${message}
      </div>
      `;
  wrapperChatBox.innerHTML = chatBox;
  chattingBoxElement.append(wrapperChatBox);
};

function helloUser() {
  const username = prompt('What is your name?');
  socket.emit('new_user', username, (data) => {
    drawHelloStranger(data);
  });
}

function init() {
  helloUser();
  // 이벤트 연결
  formElement.addEventListener('submit', handleSubmit);
}

init();
