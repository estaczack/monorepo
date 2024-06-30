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

/***/ "../../common/blog/PostCard.js":
/*!*************************************!*\
  !*** ../../common/blog/PostCard.js ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const API = __webpack_require__(/*! ../api/api */ \"../../common/api/api.js\")\nconst UserData = __webpack_require__(/*! ../users/UserData */ \"../../common/users/UserData.js\")\nconst Message = __webpack_require__(/*! ../messages/Message */ \"../../common/messages/Message.js\")\n\nclass PostCardSummary {\n  constructor (post) {\n    this.id = post._id\n    this.title = post.title\n    this.content = post.content\n    this.image = post.image\n    this.user_id = post.user_id\n    this.authorFullName = post.authorFullName\n    this.likes = post.likes\n    this.authorId = post.authorId\n    this.externalLink = post.externalLink\n    this.createdAt = post.createdAt\n    this.updatedAt = post.updatedAt\n    this.userLiked = null\n    UserData.init()\n  }\n\n  getLikedHeart = function () {\n    return this.userLiked\n      ? \"<i class='fa-solid fa-heart'></i>\"\n      : \"<i class='fa-regular fa-heart'></i>\"\n  }\n\n  getLikedStatus = async function () {\n    const payload = { postId: this.id, userId: UserData.id() }\n    return await API.postWithPayload(\n      '/api/closed/posts/user-liked',\n      payload\n    ).then(res => res.json())\n  }\n\n  togglePostLike = async function (ev) {\n    this.userLiked = !this.userLiked\n    const payload = { postId: this.id, userId: UserData.id() }\n    await API.postWithPayload('/api/closed/posts/toggle-like', payload)\n      .then(res => res.json())\n      .then(json => json.post)\n      .then(json => {\n        let postCountArea = document.getElementById(`post-${this.id}`)\n        postCountArea.innerText = json.likes.length\n      })\n  }\n\n  hasImage = function () {\n    if (this.image === 'null') return false\n    if (this.image === 'undefined') return false\n    return true\n  }\n\n  formattedDate = function () {\n    let months = 'Jan|Feb|Mar|Abr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec'.split('|')\n    let dt = this.updatedAt.split(' ')[0]\n    let hr = this.updatedAt.split(' ')[1]\n    let dtParts = dt.split('-').map(e => parseInt(e, 10))\n    let dtSuffix = 'th'\n    dtSuffix = dtParts[2] === 1 ? 'st' : dtSuffix\n    dtSuffix = dtParts[2] === 21 ? 'st' : dtSuffix\n    dtSuffix = dtParts[2] === 31 ? 'st' : dtSuffix\n    dtSuffix = dtParts[2] === 2 ? 'nd' : dtSuffix\n    dtSuffix = dtParts[2] === 22 ? 'nd' : dtSuffix\n    dtSuffix = dtParts[2] === 3 ? 'rd' : dtSuffix\n    dtSuffix = dtParts[2] === 23 ? 'rd' : dtSuffix\n    let res = `${months[dtParts[1]]} ${dtParts[2]}${dtSuffix}, ${\n      dtParts[0]\n    } - ${hr} (GMT)`\n    return res\n  }\n\n  show = async function (area) {\n    this.userLiked = await this.getLikedStatus()\n\n    let postEnvelope = document.createElement('div')\n    postEnvelope.setAttribute('class', 'block')\n    area.appendChild(postEnvelope)\n\n    let myPost = document.createElement('div')\n    myPost.setAttribute('class', 'card')\n    postEnvelope.appendChild(myPost)\n\n    let cardHeader = document.createElement('header')\n    cardHeader.setAttribute('class', 'card-header is-pink')\n    myPost.appendChild(cardHeader)\n\n    let authorAndDate = document.createElement('p')\n    authorAndDate.setAttribute('class', 'card-header-title')\n\n    let authorAnchor = document.createElement('a')\n    authorAnchor.setAttribute('class', 'card-footer-item')\n    authorAnchor.setAttribute('href', '#') // TODO: link to author profile\n    authorAnchor.innerText =\n      this.authorFullName + '  -  ' + this.formattedDate()\n    cardHeader.appendChild(authorAnchor)\n\n    if (this.hasImage()) {\n      let cardImage = document.createElement('div')\n      cardImage.setAttribute('class', 'card-image')\n      myPost.appendChild(cardImage)\n\n      let cardFigure = document.createElement('figure')\n      cardFigure.setAttribute('class', 'image is-4x3')\n      cardImage.appendChild(cardFigure)\n\n      let cardImg = document.createElement('img')\n      cardImg.setAttribute('src', `data:image/jpeg;base64, ${this.image}`)\n      cardImg.setAttribute('alt', 'Placeholder 4x3')\n      cardFigure.appendChild(cardImg)\n    }\n\n    let cardContent = document.createElement('div')\n    cardContent.setAttribute('class', 'card-content')\n    myPost.appendChild(cardContent)\n\n    if (this.externalLink.trim() !== '') {\n      let elink = document.createElement('div')\n      elink.innerHTML = `<span>Link: </span><a href='${this.externalLink}}' target='_new'>${this.externalLink}</a>`\n      cardContent.appendChild(elink)\n      cardContent.appendChild(document.createElement('hr'))\n    }\n\n    let title = document.createElement('h1')\n    title.setAttribute('class', 'is-size-5')\n    title.innerHTML = `<strong>${this.title}</strong>`\n    cardContent.appendChild(title)\n\n    cardContent.appendChild(document.createElement('hr'))\n\n    let content = document.createElement('div')\n    content.setAttribute('class', 'content')\n    content.innerText = this.content\n    cardContent.appendChild(content)\n\n    let cardFooter = document.createElement('footer')\n    cardFooter.setAttribute('class', 'card-footer')\n    myPost.appendChild(cardFooter)\n\n    let likeArea = document.createElement('a')\n    likeArea.setAttribute('class', 'card-footer-item')\n    likeArea.setAttribute('href', '#')\n    likeArea.setAttribute('data-disabled', this.authorId === UserData.id())\n    likeArea.innerHTML = this.getLikedHeart()\n    cardFooter.appendChild(likeArea)\n\n    likeArea.addEventListener('click', ev => {\n      ev.preventDefault()\n      if (ev.target.dataset.disabled === 'false') {\n        this.togglePostLike(ev)\n        likeArea.innerHTML = this.getLikedHeart()\n      } else {\n        Message('danger', \"You can't like your own posts!\")\n      }\n    })\n\n    let likeCountArea = document.createElement('a')\n    likeCountArea.setAttribute('class', 'card-footer-item')\n    likeCountArea.setAttribute('id', `post-${this.id}`)\n    likeCountArea.innerText = this.likes.length\n    cardFooter.appendChild(likeCountArea)\n\n    let postCommentArea = document.createElement('a')\n    postCommentArea.setAttribute('class', 'card-footer-item')\n    authorAnchor.setAttribute('href', '#') // TODO: link to open a post comment\n    postCommentArea.innerText = 'Comment'\n    cardFooter.appendChild(postCommentArea)\n\n    area.appendChild(myPost)\n  }\n}\n\nmodule.exports = PostCardSummary\n\n\n//# sourceURL=webpack://fe/../../common/blog/PostCard.js?");

