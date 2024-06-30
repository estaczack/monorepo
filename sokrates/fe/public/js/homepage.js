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

/***/ "../../common/blog/PostCard.js":
/*!*************************************!*\
  !*** ../../common/blog/PostCard.js ***!
  \*************************************/
/***/ ((module) => {

eval("class PostCard {\n\n  constructor(post) {\n    this.id = post.id;\n    this.title = post.title;\n    this.text = post.text;\n    this.ext = post.ext;\n    this.user_id = post.user_id;\n    this.firstName = post.firstName;\n    this.familyName = post.familyName;\n    this.createdAt = post.createdAt;\n  }\n\n  getReadablePostDate = function() {\n    let months = \"Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec\".split(\"|\");\n    let [postDate, postTime] = this.createdAt.split(\" \");\n    let [postYear, postMonth, postDay] = postDate.split(\"-\").map(e => parseInt(e, 10));\n    postMonth = postMonth - 1;\n    let dayParticle = \"th\";\n    if (postDay === 1) { dayParticle = \"st\" };\n    if (postDay === 2) { dayParticle = \"nd\" };\n    if (postDay === 3) { dayParticle = \"rd\" };\n    return `<span>${months[postMonth]} ${postDay}<sup>${dayParticle}</sup>, ${postYear} - ${postTime} - (UTC)</span>`;\n  }\n\n  getAverageColor = async function(img) {\n    return await new Promise((resolve, reject) => {\n      const max = 100;\n      const { naturalWidth: iw, naturalHeight: ih } = img;\n      const ctx = document.createElement(\"canvas\").getContext(\"2d\");\n      const sr = Math.min(max / iw, max / ih);\n      const w = Math.ceil(iw * sr);\n      const h = Math.ceil(ih * sr);\n      const a = w * h;\n      ctx.canvas.width = w;\n      ctx.canvas.height = h;\n      ctx.drawImage(img, 0, 0, w, h);\n      let data = ctx.getImageData(0, 0, w, h).data;\n      let r = 0;\n      let g = 0;\n      let b = 0;\n      for (let i = 0; i < data.length; i += 4) {\n        r = r + data[i];\n        g = g + data[i + 1];\n        b = b + data[i + 2];\n      }\n      r = ~~(r / a);\n      g = ~~(g / a);\n      b = ~~(b / a);\n      resolve({ r, g, b });\n    });\n  };\n\n  setBgFromAverage = function(imgElement, bgElement) {\n    imgElement.addEventListener(\"load\", async () => {\n      const { r, g, b } = await this.getAverageColor(imgElement);\n      bgElement.style.backgroundColor = `rgb(${r},${g},${b})`;\n    });\n  };\n\n  show = function(ap) {\n\n    let postEnvelope = document.createElement(\"div\");\n    postEnvelope.setAttribute(\"class\", \"block is-bordered\");\n\n    let postCard = document.createElement(\"div\");\n    postCard.setAttribute(\"class\", \"card\");\n\n    if (this.ext !== \"\") {\n      let imgSrc = \"/images/posts/\" + this.id + \".\" + this.ext;\n      let postCardImage = document.createElement(\"div\");\n      postCardImage.setAttribute(\"id\", \"card-image\");\n      postCardImage.setAttribute(\"class\", \"card-image\");\n      let postCardImageFigure = document.createElement(\"figure\");\n      postCardImageFigure.setAttribute(\"class\", \"image\");\n      let postCardImageImage = document.createElement(\"img\");\n      postCardImageImage.setAttribute(\"src\", imgSrc);\n      postCardImageImage.setAttribute(\"class\", \"card-image-format\");\n      postCardImageFigure.appendChild(postCardImageImage);\n      postCardImage.appendChild(postCardImageFigure);\n      postCard.appendChild(postCardImage);\n      this.setBgFromAverage(postCardImageImage, postCardImage);\n    }\n\n    let postCardContent = document.createElement(\"div\");\n    postCardContent.setAttribute(\"class\", \"card-content is-light-gray\");\n\n    let postCardMedia = document.createElement(\"div\");\n    postCardMedia.setAttribute(\"class\", \"media\");\n\n    let postCardMediaLeft = document.createElement(\"div\");\n    postCardMediaLeft.setAttribute(\"class\", \"media-left\");\n\n    let postCardMediaLeftFigure = document.createElement(\"figure\");\n    postCardMediaLeftFigure.setAttribute(\"class\", \"image is-48x48\");\n\n    let postCardMediaLeftImage = document.createElement(\"img\");\n    postCardMediaLeftImage.setAttribute(\"src\", \"/images/person.png\");\n\n    postCardMediaLeftFigure.appendChild(postCardMediaLeftImage);\n    postCardMediaLeft.appendChild(postCardMediaLeftFigure);\n\n    let postCardMediaContent = document.createElement(\"div\");\n\n    let postCardMediaTitle = document.createElement(\"p\");\n    postCardMediaTitle.setAttribute(\"class\", \"title is-4\");\n\n    let postCardMediaTitleLink = document.createElement(\"a\");\n    postCardMediaTitleLink.setAttribute(\"href\", \"/profile/\" + this.user_id);\n    postCardMediaTitleLink.innerText = this.firstName + \" \" + this.familyName;\n\n    postCardMediaTitle.appendChild(postCardMediaTitleLink);\n\n    let postCardMediaSubtitle = document.createElement(\"p\");\n    postCardMediaSubtitle.setAttribute(\"class\", \"subtitle is-6\");\n    postCardMediaSubtitle.innerHTML = this.getReadablePostDate();\n\n    postCardMediaContent.appendChild(postCardMediaTitle);\n    postCardMediaContent.appendChild(postCardMediaSubtitle);\n\n    postCardMedia.appendChild(postCardMediaLeft);\n    postCardMedia.appendChild(postCardMediaContent);\n\n    let postContent = document.createElement(\"div\");\n    postContent.setAttribute(\"class\", \"content\");\n    postContent.innerText = this.text;\n\n    postCardContent.appendChild(postCardMedia);\n    postCardContent.appendChild(postContent);\n\n    postCard.appendChild(postCardContent);\n\n    postEnvelope.appendChild(postCard);\n\n    ap.appendChild(postEnvelope);\n  }\n\n}\n\nmodule.exports = PostCard;\n\n//# sourceURL=webpack://fe/../../common/blog/PostCard.js?");

/***/ }),

