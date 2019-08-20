module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
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
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/blocks.js":
/*!******************************!*\
  !*** ./components/blocks.js ***!
  \******************************/
/*! exports provided: Banner, Container, Callout, List, FAQ, Gallery, Team, Header, Schedule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Banner", function() { return Banner; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Container", function() { return Container; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Callout", function() { return Callout; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "List", function() { return List; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FAQ", function() { return FAQ; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Gallery", function() { return Gallery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Team", function() { return Team; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Header", function() { return Header; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Schedule", function() { return Schedule; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var rebass__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rebass */ "rebass");
/* harmony import */ var rebass__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(rebass__WEBPACK_IMPORTED_MODULE_4__);



var _jsxFileName = "/Users/ClairesAccount/Documents/GitHub/site/components/blocks.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement;

const Banner = props => __jsx(rebass__WEBPACK_IMPORTED_MODULE_4__["Box"], {
  sx: {
    bg: 'bannerBG',
    color: 'bannerColor',
    py: [4, 5],
    mb: [4, 5]
  },
  __source: {
    fileName: _jsxFileName,
    lineNumber: 4
  },
  __self: undefined
}, __jsx(rebass__WEBPACK_IMPORTED_MODULE_4__["Box"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__["default"])({}, props, {
  variant: "container",
  sx: {
    maxWidth: 'narrow',
    textAlign: 'center',
    h1: {
      fontSize: [5, 6, 7],
      fontWeight: 'bold',
      lineHeight: 'tight',
      textShadow: '0 0 5px currentColor',
      mb: 3
    },
    h2: {
      color: 'bannerColorAlt',
      fontSize: [3, 4, 5],
      lineHeight: 'heading',
      fontWeight: 'medium',
      mb: 2
    },
    p: {
      color: 'bannerColorAlt',
      fontWeight: 'medium',
      fontSize: 2
    },
    li: {
      mr: 3
    }
  },
  __source: {
    fileName: _jsxFileName,
    lineNumber: 12
  },
  __self: undefined
})));
const Container = (_ref) => {
  let {
    width = 'container'
  } = _ref,
      props = Object(_babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__["default"])(_ref, ["width"]);

  return __jsx(rebass__WEBPACK_IMPORTED_MODULE_4__["Box"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__["default"])({}, props, {
    variant: "container",
    sx: Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({
      maxWidth: width,
      'h2, h3, strong': {
        fontWeight: 'bold'
      },
      h2: {
        fontSize: [4, 5],
        mt: [4, 5],
        mb: [2, 3]
      },
      h3: {
        fontSize: [3, 4],
        mt: [3, 4],
        mb: [2, 3]
      },
      p: {
        fontSize: [1, 2]
      },
      a: {
        color: 'primary',
        fontWeight: 'medium'
      },
      mark: {
        color: 'inherit',
        bg: 'primaryWash'
      }
    }, props.sx),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: undefined
  }));
};
const Callout = props => __jsx(rebass__WEBPACK_IMPORTED_MODULE_4__["Box"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__["default"])({}, props, {
  sx: Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({
    bg: 'elevated',
    px: [3, 4],
    py: [2, 3, 4],
    borderRadius: 'extra',
    boxShadow: 'sheet',
    fontSize: [2, 3],
    mb: [4, 5]
  }, props.sx, {
    iframe: {
      borderRadius: 'extra'
    }
  }),
  __source: {
    fileName: _jsxFileName,
    lineNumber: 81
  },
  __self: undefined
}));
const List = props => __jsx(rebass__WEBPACK_IMPORTED_MODULE_4__["Box"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__["default"])({}, props, {
  sx: Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({
    ul: {
      p: 0,
      m: 0,
      listStyle: 'none',
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(256px, 1fr))',
      gridGap: [3, 4]
    },
    a: {
      fontWeight: 'bold',
      color: 'primary',
      textDecoration: 'none'
    },
    em: {
      display: 'block',
      color: 'muted',
      fontWeight: 'body',
      fontStyle: 'normal',
      fontSize: 0
    }
  }, props.sx),
  __source: {
    fileName: _jsxFileName,
    lineNumber: 100
  },
  __self: undefined
}));
const FAQ = props => __jsx(rebass__WEBPACK_IMPORTED_MODULE_4__["Box"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__["default"])({}, props, {
  sx: Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({
    ul: {
      p: 0,
      m: 0,
      listStyle: 'none',
      display: 'grid',
      gridTemplateColumns: [null, '1fr 1fr'],
      gridGap: [3, 4]
    },
    a: {
      fontWeight: 'bold',
      color: 'primary',
      textDecoration: 'none'
    },
    li: {
      fontSize: [1, null, 2]
    },
    p: {
      my: 0
    },
    strong: {
      display: 'block',
      fontSize: 2
    }
  }, props.sx),
  __source: {
    fileName: _jsxFileName,
    lineNumber: 129
  },
  __self: undefined
}));
const Gallery = props => __jsx(rebass__WEBPACK_IMPORTED_MODULE_4__["Box"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__["default"])({}, props, {
  sx: Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({
    display: 'grid',
    gridTemplateColumns: ['auto', null, 'repeat(2, 1fr)'],
    gridGap: [3, 4, null, 5],
    width: '100%',
    px: [3, 4, null, 5],
    mb: [3, 4, 5, 6],
    'p, li': {
      fontSize: 2
    },
    '> div': {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      bg: 'primaryWash'
    },
    h2: {
      fontSize: [3, 4],
      fontWeight: 'bold',
      my: 0
    }
  }, props.sx),
  __source: {
    fileName: _jsxFileName,
    lineNumber: 159
  },
  __self: undefined
}));
const Team = props => __jsx(rebass__WEBPACK_IMPORTED_MODULE_4__["Box"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__["default"])({}, props, {
  sx: Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({
    ul: {
      p: 0,
      m: 0,
      listStyle: 'none',
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(256px, 1fr))',
      gridGap: [3, 4]
    },
    li: {
      display: 'flex',
      alignItems: 'center'
    },
    p: {
      my: 0,
      '&:first-of-type': {
        lineHeight: 0
      }
    },
    strong: {
      fontSize: [1, 2],
      fontWeight: 'medium'
    },
    em: {
      display: 'block',
      color: 'muted',
      fontWeight: 'body',
      fontStyle: 'normal',
      fontSize: [0, 1],
      my: 0,
      a: {
        color: 'primary'
      }
    },
    img: {
      flexShrink: 'none',
      borderRadius: 'circle',
      width: [64, 72],
      height: [64, 72],
      objectFit: 'cover',
      objectPosition: 'center',
      mr: 3
    }
  }, props.sx),
  __source: {
    fileName: _jsxFileName,
    lineNumber: 188
  },
  __self: undefined
}));
const Header = (_ref2) => {
  let {
    width = 'container',
    sx
  } = _ref2,
      props = Object(_babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__["default"])(_ref2, ["width", "sx"]);

  return __jsx(rebass__WEBPACK_IMPORTED_MODULE_4__["Box"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__["default"])({}, props, {
    sx: Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({
      bg: 'alt',
      color: 'white',
      py: [3, 4, null, 5],
      mb: [4, null, 5],
      h1: {
        fontSize: [5, 6],
        fontWeight: 'bold',
        my: 0
      },
      'h1 + h2': {
        fontWeight: 'medium',
        fontSize: [2, 3],
        my: 0
      }
    }, sx),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 239
    },
    __self: undefined
  }), __jsx(rebass__WEBPACK_IMPORTED_MODULE_4__["Box"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__["default"])({
    variant: "container",
    width: width
  }, props, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 259
    },
    __self: undefined
  })));
};
const Schedule = props => __jsx(rebass__WEBPACK_IMPORTED_MODULE_4__["Box"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__["default"])({}, props, {
  variant: "container",
  sx: {
    columnCount: [null, 2],
    columnGap: [null, 3],
    columnFill: [null, 'balance'],
    h2: {
      fontSize: [4, 5],
      my: 0
    },
    ul: {
      listStyle: 'none',
      pl: 0,
      strong: {
        display: 'block'
      }
    },
    li: {
      fontSize: [2, 3],
      mb: 2
    }
  },
  __source: {
    fileName: _jsxFileName,
    lineNumber: 264
  },
  __self: undefined
}));

/***/ }),

/***/ "./components/photo.js":
/*!*****************************!*\
  !*** ./components/photo.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var _emotion_styled_base__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @emotion/styled-base */ "@emotion/styled-base");
/* harmony import */ var _emotion_styled_base__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_emotion_styled_base__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var rebass__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rebass */ "rebass");
/* harmony import */ var rebass__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(rebass__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! theme-ui */ "theme-ui");
/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(theme_ui__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _theme__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./theme */ "./components/theme.js");




var _jsxFileName = "/Users/ClairesAccount/Documents/GitHub/site/components/photo.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement;




