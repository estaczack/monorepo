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

/***/ "./src/pages/closed/dashboard.js":
/*!***************************************!*\
  !*** ./src/pages/closed/dashboard.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("const HeaderClosed = __webpack_require__(/*! ../../../../../common/entities/header/HeaderClosed */ \"../../common/entities/header/HeaderClosed.js\")\n\nconst preferredLanguage = navigator.language || navigator.userLanguage\nconst prefLanguage = preferredLanguage.split('-')[0]\n\nconst column1 = document.getElementById('column1')\nconst column2 = document.getElementById('column2')\nconst column3 = document.getElementById('column3')\n\nconst tabelaAulas = document.getElementById('tabelaAulas')\n\nconst feedbackButton = document.getElementById('feedback-button')\nconst feedbackArea = document.getElementById('feedback-field')\n\nconst logoutButton = document.getElementById('logout-button')\n\nconst loadPageData = async function () {\n  return await fetch('/json/dashboard.json').then(res => res.json())\n}\n\nconst loadAulas = async function () {\n  return await fetch('/api/closed/lessons').then(res => res.json())\n}\n\nfeedbackButton.addEventListener('click', async ev => {\n  let payload = {\n    userId: JSON.parse(window.localStorage.getItem('userData'))._id,\n    text: feedbackArea.value\n  }\n  return await fetch('/api/closed/feedbacks', {\n    method: 'POST',\n    headers: {\n      'Content-Type': 'application/json',\n      Accept: 'application/json'\n    },\n    body: JSON.stringify(payload)\n  })\n    .then(res => res.json())\n    .then(json => (feedbackArea.value = ''))\n})\n\nlogoutButton.addEventListener('click', async ev => {\n  await window.localStorage.clear()\n  window.location.href = '/'\n})\n\nconst showPage = async function () {\n  await HeaderClosed.show()\n\n  let aulas = await loadAulas()\n  let aulasOrdered = aulas.lessons.sort((a, b) => b.week.localeCompare(a.week))\n\n  aulasOrdered.forEach((item, ind) => {\n    let line = document.createElement('tr')\n    tabelaAulas.appendChild(line)\n    let col1 = document.createElement('td')\n    col1.innerText = item.week\n    line.appendChild(col1)\n    let col2 = document.createElement('td')\n    line.appendChild(col2)\n    let a = document.createElement('a')\n    a.setAttribute('href', item.link)\n    a.setAttribute('target', '_new')\n    a.innerHTML = item.subject\n    col2.appendChild(a)\n  })\n}\n\nshowPage()\n\n\n//# sourceURL=webpack://fe/./src/pages/closed/dashboard.js?");

/***/ }),

/***/ "../../common/entities/header/HeaderClosed.js":
/*!****************************************************!*\
  !*** ../../common/entities/header/HeaderClosed.js ***!
  \****************************************************/
/***/ ((module) => {

eval("const HeaderOpen = {\n    loadConfig: async function () {\n      this.preferredLanguage = navigator.language || navigator.userLanguage;\n      this.prefLanguage = this.preferredLanguage.split(\"-\")[0]\n      this.config = await fetch(`/json/headerclosed-${this.prefLanguage}.json`).then(res => res.json())\n      this.appTag = document.getElementsByClassName('App')[0]\n      this.contentTag = document.getElementById('Content')\n    },\n  \n    createHero: function () {\n      let res = document.createElement('section')\n      res.setAttribute('class', 'hero is-small is-very-dark')\n      return res\n    },\n  \n    createHeroBody: function () {\n      let res = document.createElement('div')\n      res.setAttribute('class', 'hero-body')\n      return res\n    },\n  \n    createNav: function () {\n      let res = document.createElement('nav')\n      res.setAttribute('class', 'level')\n      return res\n    },\n  \n    createLevelLeft: function () {\n      let res = document.createElement('div')\n      res.setAttribute('class', 'level-left')\n      return res\n    },\n  \n    createLevelRight: function () {\n      let res = document.createElement('div')\n      res.setAttribute('class', 'level-right')\n      return res\n    },\n  \n    createLevelItem: function () {\n      let res = document.createElement('div')\n      res.setAttribute('class', 'level-item')\n      return res\n    },\n  \n    createFigure: function () {\n      let res = document.createElement('figure')\n      res.setAttribute('class', 'image is-64x64')\n      return res\n    },\n  \n    createImg: function () {\n      let res = document.createElement('img')\n      res.setAttribute('src', '/images/logo_sm.png')\n      res.setAttribute('alt', this.config.altLogo)\n      return res\n    },\n  \n    createTitle: function () {\n      let res = document.createElement('div')\n      res.setAttribute('class', 'title title-script-closed')\n      res.innerText = this.config.title\n      return res\n    },\n  \n    show: async function () {\n      await this.loadConfig()\n      let hero = this.createHero()\n      this.contentTag.before(hero)\n      let heroBody = this.createHeroBody()\n      hero.appendChild(heroBody)\n      let nav = this.createNav()\n      heroBody.appendChild(nav)\n      let levelLeft = this.createLevelLeft()\n      nav.appendChild(levelLeft)\n      let itemLogo = this.createLevelItem()\n      levelLeft.appendChild(itemLogo)\n      let figure = this.createFigure()\n      itemLogo.appendChild(figure)\n      let logo = this.createImg()\n      figure.appendChild(logo)\n      let titles = this.createLevelItem()\n      levelLeft.appendChild(titles)\n      let title = this.createTitle()\n      titles.appendChild(title)\n      let levelRight = this.createLevelRight()\n      nav.appendChild(levelRight)\n      this.config.menu.forEach(item => {\n        let buttonDiv = document.createElement('div')\n        buttonDiv.setAttribute('class', 'level-item')\n        let buttonAnchor = document.createElement('a')\n        buttonAnchor.setAttribute('href', item.url)\n        if (item.status == 'normal') {\n          buttonAnchor.setAttribute('class', this.config.normalClasses)\n        } else {\n          buttonAnchor.setAttribute('class', this.config.emphasisClasses)\n        }\n        buttonAnchor.innerText = item.text\n        levelRight.appendChild(buttonAnchor)\n      })\n    }\n  }\n  \n  module.exports = HeaderOpen\n  \n\n//# sourceURL=webpack://fe/../../common/entities/header/HeaderClosed.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/pages/closed/dashboard.js");
/******/ 	
/******/ })()
;