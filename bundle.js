/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./app.js":
/*!****************!*\
  !*** ./app.js ***!
  \****************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _assets_scss_style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./assets/scss/style.scss */ \"./assets/scss/style.scss\");\n/* harmony import */ var _assets_scss_reset_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assets/scss/reset.scss */ \"./assets/scss/reset.scss\");\n/* harmony import */ var _assets_modules_keyboard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./assets/modules/keyboard */ \"./assets/modules/keyboard.js\");\n\n\n\n\n_assets_modules_keyboard__WEBPACK_IMPORTED_MODULE_2__[\"default\"].init();\n\nconst textArea = document.querySelector('textarea');\nconst keyboard = document.querySelector('.keyboard');\nconst keys = document.querySelectorAll('.key');\nfunction clearShift(event) {\n  _assets_modules_keyboard__WEBPACK_IMPORTED_MODULE_2__[\"default\"].changeCaps();\n  _assets_modules_keyboard__WEBPACK_IMPORTED_MODULE_2__[\"default\"].changeShift();\n  _assets_modules_keyboard__WEBPACK_IMPORTED_MODULE_2__[\"default\"].render(keys);\n  event.target.removeEventListener('mouseout', clearShift);\n}\nfunction clearKey(event) {\n  event.target.classList.remove('key_active');\n  if (event.type === 'mouseup' && (event.target.id === 'ShiftLeft' || event.target.id === 'ShiftRight')) {\n    _assets_modules_keyboard__WEBPACK_IMPORTED_MODULE_2__[\"default\"].changeCaps();\n    _assets_modules_keyboard__WEBPACK_IMPORTED_MODULE_2__[\"default\"].changeShift();\n    _assets_modules_keyboard__WEBPACK_IMPORTED_MODULE_2__[\"default\"].render(keys);\n    event.target.removeEventListener('mouseout', clearShift);\n  }\n}\n\nfunction addTextArea(area, input) {\n  if (input === '&amp;') input = '&';\n  else if (input === '&lt;') input = '<';\n  else if (input === '&gt;') input = '>';\n  const pos = area.selectionStart;\n  const first = area.value.substring(0, pos);\n  const second = area.value.substring(pos, area.value.length);\n  area.value = first + input + second;\n  area.selectionStart = pos + 1;\n  area.selectionEnd = pos + 1;\n}\nfunction deleteTextBefore(area) {\n  const pos = area.selectionStart;\n  const first = area.value.substring(0, pos - 1);\n  const second = area.value.substring(pos, area.value.length);\n  area.value = first + second;\n  area.selectionStart = (pos !== 0) ? pos - 1 : 0;\n  area.selectionEnd = (pos !== 0) ? pos - 1 : 0;\n}\n\nfunction deleteTextAfter(area) {\n  const pos = area.selectionStart;\n  const first = area.value.substring(0, pos);\n  const second = area.value.substring(pos + 1, area.value.length);\n  area.value = first + second;\n  area.selectionStart = pos;\n  area.selectionEnd = pos;\n}\n\nfunction checkclick(event) {\n  event.target.classList.add('key_active');\n  _assets_modules_keyboard__WEBPACK_IMPORTED_MODULE_2__[\"default\"].createAnimation(keyboard, event.target.offsetTop, event.target.offsetLeft, event.target.offsetWidth, event.target.offsetHeight);\n  if (event.target.id === 'Tab') addTextArea(textArea, String.fromCharCode(9));\n  else if (event.target.id === 'CapsLock') {\n    _assets_modules_keyboard__WEBPACK_IMPORTED_MODULE_2__[\"default\"].changeCaps();\n    _assets_modules_keyboard__WEBPACK_IMPORTED_MODULE_2__[\"default\"].render(keys);\n  } else if (event.target.id === 'ShiftLeft' || event.target.id === 'ShiftRight') {\n    _assets_modules_keyboard__WEBPACK_IMPORTED_MODULE_2__[\"default\"].changeCaps();\n    _assets_modules_keyboard__WEBPACK_IMPORTED_MODULE_2__[\"default\"].changeShift();\n    _assets_modules_keyboard__WEBPACK_IMPORTED_MODULE_2__[\"default\"].render(keys);\n    event.target.addEventListener('mouseout', clearShift);\n  } else if (event.target.id === 'Backspace') deleteTextBefore(textArea);\n  else if (event.target.id === 'Delete') deleteTextAfter(textArea);\n  else if (event.target.id === 'Enter') addTextArea(textArea, '\\n');\n  else if (event.target.id !== 'ControlRight' && event.target.id !== 'AltRight' && event.target.id !== 'AltLeft'\n  && event.target.id !== 'MetaLeft' && event.target.id !== 'ControlLeft') addTextArea(textArea, event.target.innerHTML);\n}\n\nkeys.forEach((key) => {\n  key.addEventListener('mousedown', checkclick);\n  key.addEventListener('mouseup', clearKey);\n  key.addEventListener('mouseout', clearKey);\n});\n\ntextArea.focus();\ntextArea.onblur = () => {\n  textArea.focus();\n};\n\nfunction checkKeysDown(event) {\n  const keycode = document.getElementById(event.code);\n  if (_assets_modules_keyboard__WEBPACK_IMPORTED_MODULE_2__[\"default\"].KeyCodeArray.includes(event.code)) {\n    keycode.classList.add('key_active');\n  }\n\n  if (event.key === 'Shift') {\n    if (!event.repeat === true) {\n      _assets_modules_keyboard__WEBPACK_IMPORTED_MODULE_2__[\"default\"].createAnimation(keyboard, keycode.offsetTop, keycode.offsetLeft, keycode.offsetWidth, keycode.offsetHeight);\n      _assets_modules_keyboard__WEBPACK_IMPORTED_MODULE_2__[\"default\"].changeCaps();\n      _assets_modules_keyboard__WEBPACK_IMPORTED_MODULE_2__[\"default\"].changeShift();\n      _assets_modules_keyboard__WEBPACK_IMPORTED_MODULE_2__[\"default\"].render(keys);\n    }\n  } else if (event.key === 'CapsLock') {\n    if (!event.repeat === true) {\n      _assets_modules_keyboard__WEBPACK_IMPORTED_MODULE_2__[\"default\"].createAnimation(keyboard, keycode.offsetTop, keycode.offsetLeft, keycode.offsetWidth, keycode.offsetHeight);\n      _assets_modules_keyboard__WEBPACK_IMPORTED_MODULE_2__[\"default\"].changeCaps();\n      _assets_modules_keyboard__WEBPACK_IMPORTED_MODULE_2__[\"default\"].render(keys);\n    }\n  } else if (event.ctrlKey || event.altKey) {\n    event.preventDefault();\n    if (!event.repeat === true) {\n      if (event.code !== 'AltRight') _assets_modules_keyboard__WEBPACK_IMPORTED_MODULE_2__[\"default\"].createAnimation(keyboard, keycode.offsetTop, keycode.offsetLeft, keycode.offsetWidth, keycode.offsetHeight);\n      else {\n        event.preventDefault();\n        const alt = document.getElementById(event.code);\n        _assets_modules_keyboard__WEBPACK_IMPORTED_MODULE_2__[\"default\"].createAnimation(keyboard, alt.offsetTop, alt.offsetLeft, alt.offsetWidth, alt.offsetHeight);\n      }\n      if (event.ctrlKey && event.altKey) {\n        _assets_modules_keyboard__WEBPACK_IMPORTED_MODULE_2__[\"default\"].changeLang();\n        _assets_modules_keyboard__WEBPACK_IMPORTED_MODULE_2__[\"default\"].render(keys);\n      }\n    }\n  } else {\n    event.preventDefault();\n    keys.forEach((key) => {\n      if (key.id === event.code) {\n        if (event.key === 'Tab') {\n          event.preventDefault();\n          if (!event.repeat === true) {\n            addTextArea(textArea, String.fromCharCode(9));\n            _assets_modules_keyboard__WEBPACK_IMPORTED_MODULE_2__[\"default\"].createAnimation(keyboard, keycode.offsetTop, keycode.offsetLeft, keycode.offsetWidth, keycode.offsetHeight);\n          }\n        } else if (event.key === 'Backspace') {\n          event.preventDefault();\n          deleteTextBefore(textArea);\n          if (!event.repeat === true) _assets_modules_keyboard__WEBPACK_IMPORTED_MODULE_2__[\"default\"].createAnimation(keyboard, keycode.offsetTop, keycode.offsetLeft, keycode.offsetWidth, keycode.offsetHeight);\n        } else if (event.key === 'Delete') {\n          event.preventDefault();\n          deleteTextAfter(textArea);\n          if (!event.repeat === true) _assets_modules_keyboard__WEBPACK_IMPORTED_MODULE_2__[\"default\"].createAnimation(keyboard, keycode.offsetTop, keycode.offsetLeft, keycode.offsetWidth, keycode.offsetHeight);\n        } else if (event.key === 'Enter') {\n          event.preventDefault();\n          addTextArea(textArea, '\\n');\n          if (!event.repeat === true) _assets_modules_keyboard__WEBPACK_IMPORTED_MODULE_2__[\"default\"].createAnimation(keyboard, keycode.offsetTop, keycode.offsetLeft, keycode.offsetWidth, keycode.offsetHeight);\n        } else if (event.key === 'Meta') {\n          event.preventDefault();\n          if (!event.repeat === true) _assets_modules_keyboard__WEBPACK_IMPORTED_MODULE_2__[\"default\"].createAnimation(keyboard, keycode.offsetTop, keycode.offsetLeft, keycode.offsetWidth, keycode.offsetHeight);\n        } else if (event.key === 'AltRight') {\n          event.preventDefault();\n          if (!event.repeat === true) _assets_modules_keyboard__WEBPACK_IMPORTED_MODULE_2__[\"default\"].createAnimation(keyboard, keycode.offsetTop, keycode.offsetLeft, keycode.offsetWidth, keycode.offsetHeight);\n        } else {\n          event.preventDefault();\n          addTextArea(textArea, key.innerHTML);\n          _assets_modules_keyboard__WEBPACK_IMPORTED_MODULE_2__[\"default\"].createAnimation(keyboard, keycode.offsetTop, keycode.offsetLeft, keycode.offsetWidth, keycode.offsetHeight);\n        }\n      }\n    });\n  }\n}\n\ndocument.addEventListener('keydown', checkKeysDown);\n\ndocument.addEventListener('keyup', (event) => {\n  if (_assets_modules_keyboard__WEBPACK_IMPORTED_MODULE_2__[\"default\"].KeyCodeArray.includes(event.code)) {\n    document.getElementById(event.code).classList.remove('key_active');\n  }\n\n  if (event.key === 'Shift') {\n    _assets_modules_keyboard__WEBPACK_IMPORTED_MODULE_2__[\"default\"].changeCaps();\n    _assets_modules_keyboard__WEBPACK_IMPORTED_MODULE_2__[\"default\"].changeShift();\n    _assets_modules_keyboard__WEBPACK_IMPORTED_MODULE_2__[\"default\"].render(keys);\n  }\n});\n\n\n//# sourceURL=webpack://virtual-keyboard/./app.js?");