const Caption =
/*#__PURE__*/
_emotion_styled_base__WEBPACK_IMPORTED_MODULE_3___default()(rebass__WEBPACK_IMPORTED_MODULE_5__["Text"], {
  target: "e1vvp2xi0",
  label: "Caption"
})("display:block;font-size:", _theme__WEBPACK_IMPORTED_MODULE_7__["default"].fontSizes[1], "px;line-height:", _theme__WEBPACK_IMPORTED_MODULE_7__["default"].lineHeights.body, ";padding:", _theme__WEBPACK_IMPORTED_MODULE_7__["default"].space[2], "px ", _theme__WEBPACK_IMPORTED_MODULE_7__["default"].space[3], "px;position:absolute;", props => props.captionTop ? `
      top: 0;
      border-radius: ${_theme__WEBPACK_IMPORTED_MODULE_7__["default"].radii.extra}px ${_theme__WEBPACK_IMPORTED_MODULE_7__["default"].radii.extra}px 0 0;
    ` : `
      bottom: 0;
      border-radius: 0 0 ${_theme__WEBPACK_IMPORTED_MODULE_7__["default"].radii.extra}px ${_theme__WEBPACK_IMPORTED_MODULE_7__["default"].radii.extra}px;
    `, ";width:100%;max-width:100%;z-index:0;", ({
  colorMode
}) => colorMode === 'dark' ? `
          background-color: rgba(0, 0, 0, 0.75);
          color: ${_theme__WEBPACK_IMPORTED_MODULE_7__["default"].colors.white};
          @supports (-webkit-backdrop-filter: none) or (backdrop-filter: none) {
            background-color: rgba(0, 0, 0, 0.75);
            -webkit-backdrop-filter: saturate(180%) blur(16px);
          }
        ` : `
          background-color: rgba(255, 255, 255, 0.98);
          color: ${_theme__WEBPACK_IMPORTED_MODULE_7__["default"].colors.black};
          @supports (-webkit-backdrop-filter: none) or (backdrop-filter: none) {
            background-color: rgba(255, 255, 255, 0.75);
            -webkit-backdrop-filter: saturate(180%) blur(20px);
          }
        `, ";@media (prefers-reduced-transparency:reduce){-webkit-backdrop-filter:none !important;}" + ( false ? undefined : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9DbGFpcmVzQWNjb3VudC9Eb2N1bWVudHMvR2l0SHViL3NpdGUvY29tcG9uZW50cy9waG90by5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFLNEIiLCJmaWxlIjoiL1VzZXJzL0NsYWlyZXNBY2NvdW50L0RvY3VtZW50cy9HaXRIdWIvc2l0ZS9jb21wb25lbnRzL3Bob3RvLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHN0eWxlZCBmcm9tICdAZW1vdGlvbi9zdHlsZWQnXG5pbXBvcnQgeyBCb3gsIFRleHQsIEltYWdlIH0gZnJvbSAncmViYXNzJ1xuaW1wb3J0IHsgdXNlQ29sb3JNb2RlIH0gZnJvbSAndGhlbWUtdWknXG5pbXBvcnQgdGhlbWUgZnJvbSAnLi90aGVtZSdcblxuY29uc3QgQ2FwdGlvbiA9IHN0eWxlZChUZXh0KWBcbiAgZGlzcGxheTogYmxvY2s7XG4gIGZvbnQtc2l6ZTogJHt0aGVtZS5mb250U2l6ZXNbMV19cHg7XG4gIGxpbmUtaGVpZ2h0OiAke3RoZW1lLmxpbmVIZWlnaHRzLmJvZHl9O1xuICBwYWRkaW5nOiAke3RoZW1lLnNwYWNlWzJdfXB4ICR7dGhlbWUuc3BhY2VbM119cHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgJHtwcm9wcyA9PlxuICAgIHByb3BzLmNhcHRpb25Ub3BcbiAgICAgID8gYFxuICAgICAgdG9wOiAwO1xuICAgICAgYm9yZGVyLXJhZGl1czogJHt0aGVtZS5yYWRpaS5leHRyYX1weCAke3RoZW1lLnJhZGlpLmV4dHJhfXB4IDAgMDtcbiAgICBgXG4gICAgICA6IGBcbiAgICAgIGJvdHRvbTogMDtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDAgMCAke3RoZW1lLnJhZGlpLmV4dHJhfXB4ICR7dGhlbWUucmFkaWkuZXh0cmF9cHg7XG4gICAgYH07XG4gIHdpZHRoOiAxMDAlO1xuICBtYXgtd2lkdGg6IDEwMCU7XG4gIHotaW5kZXg6IDA7XG4gICR7KHsgY29sb3JNb2RlIH0pID0+XG4gICAgY29sb3JNb2RlID09PSAnZGFyaydcbiAgICAgID8gYFxuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC43NSk7XG4gICAgICAgICAgY29sb3I6ICR7dGhlbWUuY29sb3JzLndoaXRlfTtcbiAgICAgICAgICBAc3VwcG9ydHMgKC13ZWJraXQtYmFja2Ryb3AtZmlsdGVyOiBub25lKSBvciAoYmFja2Ryb3AtZmlsdGVyOiBub25lKSB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNzUpO1xuICAgICAgICAgICAgLXdlYmtpdC1iYWNrZHJvcC1maWx0ZXI6IHNhdHVyYXRlKDE4MCUpIGJsdXIoMTZweCk7XG4gICAgICAgICAgfVxuICAgICAgICBgXG4gICAgICA6IGBcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuOTgpO1xuICAgICAgICAgIGNvbG9yOiAke3RoZW1lLmNvbG9ycy5ibGFja307XG4gICAgICAgICAgQHN1cHBvcnRzICgtd2Via2l0LWJhY2tkcm9wLWZpbHRlcjogbm9uZSkgb3IgKGJhY2tkcm9wLWZpbHRlcjogbm9uZSkge1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjc1KTtcbiAgICAgICAgICAgIC13ZWJraXQtYmFja2Ryb3AtZmlsdGVyOiBzYXR1cmF0ZSgxODAlKSBibHVyKDIwcHgpO1xuICAgICAgICAgIH1cbiAgICAgICAgYH07XG4gIEBtZWRpYSAocHJlZmVycy1yZWR1Y2VkLXRyYW5zcGFyZW5jeTogcmVkdWNlKSB7XG4gICAgLXdlYmtpdC1iYWNrZHJvcC1maWx0ZXI6IG5vbmUgIWltcG9ydGFudDtcbiAgfVxuYFxuXG5jb25zdCBQaG90byA9ICh7IHNyYywgYWx0LCBzaG93QWx0LCB3aWRlLCAuLi5wcm9wcyB9KSA9PiB7XG4gIGNvbnN0IFtjb2xvck1vZGVdID0gdXNlQ29sb3JNb2RlKClcbiAgY29uc3Qgc2hvd0NhcHRpb24gPSBzaG93QWx0ICYmIGFsdFxuICByZXR1cm4gKFxuICAgIDxCb3hcbiAgICAgIHsuLi5wcm9wc31cbiAgICAgIHZhcmlhbnQ9XCJzaGVldFwiXG4gICAgICBzeD17e1xuICAgICAgICBwOiAwLFxuICAgICAgICBoZWlnaHQ6IFsnMThyZW0nLCB3aWRlID8gJzY2dmgnIDogJzIwcmVtJywgd2lkZSA/ICc3NXZoJyA6ICcyNHJlbSddLFxuICAgICAgICBtaW5IZWlnaHQ6IFsnMThyZW0nLCAnMjByZW0nLCAnMjRyZW0nXSxcbiAgICAgICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXG4gICAgICAgIG1heFdpZHRoOiAnMTAwJScsXG4gICAgICAgIGdyaWRDb2x1bW46IFtudWxsLCB3aWRlID8gJ3NwYW4gMicgOiBudWxsXSxcbiAgICAgICAgLi4ucHJvcHMuc3hcbiAgICAgIH19XG4gICAgPlxuICAgICAgPEltYWdlXG4gICAgICAgIHNyYz17c3JjfVxuICAgICAgICBhbHQ9e2FsdH1cbiAgICAgICAgbG9hZGluZz1cImxhenlcIlxuICAgICAgICBzeD17eyB3aWR0aDogJzEwMCUnLCBoZWlnaHQ6ICcxMDAlJywgb2JqZWN0Rml0OiAnY292ZXInIH19XG4gICAgICAvPlxuICAgICAge3Nob3dDYXB0aW9uICYmIDxDYXB0aW9uIGNvbG9yTW9kZT17Y29sb3JNb2RlfSBjaGlsZHJlbj17YWx0fSAvPn1cbiAgICA8L0JveD5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBQaG90b1xuIl19 */"));

const Photo = (_ref) => {
  let {
    src,
    alt,
    showAlt,
    wide
  } = _ref,
      props = Object(_babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__["default"])(_ref, ["src", "alt", "showAlt", "wide"]);

  const [colorMode] = Object(theme_ui__WEBPACK_IMPORTED_MODULE_6__["useColorMode"])();
  const showCaption = showAlt && alt;
  return __jsx(rebass__WEBPACK_IMPORTED_MODULE_5__["Box"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props, {
    variant: "sheet",
    sx: Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__["default"])({
      p: 0,
      height: ['18rem', wide ? '66vh' : '20rem', wide ? '75vh' : '24rem'],
      minHeight: ['18rem', '20rem', '24rem'],
      position: 'relative',
      maxWidth: '100%',
      gridColumn: [null, wide ? 'span 2' : null]
    }, props.sx),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    },
    __self: undefined
  }), __jsx(rebass__WEBPACK_IMPORTED_MODULE_5__["Image"], {
    src: src,
    alt: alt,
    loading: "lazy",
    sx: {
      width: '100%',
      height: '100%',
      objectFit: 'cover'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65
    },
    __self: undefined
  }), showCaption && __jsx(Caption, {
    colorMode: colorMode,
    children: alt,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71
    },
    __self: undefined
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Photo);

/***/ }),

