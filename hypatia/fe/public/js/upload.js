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

/***/ "../../common/api/api.js":
/*!*******************************!*\
  !*** ../../common/api/api.js ***!
  \*******************************/
/***/ ((module) => {

eval("const API = {\n  get: async function (path) {\n    return await fetch(path, {\n      headers: {\n        'Content-Type': 'application/json',\n        Accept: 'application/json'\n      }\n    })\n  },\n  postWithPayload: async function (path, payload) {\n    return await fetch(path, {\n      method: 'POST',\n      headers: {\n        'Content-Type': 'application/json',\n        Accept: 'application/json'\n      },\n      body: JSON.stringify(payload)\n    })\n  }\n}\n\nmodule.exports = API\n\n\n//# sourceURL=webpack://fe/../../common/api/api.js?");

/***/ }),

/***/ "../../common/entities/header/HeaderClosed.js":
/*!****************************************************!*\
  !*** ../../common/entities/header/HeaderClosed.js ***!
  \****************************************************/
/***/ ((module) => {

eval("const HeaderOpen = {\n    loadConfig: async function () {\n      this.config = await fetch('/json/headerclosed.json').then(res => res.json())\n      this.appTag = document.getElementsByClassName('App')[0]\n      this.contentTag = document.getElementById('Content')\n    },\n  \n    createHero: function () {\n      let res = document.createElement('section')\n      res.setAttribute('class', 'hero is-small is-dark')\n      return res\n    },\n  \n    createHeroBody: function () {\n      let res = document.createElement('div')\n      res.setAttribute('class', 'hero-body')\n      return res\n    },\n  \n    createNav: function () {\n      let res = document.createElement('nav')\n      res.setAttribute('class', 'level')\n      return res\n    },\n  \n    createLevelLeft: function () {\n      let res = document.createElement('div')\n      res.setAttribute('class', 'level-left')\n      return res\n    },\n  \n    createLevelRight: function () {\n      let res = document.createElement('div')\n      res.setAttribute('class', 'level-right')\n      return res\n    },\n  \n    createLevelItem: function () {\n      let res = document.createElement('div')\n      res.setAttribute('class', 'level-item')\n      return res\n    },\n  \n    createFigure: function () {\n      let res = document.createElement('figure')\n      res.setAttribute('class', 'image is-64x64')\n      return res\n    },\n  \n    createImg: function () {\n      let res = document.createElement('img')\n      res.setAttribute('src', '/images/logo_sm.png')\n      res.setAttribute('alt', this.config.altLogo)\n      return res\n    },\n  \n    createTitle: function () {\n      let res = document.createElement('div')\n      res.setAttribute('class', 'title title-script-closed')\n      res.innerText = this.config.title\n      return res\n    },\n  \n    show: async function () {\n      await this.loadConfig()\n      let hero = this.createHero()\n      this.contentTag.before(hero)\n      let heroBody = this.createHeroBody()\n      hero.appendChild(heroBody)\n      let nav = this.createNav()\n      heroBody.appendChild(nav)\n      let levelLeft = this.createLevelLeft()\n      nav.appendChild(levelLeft)\n      let itemLogo = this.createLevelItem()\n      levelLeft.appendChild(itemLogo)\n      let figure = this.createFigure()\n      itemLogo.appendChild(figure)\n      let logo = this.createImg()\n      figure.appendChild(logo)\n      let titles = this.createLevelItem()\n      levelLeft.appendChild(titles)\n      let title = this.createTitle()\n      titles.appendChild(title)\n      let levelRight = this.createLevelRight()\n      nav.appendChild(levelRight)\n      this.config.menu.forEach(item => {\n        let buttonDiv = document.createElement('div')\n        buttonDiv.setAttribute('class', 'level-item')\n        let buttonAnchor = document.createElement('a')\n        buttonAnchor.setAttribute('href', item.url)\n        if (item.status == 'normal') {\n          buttonAnchor.setAttribute('class', this.config.normalClasses)\n        } else {\n          buttonAnchor.setAttribute('class', this.config.emphasisClasses)\n        }\n        buttonAnchor.innerText = item.text\n        levelRight.appendChild(buttonAnchor)\n      })\n    }\n  }\n  \n  module.exports = HeaderOpen\n  \n\n//# sourceURL=webpack://fe/../../common/entities/header/HeaderClosed.js?");

/***/ }),