/***/ }),

/***/ "./assets/modules/keyboard.js":
/*!************************************!*\
  !*** ./assets/modules/keyboard.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _webp_space_webp__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../webp/space.webp */ \"./assets/webp/space.webp\");\n\n\nconst Keyboard = {\n  config: {\n    lang: localStorage.getItem('lang') || 'en',\n    caps: localStorage.getItem('caps') || false,\n    shift: false,\n    value: localStorage.getItem('value') || '',\n  },\n  KeyCodeArray: [\n    'Backquote', 'Digit1', 'Digit2', 'Digit3', 'Digit4', 'Digit5', 'Digit6', 'Digit7',\n    'Digit8', 'Digit9', 'Digit0', 'Minus', 'Equal', 'Backslash', 'Backspace',\n    'Tab', 'KeyQ', 'KeyW', 'KeyE', 'KeyR', 'KeyT', 'KeyY', 'KeyU', 'KeyI', 'KeyO',\n    'KeyP', 'BracketLeft', 'BracketRight', 'Delete',\n    'CapsLock', 'KeyA', 'KeyS', 'KeyD', 'KeyF', 'KeyG', 'KeyH', 'KeyJ', 'KeyK',\n    'KeyL', 'Semicolon', 'Quote', 'Enter',\n    'ShiftLeft', 'KeyZ', 'KeyX', 'KeyC', 'KeyV', 'KeyB', 'KeyN', 'KeyM', 'Comma',\n    'Period', 'Slash', 'ArrowUp', 'ShiftRight',\n    'ControlLeft', 'MetaLeft', 'AltLeft', 'Space', 'AltRight', 'ArrowLeft',\n    'ArrowDown', 'ArrowRight', 'ControlRight',\n  ],\n  keyLayoutObj: {\n    en: {\n      Upper: [\n        '~', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '+', '|', '⌫',\n        'Tab', 'Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', '{', '}', 'Del',\n        'Caps', 'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', ':', '\"', 'Enter',\n        'Shift', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', '<', '>', '?', '&#9650', 'Shift',\n        'Ctrl', 'Win', 'Alt', ' ', 'Alt', '&#9664', '&#9660', '&#9654', 'Ctrl'],\n      Lower: [\n        '`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', '\\\\', '⌫',\n        'Tab', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']', 'Del',\n        'Caps', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', \"'\", 'Enter',\n        'Shift', 'z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '/', '&#9650', 'Shift',\n        'Ctrl', 'Win', 'Alt', ' ', 'Alt', '&#9664', '&#9660', '&#9654', 'Ctrl'],\n    },\n    ru: {\n      Upper: [\n        'Ё', '!', '\"', '№', ';', '%', ':', '?', '*', '(', ')', '_', '+', '/', '⌫',\n        'Tab', 'Й', 'Ц', 'У', 'К', 'Е', 'Н', 'Г', 'Ш', 'Щ', 'З', 'Х', 'Ъ', 'Del',\n        'Caps', 'Ф', 'Ы', 'В', 'А', 'П', 'Р', 'О', 'Л', 'Д', 'Ж', 'Э', 'Enter',\n        'Shift', 'Я', 'Ч', 'С', 'М', 'И', 'Т', 'Ь', 'Б', 'Ю', ',', '&#9650', 'Shift',\n        'Ctrl', 'Win', 'Alt', ' ', 'Alt', '&#9664', '&#9660', '&#9654', 'Ctrl'],\n      Lower: [\n        'ё', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', '\\\\', '⌫',\n        'Tab', 'й', 'ц', 'у', 'к', 'е', 'н', 'г', 'ш', 'щ', 'з', 'ч', 'ъ', 'Del',\n        'Caps', 'ф', 'ы', 'в', 'а', 'п', 'р', 'о', 'л', 'д', 'ж', 'э', 'Enter',\n        'Shift', 'я', 'ч', 'с', 'м', 'и', 'т', 'ь', 'б', 'ю', '.', '&#9650', 'Shift',\n        'Ctrl', 'Win', 'Alt', ' ', 'Alt', '&#9664', '&#9660', '&#9654', 'Ctrl'],\n\n    },\n  },\n\n  init() {\n    const textArea = document.createElement('textarea');\n    const keyboard = document.createElement('div');\n\n    keyboard.className = 'keyboard';\n    textArea.className = 'textarrea';\n    document.body.append(textArea);\n    document.body.append(keyboard);\n\n    this.keyLayoutObj.en.Lower.forEach((elem, index) => {\n      const key = document.createElement('div');\n      key.className = 'key';\n      key.id = this.KeyCodeArray[index];\n      if (elem.length !== 1) key.classList.add(elem.toLowerCase());\n      if (elem === ' ') {\n        key.classList.add('space');\n        key.style.background = `url(${_webp_space_webp__WEBPACK_IMPORTED_MODULE_0__[\"default\"]})`;\n      } else if (elem === '⌫') key.classList.add('backspace');\n      keyboard.append(key);\n    });\n    this.render(document.querySelectorAll('.key'));\n  },\n  render(keys) {\n    keys.forEach((key, index) => {\n      if (this.config.lang === 'en' && this.config.caps) key.innerHTML = this.keyLayoutObj.en.Upper[index];\n      else if (this.config.lang === 'en' && !this.config.caps) key.innerHTML = this.keyLayoutObj.en.Lower[index];\n      else if (this.config.lang === 'ru' && this.config.caps) key.innerHTML = this.keyLayoutObj.ru.Upper[index];\n      else key.innerHTML = this.keyLayoutObj.ru.Lower[index];\n    });\n  },\n  changeCaps() {\n    this.config.caps = !this.config.caps;\n    localStorage.setItem('caps', this.config.caps);\n  },\n  changeLang() {\n    if (this.config.lang === 'en') this.config.lang = 'ru';\n    else this.config.lang = 'en';\n    localStorage.setItem('lang', this.config.lang);\n  },\n  getCaps() {\n    return this.config.caps;\n  },\n  getShift() {\n    return this.config.shift;\n  },\n  changeShift() {\n    this.config.shift = !this.config.shift;\n    localStorage.setItem('shift', this.config.shift);\n  },\n  createAnimation(keyboard, y, x, width = 68, height = 68) {\n    const circle = document.createElement('div');\n\n    circle.classList = 'light-key';\n    circle.style.width = `${width}px`;\n    circle.style.height = `${height}px`;\n    circle.style.top = `${y}px`;\n    circle.style.left = `${x}px`;\n    keyboard.append(circle);\n\n    circle.classList.add('scale');\n    setTimeout(() => {\n      circle.remove();\n    }, 350);\n  },\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Keyboard);\n\n\n//# sourceURL=webpack://virtual-keyboard/./assets/modules/keyboard.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./assets/scss/reset.scss":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./assets/scss/reset.scss ***!
  \*************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"/* http://meyerweb.com/eric/tools/css/reset/ \\n   v2.0 | 20110126\\n   License: none (public domain)\\n*/\\nhtml, body, div, span, applet, object, iframe, h1, h2, h3, h4, h5, h6, p, blockquote, pre, a, abbr, acronym, address, big, cite, code, del, dfn, em, img, ins, kbd, q, s, samp, small, strike, strong, sub, sup, tt, var, b, u, i, center, dl, dt, dd, ol, ul, li, fieldset, form, label, legend, table, caption, tbody, tfoot, thead, tr, th, td, article, aside, canvas, details, embed, figure, figcaption, footer, header, hgroup, menu, nav, output, ruby, section, summary, time, mark, audio, video {\\n  margin: 0;\\n  padding: 0;\\n  border: 0;\\n  font-size: 100%;\\n  font: inherit;\\n  vertical-align: baseline;\\n}\\n\\n/* HTML5 display-role reset for older browsers */\\narticle, aside, details, figcaption, figure, footer, header, hgroup, menu, nav, section {\\n  display: block;\\n}\\n\\nbody {\\n  line-height: 1;\\n}\\n\\nol, ul {\\n  list-style: none;\\n}\\n\\nblockquote, q {\\n  quotes: none;\\n}\\n\\nblockquote:before, blockquote:after {\\n  content: \\\"\\\";\\n  content: none;\\n}\\n\\nq:before, q:after {\\n  content: \\\"\\\";\\n  content: none;\\n}\\n\\ntable {\\n  border-collapse: collapse;\\n  border-spacing: 0;\\n}\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://virtual-keyboard/./assets/scss/reset.scss?./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./assets/scss/style.scss":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./assets/scss/style.scss ***!
  \*************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"body {\\n  height: 100vh;\\n  display: flex;\\n  flex-direction: column;\\n  align-items: center;\\n  justify-content: center;\\n  background-color: black;\\n}\\n\\ntextarea {\\n  width: 1160px;\\n  height: 200px;\\n  resize: none;\\n  outline: none;\\n  box-sizing: border-box;\\n  margin-bottom: 15px;\\n  margin-top: 15px;\\n  border-radius: 4px;\\n}\\n\\n.keyboard {\\n  display: flex;\\n  column-gap: 10px;\\n  row-gap: 10px;\\n  flex-wrap: wrap;\\n  width: 1190px;\\n  padding: 15px;\\n  box-sizing: border-box;\\n  border-radius: 10px;\\n  overflow: hidden;\\n  position: relative;\\n}\\n\\n.textarrea {\\n  position: relative;\\n  z-index: 10;\\n}\\n\\n.key {\\n  position: relative;\\n  z-index: 10;\\n  width: 68px;\\n  height: 68px;\\n  background-color: #353230;\\n  border-radius: 4px;\\n  font-family: \\\"Open Sans\\\", sans-serif;\\n  font-size: 24px;\\n  font-weight: 500;\\n  display: flex;\\n  align-items: center;\\n  justify-content: center;\\n  color: #fff;\\n  transition: all 0.3s;\\n}\\n.key:hover {\\n  background-color: #fff !important;\\n  color: #AA1F53;\\n}\\n\\n.light-key {\\n  position: absolute;\\n  z-index: 8;\\n  border-radius: 50%;\\n  background-color: #AA1F53;\\n  box-shadow: 0 0 5px 10px #AA1F53;\\n}\\n\\n.key_active {\\n  background-color: #fff !important;\\n  color: #AA1F53;\\n  transform: scale(0.8);\\n}\\n\\n.backspace {\\n  background-color: #181411;\\n}\\n\\n.tab, .caps, .del {\\n  background-color: #181411;\\n  width: 107px;\\n  font-size: 20px;\\n}\\n\\n.enter {\\n  background-color: #AA1F53;\\n  width: 185px;\\n  font-size: 20px;\\n}\\n\\n.shift {\\n  background-color: #181411;\\n  width: 146px;\\n  font-size: 20px;\\n}\\n\\n.space {\\n  width: 536px;\\n  font-size: 20px;\\n  background-size: 100%;\\n}\\n\\n.ctrl, .win, .alt {\\n  background-color: #181411;\\n  font-size: 20px;\\n}\\n\\n@keyframes key-press {\\n  from {\\n    transform: scale(1);\\n    opacity: 0.8;\\n  }\\n  to {\\n    transform: scale(5);\\n    opacity: 0;\\n  }\\n}\\n.scale {\\n  animation-name: key-press;\\n  animation-duration: 0.4s;\\n}\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://virtual-keyboard/./assets/scss/style.scss?./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n\n      content += cssWithMappingToString(item);\n\n      if (needLayer) {\n        content += \"}\";\n      }\n\n      if (item[2]) {\n        content += \"}\";\n      }\n\n      if (item[4]) {\n        content += \"}\";\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n\n\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://virtual-keyboard/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://virtual-keyboard/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./assets/webp/space.webp":
/*!********************************!*\
  !*** ./assets/webp/space.webp ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"1d2f37abcde7fd20e30da0779c057c7b.webp\");\n\n//# sourceURL=webpack://virtual-keyboard/./assets/webp/space.webp?");

/***/ }),

/***/ "./assets/scss/reset.scss":
/*!********************************!*\
  !*** ./assets/scss/reset.scss ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_reset_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./reset.scss */ \"./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./assets/scss/reset.scss\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_reset_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_reset_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_reset_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_reset_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://virtual-keyboard/./assets/scss/reset.scss?");

/***/ }),

/***/ "./assets/scss/style.scss":
/*!********************************!*\
  !*** ./assets/scss/style.scss ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./style.scss */ \"./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./assets/scss/style.scss\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://virtual-keyboard/./assets/scss/style.scss?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://virtual-keyboard/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://virtual-keyboard/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://virtual-keyboard/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://virtual-keyboard/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://virtual-keyboard/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://virtual-keyboard/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./app.js");
/******/ 	
/******/ })()
;