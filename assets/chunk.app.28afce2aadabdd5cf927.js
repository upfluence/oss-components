/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
var __ember_auto_import__;
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "../../../../../tmp/broccoli--2460-N1ggFkzS8Wnl/cache-199-webpack_bundler_ember_auto_import_webpack/app.cjs"
/*!******************************************************************************************************************!*\
  !*** ../../../../../tmp/broccoli--2460-N1ggFkzS8Wnl/cache-199-webpack_bundler_ember_auto_import_webpack/app.cjs ***!
  \******************************************************************************************************************/
(module, __unused_webpack_exports, __webpack_require__) {

eval("{\nmodule.exports = (function(){\n  var d = _eai_d;\n  var r = _eai_r;\n  window.emberAutoImportDynamic = function(specifier) {\n    if (arguments.length === 1) {\n      return r('_eai_dyn_' + specifier);\n    } else {\n      return r('_eai_dynt_' + specifier)(Array.prototype.slice.call(arguments, 1))\n    }\n  };\n  window.emberAutoImportSync = function(specifier) {\n    return r('_eai_sync_' + specifier)(Array.prototype.slice.call(arguments, 1))\n  };\n  function esc(m) {\n    return m && m.__esModule ? m : Object.assign({ default: m }, m);\n  }\n    d('@floating-ui/dom', [], function() { return esc(__webpack_require__(/*! @floating-ui/dom */ \"./node_modules/.pnpm/@floating-ui+dom@1.6.3/node_modules/@floating-ui/dom/dist/floating-ui.dom.esm.js\")); });\n    d('@formatjs/icu-messageformat-parser', [], function() { return esc(__webpack_require__(/*! @formatjs/icu-messageformat-parser */ \"./node_modules/.pnpm/@formatjs+icu-messageformat-parser@2.7.6/node_modules/@formatjs/icu-messageformat-parser/lib/index.js\")); });\n    d('@formatjs/intl', [], function() { return esc(__webpack_require__(/*! @formatjs/intl */ \"./node_modules/.pnpm/@formatjs+intl@2.10.0_typescript@5.9.3/node_modules/@formatjs/intl/lib/index.js\")); });\n    d('dompurify', [], function() { return esc(__webpack_require__(/*! dompurify */ \"./node_modules/.pnpm/dompurify@3.3.3/node_modules/dompurify/dist/purify.cjs.js\")); });\n    d('ember-resolver', [], function() { return esc(__webpack_require__(/*! ember-resolver */ \"./node_modules/.pnpm/ember-resolver@13.2.0/node_modules/ember-resolver/addon/index.js\")); });\n    d('eventemitter3', [], function() { return esc(__webpack_require__(/*! eventemitter3 */ \"./node_modules/.pnpm/eventemitter3@5.0.1/node_modules/eventemitter3/index.js\")); });\n    d('intl-messageformat', [], function() { return esc(__webpack_require__(/*! intl-messageformat */ \"./node_modules/.pnpm/intl-messageformat@10.5.11/node_modules/intl-messageformat/lib/index.js\")); });\n})();\n\n\n//# sourceURL=webpack://__ember_auto_import__/../../../../../tmp/broccoli--2460-N1ggFkzS8Wnl/cache-199-webpack_bundler_ember_auto_import_webpack/app.cjs?\n}");

/***/ },

/***/ "../../../../../tmp/broccoli--2460-N1ggFkzS8Wnl/cache-199-webpack_bundler_ember_auto_import_webpack/l.cjs"
/*!****************************************************************************************************************!*\
  !*** ../../../../../tmp/broccoli--2460-N1ggFkzS8Wnl/cache-199-webpack_bundler_ember_auto_import_webpack/l.cjs ***!
  \****************************************************************************************************************/
(module, exports) {

eval("{\nwindow._eai_r = require;\nwindow._eai_d = define;\n\n\n//# sourceURL=webpack://__ember_auto_import__/../../../../../tmp/broccoli--2460-N1ggFkzS8Wnl/cache-199-webpack_bundler_ember_auto_import_webpack/l.cjs?\n}");

/***/ }

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	const __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		const cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		const module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		if (!(moduleId in __webpack_modules__)) {
/******/ 			delete __webpack_module_cache__[moduleId];
/******/ 			const e = new Error("Cannot find module '" + moduleId + "'");
/******/ 			e.code = 'MODULE_NOT_FOUND';
/******/ 			throw e;
/******/ 		}
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 		const deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn) => {
/******/ 			if(chunkIds) {
/******/ 				deferred.push([chunkIds, fn]);
/******/ 				return;
/******/ 			}
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				let [chunkIds, fn] = deferred[i];
/******/ 				let fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if (__webpack_require__.O.j(chunkIds[j])) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					const r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	// define getter/value functions for harmony exports
/******/ 	__webpack_require__.d = (exports, definition) => {
/******/ 		for(var key in definition) {
/******/ 			if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 				Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 			}
/******/ 		}
/******/ 	};
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop));
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = (exports) => {
/******/ 		Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		const installedChunks = {
/******/ 			"app": 0
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
/******/ 		const webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			let [chunkIds, moreModules, runtime] = data;
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
/******/ 		const chunkLoadingGlobal = globalThis["webpackChunk_ember_auto_import_"] ||= [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	__webpack_require__.O(undefined, ["vendors-node_modules_pnpm_floating-ui_dom_1_6_3_node_modules_floating-ui_dom_dist_floating-ui-6ceaa9"], () => (__webpack_require__("../../../../../tmp/broccoli--2460-N1ggFkzS8Wnl/cache-199-webpack_bundler_ember_auto_import_webpack/l.cjs")))
/******/ 	let __webpack_exports__ = __webpack_require__.O(undefined, ["vendors-node_modules_pnpm_floating-ui_dom_1_6_3_node_modules_floating-ui_dom_dist_floating-ui-6ceaa9"], () => (__webpack_require__("../../../../../tmp/broccoli--2460-N1ggFkzS8Wnl/cache-199-webpack_bundler_ember_auto_import_webpack/app.cjs")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	__ember_auto_import__ = __webpack_exports__;
/******/ 	
/******/ })()
;