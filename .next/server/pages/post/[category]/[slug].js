module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// object to store loaded chunks
/******/ 	// "0" means "already loaded"
/******/ 	var installedChunks = {
/******/ 		7: 0
/******/ 	};
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/ 	// This file contains only the entry chunk.
/******/ 	// The chunk loading function for additional chunks
/******/ 	__webpack_require__.e = function requireEnsure(chunkId) {
/******/ 		var promises = [];
/******/
/******/
/******/ 		// require() chunk loading for javascript
/******/
/******/ 		// "0" is the signal for "already loaded"
/******/ 		if(installedChunks[chunkId] !== 0) {
/******/ 			var chunk = require("../../../" + ({}[chunkId]||chunkId) + "." + {"8":"35033e31e8950af067ef","9":"b6a4bf0fedbc5bfcd0e4","10":"7e7fbf27d9e5f8351f0f","11":"75f9748bff568bf9e40e","12":"ff5b65bf855e79054f7f","13":"a98a897b02df78a6ea27","14":"71653082c7ceb59bd8df","15":"4784486342d89f448001","16":"1c2f16de0bdbb95bab65","17":"025ec48833975194ed29","18":"a7e8ba23575bf03f4c4b"}[chunkId] + ".js");
/******/ 			var moreModules = chunk.modules, chunkIds = chunk.ids;
/******/ 			for(var moduleId in moreModules) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 			for(var i = 0; i < chunkIds.length; i++)
/******/ 				installedChunks[chunkIds[i]] = 0;
/******/ 		}
/******/ 		return Promise.all(promises);
/******/ 	};
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
/******/ 	// uncaught error handler for webpack runtime
/******/ 	__webpack_require__.oe = function(err) {
/******/ 		process.nextTick(function() {
/******/ 			throw err; // catch this error by using import().catch()
/******/ 		});
/******/ 	};
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "0QCG":
/***/ (function(module, exports) {

module.exports = require("remark-gfm");

/***/ }),

/***/ 3:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("45Mb");


/***/ }),

/***/ "45Mb":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "default", function() { return /* reexport */ Post; });

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "gray-matter"
var external_gray_matter_ = __webpack_require__("uo/4");
var external_gray_matter_default = /*#__PURE__*/__webpack_require__.n(external_gray_matter_);

// EXTERNAL MODULE: external "react-markdown"
var external_react_markdown_ = __webpack_require__("id0+");
var external_react_markdown_default = /*#__PURE__*/__webpack_require__.n(external_react_markdown_);

// EXTERNAL MODULE: external "react-syntax-highlighter"
var external_react_syntax_highlighter_ = __webpack_require__("RyM3");

// EXTERNAL MODULE: external "remark-gfm"
var external_remark_gfm_ = __webpack_require__("0QCG");
var external_remark_gfm_default = /*#__PURE__*/__webpack_require__.n(external_remark_gfm_);

// CONCATENATED MODULE: ./views/Post/Post.tsx
var __jsx = external_react_default.a.createElement;






const CodeBlock = ({
  language,
  value
}) => {
  return __jsx(external_react_syntax_highlighter_["Prism"], {
    showLineNumbers: true,
    language: language
  }, value);
};

const Page = ({
  content,
  data = {}
}) => {
  const url = window.location.href;
  const loc = url.substring(url.lastIndexOf('/') + 1, url.length);
  console.log(url);
  return __jsx(external_react_default.a.Fragment, null, __jsx("div", null, "This is my article !"), __jsx("div", null, content === undefined && __jsx("h2", null, "\u9519\u8BEF\uFF0C\u672A\u627E\u5230\uFF01"), content !== undefined && __jsx("div", null, __jsx("h1", null, data.title), __jsx("span", null, new Date(data.date).toLocaleDateString()), __jsx("article", null, __jsx(external_react_markdown_default.a, {
    escapeHtml: true,
    source: content,
    plugins: [external_remark_gfm_default.a],
    renderers: {
      code: CodeBlock
    }
  })))));
};

Page.getInitialProps = async context => {
  // 1. 获取 Slug
  const {
    slug,
    category
  } = context.query; // 2. 获取语言

  const {
    lng = "zh-CN"
  } = context.req || {}; // 3. markdown to json 

  try {
    const fileData = await __webpack_require__("amvk")(`./${category}/${lng}/${slug}.md`);
    const {
      data,
      content
    } = external_gray_matter_default()(fileData.default);
    return {
      namespacesRequired: ["common"],
      data,
      content
    };
  } catch (error) {
    return {
      namespacesRequired: ["common"],
      content: undefined
    };
  }
};

/* harmony default export */ var Post = (Page);
// CONCATENATED MODULE: ./views/Post/index.ts

// CONCATENATED MODULE: ./pages/post/[category]/[slug]/index.ts


/***/ }),

/***/ "RyM3":
/***/ (function(module, exports) {

module.exports = require("react-syntax-highlighter");

/***/ }),

/***/ "amvk":
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./blog/en-US/apisix-vs-api7.md": [
		"a6w9",
		8
	],
	"./blog/en-US/business-support.md": [
		"on/k",
		9
	],
	"./blog/en-US/diary.md": [
		"G2jT",
		10
	],
	"./blog/en-US/form-api7-trial.md": [
		"8Ttg",
		11
	],
	"./blog/en-US/learn-web.md": [
		"FOqR",
		12
	],
	"./blog/zh-CN/apisix-vs-api7.md": [
		"SO9H",
		13
	],
	"./blog/zh-CN/business-support.md": [
		"YMb5",
		14
	],
	"./blog/zh-CN/diary.md": [
		"d9FO",
		15
	],
	"./blog/zh-CN/form-api7-trial.md": [
		"kqo0",
		16
	],
	"./blog/zh-CN/learn-web.md": [
		"d098",
		17
	],
	"./blog/zh-CN/learn-web2.md": [
		"1Mfw",
		18
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(function() {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "amvk";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "id0+":
/***/ (function(module, exports) {

module.exports = require("react-markdown");

/***/ }),

/***/ "uo/4":
/***/ (function(module, exports) {

module.exports = require("gray-matter");

/***/ })

/******/ });