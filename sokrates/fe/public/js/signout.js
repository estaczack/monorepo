/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "../../common/entities/header/HeaderOpen.js":
/*!**************************************************!*\
  !*** ../../common/entities/header/HeaderOpen.js ***!
  \**************************************************/
/***/ ((module) => {

eval("const HeaderOpen = {\n  loadConfig: async function () {\n    this.config = await fetch('/json/headeropen.json').then(res => res.json())\n    this.appTag = document.getElementsByClassName('App')[0]\n    this.contentTag = document.getElementById('Content')\n  },\n\n  createHero: function () {\n    let res = document.createElement('section')\n    res.setAttribute('class', 'hero is-small is-dark')\n    return res\n  },\n\n  createHeroBody: function () {\n    let res = document.createElement('div')\n    res.setAttribute('class', 'hero-body')\n    return res\n  },\n\n  createNav: function () {\n    let res = document.createElement('nav')\n    res.setAttribute('class', 'level')\n    return res\n  },\n\n  createLevelLeft: function () {\n    let res = document.createElement('div')\n    res.setAttribute('class', 'level-left')\n    return res\n  },\n\n  createLevelRight: function () {\n    let res = document.createElement('div')\n    res.setAttribute('class', 'level-right')\n    return res\n  },\n\n  createLevelItem: function () {\n    let res = document.createElement('div')\n    res.setAttribute('class', 'level-item')\n    return res\n  },\n\n  createFigure: function () {\n    let res = document.createElement('figure')\n    res.setAttribute('class', 'image is-128x128')\n    return res\n  },\n\n  createImg: function () {\n    let res = document.createElement('img')\n    res.setAttribute('src', '/images/logo_sm.png')\n    res.setAttribute('alt', 'Hypatia of Alexandria')\n    return res\n  },\n\n  createSimpleDiv: function () {\n    let res = document.createElement('div')\n    return res\n  },\n\n  createTitle: function () {\n    let res = document.createElement('div')\n    res.setAttribute('class', 'title separador-titulo-subtitulo title-script')\n    res.innerText = this.config.title\n    return res\n  },\n\n  createSubtitle: function () {\n    let res = document.createElement('div')\n    res.setAttribute('class', 'subtitle subtitle-thin')\n    res.innerText = this.config.subtitle\n    return res\n  },\n\n  show: async function () {\n    await this.loadConfig()\n    let hero = this.createHero()\n    this.contentTag.before(hero)\n    //this.appTag.appendChild(hero)\n    let heroBody = this.createHeroBody()\n    hero.appendChild(heroBody)\n    let nav = this.createNav()\n    heroBody.appendChild(nav)\n    let levelLeft = this.createLevelLeft()\n    nav.appendChild(levelLeft)\n    let itemLogo = this.createLevelItem()\n    levelLeft.appendChild(itemLogo)\n    let figure = this.createFigure()\n    itemLogo.appendChild(figure)\n    let logo = this.createImg()\n    figure.appendChild(logo)\n    let titles = this.createLevelItem()\n    levelLeft.appendChild(titles)\n    let simpleDiv = this.createSimpleDiv()\n    titles.appendChild(simpleDiv)\n    let title = this.createTitle()\n    simpleDiv.appendChild(title)\n    let subtitle = this.createSubtitle()\n    simpleDiv.appendChild(subtitle)\n    let levelRight = this.createLevelRight()\n    nav.appendChild(levelRight)\n    this.config.menu.forEach(item => {\n      let buttonDiv = document.createElement('div')\n      buttonDiv.setAttribute('class', 'level-item')\n      let buttonAnchor = document.createElement('a')\n      buttonAnchor.setAttribute('href', item.url)\n      if (item.status == 'normal') {\n        buttonAnchor.setAttribute('class', this.config.normalClasses)\n      } else {\n        buttonAnchor.setAttribute('class', this.config.emphasisClasses)\n      }\n      buttonAnchor.innerText = item.text\n      levelRight.appendChild(buttonAnchor)\n    })\n  }\n}\n\nmodule.exports = HeaderOpen\n\n\n//# sourceURL=webpack://fe/../../common/entities/header/HeaderOpen.js?");

/***/ }),

/***/ "../../common/messages/Message.js":
/*!****************************************!*\
  !*** ../../common/messages/Message.js ***!
  \****************************************/
/***/ ((module) => {

eval("function Message(type, text) {\n  let msgArea = document.getElementById(\"message-area\");\n  let msg = document.createElement(\"div\");\n  msgArea.classList.add(\"invisible\");\n  msg.classList.add(\"notification\");\n  msg.classList.add(\"is-light\");\n  msg.classList.add(\"is-shadowed\");\n  msg.classList.add(\"is-\" + type);\n  msg.textContent = text;\n  msgArea.appendChild(msg);\n  msgArea.classList.remove(\"invisible\");\n  setTimeout(() => {\n    msg.textContent = \"\";\n    msgArea.removeChild(msg);\n    msgArea.classList.add(\"invisible\");\n    msg = null;\n  }, 3000)\n};\n\nmodule.exports = Message;\n\n//# sourceURL=webpack://fe/../../common/messages/Message.js?");

/***/ }),

/***/ "./src/pages/closed/signout.js":
/*!*************************************!*\
  !*** ./src/pages/closed/signout.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("const Message = __webpack_require__(/*! ../../../../../common/messages/Message */ \"../../common/messages/Message.js\")\nconst HeaderOpen = __webpack_require__(/*! ../../../../../common/entities/header/HeaderOpen */ \"../../common/entities/header/HeaderOpen.js\")\n\nHeaderOpen.show();\n\nlocalStorage.clear()\n\nMessage(\n  'success',\n  \"Successfully logged out. You'll be redirected to Hypatia's main page.\"\n)\n\nsetTimeout(() => {\n  window.location.href = '/'\n}, 3000)\n\n\n//# sourceURL=webpack://fe/./src/pages/closed/signout.js?");

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
/******/ 			// no module.id needed
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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/pages/closed/signout.js");
/******/ 	
/******/ })()
;