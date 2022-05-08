import './assets/scss/style.scss';
import './assets/scss/reset.scss';
import Keyboard from './assets/modules/keyboard';

Keyboard.init();

const keys = document.querySelectorAll('.key');

const textArea = document.querySelector('textarea');
const keyboard = document.querySelector('.keyboard');
textArea.focus();
textArea.onblur = () => {
  textArea.focus();
};

function addTextArea(area, input) {
  if (input === '&amp;') input = '&';
  else if (input === '&lt;') input = '<';
  else if (input === '&gt;') input = '>';
  const pos = area.selectionStart;
  const first = area.value.substring(0, pos);
  const second = area.value.substring(pos, area.value.length);
  area.value = first + input + second;
  area.selectionStart = pos + 1;
  area.selectionEnd = pos + 1;
}

function deleteTextBefore(area) {
  const pos = area.selectionStart;
  const first = area.value.substring(0, pos - 1);
  const second = area.value.substring(pos, area.value.length);
  area.value = first + second;
  area.selectionStart = pos - 1;
  area.selectionEnd = pos - 1;
}

function deleteTextAfter(area) {
  const pos = area.selectionStart;
  const first = area.value.substring(0, pos);
  const second = area.value.substring(pos + 1, area.value.length);
  area.value = first + second;
  area.selectionStart = pos;
  area.selectionEnd = pos;
}

function checkKeysDown(event) {
  const keycode = document.getElementById(event.code);
  keycode.classList.add('key_active');
  if (event.key === 'Shift') {
    if (!event.repeat === true) {
      Keyboard.createAnimation(keyboard, keycode.offsetTop, keycode.offsetLeft, keycode.offsetWidth, keycode.offsetHeight);
      Keyboard.changeCaps();
      Keyboard.changeShift();
      Keyboard.render(keys);
    }
  } else if (event.key === 'CapsLock') {
    if (!event.repeat === true) {
      Keyboard.createAnimation(keyboard, keycode.offsetTop, keycode.offsetLeft, keycode.offsetWidth, keycode.offsetHeight);
      Keyboard.changeCaps();
      Keyboard.render(keys);
    }
  } else if (event.ctrlKey || event.altKey) {
    event.preventDefault();
    if (!event.repeat === true) {
      if (event.code !== 'AltRight') Keyboard.createAnimation(keyboard, keycode.offsetTop, keycode.offsetLeft, keycode.offsetWidth, keycode.offsetHeight);
      else {
        event.preventDefault();
        const alt = document.getElementById(event.code);
        Keyboard.createAnimation(keyboard, alt.offsetTop, alt.offsetLeft, alt.offsetWidth, alt.offsetHeight);
      }
      if (event.ctrlKey && event.altKey) {
        Keyboard.changeLang();
        Keyboard.render(keys);
      }
    }
  } else {
    keys.forEach((key) => {
      if (key.id === event.code) {
        if (event.key === 'Tab') {
          event.preventDefault();
          if (!event.repeat === true) {
            addTextArea(textArea, String.fromCharCode(9));
            Keyboard.createAnimation(keyboard, keycode.offsetTop, keycode.offsetLeft, keycode.offsetWidth, keycode.offsetHeight);
          }
        } else if (event.key === 'Backspace') {
          event.preventDefault();
          deleteTextBefore(textArea);
          if (!event.repeat === true) Keyboard.createAnimation(keyboard, keycode.offsetTop, keycode.offsetLeft, keycode.offsetWidth, keycode.offsetHeight);
        } else if (event.key === 'Delete') {
          event.preventDefault();
          deleteTextAfter(textArea);
          if (!event.repeat === true) Keyboard.createAnimation(keyboard, keycode.offsetTop, keycode.offsetLeft, keycode.offsetWidth, keycode.offsetHeight);
        } else if (event.key === 'Enter') {
          event.preventDefault();
          addTextArea(textArea, '\n');
          if (!event.repeat === true) Keyboard.createAnimation(keyboard, keycode.offsetTop, keycode.offsetLeft, keycode.offsetWidth, keycode.offsetHeight);
        } else if (event.key === 'Meta') {
          event.preventDefault();
          if (!event.repeat === true) Keyboard.createAnimation(keyboard, keycode.offsetTop, keycode.offsetLeft, keycode.offsetWidth, keycode.offsetHeight);
        } else if (event.key === 'AltRight') {
          event.preventDefault();
          if (!event.repeat === true) Keyboard.createAnimation(keyboard, keycode.offsetTop, keycode.offsetLeft, keycode.offsetWidth, keycode.offsetHeight);
        } else {
          event.preventDefault();
          addTextArea(textArea, key.innerHTML);
          Keyboard.createAnimation(keyboard, keycode.offsetTop, keycode.offsetLeft, keycode.offsetWidth, keycode.offsetHeight);
        }
      }
    });
  }
}

document.addEventListener('keydown', checkKeysDown);

document.addEventListener('keyup', (event) => {
  document.getElementById(event.code).classList.remove('key_active');
  if (event.key === 'Shift') {
    Keyboard.changeCaps();
    Keyboard.changeShift();
    Keyboard.render(keys);
  }
});