/***/ "./components/sponsors.js":
/*!********************************!*\
  !*** ./components/sponsors.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var _emotion_styled_base__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @emotion/styled-base */ "@emotion/styled-base");
/* harmony import */ var _emotion_styled_base__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_emotion_styled_base__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var rebass__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rebass */ "rebass");
/* harmony import */ var rebass__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(rebass__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _blocks__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./blocks */ "./components/blocks.js");
/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! theme-ui */ "theme-ui");
/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(theme_ui__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _theme__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./theme */ "./components/theme.js");



var _jsxFileName = "/Users/ClairesAccount/Documents/GitHub/site/components/sponsors.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement;





const data = {
  sponsors: [{
    name: 'Repl.it',
    link: 'https://repl.it',
    image: 'https://cdn.glitch.com/747f5921-6fdc-45db-8eaa-ac12523e0e6c%2Freplit.png?v=1566159656031'
  }, {
    name: 'Hack Club Bank',
    link: 'https://hackclub.com/bank',
    image: 'https://cdn.glitch.com/747f5921-6fdc-45db-8eaa-ac12523e0e6c%2Fhackclub-bank.svg?v=1566159701206'
  }],
  additionalSupport: [{
    name: 'Sketch',
    link: 'https://sketchapp.com/',
    image: 'https://angelhacks.org/images/sketch-logo.png'
  }]
};

const Base =
/*#__PURE__*/
_emotion_styled_base__WEBPACK_IMPORTED_MODULE_2___default()(rebass__WEBPACK_IMPORTED_MODULE_4__["Box"], {
  target: "e1x5wqmn0",
  label: "Base"
})("display:grid;grid-row-gap:", _theme__WEBPACK_IMPORTED_MODULE_7__["default"].space[2], "px;grid-template-columns:repeat( auto-fit,minmax(", props => props.section === 'sponsors' ? 256 : 192, "px,1fr) );align-items:center;justify-content:center;margin-bottom:", _theme__WEBPACK_IMPORTED_MODULE_7__["default"].space[4], "px;a{width:100%;}img{max-width:75%;max-height:", props => props.section === 'sponsors' ? 6 : 4, "rem;", props => props.colorMode === 'dark' && `filter: invert() hue-rotate(180deg);`, "}" + ( false ? undefined : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9DbGFpcmVzQWNjb3VudC9Eb2N1bWVudHMvR2l0SHViL3NpdGUvY29tcG9uZW50cy9zcG9uc29ycy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUErQndCIiwiZmlsZSI6Ii9Vc2Vycy9DbGFpcmVzQWNjb3VudC9Eb2N1bWVudHMvR2l0SHViL3NpdGUvY29tcG9uZW50cy9zcG9uc29ycy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBzdHlsZWQgZnJvbSAnQGVtb3Rpb24vc3R5bGVkJ1xuaW1wb3J0IHsgQm94IH0gZnJvbSAncmViYXNzJ1xuaW1wb3J0IHsgQ29udGFpbmVyIH0gZnJvbSAnLi9ibG9ja3MnXG5pbXBvcnQgeyB1c2VDb2xvck1vZGUgfSBmcm9tICd0aGVtZS11aSdcbmltcG9ydCB0aGVtZSBmcm9tICcuL3RoZW1lJ1xuXG5jb25zdCBkYXRhID0ge1xuICBzcG9uc29yczogW1xuICAgIHtcbiAgICAgIG5hbWU6ICdSZXBsLml0JyxcbiAgICAgIGxpbms6ICdodHRwczovL3JlcGwuaXQnLFxuICAgICAgaW1hZ2U6XG4gICAgICAgICdodHRwczovL2Nkbi5nbGl0Y2guY29tLzc0N2Y1OTIxLTZmZGMtNDVkYi04ZWFhLWFjMTI1MjNlMGU2YyUyRnJlcGxpdC5wbmc/dj0xNTY2MTU5NjU2MDMxJ1xuICAgIH0sXG4gICAge1xuICAgICAgbmFtZTogJ0hhY2sgQ2x1YiBCYW5rJyxcbiAgICAgIGxpbms6ICdodHRwczovL2hhY2tjbHViLmNvbS9iYW5rJyxcbiAgICAgIGltYWdlOlxuICAgICAgICAnaHR0cHM6Ly9jZG4uZ2xpdGNoLmNvbS83NDdmNTkyMS02ZmRjLTQ1ZGItOGVhYS1hYzEyNTIzZTBlNmMlMkZoYWNrY2x1Yi1iYW5rLnN2Zz92PTE1NjYxNTk3MDEyMDYnXG4gICAgfVxuICBdLFxuICBhZGRpdGlvbmFsU3VwcG9ydDogW1xuICAgIHtcbiAgICAgIG5hbWU6ICdTa2V0Y2gnLFxuICAgICAgbGluazogJ2h0dHBzOi8vc2tldGNoYXBwLmNvbS8nLFxuICAgICAgaW1hZ2U6ICdodHRwczovL2FuZ2VsaGFja3Mub3JnL2ltYWdlcy9za2V0Y2gtbG9nby5wbmcnXG4gICAgfVxuICBdXG59XG5cbmNvbnN0IEJhc2UgPSBzdHlsZWQoQm94KWBcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC1yb3ctZ2FwOiAke3RoZW1lLnNwYWNlWzJdfXB4O1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChcbiAgICBhdXRvLWZpdCxcbiAgICBtaW5tYXgoJHtwcm9wcyA9PiAocHJvcHMuc2VjdGlvbiA9PT0gJ3Nwb25zb3JzJyA/IDI1NiA6IDE5Mil9cHgsIDFmcilcbiAgKTtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIG1hcmdpbi1ib3R0b206ICR7dGhlbWUuc3BhY2VbNF19cHg7XG4gIGEge1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG4gIGltZyB7XG4gICAgbWF4LXdpZHRoOiA3NSU7XG4gICAgbWF4LWhlaWdodDogJHtwcm9wcyA9PiAocHJvcHMuc2VjdGlvbiA9PT0gJ3Nwb25zb3JzJyA/IDYgOiA0KX1yZW07XG4gICAgJHtwcm9wcyA9PlxuICAgICAgcHJvcHMuY29sb3JNb2RlID09PSAnZGFyaycgJiYgYGZpbHRlcjogaW52ZXJ0KCkgaHVlLXJvdGF0ZSgxODBkZWcpO2B9XG4gIH1cbmBcblxuY29uc3QgU3BvbnNvcnMgPSAoeyBzZWN0aW9uID0gJ3Nwb25zb3JzJywgLi4ucHJvcHMgfSkgPT4ge1xuICBjb25zdCBbY29sb3JNb2RlXSA9IHVzZUNvbG9yTW9kZSgpXG4gIHJldHVybiAoXG4gICAgPEJhc2UgY29sb3JNb2RlPXtjb2xvck1vZGV9IHNlY3Rpb249e3NlY3Rpb259IHsuLi5wcm9wc30+XG4gICAgICB7ZGF0YVtzZWN0aW9uXS5tYXAoc3BvbnNvciA9PiAoXG4gICAgICAgIDxhIGhyZWY9e3Nwb25zb3IubGlua30gdGFyZ2V0PVwiX2JsYW5rXCIga2V5PXtzcG9uc29yLm5hbWV9PlxuICAgICAgICAgIDxpbWcgYWx0PXtzcG9uc29yLm5hbWV9IHNyYz17c3BvbnNvci5pbWFnZX0gLz5cbiAgICAgICAgPC9hPlxuICAgICAgKSl9XG4gICAgPC9CYXNlPlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IFNwb25zb3JzXG4iXX0= */"));

const Sponsors = (_ref) => {
  let {
    section = 'sponsors'
  } = _ref,
      props = Object(_babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__["default"])(_ref, ["section"]);

  const [colorMode] = Object(theme_ui__WEBPACK_IMPORTED_MODULE_6__["useColorMode"])();
  return __jsx(Base, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    colorMode: colorMode,
    section: section
  }, props, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56
    },
    __self: undefined
  }), data[section].map(sponsor => __jsx("a", {
    href: sponsor.link,
    target: "_blank",
    key: sponsor.name,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58
    },
    __self: undefined
  }, __jsx("img", {
    alt: sponsor.name,
    src: sponsor.image,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59
    },
    __self: undefined
  }))));
};

