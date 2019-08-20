webpackHotUpdate("static/development/pages/_app.js",{

/***/ "./components/layout.js":
/*!******************************!*\
  !*** ./components/layout.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var rebass__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rebass */ "./node_modules/rebass/dist/index.js");
/* harmony import */ var rebass__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(rebass__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! theme-ui */ "./node_modules/theme-ui/dist/index.esm.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _icon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./icon */ "./components/icon.js");
/* harmony import */ var _avatar__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./avatar */ "./components/avatar.js");




var _jsxFileName = "/Users/ClairesAccount/Documents/GitHub/site/components/layout.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement;






var ColorButton = function ColorButton(_ref) {
  var mode = _ref.mode,
      sx = _ref.sx,
      props = Object(_babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_3__["default"])(_ref, ["mode", "sx"]);

  return __jsx(rebass__WEBPACK_IMPORTED_MODULE_5__["Box"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    as: "button"
  }, props, {
    title: "Cycle Color Mode",
    sx: Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_2__["default"])({
      display: 'inline-block',
      appearance: 'none',
      bg: 'transparent',
      color: 'inherit',
      p: 1,
      m: 0,
      border: 0,
      borderRadius: 9999,
      lineHeight: 0,
      ':hover, :focus': {
        color: 'primary',
        boxShadow: '0 0 0 3px',
        outline: 'none'
      }
    }, sx),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }), __jsx("svg", {
    viewBox: "0 0 32 32",
    width: "24",
    height: "24",
    fill: "currentcolor",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }, __jsx("circle", {
    cx: "16",
    cy: "16",
    r: "14",
    fill: "none",
    stroke: "currentcolor",
    strokeWidth: "4",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  }), __jsx("path", {
    d: "M 16 0 A 16 16 0 0 0 16 32 z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: this
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (function (props) {
  var _useColorMode = Object(theme_ui__WEBPACK_IMPORTED_MODULE_6__["useColorMode"])(),
      _useColorMode2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useColorMode, 2),
      mode = _useColorMode2[0],
      setMode = _useColorMode2[1];

  return __jsx(react__WEBPACK_IMPORTED_MODULE_4___default.a.Fragment, null, __jsx(rebass__WEBPACK_IMPORTED_MODULE_5__["Flex"], {
    as: "header",
    variant: "container",
    sx: {
      color: 'primary',
      alignItems: 'center',
      px: 3,
      py: 3
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    },
    __self: this
  }, __jsx(_avatar__WEBPACK_IMPORTED_MODULE_9__["default"], {
    light: true,
    size: 48,
    sx: {
      mr: 1
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59
    },
    __self: this
  }), __jsx(next_link__WEBPACK_IMPORTED_MODULE_7___default.a, {
    href: "/",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60
    },
    __self: this
  }, __jsx(rebass__WEBPACK_IMPORTED_MODULE_5__["Link"], {
    variant: "styles.navitem",
    sx: {
      display: ['none', 'block']
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61
    },
    __self: this
  }, "AngelHacks")), __jsx(rebass__WEBPACK_IMPORTED_MODULE_5__["Box"], {
    sx: {
      mx: 'auto'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65
    },
    __self: this
  }), __jsx(next_link__WEBPACK_IMPORTED_MODULE_7___default.a, {
    href: "/schedule",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66
    },
    __self: this
  }, __jsx(rebass__WEBPACK_IMPORTED_MODULE_5__["Link"], {
    variant: "styles.navitem",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67
    },
    __self: this
  }, "Schedule")), __jsx(next_link__WEBPACK_IMPORTED_MODULE_7___default.a, {
    href: "/register",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69
    },
    __self: this
  }, __jsx(rebass__WEBPACK_IMPORTED_MODULE_5__["Link"], {
    variant: "styles.navitem",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70
    },
    __self: this
  }, "Register")), __jsx(ColorButton, {
    sx: {
      ml: [2, 3]
    },
    onClick: function onClick(e) {
      var next = mode === 'dark' ? 'light' : 'dark';
      setMode(next);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72
    },
    __self: this
  })), __jsx(rebass__WEBPACK_IMPORTED_MODULE_5__["Box"], {
    as: "main",
    sx: {
      width: '100%',
      mx: 'auto',
      flex: '1 1 auto'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80
    },
    __self: this
  }, props.children), __jsx(rebass__WEBPACK_IMPORTED_MODULE_5__["Box"], {
    as: "footer",
    variant: "container",
    sx: {
      px: 3,
      py: 5,
      width: '100%',
      maxWidth: 'wide',
      mx: 'auto'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90
    },
    __self: this
  }, __jsx(rebass__WEBPACK_IMPORTED_MODULE_5__["Box"], {
    variant: "container",
    sx: {
      fontSize: 3,
      py: 3
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101
    },
    __self: this
  }, __jsx(rebass__WEBPACK_IMPORTED_MODULE_5__["Flex"], {
    sx: {
      justifyContent: 'center'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108
    },
    __self: this
  }, __jsx(rebass__WEBPACK_IMPORTED_MODULE_5__["Link"], {
    href: "https://instagram.com/angelhacks.la",
    title: "Instagram",
    sx: {
      mx: 2
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109
    },
    __self: this
  }, __jsx(_icon__WEBPACK_IMPORTED_MODULE_8__["default"], {
    glyph: "instagram",
    size: 36,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 114
    },
    __self: this
  })), __jsx(rebass__WEBPACK_IMPORTED_MODULE_5__["Link"], {
    href: "https://github.com/ClaireBookworm/angelhacks",
    title: "GitHub",
    sx: {
      mx: 2
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116
    },
    __self: this
  }, __jsx(_icon__WEBPACK_IMPORTED_MODULE_8__["default"], {
    glyph: "github",
    size: 36,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 121
    },
    __self: this
  })), __jsx(rebass__WEBPACK_IMPORTED_MODULE_5__["Link"], {
    href: "mailto:claire@angelhacks.org",
    title: "Email",
    sx: {
      mx: 2
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 123
    },
    __self: this
  }, __jsx(_icon__WEBPACK_IMPORTED_MODULE_8__["default"], {
    glyph: "email",
    size: 36,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 124
    },
    __self: this
  }))), __jsx(rebass__WEBPACK_IMPORTED_MODULE_5__["Box"], {
    sx: {
      mt: [3, 4],
      textAlign: 'center',
      a: {
        fontSize: 1
      }
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 127
    },
    __self: this
  }, __jsx(rebass__WEBPACK_IMPORTED_MODULE_5__["Link"], {
    href: "https://lachlanjc.me",
    target: "_blank",
    variant: "styles.navitem",
    sx: {
      color: 'inherit',
      fontSize: 0
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 134
    },
    __self: this
  }, "Site by @lachlanjc"), __jsx(rebass__WEBPACK_IMPORTED_MODULE_5__["Text"], {
    sx: {
      color: 'muted',
      fontSize: 0,
      mt: 2,
      mb: 0
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 142
    },
    __self: this
  }, "Fiscally sponsored by The Hack Foundation.", __jsx("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 151
    },
    __self: this
  }), "Nonprofit EIN: 81-2908499.")))));
});

/***/ })

})
//# sourceMappingURL=_app.js.8b78ed8209e2808dc79a.hot-update.js.map