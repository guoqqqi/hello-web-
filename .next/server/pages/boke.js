module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/boke/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/boke/index.js":
/*!*****************************!*\
  !*** ./pages/boke/index.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _views_Boke_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../views/Boke/index */ \"./views/Boke/index.ts\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return _views_Boke_index__WEBPACK_IMPORTED_MODULE_0__[\"default\"]; });\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9ib2tlL2luZGV4LmpzP2I1NjQiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUEiLCJmaWxlIjoiLi9wYWdlcy9ib2tlL2luZGV4LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IHtkZWZhdWx0fSBmcm9tIFwiLi4vLi4vdmlld3MvQm9rZS9pbmRleFwiXG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/boke/index.js\n");

/***/ }),

/***/ "./views/Boke/Boke.tsx":
/*!*****************************!*\
  !*** ./views/Boke/Boke.tsx ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_seo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-seo */ \"next-seo\");\n/* harmony import */ var next_seo__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_seo__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./style */ \"./views/Boke/style.ts\");\n/* harmony import */ var _component_ApplePodcast__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./component/ApplePodcast */ \"./views/Boke/component/ApplePodcast/index.ts\");\nvar _jsxFileName = \"/Users/guoqi/workspace/hello-web-/views/Boke/Boke.tsx\";\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\n\nconst Boke = ({}) => {\n  return __jsx(\"div\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 11,\n      columnNumber: 5\n    }\n  }, __jsx(next_seo__WEBPACK_IMPORTED_MODULE_1__[\"NextSeo\"], {\n    title: \"\\u97F3\\u64AD\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 12,\n      columnNumber: 7\n    }\n  }), __jsx(\"div\", {\n    style: {\n      textAlign: 'center',\n      fontSize: '27px',\n      maxWidth: '1200px'\n    },\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 13,\n      columnNumber: 7\n    }\n  }, __jsx(\"p\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 14,\n      columnNumber: 9\n    }\n  }, \"\\u64AD\\u5BA2\\u5BA2\\u6237\\u7AEF\\u9875\\u9762\\u6A21\\u62DF\")), __jsx(_style__WEBPACK_IMPORTED_MODULE_2__[\"SSection\"], {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 16,\n      columnNumber: 7\n    }\n  }, __jsx(_style__WEBPACK_IMPORTED_MODULE_2__[\"SBox\"], {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 17,\n      columnNumber: 9\n    }\n  }, __jsx(\"form\", {\n    action: \"\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 18,\n      columnNumber: 11\n    }\n  }, __jsx(\"label\", {\n    htmlFor: \"\",\n    style: {\n      fontSize: '18px',\n      paddingBottom: '10px'\n    },\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 19,\n      columnNumber: 13\n    }\n  }, \"\\u4ECE RSS Feed \\u8BFB\\u53D6\\u64AD\\u5BA2\\u8282\\u76EE\\u4FE1\\u606F \"), __jsx(_style__WEBPACK_IMPORTED_MODULE_2__[\"SInner\"], {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 20,\n      columnNumber: 13\n    }\n  }, __jsx(\"input\", {\n    placeholder: \"\\u8BF7\\u8F93\\u5165 RSS Feed URL\",\n    type: \"text\",\n    name: \"url\",\n    style: {\n      width: '400px',\n      marginRight: '10px'\n    },\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 21,\n      columnNumber: 15\n    }\n  }), __jsx(\"button\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 22,\n      columnNumber: 15\n    }\n  }, \"\\u63D0\\u4EA4\"))))), __jsx(_style__WEBPACK_IMPORTED_MODULE_2__[\"SSection\"], {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 27,\n      columnNumber: 7\n    }\n  }, __jsx(_style__WEBPACK_IMPORTED_MODULE_2__[\"SBox\"], {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 28,\n      columnNumber: 9\n    }\n  }, __jsx(\"form\", {\n    action: \"\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 29,\n      columnNumber: 11\n    }\n  }, __jsx(\"label\", {\n    htmlFor: \"\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 30,\n      columnNumber: 13\n    }\n  }, \"\\u8282\\u76EE\\u540D\\u79F0\"), __jsx(_style__WEBPACK_IMPORTED_MODULE_2__[\"SInner\"], {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 31,\n      columnNumber: 13\n    }\n  }, __jsx(\"input\", {\n    placeholder: \"\\u8BF7\\u8F93\\u5165\\u8282\\u76EE\\u540D\\u79F0\",\n    type: \"text\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 32,\n      columnNumber: 15\n    }\n  })), __jsx(\"label\", {\n    htmlFor: \"\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 34,\n      columnNumber: 13\n    }\n  }, \"\\u5C01\\u9762\\u56FE\"), __jsx(_style__WEBPACK_IMPORTED_MODULE_2__[\"SInner\"], {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 35,\n      columnNumber: 13\n    }\n  }, __jsx(\"input\", {\n    placeholder: \"\\u8BF7\\u8F93\\u5165\\u5C01\\u9762\\u56FE URL\",\n    type: \"text\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 36,\n      columnNumber: 15\n    }\n  })), __jsx(_style__WEBPACK_IMPORTED_MODULE_2__[\"SInner\"], {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 38,\n      columnNumber: 13\n    }\n  }, __jsx(\"img\", {\n    src: \"\",\n    alt: \"\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 38,\n      columnNumber: 22\n    }\n  })), __jsx(\"label\", {\n    htmlFor: \"\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 39,\n      columnNumber: 13\n    }\n  }, \"\\u8282\\u76EE\\u4ECB\\u7ECD\"), __jsx(_style__WEBPACK_IMPORTED_MODULE_2__[\"SInner\"], {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 40,\n      columnNumber: 13\n    }\n  }, __jsx(\"textarea\", {\n    name: \"\",\n    id: \"\",\n    cols: 50,\n    rows: 10,\n    placeholder: \"\\u8BF7\\u8F93\\u5165\\u8282\\u76EE\\u4ECB\\u7ECD\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 41,\n      columnNumber: 15\n    }\n  })), __jsx(\"label\", {\n    htmlFor: \"\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 43,\n      columnNumber: 13\n    }\n  }, \"\\u521B\\u4F5C\\u8005\\u4FE1\\u606F\"), __jsx(_style__WEBPACK_IMPORTED_MODULE_2__[\"SInner\"], {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 44,\n      columnNumber: 13\n    }\n  }, __jsx(\"input\", {\n    placeholder: \"\\u8BF7\\u8F93\\u5165\\u521B\\u4F5C\\u8005\\u4FE1\\u606F\",\n    type: \"text\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 45,\n      columnNumber: 15\n    }\n  })), __jsx(\"label\", {\n    htmlFor: \"\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 47,\n      columnNumber: 13\n    }\n  }, \"\\u64AD\\u5BA2\\u5206\\u7C7B\"), __jsx(_style__WEBPACK_IMPORTED_MODULE_2__[\"SInner\"], {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 48,\n      columnNumber: 13\n    }\n  }, __jsx(\"input\", {\n    placeholder: \"\\u8BF7\\u8F93\\u5165\\u64AD\\u5BA2\\u5206\\u7C7B\",\n    type: \"text\",\n    name: \"\",\n    id: \"\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 49,\n      columnNumber: 15\n    }\n  })))), __jsx(_style__WEBPACK_IMPORTED_MODULE_2__[\"SBox\"], {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 53,\n      columnNumber: 9\n    }\n  }, __jsx(\"div\", {\n    style: {\n      padding: '0 30px 10px 30px',\n      textAlign: 'center'\n    },\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 54,\n      columnNumber: 11\n    }\n  }, __jsx(\"div\", {\n    className: \"chooseBox\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 55,\n      columnNumber: 13\n    }\n  }, __jsx(\"button\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 56,\n      columnNumber: 15\n    }\n  }, \"\\u82F9\\u679C\\u64AD\\u5BA2\"), __jsx(\"button\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 57,\n      columnNumber: 15\n    }\n  }, \"\\u5C0F\\u5B87\\u5B99\"))), __jsx(_component_ApplePodcast__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 60,\n      columnNumber: 11\n    }\n  }))));\n};\n\nBoke.getInitialProps = async () => {\n  return {\n    namespacesRequired: [\"common\"]\n  };\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Boke);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi92aWV3cy9Cb2tlL0Jva2UudHN4P2QzN2QiXSwibmFtZXMiOlsiQm9rZSIsInRleHRBbGlnbiIsImZvbnRTaXplIiwibWF4V2lkdGgiLCJwYWRkaW5nQm90dG9tIiwid2lkdGgiLCJtYXJnaW5SaWdodCIsInBhZGRpbmciLCJnZXRJbml0aWFsUHJvcHMiLCJuYW1lc3BhY2VzUmVxdWlyZWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBO0FBRUE7QUFDQTtBQUNBOztBQUlBLE1BQU1BLElBQTBCLEdBQUcsQ0FBQyxFQUFELEtBQVM7QUFDMUMsU0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyxnREFBRDtBQUFTLFNBQUssRUFBQyxjQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixFQUVFO0FBQUssU0FBSyxFQUFFO0FBQUVDLGVBQVMsRUFBRSxRQUFiO0FBQXVCQyxjQUFRLEVBQUUsTUFBakM7QUFBeUNDLGNBQVEsRUFBRTtBQUFuRCxLQUFaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDhEQURGLENBRkYsRUFLRSxNQUFDLCtDQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLDJDQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFNLFVBQU0sRUFBQyxFQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFPLFdBQU8sRUFBQyxFQUFmO0FBQWtCLFNBQUssRUFBRTtBQUFFRCxjQUFRLEVBQUUsTUFBWjtBQUFvQkUsbUJBQWEsRUFBRTtBQUFuQyxLQUF6QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHlFQURGLEVBRUUsTUFBQyw2Q0FBRDtBQUFBO0FB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QTtBQUFBLEtBQ0U7QUFBSyxTQUFLLEVBQUU7QUFBRUMsYUFBTyxFQUFFLGtCQUFYO0FBQStCTixlQUFTLEVBQUU7QUFBMUMsS0FBWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBSyxhQUFTLEVBQUMsV0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQ0FERixFQUVFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsMEJBRkYsQ0FERixDQURGLEVBT0UsTUFBQywrREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBUEYsQ0ExQkYsQ0FoQkYsQ0FERjtBQXVERCxDQXhERDs7QUEwREFELElBQUksQ0FBQ1EsZUFBTCxHQUF1QixZQUFZO0FBQ2pDLFNBQU87QUFDTEMsc0JBQWtCLEVBQUUsQ0FBQyxRQUFEO0FBRGYsR0FBUDtBQUdELENBSkQ7O0FBTWVULG1FQUFmIiwiZmlsZSI6Ii4vdmlld3MvQm9rZS9Cb2tlLnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IE5leHRQYWdlIH0gZnJvbSBcIm5leHRcIjtcbmltcG9ydCB7IE5leHRTZW8gfSBmcm9tIFwibmV4dC1zZW9cIjtcbmltcG9ydCB7IFNCb3gsIFNJbm5lciwgU1NlY3Rpb24gfSBmcm9tIFwiLi9zdHlsZVwiO1xuaW1wb3J0IEFwcGxlUG9kY2FzdCBmcm9tIFwiLi9jb21wb25lbnQvQXBwbGVQb2RjYXN0XCI7XG5cbnR5cGUgUHJvcHMgPSB7fTtcblxuY29uc3QgQm9rZTogTmV4dFBhZ2U8UHJvcHMsIGFueT4gPSAoeyB9KSA9PiB7XG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxOZXh0U2VvIHRpdGxlPVwi6Z+z5pKtXCIgLz5cbiAgICAgIDxkaXYgc3R5bGU9e3sgdGV4dEFsaWduOiAnY2VudGVyJywgZm9udFNpemU6ICcyN3B4JywgbWF4V2lkdGg6ICcxMjAwcHgnIH19PlxuICAgICAgICA8cD7mkq3lrqLlrqLmiLfnq6/pobXpnaLmqKHmi588L3A+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxTU2VjdGlvbj5cbiAgICAgICAgPFNCb3g+XG4gICAgICAgICAgPGZvcm0gYWN0aW9uPVwiXCI+XG4gICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cIlwiIHN0eWxlPXt7IGZvbnRTaXplOiAnMThweCcsIHBhZGRpbmdCb3R0b206ICcxMHB4JyB9fT7ku44gUlNTIEZlZWQg6K+75Y+W5pKt5a6i6IqC55uu5L+h5oGvIDwvbGFiZWw+XG4gICAgICAgICAgICA8U0lubmVyPlxuICAgICAgICAgICAgICA8aW5wdXQgcGxhY2Vob2xkZXI9XCLor7fovpPlhaUgUlNTIEZlZWQgVVJMXCIgdHlwZT1cInRleHRcIiBuYW1lPVwidXJsXCIgc3R5bGU9e3sgd2lkdGg6ICc0MDBweCcsIG1hcmdpblJpZ2h0OiAnMTBweCcgfX0gLz5cbiAgICAgICAgICAgICAgPGJ1dHRvbj7mj5DkuqQ8L2J1dHRvbj5cbiAgICAgICAgICAgIDwvU0lubmVyPlxuICAgICAgICAgIDwvZm9ybT5cbiAgICAgICAgPC9TQm94PlxuICAgICAgPC9TU2VjdGlvbj5cbiAgICAgIDxTU2VjdGlvbj5cbiAgICAgICAgPFNCb3g+XG4gICAgICAgICAgPGZvcm0gYWN0aW9uPVwiXCI+XG4gICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cIlwiPuiKguebruWQjeensDwvbGFiZWw+XG4gICAgICAgICAgICA8U0lubmVyPlxuICAgICAgICAgICAgICA8aW5wdXQgcGxhY2Vob2xkZXI9XCLor7fovpPlhaXoioLnm67lkI3np7BcIiB0eXBlPVwidGV4dFwiIC8+XG4gICAgICAgICAgICA8L1NJbm5lcj5cbiAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwiXCI+5bCB6Z2i5Zu+PC9sYWJlbD5cbiAgICAgICAgICAgIDxTSW5uZXI+XG4gICAgICAgICAgICAgIDxpbnB1dCBwbGFjZWhvbGRlcj1cIuivt+i+k+WFpeWwgemdouWbviBVUkxcIiB0eXBlPVwidGV4dFwiIC8+XG4gICAgICAgICAgICA8L1NJbm5lcj5cbiAgICAgICAgICAgIDxTSW5uZXIgPjxpbWcgc3JjPVwiXCIgYWx0PVwiXCIgLz48L1NJbm5lcj5cbiAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwiXCI+6IqC55uu5LuL57uNPC9sYWJlbD5cbiAgICAgICAgICAgIDxTSW5uZXI+XG4gICAgICAgICAgICAgIDx0ZXh0YXJlYSBuYW1lPVwiXCIgaWQ9XCJcIiBjb2xzPXs1MH0gcm93cz17MTB9IHBsYWNlaG9sZGVyPVwi6K+36L6T5YWl6IqC55uu5LuL57uNXCI+PC90ZXh0YXJlYT5cbiAgICAgICAgICAgIDwvU0lubmVyPlxuICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJcIj7liJvkvZzogIXkv6Hmga88L2xhYmVsPlxuICAgICAgICAgICAgPFNJbm5lcj5cbiAgICAgICAgICAgICAgPGlucHV0IHBsYWNlaG9sZGVyPVwi6K+36L6T5YWl5Yib5L2c6ICF5L+h5oGvXCIgdHlwZT1cInRleHRcIiAvPlxuICAgICAgICAgICAgPC9TSW5uZXI+XG4gICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cIlwiPuaSreWuouWIhuexuzwvbGFiZWw+XG4gICAgICAgICAgICA8U0lubmVyPlxuICAgICAgICAgICAgICA8aW5wdXQgcGxhY2Vob2xkZXI9XCLor7fovpPlhaXmkq3lrqLliIbnsbtcIiB0eXBlPVwidGV4dFwiIG5hbWU9XCJcIiBpZD1cIlwiIC8+XG4gICAgICAgICAgICA8L1NJbm5lcj5cbiAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgIDwvU0JveD5cbiAgICAgICAgPFNCb3g+XG4gICAgICAgICAgPGRpdiBzdHlsZT17eyBwYWRkaW5nOiAnMCAzMHB4IDEwcHggMzBweCcsIHRleHRBbGlnbjogJ2NlbnRlcicgfX0+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNob29zZUJveFwiPlxuICAgICAgICAgICAgICA8YnV0dG9uPuiLueaenOaSreWuojwvYnV0dG9uPlxuICAgICAgICAgICAgICA8YnV0dG9uPuWwj+Wuh+WumTwvYnV0dG9uPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPEFwcGxlUG9kY2FzdCAvPlxuICAgICAgICA8L1NCb3g+XG4gICAgICA8L1NTZWN0aW9uPlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuQm9rZS5nZXRJbml0aWFsUHJvcHMgPSBhc3luYyAoKSA9PiB7XG4gIHJldHVybiB7XG4gICAgbmFtZXNwYWNlc1JlcXVpcmVkOiBbXCJjb21tb25cIl0sXG4gIH07XG59O1xuXG5leHBvcnQgZGVmYXVsdCBCb2tlO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./views/Boke/Boke.tsx\n");