/* harmony default export */ __webpack_exports__["default"] = (Sponsors);

/***/ }),

/***/ "./components/theme.js":
/*!*****************************!*\
  !*** ./components/theme.js ***!
  \*****************************/
/*! exports provided: breakpoints, space, fontSizes, palette, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "breakpoints", function() { return breakpoints; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "space", function() { return space; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fontSizes", function() { return fontSizes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "palette", function() { return palette; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js");
/* harmony import */ var _rebass_preset__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @rebass/preset */ "@rebass/preset");
/* harmony import */ var _rebass_preset__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_rebass_preset__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_2__);



const breakpoints = [32, 48, 64].map(w => `${w}em`);
const space = [0, 4, 8, 16, 32, 64, 128, 256, 512];
const fontSizes = [14, 16, 20, 24, 32, 48, 64, 96, 128];
const palette = {
  darker: '#121217',
  dark: '#17171d',
  darkless: '#252429',
  // greyscale
  black: '#1f2d3d',
  steel: '#273444',
  slate: '#3c4858',
  muted: '#8492a6',
  smoke: '#e0e6ed',
  snow: '#f9fafc',
  white: '#ffffff',
  // brand
  primary: '#ffb400',
  primaryWash: '#ffdc89',
  alt: '#007a87',
  altWash: '#bfe6ea',
  altWashLight: '#dffbfd',
  altLight: '#009aab',
  altDark: '#004f58',
  accent: '#ff5a5f',
  accentLight: '#ff7e82',
  accentDark: '#e00007',
  success: '#3fb34f',
  error: '#b23f42',
  cool: '#00bdde',
  coolWash: '#7cecff'
};
const theme = Object(lodash__WEBPACK_IMPORTED_MODULE_2__["merge"])(_rebass_preset__WEBPACK_IMPORTED_MODULE_1___default.a, {
  breakpoints,
  space,
  fontSizes,
  initialColorMode: 'light',
  colors: Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, palette, {
    text: palette.black,
    background: palette.snow,
    elevated: palette.white,
    muted: palette.muted,
    sunken: palette.smoke,
    bannerBG: palette.primary,
    bannerColor: palette.white,
    bannerColorAlt: palette.white,
    coolBg: palette.cool,
    modes: {
      dark: {
        text: palette.white,
        background: palette.dark,
        elevated: palette.darkless,
        sunken: palette.black,
        primaryWash: '#3f3822',
        bannerBG: palette.darkless,
        bannerColor: palette.primary,
        bannerColorAlt: palette.white,
        coolBg: palette.dark
      }
    }
  }),
  fonts: {
    body: 'Nunito,-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,sans-serif',
    heading: 'inherit',
    mono: 'Menlo, monospace'
  },
  lineHeights: {
    body: 1.5,
    heading: 1.125,
    tight: 0.875
  },
  fontWeights: {
    body: '400',
    medium: '700',
    bold: '900'
  },
  letterSpacings: {
    heading: '-0.05em',
    caps: '0.05em'
  },
  sizes: {
    superslim: 512,
    slim: 640,
    narrow: 768,
    container: 1024,
    wide: 1536
  },
  radii: {
    default: 6,
    extra: 9,
    circle: 99999
  },
  shadows: {
    card: '0 4px 8px rgba(0, 0, 0, 0.125)',
    sheet: '0 8px 32px rgba(0, 0, 0, 0.0625)'
  },
  text: {
    heading: {
      fontFamily: 'heading',
      fontWeight: 'heading',
      lineHeight: 'heading'
    }
  },
  variants: {
    container: {
      width: '100%',
      maxWidth: 'container',
      mx: 'auto',
      px: 3
    },
    heading: {
      fontFamily: 'heading',
      fontWeight: 'heading',
      lineHeight: 'heading'
    },
    card: {
      bg: 'elevated',
      p: [3, 4],
      borderRadius: 'extra',
      boxShadow: 'card'
    },
    sheet: {
      bg: 'elevated',
      borderRadius: 'extra',
      boxShadow: 'sheet',
      overflow: 'hidden'
    },
    avatar: {
      borderRadius: 'circle',
      objectFit: 'cover',
      objectPosition: 'center',
      flexShrink: 0
    }
  },
  styles: {
    a: {
      color: 'primary',
      cursor: 'pointer',
      ':hover, :focus': {
        color: 'secondary'
      }
    },
    p: {
      fontFamily: 'mono'
    },
    img: {
      maxWidth: '100%',
      height: 'auto'
    },
    navitem: {
      cursor: 'pointer',
      borderRadius: 'circle',
      fontWeight: 'medium',
      fontSize: 3,
      lineHeight: 'body',
      textDecoration: 'none',
      py: 1,
      px: [2, 3],
      mx: [null, 1],
      ':focus, :hover, :active': {
        bg: 'sunken',
        color: 'primary'
      }
    }
  }
});
/* harmony default export */ __webpack_exports__["default"] = (theme);

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/map.js":
/*!************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/map.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/map */ "core-js/library/fn/map");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/assign.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/assign.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/assign */ "core-js/library/fn/object/assign");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/define-property */ "core-js/library/fn/object/define-property");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js":
/*!*******************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/get-own-property-descriptor */ "core-js/library/fn/object/get-own-property-descriptor");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/get-own-property-symbols */ "core-js/library/fn/object/get-own-property-symbols");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js":
/*!********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/keys.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/keys */ "core-js/library/fn/object/keys");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _defineProperty; });
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__);

function _defineProperty(obj, key, value) {
  if (key in obj) {
    _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default()(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js":
/*!********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _extends; });
/* harmony import */ var _core_js_object_assign__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/assign */ "./node_modules/@babel/runtime-corejs2/core-js/object/assign.js");
/* harmony import */ var _core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0__);

function _extends() {
  _extends = _core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default.a || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _objectSpread; });
/* harmony import */ var _core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/get-own-property-descriptor */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js");
/* harmony import */ var _core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core-js/object/get-own-property-symbols */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js");
/* harmony import */ var _core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _core_js_object_keys__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core-js/object/keys */ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js");
/* harmony import */ var _core_js_object_keys__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_keys__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _defineProperty__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");




function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    var ownKeys = _core_js_object_keys__WEBPACK_IMPORTED_MODULE_2___default()(source);

    if (typeof _core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1___default.a === 'function') {
      ownKeys = ownKeys.concat(_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1___default()(source).filter(function (sym) {
        return _core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_0___default()(source, sym).enumerable;
      }));
    }

    ownKeys.forEach(function (key) {
      Object(_defineProperty__WEBPACK_IMPORTED_MODULE_3__["default"])(target, key, source[key]);
    });
  }

  return target;
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutProperties.js":
/*!************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutProperties.js ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _objectWithoutProperties; });
/* harmony import */ var _core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/get-own-property-symbols */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js");
/* harmony import */ var _core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./objectWithoutPropertiesLoose */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutPropertiesLoose.js");


function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};
  var target = Object(_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(source, excluded);
  var key, i;

  if (_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_0___default.a) {
    var sourceSymbolKeys = _core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_0___default()(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutPropertiesLoose.js":
/*!*****************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutPropertiesLoose.js ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _objectWithoutPropertiesLoose; });
/* harmony import */ var _core_js_object_keys__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/keys */ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js");
/* harmony import */ var _core_js_object_keys__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0__);

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};

  var sourceKeys = _core_js_object_keys__WEBPACK_IMPORTED_MODULE_0___default()(source);

  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/extends.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/extends.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Object$assign = __webpack_require__(/*! ../core-js/object/assign */ "./node_modules/@babel/runtime-corejs2/core-js/object/assign.js");

function _extends() {
  module.exports = _extends = _Object$assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

module.exports = _extends;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireWildcard.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/interopRequireWildcard.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Object$getOwnPropertyDescriptor = __webpack_require__(/*! ../core-js/object/get-own-property-descriptor */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js");

var _Object$defineProperty = __webpack_require__(/*! ../core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  } else {
    var newObj = {};

    if (obj != null) {
      for (var key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) {
          var desc = _Object$defineProperty && _Object$getOwnPropertyDescriptor ? _Object$getOwnPropertyDescriptor(obj, key) : {};

          if (desc.get || desc.set) {
            _Object$defineProperty(newObj, key, desc);
          } else {
            newObj[key] = obj[key];
          }
        }
      }
    }

    newObj["default"] = obj;
    return newObj;
  }
}

module.exports = _interopRequireWildcard;

/***/ }),

/***/ "./node_modules/next/dist/client/link.js":
/*!***********************************************!*\
  !*** ./node_modules/next/dist/client/link.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = void 0;

var _map = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/core-js/map */ "./node_modules/@babel/runtime-corejs2/core-js/map.js"));

