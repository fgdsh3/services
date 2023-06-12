/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./scss/styles.scss":
/*!**************************!*\
  !*** ./scss/styles.scss ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./js/index.js":
/*!*********************!*\
  !*** ./js/index.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _scss_styles_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../scss/styles.scss */ "./scss/styles.scss");
/* harmony import */ var _images_logo_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../images/logo.svg */ "./images/logo.svg");
/* harmony import */ var _images_chat_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../images/chat.svg */ "./images/chat.svg");
/* harmony import */ var _images_check_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../images/check.svg */ "./images/check.svg");
/* harmony import */ var _images_person_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../images/person.svg */ "./images/person.svg");
/* harmony import */ var _images_phone_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../images/phone.svg */ "./images/phone.svg");
/* harmony import */ var _images_repair_svg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../images/repair.svg */ "./images/repair.svg");
/* harmony import */ var _images_arrows_down_svg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../images/arrows-down.svg */ "./images/arrows-down.svg");
/* harmony import */ var _images_top_screen_image_jpg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../images/top-screen-image.jpg */ "./images/top-screen-image.jpg");
/* harmony import */ var _images_lenovo_png__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../images/lenovo.png */ "./images/lenovo.png");
/* harmony import */ var _images_samsung_png__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../images/samsung.png */ "./images/samsung.png");
/* harmony import */ var _images_apple_png__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../images/apple.png */ "./images/apple.png");
/* harmony import */ var _images_viewsonic_png__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../images/viewsonic.png */ "./images/viewsonic.png");
/* harmony import */ var _images_bosch_png__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../images/bosch.png */ "./images/bosch.png");
/* harmony import */ var _images_hp_png__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../images/hp.png */ "./images/hp.png");
/* harmony import */ var _images_acer_png__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../images/acer.png */ "./images/acer.png");
/* harmony import */ var _images_sony_svg__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../../images/sony.svg */ "./images/sony.svg");
/* harmony import */ var _images_arrow_btn_svg__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../../images/arrow-btn.svg */ "./images/arrow-btn.svg");
/* harmony import */ var _images_gradient_png__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../../images/gradient.png */ "./images/gradient.png");
/* harmony import */ var _images_small_arrow_svg__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../../images/small-arrow.svg */ "./images/small-arrow.svg");
/* harmony import */ var _images_small_arrow_red_svg__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../../../images/small-arrow-red.svg */ "./images/small-arrow-red.svg");
/* harmony import */ var _images_search_svg__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../../../images/search.svg */ "./images/search.svg");
/* harmony import */ var _images_cross_svg__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../../../images/cross.svg */ "./images/cross.svg");
/* harmony import */ var swiper_bundle__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! swiper/bundle */ "../node_modules/swiper/swiper-bundle.esm.js");
/* harmony import */ var swiper_css_bundle__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! swiper/css/bundle */ "../node_modules/swiper/swiper-bundle.min.css");



























let { clientWidth } = document.body;
let brandsSlider;
let techSlider;
let priceSlider;


const burgerBtn = document.querySelectorAll('.burger-btn');
burgerBtn.forEach(elem => elem.addEventListener('click', function () {
  document.querySelector('.burger-menu').classList.toggle('burger-menu--active');
  if (!document.querySelector('.menu__burger-btn--unactive') && !document.querySelector('.menu__burger-btn--active')) {
    document.querySelector('.menu__burger-btn').classList.toggle('menu__burger-btn--unactive');
  }
  document.querySelector('.menu__burger-btn').classList.toggle('menu__burger-btn--active');
  document.querySelector('.menu__burger-btn').classList.toggle('menu__burger-btn--unactive');
}));


const checkBtn = document.querySelectorAll('.feedback__btn');
checkBtn.forEach(elem => elem.addEventListener('click', function () {
  document.querySelector('.feedback').classList.toggle('feedback--active');
}));


const callBtn = document.querySelectorAll('.call__btn');
callBtn.forEach(elem => elem.addEventListener('click', function () {
  document.querySelector('.call').classList.toggle('call--active');
}));
//Readmore---------------------------------------------------------------------------------

const readmoreBtn = document.querySelectorAll('.readmore');
const readmoreText = document.querySelector('.readmore__text')
readmoreBtn.forEach(elem => elem.addEventListener('click', function () {
  if (clientWidth < 768) {
    document.querySelectorAll('.top-screen__text-first').forEach(elem => elem.classList.toggle('text--unactive'));
    document.querySelectorAll('.top-screen__text-second').forEach(elem => elem.classList.toggle('text--unactive'));
  }
  if (clientWidth >= 768 && clientWidth < 1440) {
    document.querySelectorAll('.top-screen__text-second').forEach(elem => elem.classList.toggle('text--unactive'));
  }
  if (readmoreText.innerText == 'Читать далее') {
    readmoreText.innerText = 'Скрыть';
  }
  else if (readmoreText.innerText == 'Скрыть') { readmoreText.innerText = 'Читать далее' }
}));
//Showmore---------------------------------------------------------------------------------

const showmoreBtn = document.querySelectorAll('.showmore');
showmoreBtn.forEach((elem, i = 0) => elem.addEventListener('click', function () {
  if (i === 0) {
    document.querySelectorAll('.brands__item').forEach(
      elem => elem.classList.toggle('brands__item--visible'));
  }
  if (i === 1) {
    document.querySelectorAll('.tech__item').forEach(
      elem => elem.classList.toggle('tech__item--visible'));
  }
  elem.classList.toggle('showmore--active')
}))

