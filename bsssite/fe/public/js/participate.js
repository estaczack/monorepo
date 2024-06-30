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

/***/ "./src/pages/open/participate.js":
/*!***************************************!*\
  !*** ./src/pages/open/participate.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("const HeaderOpen = __webpack_require__(/*! ../../../../../common/entities/header/HeaderOpen */ \"../../common/entities/header/HeaderOpen.js\")\nconst FooterOpen = __webpack_require__(/*! ../../../../../common/entities/footer/FooterOpen */ \"../../common/entities/footer/FooterOpen.js\")\nconst showLine = __webpack_require__(/*! ../../../../../common/entities/pageline/PageLine2 */ \"../../common/entities/pageline/PageLine2.js\")\n\nconst preferredLanguage = navigator.language || navigator.userLanguage;\nconst prefLanguage = preferredLanguage.split(\"-\")[0]\n\nconst firstLine = document.getElementById('first-line')\nconst secondLine = document.getElementById('second-line')\n\nconst section1 = document.getElementById(\"section1\")\nconst section2 = document.getElementById(\"section2\")\n\nconst loadPageData = async function () {\n  return fetch(`/json/participate-${prefLanguage}.json`).then(res => res.json())\n}\n\nconst showPage = async function () {\n  await HeaderOpen.show()\n\n  let pageData = await loadPageData()\n  showLine(firstLine, pageData.firstLine)\n  showLine(secondLine,pageData.secondLine)\n\n  section1.innerText = pageData.sections[0]\n  section2.innerText = pageData.sections[1]\n\n  await FooterOpen.show()\n}\n\nshowPage()\n\n\n//# sourceURL=webpack://fe/./src/pages/open/participate.js?");

/***/ }),

/***/ "../../common/entities/footer/FooterOpen.js":
/*!**************************************************!*\
  !*** ../../common/entities/footer/FooterOpen.js ***!
  \**************************************************/
/***/ ((module) => {

eval("module.exports = {\n  loadConfig: async function () {\n    this.preferredLanguage = navigator.language || navigator.userLanguage\n    this.prefLanguage = this.preferredLanguage.split('-')[0]\n    this.config = await fetch(\n      `/json/footeropen-${this.prefLanguage}.json`\n    ).then(res => res.json())\n    this.appTag = document.getElementsByClassName('App')[0]\n    this.contentTag = document.getElementById('Content')\n  },\n\n  createHero: function (id) {\n    let res = document.createElement('section')\n    res.setAttribute('id', id)\n    res.setAttribute('class', 'hero is-small is-very-dark')\n    return res\n  },\n\n  createHeroBody: function (id) {\n    let res = document.createElement('div')\n    res.setAttribute('class', 'hero-body')\n    return res\n  },\n\n  createNav: function () {\n    let res = document.createElement('nav')\n    res.setAttribute('class', 'level')\n    return res\n  },\n\n  createLevelLeft: function () {\n    let res = document.createElement('div')\n    res.setAttribute('class', 'level-left')\n    return res\n  },\n\n  createLevelRight: function () {\n    let res = document.createElement('div')\n    res.setAttribute('class', 'level-right')\n    return res\n  },\n\n  createLevelItem: function () {\n    let res = document.createElement('div')\n    res.setAttribute('class', 'level-item')\n    return res\n  },\n\n  createFigure: function () {\n    let res = document.createElement('figure')\n    res.setAttribute('class', 'image is-128x128')\n    return res\n  },\n\n  createImg: function () {\n    let res = document.createElement('img')\n    res.setAttribute('src', '/images/logo_sm.png')\n    res.setAttribute('alt', this.config.altLogo)\n    return res\n  },\n\n  show: async function () {\n    await this.loadConfig()\n    let hero = this.createHero('footer-hero1')\n    this.contentTag.appendChild(hero)\n    let heroBody = this.createHeroBody()\n    hero.appendChild(heroBody)\n    let nav = this.createNav()\n    heroBody.appendChild(nav)\n    let levelLeft = this.createLevelLeft()\n    nav.appendChild(levelLeft)\n    let itemLogo = this.createLevelItem()\n    levelLeft.appendChild(itemLogo)\n    let figure = this.createFigure()\n    itemLogo.appendChild(figure)\n    let logo = this.createImg()\n    figure.appendChild(logo)\n\n    let copyrightMessage = document.createElement('div')\n    copyrightMessage.innerHTML = '<span>Copyright &copy; 2023</span>'\n    levelLeft.appendChild(copyrightMessage)\n\n    let hero2 = this.createHero('footer-hero2')\n    this.contentTag.appendChild(hero2)\n    let heroBody2 = this.createHeroBody()\n    hero2.appendChild(heroBody2)\n    let nav2 = this.createNav()\n    heroBody2.appendChild(nav2)\n    this.config.menu.forEach(item => {\n      let buttonDiv = document.createElement('div')\n      buttonDiv.setAttribute('class', 'level-item')\n      let buttonAnchor = document.createElement('a')\n      buttonAnchor.setAttribute('href', item.url)\n      if (item.status == 'normal') {\n        buttonAnchor.setAttribute('class', this.config.normalClasses)\n      } else {\n        buttonAnchor.setAttribute('class', this.config.emphasisClasses)\n      }\n      buttonAnchor.innerHTML = item.text\n      nav2.appendChild(buttonAnchor)\n    })\n\n    let hero3 = this.createHero('footer-hero3')\n    this.contentTag.appendChild(hero3)\n    let heroBody3 = this.createHeroBody()\n    hero3.appendChild(heroBody3)\n    let nav3 = this.createNav()\n    heroBody3.appendChild(nav3)\n    this.config.socialNetworks.forEach(item => {\n      let buttonDiv = document.createElement('div')\n      buttonDiv.setAttribute('class', 'level-item')\n      let buttonAnchor = document.createElement('a')\n      buttonAnchor.setAttribute('href', item.url)\n      buttonAnchor.setAttribute('target', '_new')\n      buttonDiv.appendChild(buttonAnchor)\n\n      let figure = document.createElement('figure')\n      figure.setAttribute('class', 'image is-64x64')\n      buttonAnchor.appendChild(figure)\n\n      let img = document.createElement('img')\n      img.setAttribute('src', item.logo)\n      img.setAttribute('alt', item.title)\n      img.setAttribute('class', 'is-rounded')\n      figure.appendChild(img)\n      nav3.appendChild(buttonDiv)\n    })\n  }\n}\n\n\n//# sourceURL=webpack://fe/../../common/entities/footer/FooterOpen.js?");

/***/ }),