var _url = __webpack_require__(/*! url */ "url");

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "react"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "prop-types"));

var _router = _interopRequireDefault(__webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js"));

var _rewriteUrlForExport = __webpack_require__(/*! next-server/dist/lib/router/rewrite-url-for-export */ "next-server/dist/lib/router/rewrite-url-for-export");

var _utils = __webpack_require__(/*! next-server/dist/lib/utils */ "next-server/dist/lib/utils");
/* global __NEXT_DATA__ */


function isLocal(href) {
  const url = (0, _url.parse)(href, false, true);
  const origin = (0, _url.parse)((0, _utils.getLocationOrigin)(), false, true);
  return !url.host || url.protocol === origin.protocol && url.host === origin.host;
}

function memoizedFormatUrl(formatFunc) {
  let lastHref = null;
  let lastAs = null;
  let lastResult = null;
  return (href, as) => {
    if (lastResult && href === lastHref && as === lastAs) {
      return lastResult;
    }

    const result = formatFunc(href, as);
    lastHref = href;
    lastAs = as;
    lastResult = result;
    return result;
  };
}

function formatUrl(url) {
  return url && typeof url === 'object' ? (0, _utils.formatWithValidation)(url) : url;
}

let observer;
const listeners = new _map.default();
const IntersectionObserver = false ? undefined : null;

function getObserver() {
  // Return shared instance of IntersectionObserver if already created
  if (observer) {
    return observer;
  } // Only create shared IntersectionObserver if supported in browser


  if (!IntersectionObserver) {
    return undefined;
  }

  return observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!listeners.has(entry.target)) {
        return;
      }

      const cb = listeners.get(entry.target);

      if (entry.isIntersecting || entry.intersectionRatio > 0) {
        observer.unobserve(entry.target);
        listeners.delete(entry.target);
        cb();
      }
    });
  }, {
    rootMargin: '200px'
  });
}

const listenToIntersections = (el, cb) => {
  const observer = getObserver();

  if (!observer) {
    return () => {};
  }

  observer.observe(el);
  listeners.set(el, cb);
  return () => {
    observer.unobserve(el);
    listeners.delete(el);
  };
};

class Link extends _react.Component {
  constructor(props) {
    super(props);
    this.p = void 0;

    this.cleanUpListeners = () => {};

    this.formatUrls = memoizedFormatUrl((href, asHref) => {
      return {
        href: formatUrl(href),
        as: asHref ? formatUrl(asHref) : asHref
      };
    });

    this.linkClicked = e => {
      // @ts-ignore target exists on currentTarget
      const {
        nodeName,
        target
      } = e.currentTarget;

      if (nodeName === 'A' && (target && target !== '_self' || e.metaKey || e.ctrlKey || e.shiftKey || e.nativeEvent && e.nativeEvent.which === 2)) {
        // ignore click for new tab / new window behavior
        return;
      }

      let {
        href,
        as
      } = this.formatUrls(this.props.href, this.props.as);

      if (!isLocal(href)) {
        // ignore click if it's outside our scope (e.g. https://google.com)
        return;
      }

      const {
        pathname
      } = window.location;
      href = (0, _url.resolve)(pathname, href);
      as = as ? (0, _url.resolve)(pathname, as) : href;
      e.preventDefault(); //  avoid scroll for urls with anchor refs

      let {
        scroll
      } = this.props;

      if (scroll == null) {
        scroll = as.indexOf('#') < 0;
      } // replace state instead of push if prop is present


      _router.default[this.props.replace ? 'replace' : 'push'](href, as, {
        shallow: this.props.shallow
      }).then(success => {
        if (!success) return;

        if (scroll) {
          window.scrollTo(0, 0);
          document.body.focus();
        }
      });
    };

    if (true) {
      if (props.prefetch) {
        console.warn('Next.js auto-prefetches automatically based on viewport. The prefetch attribute is no longer needed. More: https://err.sh/zeit/next.js/prefetch-true-deprecated');
      }
    }

    this.p = props.prefetch !== false;
  }

  componentWillUnmount() {
    this.cleanUpListeners();
  }

  handleRef(ref) {
    if (this.p && IntersectionObserver && ref && ref.tagName) {
      this.cleanUpListeners();
      this.cleanUpListeners = listenToIntersections(ref, () => {
        this.prefetch();
      });
    }
  } // The function is memoized so that no extra lifecycles are needed
  // as per https://reactjs.org/blog/2018/06/07/you-probably-dont-need-derived-state.html


  prefetch() {
    if (!this.p || true) return; // Prefetch the JSON page if asked (only in the client)

    const {
      pathname
    } = window.location;
    const {
      href: parsedHref
    } = this.formatUrls(this.props.href, this.props.as);
    const href = (0, _url.resolve)(pathname, parsedHref);

    _router.default.prefetch(href);
  }

  render() {
    let {
      children
    } = this.props;
    const {
      href,
      as
    } = this.formatUrls(this.props.href, this.props.as); // Deprecated. Warning shown by propType check. If the children provided is a string (<Link>example</Link>) we wrap it in an <a> tag

    if (typeof children === 'string') {
      children = _react.default.createElement("a", null, children);
    } // This will return the first child, if multiple are provided it will throw an error


    const child = _react.Children.only(children);

    const props = {
      ref: el => {
        this.handleRef(el);

        if (child && typeof child === 'object' && child.ref) {
          if (typeof child.ref === 'function') child.ref(el);else if (typeof child.ref === 'object') {
            child.ref.current = el;
          }
        }
      },
      onMouseEnter: e => {
        if (child.props && typeof child.props.onMouseEnter === 'function') {
          child.props.onMouseEnter(e);
        }

        this.prefetch();
      },
      onClick: e => {
        if (child.props && typeof child.props.onClick === 'function') {
          child.props.onClick(e);
        }

        if (!e.defaultPrevented) {
          this.linkClicked(e);
        }
      } // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
      // defined, we specify the current 'href', so that repetition is not needed by the user

    };

    if (this.props.passHref || child.type === 'a' && !('href' in child.props)) {
      props.href = as || href;
    } // Add the ending slash to the paths. So, we can serve the
    // "<page>/index.html" directly.


    if (false) {}

    return _react.default.cloneElement(child, props);
  }

}

Link.propTypes = void 0;

if (true) {
  const warn = (0, _utils.execOnce)(console.error); // This module gets removed by webpack.IgnorePlugin

  const exact = __webpack_require__(/*! prop-types-exact */ "prop-types-exact");

  Link.propTypes = exact({
    href: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.object]).isRequired,
    as: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.object]),
    prefetch: _propTypes.default.bool,
    replace: _propTypes.default.bool,
    shallow: _propTypes.default.bool,
    passHref: _propTypes.default.bool,
    scroll: _propTypes.default.bool,
    children: _propTypes.default.oneOfType([_propTypes.default.element, (props, propName) => {
      const value = props[propName];

      if (typeof value === 'string') {
        warn("Warning: You're using a string directly inside <Link>. This usage has been deprecated. Please add an <a> tag as child of <Link>");
      }

      return null;
    }]).isRequired
  });
}

var _default = Link;
exports.default = _default;

/***/ }),

/***/ "./node_modules/next/dist/client/router.js":
/*!*************************************************!*\
  !*** ./node_modules/next/dist/client/router.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.useRouter = useRouter;
exports.makePublicRouterInstance = makePublicRouterInstance;
exports.createRouter = exports.withRouter = exports.default = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/extends */ "./node_modules/@babel/runtime-corejs2/helpers/extends.js"));

var _defineProperty = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js"));

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router2 = _interopRequireWildcard(__webpack_require__(/*! next-server/dist/lib/router/router */ "next-server/dist/lib/router/router"));

exports.Router = _router2.default;
exports.NextRouter = _router2.NextRouter;

var _routerContext = __webpack_require__(/*! next-server/dist/lib/router-context */ "next-server/dist/lib/router-context");

var _withRouter = _interopRequireDefault(__webpack_require__(/*! ./with-router */ "./node_modules/next/dist/client/with-router.js"));

exports.withRouter = _withRouter.default;
/* global window */

const singletonRouter = {
  router: null,
  // holds the actual router instance
  readyCallbacks: [],

  ready(cb) {
    if (this.router) return cb();

    if (false) {}
  }

}; // Create public properties and methods of the router in the singletonRouter

const urlPropertyFields = ['pathname', 'route', 'query', 'asPath', 'components'];
const routerEvents = ['routeChangeStart', 'beforeHistoryChange', 'routeChangeComplete', 'routeChangeError', 'hashChangeStart', 'hashChangeComplete'];
const coreMethodFields = ['push', 'replace', 'reload', 'back', 'prefetch', 'beforePopState']; // Events is a static property on the router, the router doesn't have to be initialized to use it