/***/ }),

/***/ "./views/Boke/component/ApplePodcast/ApplePodcast.tsx":
/*!************************************************************!*\
  !*** ./views/Boke/component/ApplePodcast/ApplePodcast.tsx ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_seo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-seo */ \"next-seo\");\n/* harmony import */ var next_seo__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_seo__WEBPACK_IMPORTED_MODULE_1__);\nvar _jsxFileName = \"/Users/guoqi/workspace/hello-web-/views/Boke/component/ApplePodcast/ApplePodcast.tsx\";\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\nconst ApplePodcast = ({}) => {\n  return __jsx(\"div\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 9,\n      columnNumber: 5\n    }\n  }, __jsx(next_seo__WEBPACK_IMPORTED_MODULE_1__[\"NextSeo\"], {\n    title: \"\\u82F9\\u679C\\u64AD\\u5BA2\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 10,\n      columnNumber: 7\n    }\n  }), __jsx(\"div\", {\n    style: {\n      width: '414px',\n      height: '841px',\n      backgroundColor: 'black',\n      margin: '0 auto'\n    },\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 11,\n      columnNumber: 7\n    }\n  }));\n};\n\nApplePodcast.getInitialProps = async () => {\n  return {\n    namespacesRequired: [\"common\"]\n  };\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (ApplePodcast);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi92aWV3cy9Cb2tlL2NvbXBvbmVudC9BcHBsZVBvZGNhc3QvQXBwbGVQb2RjYXN0LnRzeD84OTcwIl0sIm5hbWVzIjpbIkFwcGxlUG9kY2FzdCIsIndpZHRoIiwiaGVpZ2h0IiwiYmFja2dyb3VuZENvbG9yIiwibWFyZ2luIiwiZ2V0SW5pdGlhbFByb3BzIiwibmFtZXNwYWNlc1JlcXVpcmVkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7QUFFQTs7QUFJQSxNQUFNQSxZQUFrQyxHQUFHLENBQUMsRUFBRCxLQUFTO0FBQ2xELFNBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsZ0RBQUQ7QUFBUyxTQUFLLEVBQUMsMEJBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLEVBRUU7QUFBSyxTQUFLLEVBQUU7QUFBQ0MsV0FBSyxFQUFFLE9BQVI7QUFBaUJDLFlBQU0sRUFBRSxPQUF6QjtBQUFrQ0MscUJBQWUsRUFBRSxPQUFuRDtBQUE0REMsWUFBTSxFQUFFO0FBQXBFLEtBQVo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUZGLENBREY7QUFNRCxDQVBEOztBQVNBSixZQUFZLENBQUNLLGVBQWIsR0FBK0IsWUFBWTtBQUN6QyxTQUFPO0FBQ0xDLHNCQUFrQixFQUFFLENBQUMsUUFBRDtBQURmLEdBQVA7QUFHRCxDQUpEOztBQU1lTiwyRUFBZiIsImZpbGUiOiIuL3ZpZXdzL0Jva2UvY29tcG9uZW50L0FwcGxlUG9kY2FzdC9BcHBsZVBvZGNhc3QudHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgTmV4dFBhZ2UgfSBmcm9tIFwibmV4dFwiO1xuaW1wb3J0IHsgTmV4dFNlbyB9IGZyb20gXCJuZXh0LXNlb1wiO1xuXG50eXBlIFByb3BzID0ge307XG5cbmNvbnN0IEFwcGxlUG9kY2FzdDogTmV4dFBhZ2U8UHJvcHMsIGFueT4gPSAoeyB9KSA9PiB7XG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxOZXh0U2VvIHRpdGxlPVwi6Iu55p6c5pKt5a6iXCIgLz5cbiAgICAgIDxkaXYgc3R5bGU9e3t3aWR0aDogJzQxNHB4JywgaGVpZ2h0OiAnODQxcHgnLCBiYWNrZ3JvdW5kQ29sb3I6ICdibGFjaycsIG1hcmdpbjogJzAgYXV0byd9fT48L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbkFwcGxlUG9kY2FzdC5nZXRJbml0aWFsUHJvcHMgPSBhc3luYyAoKSA9PiB7XG4gIHJldHVybiB7XG4gICAgbmFtZXNwYWNlc1JlcXVpcmVkOiBbXCJjb21tb25cIl0sXG4gIH07XG59O1xuXG5leHBvcnQgZGVmYXVsdCBBcHBsZVBvZGNhc3Q7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./views/Boke/component/ApplePodcast/ApplePodcast.tsx\n");