/***/ "../../common/entities/header/HeaderOpen.js":
/*!**************************************************!*\
  !*** ../../common/entities/header/HeaderOpen.js ***!
  \**************************************************/
/***/ ((module) => {

eval("module.exports = {\n  loadConfig: async function () {\n    this.preferredLanguage = navigator.language || navigator.userLanguage\n    this.prefLanguage = this.preferredLanguage.split('-')[0]\n    this.config = await fetch(\n      `/json/headeropen-${this.prefLanguage}.json`\n    ).then(res => res.json())\n    this.appTag = document.getElementsByClassName('App')[0]\n    this.contentTag = document.getElementById('Content')\n  },\n\n  createHero: function (id) {\n    let res = document.createElement('section')\n    res.setAttribute('id', id)\n    res.setAttribute('class', 'hero is-small is-very-dark')\n    return res\n  },\n\n  createHeroBody: function () {\n    let res = document.createElement('div')\n    res.setAttribute('class', 'hero-body')\n    return res\n  },\n\n  createNav: function () {\n    let res = document.createElement('nav')\n    res.setAttribute('class', 'level')\n    return res\n  },\n\n  createNavLeft: function () {\n    let res = document.createElement('div')\n    res.setAttribute('class', 'level-left')\n    return res\n  },\n\n  createNavRight: function () {\n    let res = document.createElement('div')\n    res.setAttribute('class', 'level-right')\n    return res\n  },\n\n  createLevelItem: function () {\n    let res = document.createElement('div')\n    res.setAttribute('class', 'level-item')\n    return res\n  },\n\n  createFigure: function () {\n    let res = document.createElement('figure')\n    res.setAttribute('class', 'image is-128x128')\n    return res\n  },\n\n  createImg: function () {\n    let res = document.createElement('img')\n    res.setAttribute('src', '/images/logo_sm.png')\n    res.setAttribute('alt', this.config.altLogo)\n    return res\n  },\n\n  createSimpleDiv: function () {\n    let res = document.createElement('div')\n    return res\n  },\n\n  createTitle: function () {\n    let res = document.createElement('div')\n    res.setAttribute('class', 'title separador-titulo-subtitulo title-script')\n    res.innerText = this.config.title\n    return res\n  },\n\n  createSubtitle: function () {\n    let res = document.createElement('div')\n    res.setAttribute('class', 'subtitle subtitle-thin')\n    res.innerText = this.config.subtitle\n    return res\n  },\n\n  show: async function () {\n    await this.loadConfig()\n    let hero = this.createHero('main-hero')\n    this.contentTag.before(hero)\n    let heroBody = this.createHeroBody()\n    hero.appendChild(heroBody)\n    let nav = this.createNavLeft()\n    heroBody.appendChild(nav)\n    let itemLogo = this.createLevelItem()\n    nav.appendChild(itemLogo)\n    let figure = this.createFigure()\n    itemLogo.appendChild(figure)\n    let logo = this.createImg()\n    figure.appendChild(logo)\n    let titles = this.createLevelItem()\n    nav.appendChild(titles)\n    let simpleDiv = this.createSimpleDiv()\n    titles.appendChild(simpleDiv)\n    let title = this.createTitle()\n    simpleDiv.appendChild(title)\n    let subtitle = this.createSubtitle()\n    simpleDiv.appendChild(subtitle)\n\n    let hero2 = this.createHero('menu-hero')\n\n    this.contentTag.before(hero2)\n\n    let heroBody2 = this.createHeroBody()\n    hero2.appendChild(heroBody2)\n\n    let nav2 = this.createNav()\n    heroBody2.appendChild(nav2)\n\n    this.config.menu.forEach(item => {\n      let buttonDiv = document.createElement('div')\n      buttonDiv.setAttribute('class', 'level-item')\n      let buttonAnchor = document.createElement('a')\n      buttonAnchor.setAttribute('href', item.url)\n      if (item.status == 'normal') {\n        buttonAnchor.setAttribute('class', this.config.normalClasses)\n      } else {\n        buttonAnchor.setAttribute('class', this.config.emphasisClasses)\n      }\n      if (item.external == 'y') {\n        buttonAnchor.setAttribute('target', '_new')\n      }\n      buttonAnchor.innerText = item.text\n      nav2.appendChild(buttonAnchor)\n    })\n  }\n}\n\n\n//# sourceURL=webpack://fe/../../common/entities/header/HeaderOpen.js?");

/***/ }),