(0, _defineProperty.default)(singletonRouter, 'events', {
  get() {
    return _router2.default.events;
  }

});
urlPropertyFields.forEach(field => {
  // Here we need to use Object.defineProperty because, we need to return
  // the property assigned to the actual router
  // The value might get changed as we change routes and this is the
  // proper way to access it
  (0, _defineProperty.default)(singletonRouter, field, {
    get() {
      const router = getRouter();
      return router[field];
    }

  });
});
coreMethodFields.forEach(field => {
  // We don't really know the types here, so we add them later instead
  ;

  singletonRouter[field] = function () {
    const router = getRouter();
    return router[field](...arguments);
  };
});
routerEvents.forEach(event => {
  singletonRouter.ready(() => {
    _router2.default.events.on(event, function () {
      const eventField = "on" + event.charAt(0).toUpperCase() + event.substring(1);
      const _singletonRouter = singletonRouter;

      if (_singletonRouter[eventField]) {
        try {
          _singletonRouter[eventField](...arguments);
        } catch (err) {
          // tslint:disable-next-line:no-console
          console.error("Error when running the Router event: " + eventField); // tslint:disable-next-line:no-console

          console.error(err.message + "\n" + err.stack);
        }
      }
    });
  });
});

function getRouter() {
  if (!singletonRouter.router) {
    const message = 'No router instance found.\n' + 'You should only use "next/router" inside the client side of your app.\n';
    throw new Error(message);
  }

  return singletonRouter.router;
} // Export the singletonRouter and this is the public API.


var _default = singletonRouter; // Reexport the withRoute HOC

exports.default = _default;

function useRouter() {
  return _react.default.useContext(_routerContext.RouterContext);
} // INTERNAL APIS
// -------------
// (do not use following exports inside the app)
// Create a router and assign it as the singleton instance.
// This is used in client side when we are initilizing the app.
// This should **not** use inside the server.


const createRouter = function createRouter() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  singletonRouter.router = new _router2.default(...args);
  singletonRouter.readyCallbacks.forEach(cb => cb());
  singletonRouter.readyCallbacks = [];
  return singletonRouter.router;
}; // This function is used to create the `withRouter` router instance


exports.createRouter = createRouter;

function makePublicRouterInstance(router) {
  const _router = router;
  const instance = {};

  for (const property of urlPropertyFields) {
    if (typeof _router[property] === 'object') {
      instance[property] = (0, _extends2.default)({}, _router[property]); // makes sure query is not stateful

      continue;
    }

    instance[property] = _router[property];
  } // Events is a static property on the router, the router doesn't have to be initialized to use it


  instance.events = _router2.default.events;
  coreMethodFields.forEach(field => {
    instance[field] = function () {
      return _router[field](...arguments);
    };
  });
  return instance;
}

/***/ }),

/***/ "./node_modules/next/dist/client/with-router.js":
/*!******************************************************!*\
  !*** ./node_modules/next/dist/client/with-router.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = withRouter;

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/extends */ "./node_modules/@babel/runtime-corejs2/helpers/extends.js"));

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "prop-types"));

function withRouter(ComposedComponent) {
  class WithRouteWrapper extends _react.default.Component {
    constructor() {
      super(...arguments);
      this.context = void 0;
    }

    render() {
      return _react.default.createElement(ComposedComponent, (0, _extends2.default)({
        router: this.context.router
      }, this.props));
    }

  }

  WithRouteWrapper.displayName = void 0;
  WithRouteWrapper.getInitialProps = void 0;
  WithRouteWrapper.contextTypes = {
    router: _propTypes.default.object
  };
  WithRouteWrapper.getInitialProps = ComposedComponent.getInitialProps;

  if (true) {
    const name = ComposedComponent.displayName || ComposedComponent.name || 'Unknown';
    WithRouteWrapper.displayName = "withRouter(" + name + ")";
  }

  return WithRouteWrapper;
}

/***/ }),

/***/ "./node_modules/next/link.js":
/*!***********************************!*\
  !*** ./node_modules/next/link.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/client/link */ "./node_modules/next/dist/client/link.js")


/***/ }),

/***/ "./pages/index.mdx":
/*!*************************!*\
  !*** ./pages/index.mdx ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _mdx_js_tag__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @mdx-js/tag */ "@mdx-js/tag");
/* harmony import */ var _mdx_js_tag__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_blocks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/blocks */ "./components/blocks.js");
/* harmony import */ var rebass__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rebass */ "rebass");
/* harmony import */ var rebass__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(rebass__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _components_sponsors__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/sponsors */ "./components/sponsors.js");
/* harmony import */ var _components_photo__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/photo */ "./components/photo.js");

var _jsxFileName = "/Users/ClairesAccount/Documents/GitHub/site/pages/index.mdx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;




 // import CTA from '../components/cta'