/***/ }),

/***/ "../../common/entities/header/HeaderClosed.js":
/*!****************************************************!*\
  !*** ../../common/entities/header/HeaderClosed.js ***!
  \****************************************************/
/***/ ((module) => {

eval("const HeaderOpen = {\n    loadConfig: async function () {\n      this.config = await fetch('/json/headerclosed.json').then(res => res.json())\n      this.appTag = document.getElementsByClassName('App')[0]\n      this.contentTag = document.getElementById('Content')\n    },\n  \n    createHero: function () {\n      let res = document.createElement('section')\n      res.setAttribute('class', 'hero is-small is-dark')\n      return res\n    },\n  \n    createHeroBody: function () {\n      let res = document.createElement('div')\n      res.setAttribute('class', 'hero-body')\n      return res\n    },\n  \n    createNav: function () {\n      let res = document.createElement('nav')\n      res.setAttribute('class', 'level')\n      return res\n    },\n  \n    createLevelLeft: function () {\n      let res = document.createElement('div')\n      res.setAttribute('class', 'level-left')\n      return res\n    },\n  \n    createLevelRight: function () {\n      let res = document.createElement('div')\n      res.setAttribute('class', 'level-right')\n      return res\n    },\n  \n    createLevelItem: function () {\n      let res = document.createElement('div')\n      res.setAttribute('class', 'level-item')\n      return res\n    },\n  \n    createFigure: function () {\n      let res = document.createElement('figure')\n      res.setAttribute('class', 'image is-64x64')\n      return res\n    },\n  \n    createImg: function () {\n      let res = document.createElement('img')\n      res.setAttribute('src', '/images/logo_sm.png')\n      res.setAttribute('alt', this.config.altLogo)\n      return res\n    },\n  \n    createTitle: function () {\n      let res = document.createElement('div')\n      res.setAttribute('class', 'title title-script-closed')\n      res.innerText = this.config.title\n      return res\n    },\n  \n    show: async function () {\n      await this.loadConfig()\n      let hero = this.createHero()\n      this.contentTag.before(hero)\n      let heroBody = this.createHeroBody()\n      hero.appendChild(heroBody)\n      let nav = this.createNav()\n      heroBody.appendChild(nav)\n      let levelLeft = this.createLevelLeft()\n      nav.appendChild(levelLeft)\n      let itemLogo = this.createLevelItem()\n      levelLeft.appendChild(itemLogo)\n      let figure = this.createFigure()\n      itemLogo.appendChild(figure)\n      let logo = this.createImg()\n      figure.appendChild(logo)\n      let titles = this.createLevelItem()\n      levelLeft.appendChild(titles)\n      let title = this.createTitle()\n      titles.appendChild(title)\n      let levelRight = this.createLevelRight()\n      nav.appendChild(levelRight)\n      this.config.menu.forEach(item => {\n        let buttonDiv = document.createElement('div')\n        buttonDiv.setAttribute('class', 'level-item')\n        let buttonAnchor = document.createElement('a')\n        buttonAnchor.setAttribute('href', item.url)\n        if (item.status == 'normal') {\n          buttonAnchor.setAttribute('class', this.config.normalClasses)\n        } else {\n          buttonAnchor.setAttribute('class', this.config.emphasisClasses)\n        }\n        buttonAnchor.innerText = item.text\n        levelRight.appendChild(buttonAnchor)\n      })\n    }\n  }\n  \n  module.exports = HeaderOpen\n  \n\n//# sourceURL=webpack://fe/../../common/entities/header/HeaderClosed.js?");

/***/ }),