/***/ "../../common/users/UserData.js":
/*!**************************************!*\
  !*** ../../common/users/UserData.js ***!
  \**************************************/
/***/ ((module) => {

eval("const userData = {\n\n  id: function() {\n    return this.data._id;\n  },\n\n  firstName: function() {\n    return this.data.firstName;\n  },\n\n  lastName: function() {\n    return this.data.lastName;\n  },\n\n  fullName: function() {\n    return this.firstName() + \" \" + this.lastName();\n  },\n\n  getToken: function() {\n    return this.data.jwt\n  },\n\n  init: function() {\n    this.data = JSON.parse(localStorage.getItem(\"userData\"));\n  }\n\n}\n\nmodule.exports = userData;\n\n//# sourceURL=webpack://fe/../../common/users/UserData.js?");

/***/ }),

/***/ "./src/aux/UserDataHypatia.js":
/*!************************************!*\
  !*** ./src/aux/UserDataHypatia.js ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const UserData = __webpack_require__(/*! ../../../../common/users/UserData */ \"../../common/users/UserData.js\")\n\nconst UserDataHypatia = UserData\n\nUserDataHypatia.lastLanguage = function () {\n  return this.data.lastLanguage\n}\n\nUserDataHypatia.lastType = function () {\n  return this.data.lastType\n}\n\nUserDataHypatia.lastGenre = function () {\n  return this.data.lastGenre\n}\n\nmodule.exports = UserDataHypatia\n\n\n//# sourceURL=webpack://fe/./src/aux/UserDataHypatia.js?");

/***/ }),

