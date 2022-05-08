import spaceImg from '../webp/space.webp';

const Keyboard = {
  config: {
    lang: localStorage.getItem('lang') || 'en',
    caps: localStorage.getItem('caps') || false,
    shift: localStorage.getItem('shift') || false,
  },
  KeyCodeArray: [
    'Backquote', 'Digit1', 'Digit2', 'Digit3', 'Digit4', 'Digit5', 'Digit6', 'Digit7',
    'Digit8', 'Digit9', 'Digit0', 'Minus', 'Equal', 'Backslash', 'Backspace',
    'Tab', 'KeyQ', 'KeyW', 'KeyE', 'KeyR', 'KeyT', 'KeyY', 'KeyU', 'KeyI', 'KeyO',
    'KeyP', 'BracketLeft', 'BracketRight', 'Delete',
    'CapsLock', 'KeyA', 'KeyS', 'KeyD', 'KeyF', 'KeyG', 'KeyH', 'KeyJ', 'KeyK',
    'KeyL', 'Semicolon', 'Quote', 'Enter',
    'ShiftLeft', 'KeyZ', 'KeyX', 'KeyC', 'KeyV', 'KeyB', 'KeyN', 'KeyM', 'Comma',
    'Period', 'Slash', 'ArrowUp', 'ShiftRight',
    'ControlLeft', 'MetaLeft', 'AltLeft', 'Space', 'AltRight', 'ArrowLeft',
    'ArrowDown', 'ArrowRight', 'ControlRight',
  ],
  keyLayoutObj: {
    en: {
      Upper: [
        '~', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '+', '|', '⌫',
        'Tab', 'Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', '{', '}', 'Del',
        'Caps', 'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', ':', '"', 'Enter',
        'Shift', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', '<', '>', '?', '&#9650', 'Shift',
        'Ctrl', 'Win', 'Alt', ' ', 'Alt', '&#9664', '&#9660', '&#9654', 'Ctrl'],
      Lower: [
        '`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', '\\', '⌫',
        'Tab', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']', 'Del',
        'Caps', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', "'", 'Enter',
        'Shift', 'z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '/', '&#9650', 'Shift',
        'Ctrl', 'Win', 'Alt', ' ', 'Alt', '&#9664', '&#9660', '&#9654', 'Ctrl'],
    },
    ru: {
      Upper: [
        'Ё', '!', '"', '№', ';', '%', ':', '?', '*', '(', ')', '_', '+', '/', '⌫',
        'Tab', 'Й', 'Ц', 'У', 'К', 'Е', 'Н', 'Г', 'Ш', 'Щ', 'З', 'Х', 'Ъ', 'Del',
        'Caps', 'Ф', 'Ы', 'В', 'А', 'П', 'Р', 'О', 'Л', 'Д', 'Ж', 'Э', 'Enter',
        'Shift', 'Я', 'Ч', 'С', 'М', 'И', 'Т', 'Ь', 'Б', 'Ю', ',', '&#9650', 'Shift',
        'Ctrl', 'Win', 'Alt', ' ', 'Alt', '&#9664', '&#9660', '&#9654', 'Ctrl'],
      Lower: [
        'ё', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', '\\', '⌫',
        'Tab', 'й', 'ц', 'у', 'к', 'е', 'н', 'г', 'ш', 'щ', 'з', 'ч', 'ъ', 'Del',
        'Caps', 'ф', 'ы', 'в', 'а', 'п', 'р', 'о', 'л', 'д', 'ж', 'э', 'Enter',
        'Shift', 'я', 'ч', 'с', 'м', 'и', 'т', 'ь', 'б', 'ю', '.', '&#9650', 'Shift',
        'Ctrl', 'Win', 'Alt', ' ', 'Alt', '&#9664', '&#9660', '&#9654', 'Ctrl'],

    },
  },

  init() {
    const textArea = document.createElement('textarea');
    const keyboard = document.createElement('div');

    keyboard.className = 'keyboard';
    textArea.className = 'textarrea';
    document.body.append(textArea);
    document.body.append(keyboard);

    this.keyLayoutObj.en.Lower.forEach((elem, index) => {
      const key = document.createElement('div');
      key.className = 'key';
      key.id = this.KeyCodeArray[index];
      if (elem.length !== 1) key.classList.add(elem.toLowerCase());
      if (elem === ' ') {
        key.classList.add('space');
        key.style.background = `url(${spaceImg})`;
      } else if (elem === '⌫') key.classList.add('backspace');
      keyboard.append(key);
    });
    this.render(document.querySelectorAll('.key'));
  },
  render(keys) {
    keys.forEach((key, index) => {
      if (this.config.lang === 'en' && this.config.caps) key.innerHTML = this.keyLayoutObj.en.Upper[index];
      else if (this.config.lang === 'en' && !this.config.caps) key.innerHTML = this.keyLayoutObj.en.Lower[index];
      else if (this.config.lang === 'ru' && this.config.caps) key.innerHTML = this.keyLayoutObj.ru.Upper[index];
      else key.innerHTML = this.keyLayoutObj.ru.Lower[index];
    });
  },
  changeCaps() {
    this.config.caps = !this.config.caps;
    localStorage.setItem('caps', this.config.caps);
  },
  changeLang() {
    if (this.config.lang === 'en') this.config.lang = 'ru';
    else this.config.lang = 'en';
    localStorage.setItem('lang', this.config.lang);
  },
  getCaps() {
    return this.config.caps;
  },
  getShift() {
    return this.config.shift;
  },
  changeShift() {
    this.config.shift = !this.config.shift;
    localStorage.setItem('shift', this.config.shift);
  },
  createAnimation(keyboard, y, x, width = 68, height = 68) {
    const circle = document.createElement('div');

    circle.classList = 'light-key';
    circle.style.width = `${width}px`;
    circle.style.height = `${height}px`;
    circle.style.top = `${y}px`;
    circle.style.left = `${x}px`;
    keyboard.append(circle);

    circle.classList.add('scale');
    setTimeout(() => {
      circle.remove();
    }, 350);
  },
};

export default Keyboard;
