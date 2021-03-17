import User from './User.js';
import Messanger from './messenger.js';

const user = new User('https://ahj-chat-server.herokuapp.com/users');

const elWindowStart = document.querySelector('.window');
const submitName = document.querySelector('#submit-name');
const alertName = document.querySelector('#alert');
const okAlert = document.querySelector('#ok-alert');
let nameUser = '';

function conectChat() {
  const messanger = new Messanger(nameUser);
  messanger.init();
}

submitName.addEventListener('click', async () => {
  const inputName = document.querySelector('#inp-name');
  nameUser = inputName.value;

  if (nameUser) {
    const response = await user.load();
    const arrUsers = await response.json();

    if (arrUsers.findIndex((item) => item.name === nameUser) === -1) {
      await user.add({ name: nameUser });
      elWindowStart.classList.add('hidden');
      inputName.value = '';
      conectChat();
      return;
    }
    alertName.classList.remove('hidden');
  }
});

okAlert.addEventListener('click', () => {
  alertName.classList.add('hidden');
});
