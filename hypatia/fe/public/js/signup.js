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

eval("const HeaderOpen = {\n  loadConfig: async function () {\n    this.config = await fetch('/json/headeropen.json').then(res => res.json())\n    this.appTag = document.getElementsByClassName('App')[0]\n    this.contentTag = document.getElementById('Content')\n  },\n\n  createHero: function () {\n    let res = document.createElement('section')\n    res.setAttribute('class', 'hero is-small is-dark')\n    return res\n  },\n\n  createHeroBody: function () {\n    let res = document.createElement('div')\n    res.setAttribute('class', 'hero-body')\n    return res\n  },\n\n  createNav: function () {\n    let res = document.createElement('nav')\n    res.setAttribute('class', 'level')\n    return res\n  },\n\n  createLevelLeft: function () {\n    let res = document.createElement('div')\n    res.setAttribute('class', 'level-left')\n    return res\n  },\n\n  createLevelRight: function () {\n    let res = document.createElement('div')\n    res.setAttribute('class', 'level-right')\n    return res\n  },\n\n  createLevelItem: function () {\n    let res = document.createElement('div')\n    res.setAttribute('class', 'level-item')\n    return res\n  },\n\n  createFigure: function () {\n    let res = document.createElement('figure')\n    res.setAttribute('class', 'image is-128x128')\n    return res\n  },\n\n  createImg: function () {\n    let res = document.createElement('img')\n    res.setAttribute('src', '/images/logo_sm.png')\n    res.setAttribute('alt', this.config.altLogo)\n    return res\n  },\n\n  createSimpleDiv: function () {\n    let res = document.createElement('div')\n    return res\n  },\n\n  createTitle: function () {\n    let res = document.createElement('div')\n    res.setAttribute('class', 'title separador-titulo-subtitulo title-script')\n    res.innerText = this.config.title\n    return res\n  },\n\n  createSubtitle: function () {\n    let res = document.createElement('div')\n    res.setAttribute('class', 'subtitle subtitle-thin')\n    res.innerText = this.config.subtitle\n    return res\n  },\n\n  show: async function () {\n    await this.loadConfig()\n    let hero = this.createHero()\n    this.contentTag.before(hero)\n    let heroBody = this.createHeroBody()\n    hero.appendChild(heroBody)\n    let nav = this.createNav()\n    heroBody.appendChild(nav)\n    let levelLeft = this.createLevelLeft()\n    nav.appendChild(levelLeft)\n    let itemLogo = this.createLevelItem()\n    levelLeft.appendChild(itemLogo)\n    let figure = this.createFigure()\n    itemLogo.appendChild(figure)\n    let logo = this.createImg()\n    figure.appendChild(logo)\n    let titles = this.createLevelItem()\n    levelLeft.appendChild(titles)\n    let simpleDiv = this.createSimpleDiv()\n    titles.appendChild(simpleDiv)\n    let title = this.createTitle()\n    simpleDiv.appendChild(title)\n    let subtitle = this.createSubtitle()\n    simpleDiv.appendChild(subtitle)\n    let levelRight = this.createLevelRight()\n    nav.appendChild(levelRight)\n    this.config.menu.forEach(item => {\n      let buttonDiv = document.createElement('div')\n      buttonDiv.setAttribute('class', 'level-item')\n      let buttonAnchor = document.createElement('a')\n      buttonAnchor.setAttribute('href', item.url)\n      if (item.status == 'normal') {\n        buttonAnchor.setAttribute('class', this.config.normalClasses)\n      } else {\n        buttonAnchor.setAttribute('class', this.config.emphasisClasses)\n      }\n      buttonAnchor.innerText = item.text\n      levelRight.appendChild(buttonAnchor)\n    })\n  }\n}\n\nmodule.exports = HeaderOpen\n\n\n//# sourceURL=webpack://fe/../../common/entities/header/HeaderOpen.js?");

/***/ }),

/***/ "../../common/login/ValidateEmail.js":
/*!*******************************************!*\
  !*** ../../common/login/ValidateEmail.js ***!
  \*******************************************/
/***/ ((module) => {

eval("function ValidateEmail(email) {\n  if (/^\\w+([.-]\\w+)*@\\w+([.-][^\\W_]+)*\\.[a-zA-Z]{2,}$/.test(email)) {\n    return true;\n  }\n  return false;\n}\n\nmodule.exports = ValidateEmail;\n\n//# sourceURL=webpack://fe/../../common/login/ValidateEmail.js?");

/***/ }),

/***/ "../../common/messages/Message.js":
/*!****************************************!*\
  !*** ../../common/messages/Message.js ***!
  \****************************************/
/***/ ((module) => {

eval("function Message(type, text) {\n  let msgArea = document.getElementById(\"message-area\");\n  let msg = document.createElement(\"div\");\n  msgArea.classList.add(\"invisible\");\n  msg.classList.add(\"notification\");\n  msg.classList.add(\"is-light\");\n  msg.classList.add(\"is-shadowed\");\n  msg.classList.add(\"is-\" + type);\n  msg.textContent = text;\n  msgArea.appendChild(msg);\n  msgArea.classList.remove(\"invisible\");\n  setTimeout(() => {\n    msg.textContent = \"\";\n    msgArea.removeChild(msg);\n    msgArea.classList.add(\"invisible\");\n    msg = null;\n  }, 3000)\n};\n\nmodule.exports = Message;\n\n//# sourceURL=webpack://fe/../../common/messages/Message.js?");

/***/ }),

