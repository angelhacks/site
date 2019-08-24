webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/sponsors.js":
/*!********************************!*\
  !*** ./components/sponsors.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var _emotion_styled_base__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @emotion/styled-base */ "./node_modules/@emotion/styled-base/dist/styled-base.browser.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var rebass__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rebass */ "./node_modules/rebass/dist/index.js");
/* harmony import */ var rebass__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(rebass__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _blocks__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./blocks */ "./components/blocks.js");
/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! theme-ui */ "./node_modules/theme-ui/dist/index.esm.js");
/* harmony import */ var _theme__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./theme */ "./components/theme.js");




var _jsxFileName = "/Users/ClairesAccount/Documents/GitHub/site/components/sponsors.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement;





var data = {
  sponsors: [{
    name: 'Repl.it',
    link: 'https://repl.it',
    image: 'https://cdn.glitch.com/747f5921-6fdc-45db-8eaa-ac12523e0e6c%2Freplit.png?v=1566159656031'
  }, {
    name: 'Hack Club Bank',
    link: 'https://hackclub.com/bank',
    image: 'https://cdn.glitch.com/747f5921-6fdc-45db-8eaa-ac12523e0e6c%2Fhackclub-bank.svg?v=1566159701206'
  }, {
    name: 'Frank.ly',
    link: 'https://frank.ly',
    image: 'https://angelhacks.org/static/frank-logo.png'
  }, {
    name: 'SpaceX',
    link: 'https://spacex.com',
    image: 'https://angelhacks.org/static/spacex-logo.png'
  }, {
    name: 'Balsamiq',
    link: 'https://balsamiq.com',
    image: 'https://angelhacks.org/static/balsamiq-logo.png'
  }],
  additionalSupport: [{
    name: 'Sketch',
    link: 'https://sketchapp.com/',
    image: 'https://angelhacks.org/static/sketch-logo.png'
  }]
};