/***/ "../../common/entities/pageline/PageLine2.js":
/*!***************************************************!*\
  !*** ../../common/entities/pageline/PageLine2.js ***!
  \***************************************************/
/***/ ((module) => {

eval("module.exports = function (parent, arr) {\n  arr.forEach((elem, ind) => {\n    let col = document.createElement('div')\n    col.setAttribute('class', 'column is-3')\n    parent.appendChild(col)\n\n    let card = document.createElement('div')\n    card.setAttribute('class', 'card is-light-gray')\n    col.appendChild(card)\n\n    let cardHeader = document.createElement('header')\n    cardHeader.setAttribute('class', 'card-header')\n\n    let title = document.createElement('div')\n    title.setAttribute('class', 'card-header-title')\n    title.innerText = elem.title\n    cardHeader.appendChild(title)\n\n    let cardContent = document.createElement('div')\n    cardContent.setAttribute('class', 'card-content')\n    card.appendChild(cardContent)\n\n    let media = document.createElement('div')\n    media.setAttribute('class', 'media')\n    cardContent.appendChild(media)\n\n    let mediaLeft = document.createElement('div')\n    mediaLeft.setAttribute('class', 'media-left')\n    media.appendChild(mediaLeft)\n\n    let figure = document.createElement('figure')\n    figure.setAttribute('class', 'image')\n    mediaLeft.appendChild(figure)\n\n    let img = document.createElement('img')\n    let nimg = ind + 1 > 9 ? `${ind + 1}.png` : `0${ind + 1}.png`\n    img.setAttribute('src', `/images/nbullets/b${nimg}`)\n    figure.appendChild(img)\n\n    let mediaContent = document.createElement('div')\n    mediaContent.setAttribute('class', 'media-content')\n    media.appendChild(mediaContent)\n\n    let mediaTitle = document.createElement('p')\n    mediaTitle.setAttribute('class', 'title')\n    mediaTitle.setAttribute('style', 'margin-top:1em')\n    mediaTitle.innerText = elem.title\n    mediaContent.appendChild(mediaTitle)\n\n    let content = document.createElement('div')\n    content.setAttribute('class', 'content')\n    content.innerHTML = elem.text\n    cardContent.appendChild(content)\n  })\n}\n\n\n//# sourceURL=webpack://fe/../../common/entities/pageline/PageLine2.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/pages/open/participate.js");
/******/ 	
/******/ })()
;