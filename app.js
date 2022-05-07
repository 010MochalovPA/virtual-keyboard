import './assets/scss/style.scss';
import './assets/scss/reset.scss';
import Keyboard from './assets/modules/keyboard';
// import init from './assets/modules/page';

const textArea = document.createElement('textarea');
// const keyboard = document.createElement('div');

Keyboard.init();
textArea.focus();
const keys = document.querySelectorAll('.key');
// const textArea = document.querySelector('textarea');
function checkKeysDown(event) {
  document.removeEventListener('keydown', checkKeysDown);
  if (event.key === 'Shift') Keyboard.changeCaps();
  else if (event.key === 'CapsLock') Keyboard.changeCaps();
  else if (event.ctrlKey || event.altKey) {
    document.addEventListener('keydown', checkKeysDown);
    if (event.ctrlKey && event.altKey) Keyboard.changeLang();
  }

  Keyboard.render(keys);
}

document.addEventListener('keydown', checkKeysDown);

document.addEventListener('keyup', (event) => {
  document.addEventListener('keydown', checkKeysDown);
  if (event.key === 'Shift') {
    Keyboard.changeCaps();
    Keyboard.render(keys);
  }
});