/***/ }),

/***/ "./views/Boke/component/ApplePodcast/index.ts":
/*!****************************************************!*\
  !*** ./views/Boke/component/ApplePodcast/index.ts ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _ApplePodcast__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ApplePodcast */ \"./views/Boke/component/ApplePodcast/ApplePodcast.tsx\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return _ApplePodcast__WEBPACK_IMPORTED_MODULE_0__[\"default\"]; });\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi92aWV3cy9Cb2tlL2NvbXBvbmVudC9BcHBsZVBvZGNhc3QvaW5kZXgudHM/NWM2MiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQSIsImZpbGUiOiIuL3ZpZXdzL0Jva2UvY29tcG9uZW50L0FwcGxlUG9kY2FzdC9pbmRleC50cy5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCB7ZGVmYXVsdH0gZnJvbSBcIi4vQXBwbGVQb2RjYXN0XCJcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./views/Boke/component/ApplePodcast/index.ts\n");

/***/ }),

/***/ "./views/Boke/index.ts":
/*!*****************************!*\
  !*** ./views/Boke/index.ts ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Boke__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Boke */ \"./views/Boke/Boke.tsx\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return _Boke__WEBPACK_IMPORTED_MODULE_0__[\"default\"]; });\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi92aWV3cy9Cb2tlL2luZGV4LnRzP2VkZWYiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUEiLCJmaWxlIjoiLi92aWV3cy9Cb2tlL2luZGV4LnRzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IHtkZWZhdWx0fSBmcm9tIFwiLi9Cb2tlXCJcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./views/Boke/index.ts\n");