const sliderInit = () => {
  const brandsSlider = new swiper_bundle__WEBPACK_IMPORTED_MODULE_23__["default"]('.brands__slider', {
    slidesPerView: 'auto',
    spaceBetween: 16,
    pagination: {
      el: '.brands__pagination',
      bulletClass: 'brands__pagination-bullet',
      bulletActiveClass: 'brands__pagination-bullet--active',
      clickable: true,
    }
  });
  const techSlider = new swiper_bundle__WEBPACK_IMPORTED_MODULE_23__["default"]('.tech__slider', {
    slidesPerView: 'auto',
    spaceBetween: 16,
    pagination: {
      el: '.tech__pagination',
      bulletClass: 'tech__pagination-bullet',
      bulletActiveClass: 'tech__pagination-bullet--active',
      clickable: true,
    },

  });
  const priceSlider = new swiper_bundle__WEBPACK_IMPORTED_MODULE_23__["default"]('.price__slider', {
    slidesPerView: 'auto',
    spaceBetween: 16,
    pagination: {
      el: '.price__pagination',
      bulletClass: 'price__pagination-bullet',
      bulletActiveClass: 'price__pagination-bullet--active',
      clickable: true,
    },
  });
}

const resizeHandlerSlider = () => {
  if (clientWidth !== document.body.clientWidth) {
    clientWidth = document.body.clientWidth;
  }
  if (clientWidth < 768) {
    sliderInit();
  }
  else {
    brandsSlider.destroy();
    priceSlider.destroy();
    techSlider.destroy();
  }
}

window.onload = resizeHandlerSlider;
window.onresize = resizeHandlerSlider;

/***/ }),

/***/ "./images/acer.png":
/*!*************************!*\
  !*** ./images/acer.png ***!
  \*************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/acer.png";

/***/ }),

/***/ "./images/apple.png":
/*!**************************!*\
  !*** ./images/apple.png ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/apple.png";

/***/ }),

/***/ "./images/arrow-btn.svg":
/*!******************************!*\
  !*** ./images/arrow-btn.svg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/arrow-btn.svg";

/***/ }),

/***/ "./images/arrows-down.svg":
/*!********************************!*\
  !*** ./images/arrows-down.svg ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/arrows-down.svg";

/***/ }),

/***/ "./images/bosch.png":
/*!**************************!*\
  !*** ./images/bosch.png ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/bosch.png";

/***/ }),

/***/ "./images/chat.svg":
/*!*************************!*\
  !*** ./images/chat.svg ***!
  \*************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/chat.svg";

/***/ }),

/***/ "./images/check.svg":
/*!**************************!*\
  !*** ./images/check.svg ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/check.svg";

/***/ }),

/***/ "./images/cross.svg":
/*!**************************!*\
  !*** ./images/cross.svg ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/cross.svg";

/***/ }),

/***/ "./images/gradient.png":
/*!*****************************!*\
  !*** ./images/gradient.png ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/gradient.png";

/***/ }),

/***/ "./images/hp.png":
/*!***********************!*\
  !*** ./images/hp.png ***!
  \***********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/hp.png";

/***/ }),

/***/ "./images/lenovo.png":
/*!***************************!*\
  !*** ./images/lenovo.png ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/lenovo.png";

/***/ }),

/***/ "./images/logo.svg":
/*!*************************!*\
  !*** ./images/logo.svg ***!
  \*************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/logo.svg";

/***/ }),

/***/ "./images/person.svg":
/*!***************************!*\
  !*** ./images/person.svg ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/person.svg";

/***/ }),

/***/ "./images/phone.svg":
/*!**************************!*\
  !*** ./images/phone.svg ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/phone.svg";

/***/ }),

/***/ "./images/repair.svg":
/*!***************************!*\
  !*** ./images/repair.svg ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/repair.svg";

/***/ }),

/***/ "./images/samsung.png":
/*!****************************!*\
  !*** ./images/samsung.png ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/samsung.png";

/***/ }),

/***/ "./images/search.svg":
/*!***************************!*\
  !*** ./images/search.svg ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/search.svg";

/***/ }),

/***/ "./images/small-arrow-red.svg":
/*!************************************!*\
  !*** ./images/small-arrow-red.svg ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/small-arrow-red.svg";

/***/ }),

/***/ "./images/small-arrow.svg":
/*!********************************!*\
  !*** ./images/small-arrow.svg ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/small-arrow.svg";

/***/ }),

/***/ "./images/sony.svg":
/*!*************************!*\
  !*** ./images/sony.svg ***!
  \*************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/sony.svg";

/***/ }),

/***/ "./images/top-screen-image.jpg":
/*!*************************************!*\
  !*** ./images/top-screen-image.jpg ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/top-screen-image.jpg";

/***/ }),

/***/ "./images/viewsonic.png":
/*!******************************!*\
  !*** ./images/viewsonic.png ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/viewsonic.png";

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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunk"] = self["webpackChunk"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["vendors-node_modules_swiper_swiper-bundle_min_css-node_modules_swiper_swiper-bundle_esm_js"], () => (__webpack_require__("./js/index.js")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=main.js.map