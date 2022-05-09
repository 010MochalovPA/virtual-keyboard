import './assets/scss/style.scss';
import './assets/scss/reset.scss';
import Keyboard from './assets/modules/keyboard';

Keyboard.init();

const textArea = document.querySelector('textarea');
const keyboard = document.querySelector('.keyboard');
const keys = document.querySelectorAll('.key');
function clearShift(event) {
  Keyboard.changeCaps();
  Keyboard.changeShift();
  Keyboard.render(keys);
  event.target.removeEventListener('mouseout', clearShift);
}
function clearKey(event) {
  event.target.classList.remove('key_active');
  if (event.type === 'mouseup' && (event.target.id === 'ShiftLeft' || event.target.id === 'ShiftRight')) {
    Keyboard.changeCaps();
    Keyboard.changeShift();
    Keyboard.render(keys);
    event.target.removeEventListener('mouseout', clearShift);
  }
}

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
  area.selectionStart = (pos !== 0) ? pos - 1 : 0;
  area.selectionEnd = (pos !== 0) ? pos - 1 : 0;
}

function deleteTextAfter(area) {
  const pos = area.selectionStart;
  const first = area.value.substring(0, pos);
  const second = area.value.substring(pos + 1, area.value.length);
  area.value = first + second;
  area.selectionStart = pos;
  area.selectionEnd = pos;
}

function checkclick(event) {
  event.target.classList.add('key_active');
  Keyboard.createAnimation(keyboard, event.target.offsetTop, event.target.offsetLeft, event.target.offsetWidth, event.target.offsetHeight);
  if (event.target.id === 'Tab') addTextArea(textArea, String.fromCharCode(9));
  else if (event.target.id === 'CapsLock') {
    Keyboard.changeCaps();
    Keyboard.render(keys);
  } else if (event.target.id === 'ShiftLeft' || event.target.id === 'ShiftRight') {
    Keyboard.changeCaps();
    Keyboard.changeShift();
    Keyboard.render(keys);
    event.target.addEventListener('mouseout', clearShift);
  } else if (event.target.id === 'Backspace') deleteTextBefore(textArea);
  else if (event.target.id === 'Delete') deleteTextAfter(textArea);
  else if (event.target.id === 'Enter') addTextArea(textArea, '\n');
  else if (event.target.id !== 'ControlRight' && event.target.id !== 'AltRight' && event.target.id !== 'AltLeft'
  && event.target.id !== 'MetaLeft' && event.target.id !== 'ControlLeft') addTextArea(textArea, event.target.innerHTML);
}

keys.forEach((key) => {
  key.addEventListener('mousedown', checkclick);
  key.addEventListener('mouseup', clearKey);
  key.addEventListener('mouseout', clearKey);
});

textArea.focus();
textArea.onblur = () => {
  textArea.focus();
};

function checkKeysDown(event) {
  const keycode = document.getElementById(event.code);
  if (Keyboard.KeyCodeArray.includes(event.code)) {
    keycode.classList.add('key_active');
  }

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
    event.preventDefault();
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
  if (Keyboard.KeyCodeArray.includes(event.code)) {
    document.getElementById(event.code).classList.remove('key_active');
  }

  if (event.key === 'Shift') {
    Keyboard.changeCaps();
    Keyboard.changeShift();
    Keyboard.render(keys);
  }
});