/* harmony default export */ __webpack_exports__["default"] = ((_ref) => {
  let {
    components
  } = _ref,
      props = Object(_babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__["default"])(_ref, ["components"]);

  return __jsx(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_2__["MDXTag"], {
    name: "wrapper",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: undefined
  }, __jsx(_components_blocks__WEBPACK_IMPORTED_MODULE_3__["Banner"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: undefined
  }, __jsx(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_2__["MDXTag"], {
    name: "h1",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: undefined
  }, `AngelHacks`), __jsx(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_2__["MDXTag"], {
    name: "h2",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: undefined
  }, `High schoolers: learn to code in 24 hours of free food & fun.`), __jsx(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_2__["MDXTag"], {
    name: "p",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: undefined
  }, `October 26, 2019 @ Snapchat HQ in LA`), __jsx(next_link__WEBPACK_IMPORTED_MODULE_5___default.a, {
    href: "/register",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: undefined
  }, __jsx(rebass__WEBPACK_IMPORTED_MODULE_4__["Button"], {
    as: "a",
    sx: {
      bg: 'accent',
      color: 'white',
      borderRadius: 'circle',
      fontFamily: 'inherit',
      fontSize: [2, 3],
      lineHeight: 2,
      cursor: 'pointer',
      px: 4,
      mt: [3, 4],
      transition: 'transform ease .125s',
      ':hover, :focus': {
        transform: 'scale(1.0625)'
      }
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: undefined
  }, "Register now \xBB"))), __jsx(_components_blocks__WEBPACK_IMPORTED_MODULE_3__["Container"], {
    width: "narrow",
    sx: {
      p: {
        fontSize: [2, 3, 4],
        color: 'muted',
        mb: [4, 5],
        lineHeight: 1.375,
        letterSpacing: '-.009em'
      },
      strong: {
        fontWeight: 'medium',
        color: 'text'
      }
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: undefined
  }, __jsx(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_2__["MDXTag"], {
    name: "p",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    },
    __self: undefined
  }, __jsx(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_2__["MDXTag"], {
    name: "strong",
    components: components,
    parentName: "p",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    },
    __self: undefined
  }, `AngelHacks is a 24-hour hackathon.`), `
50 students from across LA will come for the weekend.
You’ll work with a team to build an app, game, or website.
We’ll provide free meals & drinks. In the morning, judges will pick
the best projects to demo for everyone and win prizes.
`, __jsx(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_2__["MDXTag"], {
    name: "strong",
    components: components,
    parentName: "p",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58
    },
    __self: undefined
  }, `You’ll meet people, create amazing new things, & have fun.`))), __jsx(_components_blocks__WEBPACK_IMPORTED_MODULE_3__["Gallery"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60
    },
    __self: undefined
  }, __jsx(_components_photo__WEBPACK_IMPORTED_MODULE_7__["default"], {
    alt: "Collaborating",
    src: "https://cdn.glitch.com/3d283e0f-19c4-4546-b0b2-223ec3a7dc23%2Fcollaborating.jpg?v=1565769226508",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61
    },
    __self: undefined
  }), __jsx(_components_photo__WEBPACK_IMPORTED_MODULE_7__["default"], {
    showAlt: true,
    alt: "Students build projects in groups",
    src: "https://cdn.glitch.com/3d283e0f-19c4-4546-b0b2-223ec3a7dc23%2Fworking.jpg?v=1565769221347",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62
    },
    __self: undefined
  }), __jsx(rebass__WEBPACK_IMPORTED_MODULE_4__["Box"], {
    variant: "card",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63
    },
    __self: undefined
  }, __jsx(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_2__["MDXTag"], {
    name: "h2",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64
    },
    __self: undefined
  }, `A place for everyone.`), __jsx(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_2__["MDXTag"], {
    name: "p",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65
    },
    __self: undefined
  }, `Underrepresented students are systematically discouraged from pursuing tech. AngelHacks provides a supportive community for women, minorities, & LGBTQ+ students, and gives them the resources to make amazing things. No matter who you are, you’re welcome here—and you’ll surprise yourself by what you can accomplish. 💛`)), __jsx(_components_photo__WEBPACK_IMPORTED_MODULE_7__["default"], {
    showAlt: true,
    alt: "Workshops teach intro coding skills",
    src: "https://cdn.glitch.com/3d283e0f-19c4-4546-b0b2-223ec3a7dc23%2Fworkshop.jpg?v=1565769230073",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67
    },
    __self: undefined
  })), __jsx(_components_blocks__WEBPACK_IMPORTED_MODULE_3__["Container"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69
    },
    __self: undefined
  }, __jsx(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_2__["MDXTag"], {
    name: "h2",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70
    },
    __self: undefined
  }, `FAQ`), __jsx(_components_blocks__WEBPACK_IMPORTED_MODULE_3__["Callout"], {
    sx: {
      mx: [null, null, -3, -4]
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71
    },
    __self: undefined
  }, __jsx(_components_blocks__WEBPACK_IMPORTED_MODULE_3__["FAQ"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72
    },
    __self: undefined
  }, __jsx(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_2__["MDXTag"], {
    name: "ul",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73
    },
    __self: undefined
  }, __jsx(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_2__["MDXTag"], {
    name: "li",
    components: components,
    parentName: "ul",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74
    },
    __self: undefined
  }, __jsx(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_2__["MDXTag"], {
    name: "p",
    components: components,
    parentName: "li",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75
    },
    __self: undefined
  }, __jsx(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_2__["MDXTag"], {
    name: "strong",
    components: components,
    parentName: "p",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75
    },
    __self: undefined
  }, `How much does it cost?`), `
Nothing! Registration and attendance are 100% free, with meals, drinks, swag, & workshops included.`)), __jsx(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_2__["MDXTag"], {
    name: "li",
    components: components,
    parentName: "ul",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78
    },
    __self: undefined
  }, __jsx(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_2__["MDXTag"], {
    name: "p",
    components: components,
    parentName: "li",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79
    },
    __self: undefined
  }, __jsx(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_2__["MDXTag"], {
    name: "strong",
    components: components,
    parentName: "p",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79
    },
    __self: undefined
  }, `Who can participate?`), `
Any current student grades 8–12. If you’re under/over that age, send us a chat message (in the bottom right corner) & we’ll see what we can do.`)), __jsx(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_2__["MDXTag"], {
    name: "li",
    components: components,
    parentName: "ul",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82
    },
    __self: undefined
  }, __jsx(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_2__["MDXTag"], {
    name: "p",
    components: components,
    parentName: "li",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83
    },
    __self: undefined
  }, __jsx(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_2__["MDXTag"], {
    name: "strong",
    components: components,
    parentName: "p",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83
    },
    __self: undefined
  }, `Hacking‽ Is that safe?`), `
No, we’re not “hacking” servers. The word is being constructively redefined for coding—apps, games, websites. It’s safe, supervised, & entirely educational.`)), __jsx(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_2__["MDXTag"], {
    name: "li",
    components: components,
    parentName: "ul",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86
    },
    __self: undefined
  }, __jsx(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_2__["MDXTag"], {
    name: "p",
    components: components,
    parentName: "li",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87
    },
    __self: undefined
  }, __jsx(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_2__["MDXTag"], {
    name: "strong",
    components: components,
    parentName: "p",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87
    },
    __self: undefined
  }, `What can I make?`), `
Anything! A website, app, game, hardware hack, you name it. Judges will rate projects on creativity, technical skill demonstrated, polish, and utility.`)), __jsx(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_2__["MDXTag"], {
    name: "li",
    components: components,
    parentName: "ul",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90
    },
    __self: undefined
  }, __jsx(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_2__["MDXTag"], {
    name: "p",
    components: components,
    parentName: "li",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91
    },
    __self: undefined
  }, __jsx(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_2__["MDXTag"], {
    name: "strong",
    components: components,
    parentName: "p",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91
    },
    __self: undefined
  }, `What if I’m new to coding?`), `
At AngelHacks, complete beginners are not only welcome, but expected! Learn as you go with our intro workshops & mentors.`)), __jsx(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_2__["MDXTag"], {
    name: "li",
    components: components,
    parentName: "ul",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94
    },
    __self: undefined
  }, __jsx(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_2__["MDXTag"], {
    name: "p",
    components: components,
    parentName: "li",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95
    },
    __self: undefined
  }, __jsx(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_2__["MDXTag"], {
    name: "strong",
    components: components,
    parentName: "p",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95
    },
    __self: undefined
  }, `Do I need a team?`), `
Nope! You’ll have an opportunity to meet fellow hackers and make teams of up to 4—find some new friends, bring yours, or work alone.`)), __jsx(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_2__["MDXTag"], {
    name: "li",
    components: components,
    parentName: "ul",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98
    },
    __self: undefined
  }, __jsx(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_2__["MDXTag"], {
    name: "p",
    components: components,
    parentName: "li",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99
    },
    __self: undefined
  }, __jsx(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_2__["MDXTag"], {
    name: "strong",
    components: components,
    parentName: "p",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99
    },
    __self: undefined
  }, `What should I bring?`), `
Plan to bring a student ID, computer (any kind), chargers, anything for your hack (e.g. hardware), toiletries, & a sleeping bag (if you plan on sleeping).`)), __jsx(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_2__["MDXTag"], {
    name: "li",
    components: components,
    parentName: "ul",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102
    },
    __self: undefined
  }, __jsx(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_2__["MDXTag"], {
    name: "p",
    components: components,
    parentName: "li",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103
    },
    __self: undefined
  }, __jsx(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_2__["MDXTag"], {
    name: "strong",
    components: components,
    parentName: "p",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103
    },
    __self: undefined
  }, `Who runs this? Is it supervised?`), `
We’re independently-organized by high schoolers, sponsored via a nonprofit called `, __jsx(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_2__["MDXTag"], {
    name: "a",
    components: components,
    parentName: "p",
    props: {
      "href": "https://hackclub.com/"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104
    },
    __self: undefined
  }, `Hack Club`), `. It’s fully supervised by 20+ adult mentors & chaperones.`))))), __jsx(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_2__["MDXTag"], {
    name: "h2",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109
    },
    __self: undefined
  }, `Sponsors`), __jsx(_components_sponsors__WEBPACK_IMPORTED_MODULE_6__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110
    },
    __self: undefined
  }), __jsx(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_2__["MDXTag"], {
    name: "h3",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111
    },
    __self: undefined
  }, `Additional support from`), __jsx(_components_sponsors__WEBPACK_IMPORTED_MODULE_6__["default"], {
    section: "additionalSupport",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 112
    },
    __self: undefined
  }), __jsx(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_2__["MDXTag"], {
    name: "h2",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113
    },
    __self: undefined
  }, `Team`), __jsx(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_2__["MDXTag"], {
    name: "p",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 114
    },
    __self: undefined
  }, `AngelHacks is primarily run by the Hack Club at `, __jsx(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_2__["MDXTag"], {
    name: "a",
    components: components,
    parentName: "p",
    props: {
      "href": "https://www.washingtonpost.com/technology/2018/06/27/elon-musk-created-secretive-laboratory-school-brilliant-kids-who-love-flamethrowers/"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 114
    },
    __self: undefined
  }, `Ad Astra`), `.`), __jsx(_components_blocks__WEBPACK_IMPORTED_MODULE_3__["Team"], {
    sx: {
      mt: [3, 4]
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115
    },
    __self: undefined
  }, __jsx(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_2__["MDXTag"], {
    name: "ul",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116
    },
    __self: undefined
  }, __jsx(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_2__["MDXTag"], {
    name: "li",
    components: components,
    parentName: "ul",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 117
    },
    __self: undefined
  }, __jsx(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_2__["MDXTag"], {
    name: "p",
    components: components,
    parentName: "li",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 118
    },
    __self: undefined
  }, __jsx(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_2__["MDXTag"], {
    name: "img",
    components: components,
    parentName: "p",
    props: {
      "src": "https://cdn.glitch.com/747f5921-6fdc-45db-8eaa-ac12523e0e6c%2Fclaire.jpg?v=1566231402289",
      "alt": "Claire"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 118
    },
    __self: undefined
  })), __jsx(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_2__["MDXTag"], {
    name: "p",
    components: components,
    parentName: "li",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 119
    },
    __self: undefined
  }, __jsx(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_2__["MDXTag"], {
    name: "strong",
    components: components,
    parentName: "p",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 119
    },
    __self: undefined
  }, `Claire Wang`), ` `, __jsx(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_2__["MDXTag"], {
    name: "em",
    components: components,
    parentName: "p",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 119
    },
    __self: undefined
  }, `Founder, lead. she/her`))), __jsx(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_2__["MDXTag"], {
    name: "li",
    components: components,
    parentName: "ul",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 121
    },
    __self: undefined
  }, __jsx(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_2__["MDXTag"], {
    name: "p",
    components: components,
    parentName: "li",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 122
    },
    __self: undefined
  }, __jsx(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_2__["MDXTag"], {
    name: "img",
    components: components,
    parentName: "p",
    props: {
      "src": "https://cdn.glitch.com/747f5921-6fdc-45db-8eaa-ac12523e0e6c%2Fclaire.jpg?v=1566231402289",
      "alt": "Kai"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 122
    },
    __self: undefined
  })), __jsx(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_2__["MDXTag"], {
    name: "p",
    components: components,
    parentName: "li",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 123
    },
    __self: undefined
  }, __jsx(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_2__["MDXTag"], {
    name: "strong",
    components: components,
    parentName: "p",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 123
    },
    __self: undefined
  }, `Kai Musk`), ` `, __jsx(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_2__["MDXTag"], {
    name: "em",
    components: components,
    parentName: "p",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 123
    },
    __self: undefined
  }, `Marketing. he/him`))), __jsx(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_2__["MDXTag"], {
    name: "li",
    components: components,
    parentName: "ul",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 125
    },
    __self: undefined
  }, __jsx(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_2__["MDXTag"], {
    name: "p",
    components: components,
    parentName: "li",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 126
    },
    __self: undefined
  }, __jsx(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_2__["MDXTag"], {
    name: "img",
    components: components,
    parentName: "p",
    props: {
      "src": "https://cdn.glitch.com/747f5921-6fdc-45db-8eaa-ac12523e0e6c%2Fclaire.jpg?v=1566231402289",
      "alt": "Damian"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 126
    },
    __self: undefined
  })), __jsx(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_2__["MDXTag"], {
    name: "p",
    components: components,
    parentName: "li",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 127
    },
    __self: undefined
  }, __jsx(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_2__["MDXTag"], {
    name: "strong",
    components: components,
    parentName: "p",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 127
    },
    __self: undefined
  }, `Damian Musk`), ` `, __jsx(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_2__["MDXTag"], {
    name: "em",
    components: components,
    parentName: "p",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 127
    },
    __self: undefined
  }, `Operations. he/him`))))), __jsx(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_2__["MDXTag"], {
    name: "h3",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 131
    },
    __self: undefined
  }, `Special thanks`), __jsx(_components_blocks__WEBPACK_IMPORTED_MODULE_3__["Team"], {
    sx: {
      mb: [4, 5]
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 132
    },
    __self: undefined
  }, __jsx(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_2__["MDXTag"], {
    name: "ul",
    components: components,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 133
    },
    __self: undefined
  }, __jsx(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_2__["MDXTag"], {
    name: "li",
    components: components,
    parentName: "ul",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 134
    },
    __self: undefined
  }, __jsx(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_2__["MDXTag"], {
    name: "p",
    components: components,
    parentName: "li",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 135
    },
    __self: undefined
  }, __jsx(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_2__["MDXTag"], {
    name: "img",
    components: components,
    parentName: "p",
    props: {
      "src": "./static/profiles/yasper.jpg",
      "alt": "Yasper"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 135
    },
    __self: undefined
  })), __jsx(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_2__["MDXTag"], {
    name: "p",
    components: components,
    parentName: "li",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 136
    },
    __self: undefined
  }, __jsx(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_2__["MDXTag"], {
    name: "strong",
    components: components,
    parentName: "p",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 136
    },
    __self: undefined
  }, `Yasper DeJong`), ` `, __jsx(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_2__["MDXTag"], {
    name: "em",
    components: components,
    parentName: "p",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 136
    },
    __self: undefined
  }, `Local coordinator. he/him`))), __jsx(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_2__["MDXTag"], {
    name: "li",
    components: components,
    parentName: "ul",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 138
    },
    __self: undefined
  }, __jsx(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_2__["MDXTag"], {
    name: "p",
    components: components,
    parentName: "li",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 139
    },
    __self: undefined
  }, __jsx(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_2__["MDXTag"], {
    name: "img",
    components: components,
    parentName: "p",
    props: {
      "src": "https://github.com/pErs0nZ.png",
      "alt": "Evan"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 139
    },
    __self: undefined
  })), __jsx(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_2__["MDXTag"], {
    name: "p",
    components: components,
    parentName: "li",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 140
    },
    __self: undefined
  }, __jsx(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_2__["MDXTag"], {
    name: "strong",
    components: components,
    parentName: "p",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 140
    },
    __self: undefined
  }, `Evan Nishi`), ` `, __jsx(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_2__["MDXTag"], {
    name: "em",
    components: components,
    parentName: "p",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 140
    },
    __self: undefined
  }, `Advisor. he/him`))), __jsx(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_2__["MDXTag"], {
    name: "li",
    components: components,
    parentName: "ul",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 142
    },
    __self: undefined
  }, __jsx(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_2__["MDXTag"], {
    name: "p",
    components: components,
    parentName: "li",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 143
    },
    __self: undefined
  }, __jsx(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_2__["MDXTag"], {
    name: "img",
    components: components,
    parentName: "p",
    props: {
      "src": "https://cdn.glitch.com/747f5921-6fdc-45db-8eaa-ac12523e0e6c%2Fneel.jpg?v=1566231402477",
      "alt": "Neel"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 143
    },
    __self: undefined
  })), __jsx(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_2__["MDXTag"], {
    name: "p",
    components: components,
    parentName: "li",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 144
    },
    __self: undefined
  }, __jsx(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_2__["MDXTag"], {
    name: "strong",
    components: components,
    parentName: "p",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 144
    },
    __self: undefined
  }, `Neel Redkar`), ` `, __jsx(_mdx_js_tag__WEBPACK_IMPORTED_MODULE_2__["MDXTag"], {
    name: "em",
    components: components,
    parentName: "p",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 144
    },
    __self: undefined
  }, `XYZ. he/him`)))))));
});

