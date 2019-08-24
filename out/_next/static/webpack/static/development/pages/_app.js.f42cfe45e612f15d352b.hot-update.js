webpackHotUpdate("static/development/pages/_app.js",{

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
/* harmony import */ var _rebass_preset__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @rebass/preset */ "./node_modules/@rebass/preset/dist/index.js");
/* harmony import */ var _rebass_preset__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_rebass_preset__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_2__);



var breakpoints = [32, 48, 64].map(function (w) {
  return "".concat(w, "em");
});
var space = [0, 4, 8, 16, 32, 64, 128, 256, 512];
var fontSizes = [14, 16, 20, 24, 32, 48, 64, 96, 128];
var palette = {
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
var theme = Object(lodash__WEBPACK_IMPORTED_MODULE_2__["merge"])(_rebass_preset__WEBPACK_IMPORTED_MODULE_1___default.a, {
  breakpoints: breakpoints,
  space: space,
  fontSizes: fontSizes,
  initialColorMode: 'light',
  colors: Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, palette, {
    text: palette.black,
    background: palette.snow,
    elevated: palette.white,
    muted: palette.muted,
    sunken: palette.smoke,
    //bannerBG: palette.primary,
    bannerBG: palette.altLight,
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
        //bannerColor: palette.primary,
        bannerColor: palette.altWashLight,
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
    "default": 6,
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

/***/ })

})
//# sourceMappingURL=_app.js.f42cfe45e612f15d352b.hot-update.js.map