/***/ "./src/pages/open/signup.js":
/*!**********************************!*\
  !*** ./src/pages/open/signup.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("const ValidateEmail = __webpack_require__(/*! ../../../../../common/login/ValidateEmail */ \"../../common/login/ValidateEmail.js\")\nconst Message = __webpack_require__(/*! ../../../../../common/messages/Message */ \"../../common/messages/Message.js\")\nconst HeaderOpen = __webpack_require__(/*! ../../../../../common/entities/header/HeaderOpen */ \"../../common/entities/header/HeaderOpen.js\")\n\nHeaderOpen.show()\n\nlet firstNameField = document.getElementById('first-name-field')\nlet lastNameField = document.getElementById('family-name-field')\nlet emailField = document.getElementById('email-field')\nlet passwordField = document.getElementById('password-field')\nlet repeatPasswordField = document.getElementById('repeat-password-field')\nlet signupButton = document.getElementById('signup-button')\nlet inputFields = Array.from(document.getElementsByClassName('input'))\n\nsignupButton.setAttribute('disabled', 'true')\n\nfirstNameField.addEventListener('focusout', ev => {\n  if (firstNameField.value !== '') {\n    firstNameField.classList.remove('is-danger')\n  } else {\n    Message('danger', \"First name can't be empty.\")\n    firstNameField.classList.add('is-danger')\n  }\n})\n\nlastNameField.addEventListener('focusout', ev => {\n  if (lastNameField.value !== '') {\n    lastNameField.classList.remove('is-danger')\n  } else {\n    Message('danger', \"Last name can't be empty.\")\n    lastNameField.classList.add('is-danger')\n  }\n})\n\nemailField.addEventListener('focusout', ev => {\n  if (ValidateEmail(emailField.value)) {\n    emailField.classList.remove('is-danger')\n  } else {\n    Message('danger', 'You must use a valid email.')\n    emailField.classList.add('is-danger')\n  }\n})\n\npasswordField.addEventListener('focusout', ev => {\n  if (passwordField.value !== '') {\n    passwordField.classList.remove('is-danger')\n  } else {\n    Message('danger', \"Password can't be empty.\")\n    passwordField.classList.add('is-danger')\n  }\n})\n\nrepeatPasswordField.addEventListener('focusout', ev => {\n  if (repeatPasswordField.value !== '') {\n    repeatPasswordField.classList.remove('is-danger')\n  } else {\n    Message('danger', \"Password repetition can't be empty...\")\n    repeatPasswordField.classList.add('is-danger')\n  }\n})\n\nrepeatPasswordField.addEventListener('focusout', ev => {\n  if (repeatPasswordField.value === passwordField.value) {\n    repeatPasswordField.classList.remove('is-danger')\n  } else {\n    Message('danger', 'The passwords are different.')\n    repeatPasswordField.classList.add('is-danger')\n  }\n})\n\ninputFields.forEach(inputElement => {\n  inputElement.addEventListener('keyup', ev => {\n    if (\n      firstNameField.value === '' ||\n      lastNameField.value === '' ||\n      emailField.value === '' ||\n      passwordField.value === '' ||\n      repeatPasswordField.value === ''\n    ) {\n      signupButton.setAttribute('disabled', 'true')\n    } else {\n      signupButton.removeAttribute('disabled')\n    }\n  })\n})\n\nsignupButton.addEventListener('click', async ev => {\n  let userData = {}\n  if (passwordField.value !== repeatPasswordField.value) {\n    Message('danger', 'The passwords are different.')\n    passwordField.value = ''\n    repeatPasswordField.value = ''\n    passwordField.focus()\n  } else {\n    userData.firstName = firstNameField.value\n    userData.lastName = lastNameField.value\n    userData.email = emailField.value\n    userData.password = passwordField.value\n    userData.roles = 'user'\n    firstNameField.value = ''\n    lastNameField.value = ''\n    emailField.value = ''\n    passwordField.value = ''\n    repeatPasswordField.value = ''\n    let res = await fetch('/api/open/users/', {\n      method: 'POST',\n      headers: {\n        'Content-Type': 'application/json',\n        Accept: 'application/json'\n      },\n      body: JSON.stringify(userData)\n    }).then(res => res.json())\n    if (res.ok) {\n      Message(\n        'success',\n        \"User account created. You'll be redirected to the login page.\"\n      )\n      setTimeout(() => {\n        window.location.href = '/'\n      }, 4000)\n    } else {\n      if (res.code === 'ER_DUP_ENTRY') {\n        Message(\n          'danger',\n          'Signup failure: Email (' + res.data.email + ') already exists.'\n        )\n        setTimeout(() => {\n          window.location.href = '/signup'\n        }, 4000)\n      }\n    }\n  }\n})\n\nfirstNameField.focus()\n\n\n//# sourceURL=webpack://fe/./src/pages/open/signup.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/pages/open/signup.js");
/******/ 	
/******/ })()
;