/***/ }),

/***/ 3:
/*!*******************************!*\
  !*** multi ./pages/index.mdx ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/ClairesAccount/Documents/GitHub/site/pages/index.mdx */"./pages/index.mdx");


/***/ }),

/***/ "@emotion/styled-base":
/*!***************************************!*\
  !*** external "@emotion/styled-base" ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@emotion/styled-base");

/***/ }),

/***/ "@mdx-js/tag":
/*!******************************!*\
  !*** external "@mdx-js/tag" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@mdx-js/tag");

/***/ }),

/***/ "@rebass/preset":
/*!*********************************!*\
  !*** external "@rebass/preset" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@rebass/preset");

/***/ }),

/***/ "core-js/library/fn/map":
/*!*****************************************!*\
  !*** external "core-js/library/fn/map" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/map");

/***/ }),

/***/ "core-js/library/fn/object/assign":
/*!***************************************************!*\
  !*** external "core-js/library/fn/object/assign" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/assign");

/***/ }),

/***/ "core-js/library/fn/object/define-property":
/*!************************************************************!*\
  !*** external "core-js/library/fn/object/define-property" ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/define-property");

/***/ }),

/***/ "core-js/library/fn/object/get-own-property-descriptor":
/*!************************************************************************!*\
  !*** external "core-js/library/fn/object/get-own-property-descriptor" ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-own-property-descriptor");

/***/ }),

/***/ "core-js/library/fn/object/get-own-property-symbols":
/*!*********************************************************************!*\
  !*** external "core-js/library/fn/object/get-own-property-symbols" ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-own-property-symbols");

/***/ }),

/***/ "core-js/library/fn/object/keys":
/*!*************************************************!*\
  !*** external "core-js/library/fn/object/keys" ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/keys");

/***/ }),

/***/ "lodash":
/*!*************************!*\
  !*** external "lodash" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("lodash");

/***/ }),

/***/ "next-server/dist/lib/router-context":
/*!******************************************************!*\
  !*** external "next-server/dist/lib/router-context" ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next-server/dist/lib/router-context");

/***/ }),

/***/ "next-server/dist/lib/router/rewrite-url-for-export":
/*!*********************************************************************!*\
  !*** external "next-server/dist/lib/router/rewrite-url-for-export" ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next-server/dist/lib/router/rewrite-url-for-export");

/***/ }),

/***/ "next-server/dist/lib/router/router":
/*!*****************************************************!*\
  !*** external "next-server/dist/lib/router/router" ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next-server/dist/lib/router/router");

/***/ }),

/***/ "next-server/dist/lib/utils":
/*!*********************************************!*\
  !*** external "next-server/dist/lib/utils" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next-server/dist/lib/utils");

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ "prop-types-exact":
/*!***********************************!*\
  !*** external "prop-types-exact" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types-exact");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "rebass":
/*!*************************!*\
  !*** external "rebass" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("rebass");

/***/ }),

/***/ "theme-ui":
/*!***************************!*\
  !*** external "theme-ui" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("theme-ui");

/***/ }),

/***/ "url":
/*!**********************!*\
  !*** external "url" ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("url");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map