/***/ "../../common/entities/header/HeaderOpen.js":
/*!**************************************************!*\
  !*** ../../common/entities/header/HeaderOpen.js ***!
  \**************************************************/
/***/ ((module) => {

eval("const HeaderOpen = {\n  loadConfig: async function () {\n    this.config = await fetch('/json/headeropen.json').then(res => res.json())\n    this.appTag = document.getElementsByClassName('App')[0]\n    this.contentTag = document.getElementById('Content')\n  },\n\n  createHero: function () {\n    let res = document.createElement('section')\n    res.setAttribute('class', 'hero is-small is-dark')\n    return res\n  },\n\n  createHeroBody: function () {\n    let res = document.createElement('div')\n    res.setAttribute('class', 'hero-body')\n    return res\n  },\n\n  createNav: function () {\n    let res = document.createElement('nav')\n    res.setAttribute('class', 'level')\n    return res\n  },\n\n  createLevelLeft: function () {\n    let res = document.createElement('div')\n    res.setAttribute('class', 'level-left')\n    return res\n  },\n\n  createLevelRight: function () {\n    let res = document.createElement('div')\n    res.setAttribute('class', 'level-right')\n    return res\n  },\n\n  createLevelItem: function () {\n    let res = document.createElement('div')\n    res.setAttribute('class', 'level-item')\n    return res\n  },\n\n  createFigure: function () {\n    let res = document.createElement('figure')\n    res.setAttribute('class', 'image is-128x128')\n    return res\n  },\n\n  createImg: function () {\n    let res = document.createElement('img')\n    res.setAttribute('src', '/images/logo_sm.png')\n    res.setAttribute('alt', 'Hypatia of Alexandria')\n    return res\n  },\n\n  createSimpleDiv: function () {\n    let res = document.createElement('div')\n    return res\n  },\n\n  createTitle: function () {\n    let res = document.createElement('div')\n    res.setAttribute('class', 'title separador-titulo-subtitulo title-script')\n    res.innerText = this.config.title\n    return res\n  },\n\n  createSubtitle: function () {\n    let res = document.createElement('div')\n    res.setAttribute('class', 'subtitle subtitle-thin')\n    res.innerText = this.config.subtitle\n    return res\n  },\n\n  show: async function () {\n    await this.loadConfig()\n    let hero = this.createHero()\n    this.contentTag.before(hero)\n    //this.appTag.appendChild(hero)\n    let heroBody = this.createHeroBody()\n    hero.appendChild(heroBody)\n    let nav = this.createNav()\n    heroBody.appendChild(nav)\n    let levelLeft = this.createLevelLeft()\n    nav.appendChild(levelLeft)\n    let itemLogo = this.createLevelItem()\n    levelLeft.appendChild(itemLogo)\n    let figure = this.createFigure()\n    itemLogo.appendChild(figure)\n    let logo = this.createImg()\n    figure.appendChild(logo)\n    let titles = this.createLevelItem()\n    levelLeft.appendChild(titles)\n    let simpleDiv = this.createSimpleDiv()\n    titles.appendChild(simpleDiv)\n    let title = this.createTitle()\n    simpleDiv.appendChild(title)\n    let subtitle = this.createSubtitle()\n    simpleDiv.appendChild(subtitle)\n    let levelRight = this.createLevelRight()\n    nav.appendChild(levelRight)\n    this.config.menu.forEach(item => {\n      let buttonDiv = document.createElement('div')\n      buttonDiv.setAttribute('class', 'level-item')\n      let buttonAnchor = document.createElement('a')\n      buttonAnchor.setAttribute('href', item.url)\n      if (item.status == 'normal') {\n        buttonAnchor.setAttribute('class', this.config.normalClasses)\n      } else {\n        buttonAnchor.setAttribute('class', this.config.emphasisClasses)\n      }\n      buttonAnchor.innerText = item.text\n      levelRight.appendChild(buttonAnchor)\n    })\n  }\n}\n\nmodule.exports = HeaderOpen\n\n\n//# sourceURL=webpack://fe/../../common/entities/header/HeaderOpen.js?");

/***/ }),