/***/ "../../common/messages/Message.js":
/*!****************************************!*\
  !*** ../../common/messages/Message.js ***!
  \****************************************/
/***/ ((module) => {

eval("function Message(type, text) {\n  let msgArea = document.getElementById(\"message-area\");\n  let msg = document.createElement(\"div\");\n  msgArea.classList.add(\"invisible\");\n  msg.classList.add(\"notification\");\n  msg.classList.add(\"is-light\");\n  msg.classList.add(\"is-shadowed\");\n  msg.classList.add(\"is-\" + type);\n  msg.textContent = text;\n  msgArea.appendChild(msg);\n  msgArea.classList.remove(\"invisible\");\n  setTimeout(() => {\n    msg.textContent = \"\";\n    msgArea.removeChild(msg);\n    msgArea.classList.add(\"invisible\");\n    msg = null;\n  }, 3000)\n};\n\nmodule.exports = Message;\n\n//# sourceURL=webpack://fe/../../common/messages/Message.js?");

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

/***/ "./src/pages/closed/homepage.js":
/*!**************************************!*\
  !*** ./src/pages/closed/homepage.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("const PostCard = __webpack_require__(/*! ../../../../../common/blog/PostCard */ \"../../common/blog/PostCard.js\")\nconst HeaderClosed = __webpack_require__(/*! ../../../../../common/entities/header/HeaderClosed */ \"../../common/entities/header/HeaderClosed.js\")\nconst API = __webpack_require__(/*! ../../../../../common/api/api */ \"../../common/api/api.js\")\n\nconst UserData = __webpack_require__(/*! ../../aux/UserDataHypatia */ \"./src/aux/UserDataHypatia.js\")\n\nHeaderClosed.show()\n\nUserData.init()\n\nconst fullNameField = document.getElementById('link-for-profile')\nfullNameField.innerText = UserData.fullName()\n\nconst languageSelect = document.getElementById('language-select')\nconst typeSelect = document.getElementById('type-select')\nconst genreSelect = document.getElementById('genre-select')\n\nconst spanModalTitle = document.getElementById('span-modal-title')\nconst addPostMenuButton = document.getElementById('add-post-menu-button')\nconst modalPost = document.getElementById('post-modal')\nconst closeModalPostButton = document.getElementById('close-modal-button')\nconst cancelPostButton = document.getElementById('cancel-post-button')\nconst postImage = document.getElementById('postimage')\nconst postsArea = document.getElementById('posts-area')\nconst formPost = document.getElementById('form-post')\n\nlet languagesArray = []\nlet typesArray = []\nlet postsArray = []\n\naddPostMenuButton.addEventListener('click', ev => {\n  modalPost.classList.add('is-active')\n})\n\ncloseModalPostButton.addEventListener('click', ev => {\n  modalPost.classList.remove('is-active')\n})\n\ncancelPostButton.addEventListener('click', ev => {\n  modalPost.classList.remove('is-active')\n})\n\nlanguageSelect.addEventListener('change', async ev => {\n  const payload = {\n    id: UserData.id(),\n    lastLanguageId: ev.target.value\n  }\n  await API.postWithPayload('/api/closed/users/last-language', payload)\n    .then(res => res.json())\n    .then(json => {\n      if (json.ok) {\n        localStorage.clear()\n        localStorage.setItem('userData', JSON.stringify(json.user))\n      }\n      UserData.init()\n    })\n  showPosts()\n})\n\ntypeSelect.addEventListener('change', async ev => {\n  const payload = {\n    id: UserData.id(),\n    lastTypeId: ev.target.value\n  }\n  await API.postWithPayload('/api/closed/users/last-type', payload)\n    .then(res => res.json())\n    .then(json => {\n      if (json.ok) {\n        localStorage.clear()\n        localStorage.setItem('userData', JSON.stringify(json.user))\n      }\n      UserData.init()\n    })\n  genreSelect.innerHTML = ''\n  newGenres = typesArray.filter(e => e._id === ev.target.value)\n  await loadSelect(newGenres[0].genres, genreSelect, null)\n  showPosts()\n})\n\ngenreSelect.addEventListener('change', async ev => {\n  const payload = {\n    id: UserData.id(),\n    lastGenreId: ev.target.value\n  }\n  await API.postWithPayload('/api/closed/users/last-genre', payload)\n    .then(res => res.json())\n    .then(json => {\n      if (json.ok) {\n        localStorage.clear()\n        localStorage.setItem('userData', JSON.stringify(json.user))\n      }\n      UserData.init()\n    })\n  showPosts()\n})\n\nasync function languagesLoader () {\n  return await API.get('/api/closed/languages')\n    .then(res => res.json())\n    .then(json => json.bookLanguages)\n}\n\nasync function typesLoader () {\n  return await API.get('/api/closed/types')\n    .then(res => res.json())\n    .then(json => json.bookTypes)\n}\n\nasync function loaders () {\n  languagesArray = await languagesLoader()\n  typesArray = await typesLoader()\n  return await true\n}\n\nasync function loadSelect (optsArray, selectElement, selectedId) {\n  await optsArray.forEach(o => {\n    let opt = document.createElement('option')\n    opt.innerText = o.name\n    opt.id = o._id\n    opt.value = o._id\n    if (selectedId) {\n      if (o._id === selectedId) {\n        opt.setAttribute('selected', true)\n      }\n    }\n    selectElement.appendChild(opt)\n  })\n}\n\nasync function loadSideMenu () {\n  const loaded = await loaders()\n  let ind = null\n  const getTypeIndex = async ltype => {\n    await typesArray.forEach((e, i) => {\n      if (e._id === ltype) {\n        ind = i\n      }\n    })\n    return ind ? ind : 0\n  }\n  await loadSelect(languagesArray, languageSelect, UserData.lastLanguage())\n  await loadSelect(typesArray, typeSelect, UserData.lastType())\n  ind = await getTypeIndex(UserData.lastType())\n  await loadSelect(typesArray[ind].genres, genreSelect, UserData.lastGenre())\n}\n\nasync function loadPostsWithFilter () {\n  const payload = {\n    languageId: UserData.lastLanguage(),\n    typeId: UserData.lastType(),\n    genreId: UserData.lastGenre()\n  }\n  return await API.postWithPayload('/api/closed/posts/by-filter', payload)\n    .then(res => res.json())\n    .then(json => json.posts)\n}\n\nasync function showPosts () {\n  postsArea.innerHTML = ''\n  postsArray = await loadPostsWithFilter()\n  await postsArray.forEach(p => {\n    let pc = new PostCard(p)\n    pc.show(postsArea)\n  })\n}\n\nasync function loadFullPage () {\n  await loadSideMenu()\n  await showPosts()\n}\n\nformPost.addEventListener('submit', async ev => {\n  ev.preventDefault()\n  let imageData = null\n  const readImage = function () {\n    const file = document.getElementById('postimage').files[0]\n    const reader = new FileReader()\n    reader.onloadend = function () {\n      const base64String = reader.result\n        .replace('data:', '')\n        .replace(/^.+,/, '')\n      imageData = base64String\n    }\n    if (file) {\n      reader.readAsDataURL(file)\n    }\n  }\n  readImage()\n  setTimeout(async function () {\n    const payload = {\n      title: ev.target.title.value,\n      content: ev.target.text.value,\n      authorId: UserData.id(),\n      authorFullName: UserData.fullName(),\n      languageId: UserData.lastLanguage(),\n      typeId: UserData.lastType(),\n      genreId: UserData.lastGenre(),\n      externalLink: ev.target.externalLink.value,\n      image: imageData\n    }\n    await API.postWithPayload('/api/closed/posts', payload)\n    modalPost.classList.remove('is-active')\n    await showPosts()\n\n    ev.target.title.value = ''\n    ev.target.text.value = ''\n    ev.target.externalLink.value = ''\n  }, 1500)\n})\n\nloadFullPage()\n\n\n//# sourceURL=webpack://fe/./src/pages/closed/homepage.js?");

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