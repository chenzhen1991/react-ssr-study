/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./server/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./server/index.js":
/*!*************************!*\
  !*** ./server/index.js ***!
  \*************************/
/*! no exports provided */
/***/ (function(module, exports) {

eval("throw new Error(\"Module build failed (from ./node_modules/babel-loader/lib/index.js):\\nSyntaxError: C:\\\\Users\\\\admin\\\\WebstormProjects\\\\react-ssr-study\\\\server\\\\index.js: Unexpected token (70:37)\\n\\n\\u001b[0m \\u001b[90m 68 | \\u001b[39m\\u001b[32m             </body>\\u001b[39m\\u001b[0m\\n\\u001b[0m \\u001b[90m 69 | \\u001b[39m\\u001b[32m             <script>\\u001b[39m\\u001b[0m\\n\\u001b[0m\\u001b[31m\\u001b[1m>\\u001b[22m\\u001b[39m\\u001b[90m 70 | \\u001b[39m\\u001b[32m                window.__context = ${}\\u001b[39m\\u001b[0m\\n\\u001b[0m \\u001b[90m    | \\u001b[39m                                     \\u001b[31m\\u001b[1m^\\u001b[22m\\u001b[39m\\u001b[0m\\n\\u001b[0m \\u001b[90m 71 | \\u001b[39m\\u001b[32m             </script>\\u001b[39m\\u001b[0m\\n\\u001b[0m \\u001b[90m 72 | \\u001b[39m\\u001b[32m             <script src=\\\"/bundle.js\\\"></script>\\u001b[39m\\u001b[0m\\n\\u001b[0m \\u001b[90m 73 | \\u001b[39m\\u001b[32m         </html>\\u001b[39m\\u001b[0m\\n    at Object._raise (C:\\\\Users\\\\admin\\\\WebstormProjects\\\\react-ssr-study\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:757:17)\\n    at Object.raiseWithData (C:\\\\Users\\\\admin\\\\WebstormProjects\\\\react-ssr-study\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:750:17)\\n    at Object.raise (C:\\\\Users\\\\admin\\\\WebstormProjects\\\\react-ssr-study\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:744:17)\\n    at Object.unexpected (C:\\\\Users\\\\admin\\\\WebstormProjects\\\\react-ssr-study\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:8834:16)\\n    at Object.parseExprAtom (C:\\\\Users\\\\admin\\\\WebstormProjects\\\\react-ssr-study\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:10169:20)\\n    at Object.parseExprAtom (C:\\\\Users\\\\admin\\\\WebstormProjects\\\\react-ssr-study\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:4648:20)\\n    at Object.parseExprSubscripts (C:\\\\Users\\\\admin\\\\WebstormProjects\\\\react-ssr-study\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:9688:23)\\n    at Object.parseMaybeUnary (C:\\\\Users\\\\admin\\\\WebstormProjects\\\\react-ssr-study\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:9668:21)\\n    at Object.parseExprOps (C:\\\\Users\\\\admin\\\\WebstormProjects\\\\react-ssr-study\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:9538:23)\\n    at Object.parseMaybeConditional (C:\\\\Users\\\\admin\\\\WebstormProjects\\\\react-ssr-study\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:9511:23)\\n    at Object.parseMaybeAssign (C:\\\\Users\\\\admin\\\\WebstormProjects\\\\react-ssr-study\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:9466:21)\\n    at Object.parseExpression (C:\\\\Users\\\\admin\\\\WebstormProjects\\\\react-ssr-study\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:9418:23)\\n    at Object.parseTemplate (C:\\\\Users\\\\admin\\\\WebstormProjects\\\\react-ssr-study\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:10458:34)\\n    at Object.parseExprAtom (C:\\\\Users\\\\admin\\\\WebstormProjects\\\\react-ssr-study\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:10107:21)\\n    at Object.parseExprAtom (C:\\\\Users\\\\admin\\\\WebstormProjects\\\\react-ssr-study\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:4648:20)\\n    at Object.parseExprSubscripts (C:\\\\Users\\\\admin\\\\WebstormProjects\\\\react-ssr-study\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:9688:23)\\n    at Object.parseMaybeUnary (C:\\\\Users\\\\admin\\\\WebstormProjects\\\\react-ssr-study\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:9668:21)\\n    at Object.parseExprOps (C:\\\\Users\\\\admin\\\\WebstormProjects\\\\react-ssr-study\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:9538:23)\\n    at Object.parseMaybeConditional (C:\\\\Users\\\\admin\\\\WebstormProjects\\\\react-ssr-study\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:9511:23)\\n    at Object.parseMaybeAssign (C:\\\\Users\\\\admin\\\\WebstormProjects\\\\react-ssr-study\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:9466:21)\\n    at Object.parseExprListItem (C:\\\\Users\\\\admin\\\\WebstormProjects\\\\react-ssr-study\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:10839:18)\\n    at Object.parseCallExpressionArguments (C:\\\\Users\\\\admin\\\\WebstormProjects\\\\react-ssr-study\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:9882:22)\\n    at Object.parseSubscript (C:\\\\Users\\\\admin\\\\WebstormProjects\\\\react-ssr-study\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:9782:31)\\n    at Object.parseSubscripts (C:\\\\Users\\\\admin\\\\WebstormProjects\\\\react-ssr-study\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:9711:19)\\n    at Object.parseExprSubscripts (C:\\\\Users\\\\admin\\\\WebstormProjects\\\\react-ssr-study\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:9694:17)\\n    at Object.parseMaybeUnary (C:\\\\Users\\\\admin\\\\WebstormProjects\\\\react-ssr-study\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:9668:21)\\n    at Object.parseExprOps (C:\\\\Users\\\\admin\\\\WebstormProjects\\\\react-ssr-study\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:9538:23)\\n    at Object.parseMaybeConditional (C:\\\\Users\\\\admin\\\\WebstormProjects\\\\react-ssr-study\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:9511:23)\\n    at Object.parseMaybeAssign (C:\\\\Users\\\\admin\\\\WebstormProjects\\\\react-ssr-study\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:9466:21)\\n    at Object.parseExpression (C:\\\\Users\\\\admin\\\\WebstormProjects\\\\react-ssr-study\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:9418:23)\");\n\n//# sourceURL=webpack:///./server/index.js?");

/***/ })

/******/ });