/***/ "../../common/entities/select/SelectLoaderFactory.js":
/*!***********************************************************!*\
  !*** ../../common/entities/select/SelectLoaderFactory.js ***!
  \***********************************************************/
/***/ ((module) => {

eval("class SelectLoaderFactory {\n\n  constructor(endpoint, fk) {\n    this.endpoint = endpoint;\n    this.fk = fk;\n    this.data = null;\n  }\n\n  load = async function (elem) {\n    if (Object.is(this.data, null)) {\n      let myList = null;\n      let list = await fetch(this.endpoint, {\n        headers: {\n          \"Accept\": \"application/json\"\n        }\n      });\n      let list2 = await list.json();\n      let items = \"\";\n      let list3 = await new Promise((resolve, reject) => {\n        if (this.fk === undefined) {\n          myList = list2.results;\n        } else {\n          myList = list2.results.filter(item => item.type_id === this.fk);\n        }\n        myList.forEach((elem, ind) => {\n          items = items + \"<option value='\" + elem.id + \"' \";\n          items = items + \"data-id='\" + elem.id + \"' \";\n          if (this.fk !== undefined) {\n            items = items + \"data-parent='\" + this.fk + \"' \";\n          }\n          items = items + ((ind === 0) ? \"selected='selected'>\" : \">\");\n          items = items + elem.name + \"</option>\";\n        });\n        resolve(items);\n      });\n      this.data = list3;\n    }\n    elem.innerHTML = this.data;\n    elem.selectedIndex = 0;  \n  }\n}\n\nmodule.exports = SelectLoaderFactory;\n\n//# sourceURL=webpack://fe/../../common/entities/select/SelectLoaderFactory.js?");

/***/ }),

