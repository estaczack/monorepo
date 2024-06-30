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

/***/ "../common/messages/Message.js":
/*!*************************************!*\
  !*** ../common/messages/Message.js ***!
  \*************************************/
/***/ ((module) => {

eval("function Message(type, text) {\n  let msgArea = document.getElementById(\"message-area\");\n  let msg = document.createElement(\"div\");\n  msgArea.classList.add(\"invisible\");\n  msg.classList.add(\"notification\");\n  msg.classList.add(\"is-light\");\n  msg.classList.add(\"is-shadowed\");\n  msg.classList.add(\"is-\" + type);\n  msg.textContent = text;\n  msgArea.appendChild(msg);\n  msgArea.classList.remove(\"invisible\");\n  setTimeout(() => {\n    msg.textContent = \"\";\n    msgArea.removeChild(msg);\n    msgArea.classList.add(\"invisible\");\n    msg = null;\n  }, 3000)\n};\n\nmodule.exports = Message;\n\n//# sourceURL=webpack://hypatia2/../common/messages/Message.js?");

/***/ }),

/***/ "./src/pages/signout/index.js":
/*!************************************!*\
  !*** ./src/pages/signout/index.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("const Message = __webpack_require__(/*! ../../../../common/messages/Message */ \"../common/messages/Message.js\")\n\nlocalStorage.clear()\n\nMessage(\n  'success',\n  \"Successfully logged out. You'll be redirected to Hypatia's main page.\"\n)\n\nsetTimeout(() => {\n  window.location.href = '/'\n}, 3000)\n\n\n//# sourceURL=webpack://hypatia2/./src/pages/signout/index.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/pages/signout/index.js");
/******/ 	
/******/ })()
;