/***/ "./src/pages/closed/upload.js":
/*!************************************!*\
  !*** ./src/pages/closed/upload.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("const API = __webpack_require__(/*! ../../../../../common/api/api */ \"../../common/api/api.js\")\nconst HeaderClosed = __webpack_require__(/*! ../../../../../common/entities/header/HeaderClosed */ \"../../common/entities/header/HeaderClosed.js\")\nconst UserData = __webpack_require__(/*! ../../aux/UserDataHypatia */ \"./src/aux/UserDataHypatia.js\")\n\nHeaderClosed.show()\n\nUserData.init()\n\nconst languageSelect = document.getElementById('language-select')\nconst bookTitle = document.getElementById('book-title')\nconst bookSubtitle = document.getElementById('book-subtitle')\nconst bookEdition = document.getElementById('book-edition')\nconst bookEditor = document.getElementById('book-editor')\nconst bookYear = document.getElementById('book-year')\nconst bookLocation = document.getElementById('book-location')\nconst bookISBN = document.getElementById('book-isbn')\nconst typeSelect = document.getElementById('type-select')\nconst genreSelect = document.getElementById('genre-select')\nconst authorsSelect = document.getElementById('authors-list')\nconst uploadAuthorsList = document.getElementById('upload-authors-list')\nconst searchAuthorButton = document.getElementById('search-author-button')\nconst addAuthorButton = document.getElementById('add-author-button')\nconst authorModal = document.getElementById('author-modal')\nconst closeAuthorModalButton = document.getElementById(\n  'close-author-modal-button'\n)\nconst performBookUploadButton = document.getElementById(\n  'perform-book-upload-button'\n)\n\nlet languagesArray = []\nlet typesArray = []\nlet authorsArray = []\n\nsearchAuthorButton.addEventListener('click', ev => {\n  alert('Search author')\n})\n\naddAuthorButton.addEventListener('click', ev => {\n  authorModal.classList.add('is-active')\n})\n\ncloseAuthorModalButton.addEventListener('click', ev => {\n  authorModal.classList.remove('is-active')\n})\n\nperformBookUploadButton.addEventListener('click', ev => {\n  let payload = {}\n  let authors = []\n  const authorElementsArr = Array.from(\n    document.querySelectorAll('.picked-author')\n  )\n  if (authorElementsArr.length > 0) {\n    authorElementsArr.forEach(a => authors.push(a.id.split('-')[1]))\n  }\n  payload = {\n    user: UserData.id(),\n    authorsList: authors,\n    title: bookTitle.value,\n    subtitle: bookSubtitle.value,\n    bookLanguage: languageSelect.value,\n    bookType: typeSelect.value,\n    bookGenre: genreSelect.value,\n    edition: bookEdition.value,\n    editor: bookEditor.value,\n    year: bookYear.value,\n    location: bookLocation.value,\n    isbn: bookISBN.value\n  }\n  API.postWithPayload('/api/closed/books', payload)\n    .then(res => res.json())\n    .then(json => json.book)\n})\n\nasync function languagesLoader () {\n  return await API.get('/api/closed/languages')\n    .then(res => res.json())\n    .then(json => json.bookLanguages)\n}\n\nasync function typesLoader () {\n  return await API.get('/api/closed/types')\n    .then(res => res.json())\n    .then(json => json.bookTypes)\n}\n\nasync function authorsLoader () {\n  return await API.get('/api/closed/authors')\n    .then(res => res.json())\n    .then(json => json.authors)\n}\n\nasync function loaders () {\n  languagesArray = await languagesLoader()\n  typesArray = await typesLoader()\n  authorsArray = await authorsLoader()\n  return await true\n}\n\nasync function loadAuthorsSelect (optsArray, selectElement) {\n  await optsArray.forEach(o => {\n    let opt = document.createElement('li')\n    opt.innerText = o.name\n    opt.id = `nc-author-${o._id}`\n    opt.setAttribute('data-author-id', o._id)\n    opt.setAttribute('class', 'author-item')\n    selectElement.appendChild(opt)\n  })\n}\n\nasync function loadSelect (optsArray, selectElement, selectedId) {\n  await optsArray.forEach(o => {\n    let opt = document.createElement('option')\n    opt.innerText = o.name\n    opt.id = o._id\n    opt.value = o._id\n    if (selectedId) {\n      if (o._id === selectedId) {\n        opt.setAttribute('selected', true)\n      }\n    }\n    selectElement.appendChild(opt)\n  })\n}\n\nfunction handleAuthorRemoveClick (ev) {\n  let restoredAuthorId = `nc-${ev.target.id}`\n  let restoredAuthor = document.getElementById(restoredAuthorId)\n  restoredAuthor.addEventListener('click', handleAuthorAddClick)\n  ev.target.removeEventListener('click', handleAuthorRemoveClick)\n  ev.target.parentNode.removeChild(ev.target)\n}\n\nfunction handleAuthorAddClick (ev) {\n  let liItem = document.createElement('li')\n  liItem.setAttribute('id', `author-${ev.target.dataset.authorId}`)\n  liItem.setAttribute('class', 'picked-author')\n  liItem.innerText = ev.target.innerText\n  uploadAuthorsList.appendChild(liItem)\n  liItem.addEventListener('click', handleAuthorRemoveClick)\n  ev.target.removeEventListener('click', handleAuthorAddClick)\n}\n\nasync function loadSideMenu () {\n  const loaded = await loaders()\n  await loadSelect(languagesArray, languageSelect)\n  await loadSelect(typesArray, typeSelect)\n  await loadSelect(typesArray[0].genres, genreSelect)\n  await loadAuthorsSelect(authorsArray, authorsSelect)\n  const authorElements = document.querySelectorAll('.author-item')\n  const authorElems = Array.from(authorElements)\n  authorElems.forEach(e => e.addEventListener('click', handleAuthorAddClick))\n}\n\nasync function loadFullPage () {\n  await loadSideMenu()\n}\n\nloadFullPage()\n\n\n//# sourceURL=webpack://fe/./src/pages/closed/upload.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/pages/closed/upload.js");
/******/ 	
/******/ })()
;