/***/ }),

/***/ "./views/Boke/style.ts":
/*!*****************************!*\
  !*** ./views/Boke/style.ts ***!
  \*****************************/
/*! exports provided: SSection, SBox, SInner */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"SSection\", function() { return SSection; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"SBox\", function() { return SBox; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"SInner\", function() { return SInner; });\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ \"styled-components\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);\n\nconst SSection = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.section`\n  display: flex;\n  max-width: 1200px;\n  padding: 20px 40px;\n  margin-top: 20px;\n  background-color: #fff;\n`;\nconst SBox = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div`\n  width: 50%;\n  display: block;\n\n  input {\n    width: 400px;\n    height: 40px;\n    margin: 10px 0 20px 0;\n    border: 1px solid #AAAAAA;\n  }\n\n  .chooseBox {\n    width: 200px;\n    height: 29px;\n    margin: 0 auto;\n    button {\n      width: 100px;\n      color: #0076FF;\n      background-color: #FFFFFF;\n      border: 1px solid #0076FF;\n      border-radius: 2px;\n    }\n    button:focus {\n      color: #FFFFFF;\n      background-color: #0076FF;\n    }\n  }\n`;\nconst SInner = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div`\n  margin-top: 10px;\n  font-size: 22px;\n\n  img {\n    min-width: 200px;\n    min-height: 200px;\n    border: 1px solid #AAAAAA;\n    background-color: #F3F4F5;\n    margin-bottom: 20px;\n  }\n\n  textarea {\n    width: 400px;\n    height: 200px;\n    margin-bottom: 20px;\n  }\n`;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi92aWV3cy9Cb2tlL3N0eWxlLnRzP2YxYWEiXSwibmFtZXMiOlsiU1NlY3Rpb24iLCJzdHlsZWQiLCJzZWN0aW9uIiwiU0JveCIsImRpdiIsIlNJbm5lciJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFTyxNQUFNQSxRQUFRLEdBQUdDLHdEQUFNLENBQUNDLE9BQVE7QUFDdkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBTk87QUFRQSxNQUFNQyxJQUFJLEdBQUdGLHdEQUFNLENBQUNHLEdBQUk7QUFDL0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBM0JPO0FBNkJBLE1BQU1DLE1BQU0sR0FBR0osd0RBQU0sQ0FBQ0csR0FBSTtBQUNqQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBakJPIiwiZmlsZSI6Ii4vdmlld3MvQm9rZS9zdHlsZS50cy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzdHlsZWQgZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XG5cbmV4cG9ydCBjb25zdCBTU2VjdGlvbiA9IHN0eWxlZC5zZWN0aW9uYFxuICBkaXNwbGF5OiBmbGV4O1xuICBtYXgtd2lkdGg6IDEyMDBweDtcbiAgcGFkZGluZzogMjBweCA0MHB4O1xuICBtYXJnaW4tdG9wOiAyMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuYDtcblxuZXhwb3J0IGNvbnN0IFNCb3ggPSBzdHlsZWQuZGl2YFxuICB3aWR0aDogNTAlO1xuICBkaXNwbGF5OiBibG9jaztcblxuICBpbnB1dCB7XG4gICAgd2lkdGg6IDQwMHB4O1xuICAgIGhlaWdodDogNDBweDtcbiAgICBtYXJnaW46IDEwcHggMCAyMHB4IDA7XG4gICAgYm9yZGVyOiAxcHggc29saWQgI0FBQUFBQTtcbiAgfVxuXG4gIC5jaG9vc2VCb3gge1xuICAgIHdpZHRoOiAyMDBweDtcbiAgICBoZWlnaHQ6IDI5cHg7XG4gICAgbWFyZ2luOiAwIGF1dG87XG4gICAgYnV0dG9uIHtcbiAgICAgIHdpZHRoOiAxMDBweDtcbiAgICAgIGNvbG9yOiAjMDA3NkZGO1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogI0ZGRkZGRjtcbiAgICAgIGJvcmRlcjogMXB4IHNvbGlkICMwMDc2RkY7XG4gICAgICBib3JkZXItcmFkaXVzOiAycHg7XG4gICAgfVxuICAgIGJ1dHRvbjpmb2N1cyB7XG4gICAgICBjb2xvcjogI0ZGRkZGRjtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDc2RkY7XG4gICAgfVxuICB9XG5gXG5cbmV4cG9ydCBjb25zdCBTSW5uZXIgPSBzdHlsZWQuZGl2YFxuICBtYXJnaW4tdG9wOiAxMHB4O1xuICBmb250LXNpemU6IDIycHg7XG5cbiAgaW1nIHtcbiAgICBtaW4td2lkdGg6IDIwMHB4O1xuICAgIG1pbi1oZWlnaHQ6IDIwMHB4O1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICNBQUFBQUE7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0YzRjRGNTtcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICB9XG5cbiAgdGV4dGFyZWEge1xuICAgIHdpZHRoOiA0MDBweDtcbiAgICBoZWlnaHQ6IDIwMHB4O1xuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gIH1cbmBcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./views/Boke/style.ts\n");

/***/ }),

/***/ "next-seo":
/*!***************************!*\
  !*** external "next-seo" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"next-seo\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0LXNlb1wiPzJjYmUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoibmV4dC1zZW8uanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0LXNlb1wiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///next-seo\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiPzU4OGUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react\n");

/***/ }),

/***/ "styled-components":
/*!************************************!*\
  !*** external "styled-components" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"styled-components\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJzdHlsZWQtY29tcG9uZW50c1wiP2Y1YWQiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoic3R5bGVkLWNvbXBvbmVudHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJzdHlsZWQtY29tcG9uZW50c1wiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///styled-components\n");

/***/ })

/******/ });