var Base =
/*#__PURE__*/
Object(_emotion_styled_base__WEBPACK_IMPORTED_MODULE_3__["default"])(rebass__WEBPACK_IMPORTED_MODULE_5__["Box"], {
  target: "e1x5wqmn0",
  label: "Base"
})("display:grid;grid-row-gap:", _theme__WEBPACK_IMPORTED_MODULE_8__["default"].space[2], "px;grid-template-columns:repeat( auto-fit,minmax(", function (props) {
  return props.section === 'sponsors' ? 256 : 192;
}, "px,1fr) );align-items:center;justify-content:center;margin-bottom:", _theme__WEBPACK_IMPORTED_MODULE_8__["default"].space[4], "px;a{width:100%;}img{max-width:75%;max-height:", function (props) {
  return props.section === 'sponsors' ? 6 : 4;
}, "rem;", function (props) {
  return props.colorMode === 'dark' && "filter: invert() hue-rotate(180deg);";
}, "}" + ( false ? undefined : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9DbGFpcmVzQWNjb3VudC9Eb2N1bWVudHMvR2l0SHViL3NpdGUvY29tcG9uZW50cy9zcG9uc29ycy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFrRHdCIiwiZmlsZSI6Ii9Vc2Vycy9DbGFpcmVzQWNjb3VudC9Eb2N1bWVudHMvR2l0SHViL3NpdGUvY29tcG9uZW50cy9zcG9uc29ycy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBzdHlsZWQgZnJvbSAnQGVtb3Rpb24vc3R5bGVkJ1xuaW1wb3J0IHsgQm94IH0gZnJvbSAncmViYXNzJ1xuaW1wb3J0IHsgQ29udGFpbmVyIH0gZnJvbSAnLi9ibG9ja3MnXG5pbXBvcnQgeyB1c2VDb2xvck1vZGUgfSBmcm9tICd0aGVtZS11aSdcbmltcG9ydCB0aGVtZSBmcm9tICcuL3RoZW1lJ1xuXG5jb25zdCBkYXRhID0ge1xuICBzcG9uc29yczogW1xuICAgIHtcbiAgICAgIG5hbWU6ICdSZXBsLml0JyxcbiAgICAgIGxpbms6ICdodHRwczovL3JlcGwuaXQnLFxuICAgICAgaW1hZ2U6XG4gICAgICAgICdodHRwczovL2Nkbi5nbGl0Y2guY29tLzc0N2Y1OTIxLTZmZGMtNDVkYi04ZWFhLWFjMTI1MjNlMGU2YyUyRnJlcGxpdC5wbmc/dj0xNTY2MTU5NjU2MDMxJ1xuICAgIH0sXG4gICAge1xuICAgICAgbmFtZTogJ0hhY2sgQ2x1YiBCYW5rJyxcbiAgICAgIGxpbms6ICdodHRwczovL2hhY2tjbHViLmNvbS9iYW5rJyxcbiAgICAgIGltYWdlOlxuICAgICAgICAnaHR0cHM6Ly9jZG4uZ2xpdGNoLmNvbS83NDdmNTkyMS02ZmRjLTQ1ZGItOGVhYS1hYzEyNTIzZTBlNmMlMkZoYWNrY2x1Yi1iYW5rLnN2Zz92PTE1NjYxNTk3MDEyMDYnXG4gICAgfSxcbiAgICB7XG4gICAgICBuYW1lOiAnRnJhbmsubHknLFxuICAgICAgbGluazogJ2h0dHBzOi8vZnJhbmsubHknLFxuICAgICAgaW1hZ2U6XG4gICAgICAgICdodHRwczovL2FuZ2VsaGFja3Mub3JnL3N0YXRpYy9mcmFuay1sb2dvLnBuZydcbiAgICB9LFxuICAgIHtcbiAgICAgIG5hbWU6ICdTcGFjZVgnLFxuICAgICAgbGluazogJ2h0dHBzOi8vc3BhY2V4LmNvbScsXG4gICAgICBpbWFnZTpcbiAgICAgICAgJ2h0dHBzOi8vYW5nZWxoYWNrcy5vcmcvc3RhdGljL3NwYWNleC1sb2dvLnBuZydcbiAgICB9LFxuICAgIHtcbiAgICAgIG5hbWU6ICdCYWxzYW1pcScsXG4gICAgICBsaW5rOiAnaHR0cHM6Ly9iYWxzYW1pcS5jb20nLFxuICAgICAgaW1hZ2U6XG4gICAgICAgICdodHRwczovL2FuZ2VsaGFja3Mub3JnL3N0YXRpYy9iYWxzYW1pcS1sb2dvLnBuZydcbiAgICB9XG4gIF0sXG4gIGFkZGl0aW9uYWxTdXBwb3J0OiBbXG4gICAge1xuICAgICAgbmFtZTogJ1NrZXRjaCcsXG4gICAgICBsaW5rOiAnaHR0cHM6Ly9za2V0Y2hhcHAuY29tLycsXG4gICAgICBpbWFnZTogXG4gICAgICAgICdodHRwczovL2FuZ2VsaGFja3Mub3JnL3N0YXRpYy9za2V0Y2gtbG9nby5wbmcnXG4gICAgfVxuICBdXG59XG5cbmNvbnN0IEJhc2UgPSBzdHlsZWQoQm94KWBcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC1yb3ctZ2FwOiAke3RoZW1lLnNwYWNlWzJdfXB4O1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChcbiAgICBhdXRvLWZpdCxcbiAgICBtaW5tYXgoJHtwcm9wcyA9PiAocHJvcHMuc2VjdGlvbiA9PT0gJ3Nwb25zb3JzJyA/IDI1NiA6IDE5Mil9cHgsIDFmcilcbiAgKTtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIG1hcmdpbi1ib3R0b206ICR7dGhlbWUuc3BhY2VbNF19cHg7XG4gIGEge1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG4gIGltZyB7XG4gICAgbWF4LXdpZHRoOiA3NSU7XG4gICAgbWF4LWhlaWdodDogJHtwcm9wcyA9PiAocHJvcHMuc2VjdGlvbiA9PT0gJ3Nwb25zb3JzJyA/IDYgOiA0KX1yZW07XG4gICAgJHtwcm9wcyA9PlxuICAgICAgcHJvcHMuY29sb3JNb2RlID09PSAnZGFyaycgJiYgYGZpbHRlcjogaW52ZXJ0KCkgaHVlLXJvdGF0ZSgxODBkZWcpO2B9XG4gIH1cbmBcblxuY29uc3QgU3BvbnNvcnMgPSAoeyBzZWN0aW9uID0gJ3Nwb25zb3JzJywgLi4ucHJvcHMgfSkgPT4ge1xuICBjb25zdCBbY29sb3JNb2RlXSA9IHVzZUNvbG9yTW9kZSgpXG4gIHJldHVybiAoXG4gICAgPEJhc2UgY29sb3JNb2RlPXtjb2xvck1vZGV9IHNlY3Rpb249e3NlY3Rpb259IHsuLi5wcm9wc30+XG4gICAgICB7ZGF0YVtzZWN0aW9uXS5tYXAoc3BvbnNvciA9PiAoXG4gICAgICAgIDxhIGhyZWY9e3Nwb25zb3IubGlua30gdGFyZ2V0PVwiX2JsYW5rXCIga2V5PXtzcG9uc29yLm5hbWV9PlxuICAgICAgICAgIDxpbWcgYWx0PXtzcG9uc29yLm5hbWV9IHNyYz17c3BvbnNvci5pbWFnZX0gLz5cbiAgICAgICAgPC9hPlxuICAgICAgKSl9XG4gICAgPC9CYXNlPlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IFNwb25zb3JzXG4iXX0= */"));

var Sponsors = function Sponsors(_ref) {
  var _ref$section = _ref.section,
      section = _ref$section === void 0 ? 'sponsors' : _ref$section,
      props = Object(_babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__["default"])(_ref, ["section"]);

  var _useColorMode = Object(theme_ui__WEBPACK_IMPORTED_MODULE_7__["useColorMode"])(),
      _useColorMode2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useColorMode, 1),
      colorMode = _useColorMode2[0];

  return __jsx(Base, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    colorMode: colorMode,
    section: section
  }, props, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75
    },
    __self: this
  }), data[section].map(function (sponsor) {
    return __jsx("a", {
      href: sponsor.link,
      target: "_blank",
      key: sponsor.name,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 77
      },
      __self: this
    }, __jsx("img", {
      alt: sponsor.name,
      src: sponsor.image,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 78
      },
      __self: this
    }));
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Sponsors);

/***/ })

})
//# sourceMappingURL=index.js.0f68b1d80a6d5950c3fc.hot-update.js.map