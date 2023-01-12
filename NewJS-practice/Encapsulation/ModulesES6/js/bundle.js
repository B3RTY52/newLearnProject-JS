/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/mainES6.js":
/*!***************************!*\
  !*** ./src/js/mainES6.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ sayBye),
/* harmony export */   "one": () => (/* binding */ one),
/* harmony export */   "sayHi": () => (/* binding */ sayHi),
/* harmony export */   "two": () => (/* binding */ two)
/* harmony export */ });
// короткий синтаксис
let one = 1;

// именованный синтаксис
let two = 2;


function sayHi() {
    console.log('hello!');
}

// экспорт по дефолту (следует более простой синтаксис в главном файле):
function sayBye() {
    console.log('Bye!');
}

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
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!*****************************!*\
  !*** ./src/js/scriptES6.js ***!
  \*****************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _mainES6__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mainES6 */ "./src/js/mainES6.js");
// обычный синтаксис:
// import { one , two } from "./mainES6";

// console.log(`say ${one} and ${two}!`);


// переменные при импорте можно переименовывать:
// import { one as first, two } from "./mainES6";

// console.log(`say ${first} and ${two}!`);


// метод экспортирования "пачкой":


console.log(`say ${_mainES6__WEBPACK_IMPORTED_MODULE_0__.one} and ${_mainES6__WEBPACK_IMPORTED_MODULE_0__.two}!`);
_mainES6__WEBPACK_IMPORTED_MODULE_0__.sayHi();

// экспорт по дефолту как работает:

(0,_mainES6__WEBPACK_IMPORTED_MODULE_0__["default"])();
// но экспорт по умолчанию может быть только один!
})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map