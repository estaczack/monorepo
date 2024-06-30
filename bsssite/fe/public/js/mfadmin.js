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

/***/ "./src/pages/closed/mfadmin.js":
/*!*************************************!*\
  !*** ./src/pages/closed/mfadmin.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("const HeaderClosed = __webpack_require__(/*! ../../../../../common/entities/header/HeaderClosed */ \"../../common/entities/header/HeaderClosed.js\")\nconst FooterClosed = __webpack_require__(/*! ../../../../../common/entities/footer/FooterClosed */ \"../../common/entities/footer/FooterClosed.js\")\n\nconst preferredLanguage = navigator.language || navigator.userLanguage\nconst prefLanguage = preferredLanguage.split('-')[0]\n\nconst contentArea = document.getElementById('Content')\n\nconst loadPageData = async function () {\n  return fetch('/api/closed/users/').then(res => res.json())\n}\n\nconst showPage = async function () {\n  await HeaderClosed.show()\n\n  let estudantes = await loadPageData()\n  let lista = estudantes.users.filter(a => a.status !== 'Staff')\n  let lista2 = lista.filter(a => a.status !== 'Não fez o teste')\n  let lista3 = lista2.sort((a, b) => a.fullName.localeCompare(b.fullName))\n\n  let myTable = document.createElement('table')\n  myTable.setAttribute(\n    'class',\n    'table is-bordered is-striped is-hoverable is-fullwidth'\n  )\n  contentArea.appendChild(myTable)\n\n  let myTableHeader = document.createElement('thead')\n  myTable.appendChild(myTableHeader)\n\n  let tr = document.createElement('tr')\n  myTableHeader.appendChild(tr)\n\n  th = document.createElement('th')\n  th.innerText = 'NOME'\n  tr.appendChild(th)\n\n  th = document.createElement('th')\n  th.innerText = 'EMAIL'\n  tr.appendChild(th)\n\n  th = document.createElement('th')\n  th.innerText = 'RG'\n  tr.appendChild(th)\n\n  th = document.createElement('th')\n  th.innerText = 'CPF'\n  tr.appendChild(th)\n\n  th = document.createElement('th')\n  th.innerText = 'STATUS'\n  tr.appendChild(th)\n\n  th = document.createElement('th')\n  th.innerText = 'ACTIONS'\n  tr.appendChild(th)\n\n  let myTableBody = document.createElement('tbody')\n  myTable.appendChild(myTableBody)\n\n  lista3.forEach(estudante => {\n    tr = document.createElement('tr')\n    myTableBody.appendChild(tr)\n\n    let td = document.createElement('td')\n    td.innerText = estudante.fullName\n    tr.appendChild(td)\n\n    td = document.createElement('td')\n    td.innerText = estudante.email\n    tr.appendChild(td)\n\n    td = document.createElement('td')\n    td.innerText = estudante.rg\n    tr.appendChild(td)\n\n    td = document.createElement('td')\n    td.innerText = estudante.cpf\n    tr.appendChild(td)\n\n    td = document.createElement('td')\n    td.innerText = estudante.status\n    tr.appendChild(td)\n\n    td = document.createElement('td')\n    td.setAttribute('id', `td_user_${estudante._id}`)\n    td.innerHTML = `<input id=\"user_${estudante._id}\" class=\"input\" /><button class=\"button btn-pago is-danger is-fullwidth is-small\" data-status=\"${estudante.status}\" data-id=\"${estudante._id}\" data-name=\"${estudante.fullName}\">Pago</button>`\n    tr.appendChild(td)\n  })\n}\n\nconst behavior = async function () {\n  await showPage()\n\n  let botoes = document.querySelectorAll('.btn-pago')\n\n  botoes.forEach(botao => {\n    botao.addEventListener('click', async ev => {\n      let btnId = ev.target.dataset.id\n      let btnStatus = ev.target.dataset.status\n      let btnName = ev.target.dataset.name\n      let payload = {\n        id: btnId,\n        name: btnName,\n        status: btnStatus,\n        ano: 2023,\n        mes: 10,\n        valor: document.getElementById(`user_${btnId}`).value\n      }\n      let result = await fetch('/api/closed/users/pagou', {\n        method: 'POST',\n        headers: {\n          'Content-Type': 'application/json',\n          Accept: 'application/json'\n        },\n        body: JSON.stringify(payload)\n      }).then(res => res.json())\n      if (result.ok) {\n        document.getElementById(`td_user_${result.payment.userId}`).innerHTML =\n          '<span>Pagou</span>'\n      }\n    })\n  })\n}\n\nbehavior()\n\n//# sourceURL=webpack://fe/./src/pages/closed/mfadmin.js?");

/***/ }),

/***/ "../../common/entities/footer/FooterClosed.js":
/*!****************************************************!*\
  !*** ../../common/entities/footer/FooterClosed.js ***!
  \****************************************************/
/***/ (() => {

eval("\n\n//# sourceURL=webpack://fe/../../common/entities/footer/FooterClosed.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/pages/closed/mfadmin.js");
/******/ 	
/******/ })()
;