/***/ "../../common/users/UserData.js":
/*!**************************************!*\
  !*** ../../common/users/UserData.js ***!
  \**************************************/
/***/ ((module) => {

eval("const userData = {\n\n  id: function() {\n    return this.data.id;\n  },\n\n  firstName: function() {\n    return this.data.firstName;\n  },\n\n  familyName: function() {\n    return this.data.familyName;\n  },\n\n  fullName: function() {\n    return this.firstName() + \" \" + this.familyName();\n  },\n\n  init: function() {\n    this.data = JSON.parse(localStorage.getItem(\"userData\"));\n  }\n\n}\n\nmodule.exports = userData;\n\n//# sourceURL=webpack://fe/../../common/users/UserData.js?");

/***/ }),

/***/ "./src/pages/closed/homepage.js":
/*!**************************************!*\
  !*** ./src/pages/closed/homepage.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("const SelectLoaderFactory = __webpack_require__(/*! ../../../../../common/entities/select/SelectLoaderFactory */ \"../../common/entities/select/SelectLoaderFactory.js\");\nconst UserData = __webpack_require__(/*! ../../../../../common/users/UserData */ \"../../common/users/UserData.js\");\nconst PostCard = __webpack_require__(/*! ../../../../../common/blog/PostCard */ \"../../common/blog/PostCard.js\");\nconst HeaderOpen = __webpack_require__(/*! ../../../../../common/entities/header/HeaderOpen */ \"../../common/entities/header/HeaderOpen.js\");\n\nHeaderOpen.show();\n\nUserData.init();\n\nlet postsFilter = { language: null, type: null, genre: null };\n\nconst spanModalTitle = document.getElementById(\"span-modal-title\");\n\nconst languageSelect = document.getElementById(\"language-select\");\nconst languagesLoader = new SelectLoaderFactory(\"/api/languages\");\n\nconst typeSelect = document.getElementById(\"type-select\");\nconst typesLoader = new SelectLoaderFactory(\"/api/types\");\n\nconst genreSelect = document.getElementById(\"genre-select\");\nlet genreLoader = null;\n\nconst postsArea = document.getElementById(\"posts-area\");\n\nconst setModalTitle = async function () {\n  let modalTitle = \"Add post for \";\n  modalTitle = modalTitle + languageSelect.children[languageSelect.selectedIndex].innerText;\n  modalTitle = modalTitle + \" | \" + typeSelect.children[typeSelect.selectedIndex].innerText;\n  modalTitle = modalTitle + \" | \" + genreSelect.children[genreSelect.selectedIndex].innerText;\n  spanModalTitle.innerText = modalTitle;\n}\n\nconst loadPosts = async function () {\n  postsArea.innerHTML = \"\";\n  if ((localStorage.getItem(\"language\")) && (localStorage.getItem(\"type\")) && (localStorage.getItem(\"genre\"))) {\n    let qry = \"q=20\";\n    qry = qry + \"&l=\" + localStorage.getItem(\"language\");\n    qry = qry + \"&t=\" + localStorage.getItem(\"type\");\n    qry = qry + \"&g=\" + localStorage.getItem(\"genre\");\n    await fetch(\"/api/posts?\" + qry)\n      .then(res => res.json())\n      .then(json => {\n        json.results.forEach(result => {\n          let pc = new PostCard(result);\n          pc.show(postsArea);\n        })\n      })\n  }\n};\n\nconst setFilterLanguage = async function () {\n  postsFilter = Object.assign({}, postsFilter, { language: languageSelect.value });\n  localStorage.setItem(\"language\", languageSelect.value);\n  loadPosts();\n};\n\nconst setFilterType = async function () {\n  postsFilter = Object.assign({}, postsFilter, { type: typeSelect.value, genre: null });\n  localStorage.setItem(\"type\", typeSelect.value);\n  localStorage.setItem(\"genre\", null);\n  loadPosts();\n};\n\nconst setFiltergenre = async function () {\n  postsFilter = Object.assign({}, postsFilter, { genre: genreSelect.value });\n  localStorage.setItem(\"genre\", genreSelect.value);\n  loadPosts();\n};\n\nconst loadLanguageSelect = async () => {\n  await languagesLoader.load(languageSelect);\n};\n\nconst loadTypeSelect = async () => {\n  await typesLoader.load(typeSelect);\n};\n\nconst loadGenreSelect = async () => {\n  await genreLoader.load(genreSelect);\n};\n\nconst loadSelects = async () => {\n  await loadLanguageSelect();\n  await setFilterLanguage();\n  await loadTypeSelect();\n  await setFilterType();\n  genreLoader = new SelectLoaderFactory(\"/api/genres\", typeSelect.value);\n  await loadGenreSelect();\n  await setFilterGenre();\n};\n\nloadSelects();\n\nconst addPostMenuButton = document.getElementById(\"add-post-menu-button\");\nconst modalPost = document.getElementById(\"post-modal\");\nconst closeModalPostButton = document.getElementById(\"close-modal-button\");\nconst cancelPostButton = document.getElementById(\"cancel-post-button\");\n\nconst linkForProfile = document.getElementById(\"link-for-profile\");\nlinkForProfile.setAttribute(\"href\", \"/profile/\" + UserData.id());\nlinkForProfile.innerText = UserData.fullName();\n\nlanguageSelect.addEventListener(\"change\", function (ev) {\n  setFilterLanguage();\n});\n\ntypeSelect.addEventListener(\"change\", async function (ev) {\n  genreLoader = null;\n  genreLoader = new SelectLoaderFactory(\"/api/genres\", typeSelect.value);\n  await loadGenreSelect();\n  setFilterType();\n  setFilterGenre();\n});\n\ngenreSelect.addEventListener(\"change\", function (ev) {\n  setFilterGenre();\n});\n\naddPostMenuButton.addEventListener(\"click\", async function (ev) {\n  await setModalTitle();\n  document.getElementById(\"title\").value = \"\";\n  document.getElementById(\"text\").value = \"\";\n  document.getElementById(\"postimage\").value = \"\";\n  modalPost.classList.add(\"is-active\");\n});\n\ncloseModalPostButton.addEventListener(\"click\", function (ev) {\n  modalPost.classList.remove(\"is-active\");\n});\n\ncancelPostButton.addEventListener(\"click\", function (ev) {\n  modalPost.classList.remove(\"is-active\");\n});\n\nconst formPost = document.getElementById(\"form-post\");\nconst addPostButton = document.getElementById(\"add-post-button\");\n\nformPost.addEventListener(\"submit\", async function (ev) {\n  ev.preventDefault();\n  document.getElementById(\"user-id-field\").value = UserData.id();\n  document.getElementById(\"language-id-field\").value = postsFilter.language;\n  document.getElementById(\"type-id-field\").value = postsFilter.type;\n  document.getElementById(\"genre-id-field\").value = postsFilter.genre;\n  let myData = new FormData(formPost);\n  await fetch(\"/api/posts\", {\n    method: \"POST\",\n    body: myData\n  })\n  modalPost.classList.remove(\"is-active\");\n  loadPosts();\n});\n\n//# sourceURL=webpack://fe/./src/pages/closed/homepage.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/pages/closed/homepage.js");
/******/ 	
/******/ })()
;