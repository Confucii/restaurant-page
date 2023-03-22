/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style/style.css":
/*!*******************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style/style.css ***!
  \*******************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../fonts/Pencil-Regular.woff2 */ "./src/fonts/Pencil-Regular.woff2"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ../fonts/Pencil-Regular.woff */ "./src/fonts/Pencil-Regular.woff"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ../images/cook.png */ "./src/images/cook.png"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "@font-face {\n  font-family: \"pencil\";\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ") format(\"woff2\"),\n    url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ") format(\"woff\");\n}\n\n* {\n  margin: 0px;\n  padding: 0px;\n  box-sizing: border-box;\n}\n\nhtml,\nbody {\n  min-height: 100vh;\n  font-family: \"pencil\", sans-serif;\n}\n\nbody {\n  display: flex;\n  flex-direction: column;\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + ");\n  background-repeat: no-repeat;\n  background-size: cover;\n  background-position-x: center;\n}\n\n.header {\n  height: 7vh;\n  position: sticky;\n  top: 0px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background-color: rgba(245, 245, 220, 0.9);\n}\n\n.nav-button {\n  font-family: inherit;\n  font-size: 2.5rem;\n  width: 15%;\n  height: 100%;\n  background-color: rgba(0, 0, 0, 0);\n  border: none;\n}\n\n.nav-button:hover:not(.active) {\n  background-color: rgba(250, 235, 215, 0.5);\n}\n\n.active {\n  background-color: rgb(250, 235, 215);\n}\n\n#content {\n  flex: 1;\n}\n\n.home-content {\n  display: grid;\n  grid-template-rows: repeat(3, 550px);\n  grid-template-columns: repeat(3, 1fr);\n  column-gap: 5vw;\n  row-gap: 5vh;\n  padding: 5vh 10vw;\n}\n\n.content-img img {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n  object-position: top;\n}\n\n.content-txt {\n  background-color: blanchedalmond;\n  border: 2px dashed #4e4941;\n  font-size: 2.5rem;\n  padding: 2% 5%;\n  overflow: hidden;\n}\n\n.content-txt h4 {\n  margin-bottom: 20px;\n  font-size: 3rem;\n  text-align: center;\n}\n\n#content .home-content div:nth-of-type(2),\n#content .home-content div:nth-of-type(6) {\n  grid-column: 2/4;\n}\n\n#content .home-content div:nth-of-type(3) {\n  grid-column: 1/3;\n}\n\na {\n  color: black;\n  text-decoration: none;\n}\n\n.menu-content {\n  display: grid;\n  justify-content: center;\n  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));\n  padding: 5vh 10vw;\n  column-gap: 75px;\n  row-gap: 75px;\n}\n\n.food-card {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  gap: 15px;\n  font-size: 2rem;\n  width: 100%;\n  height: 100%;\n  padding-top: 3%;\n  background-color: blanchedalmond;\n  border: 2px dashed #4e4941;\n}\n\n.food-card img {\n  width: 65%;\n  height: 65%;\n  object-fit: cover;\n}\n\n.food-card h5 {\n  font-size: 2.5rem;\n}\n\n.food-card p {\n  padding: 0 10% 5%;\n  height: 120px;\n  text-align: center;\n}\n\n.contact-div {\n  display: flex;\n  padding: 5%;\n  justify-content: center;\n}\n\nform {\n  display: grid;\n  padding: 20px 30px;\n  gap: 20px;\n  background-color: rgba(245, 245, 220, 0.9);\n  border-radius: 15px;\n}\n\nform h1 {\n  text-align: center;\n  font-size: 3rem;\n  grid-column: 1/3;\n}\n\n.input-div {\n  display: flex;\n  flex-direction: column;\n  align-items: start;\n  font-size: 2rem;\n}\n\n.input-div input {\n  font-size: 2rem;\n  font-family: inherit;\n  padding: 5px 10px;\n}\n\n.input-div:first-of-type {\n  grid-column: 1/2;\n}\n\n.input-div:nth-of-type(2) {\n  grid-column: 2/3;\n}\n\n.input-div:nth-of-type(2) input {\n  position: relative;\n  bottom: -7px;\n}\n\n.input-div:nth-of-type(3) {\n  grid-column: 1/3;\n  justify-self: stretch;\n}\n\n.input-div:nth-of-type(3) input {\n  width: 100%;\n}\n\n.input-div:nth-of-type(4) {\n  grid-column: 1/3;\n  justify-self: stretch;\n}\n\ntextarea {\n  padding: 10px;\n  width: 100%;\n  resize: none;\n}\n\ninput[type=\"submit\"] {\n  justify-self: center;\n  font-family: inherit;\n  background-color: #4e4941;\n  padding: 10px;\n  border-radius: 5px;\n  color: blanchedalmond;\n  font-size: 2rem;\n  grid-column: 1/3;\n  border: none;\n}\n\ninput[type=\"submit\"]:active {\n  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);\n}\n\n.contact-div img {\n  grid-column: 1/3;\n  justify-self: center;\n  width: 80%;\n  height: 80%;\n}\n\n.footer {\n  height: 5vh;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  font-size: 1.7rem;\n  background-color: rgba(245, 245, 220, 0.9);\n}\n", "",{"version":3,"sources":["webpack://./src/style/style.css"],"names":[],"mappings":"AAAA;EACE,qBAAqB;EACrB;0DACoD;AACtD;;AAEA;EACE,WAAW;EACX,YAAY;EACZ,sBAAsB;AACxB;;AAEA;;EAEE,iBAAiB;EACjB,iCAAiC;AACnC;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,yDAA2C;EAC3C,4BAA4B;EAC5B,sBAAsB;EACtB,6BAA6B;AAC/B;;AAEA;EACE,WAAW;EACX,gBAAgB;EAChB,QAAQ;EACR,aAAa;EACb,uBAAuB;EACvB,mBAAmB;EACnB,0CAA0C;AAC5C;;AAEA;EACE,oBAAoB;EACpB,iBAAiB;EACjB,UAAU;EACV,YAAY;EACZ,kCAAkC;EAClC,YAAY;AACd;;AAEA;EACE,0CAA0C;AAC5C;;AAEA;EACE,oCAAoC;AACtC;;AAEA;EACE,OAAO;AACT;;AAEA;EACE,aAAa;EACb,oCAAoC;EACpC,qCAAqC;EACrC,eAAe;EACf,YAAY;EACZ,iBAAiB;AACnB;;AAEA;EACE,WAAW;EACX,YAAY;EACZ,iBAAiB;EACjB,oBAAoB;AACtB;;AAEA;EACE,gCAAgC;EAChC,0BAA0B;EAC1B,iBAAiB;EACjB,cAAc;EACd,gBAAgB;AAClB;;AAEA;EACE,mBAAmB;EACnB,eAAe;EACf,kBAAkB;AACpB;;AAEA;;EAEE,gBAAgB;AAClB;;AAEA;EACE,gBAAgB;AAClB;;AAEA;EACE,YAAY;EACZ,qBAAqB;AACvB;;AAEA;EACE,aAAa;EACb,uBAAuB;EACvB,2DAA2D;EAC3D,iBAAiB;EACjB,gBAAgB;EAChB,aAAa;AACf;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,uBAAuB;EACvB,mBAAmB;EACnB,SAAS;EACT,eAAe;EACf,WAAW;EACX,YAAY;EACZ,eAAe;EACf,gCAAgC;EAChC,0BAA0B;AAC5B;;AAEA;EACE,UAAU;EACV,WAAW;EACX,iBAAiB;AACnB;;AAEA;EACE,iBAAiB;AACnB;;AAEA;EACE,iBAAiB;EACjB,aAAa;EACb,kBAAkB;AACpB;;AAEA;EACE,aAAa;EACb,WAAW;EACX,uBAAuB;AACzB;;AAEA;EACE,aAAa;EACb,kBAAkB;EAClB,SAAS;EACT,0CAA0C;EAC1C,mBAAmB;AACrB;;AAEA;EACE,kBAAkB;EAClB,eAAe;EACf,gBAAgB;AAClB;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,kBAAkB;EAClB,eAAe;AACjB;;AAEA;EACE,eAAe;EACf,oBAAoB;EACpB,iBAAiB;AACnB;;AAEA;EACE,gBAAgB;AAClB;;AAEA;EACE,gBAAgB;AAClB;;AAEA;EACE,kBAAkB;EAClB,YAAY;AACd;;AAEA;EACE,gBAAgB;EAChB,qBAAqB;AACvB;;AAEA;EACE,WAAW;AACb;;AAEA;EACE,gBAAgB;EAChB,qBAAqB;AACvB;;AAEA;EACE,aAAa;EACb,WAAW;EACX,YAAY;AACd;;AAEA;EACE,oBAAoB;EACpB,oBAAoB;EACpB,yBAAyB;EACzB,aAAa;EACb,kBAAkB;EAClB,qBAAqB;EACrB,eAAe;EACf,gBAAgB;EAChB,YAAY;AACd;;AAEA;EACE,uCAAuC;AACzC;;AAEA;EACE,gBAAgB;EAChB,oBAAoB;EACpB,UAAU;EACV,WAAW;AACb;;AAEA;EACE,WAAW;EACX,aAAa;EACb,uBAAuB;EACvB,mBAAmB;EACnB,iBAAiB;EACjB,0CAA0C;AAC5C","sourcesContent":["@font-face {\n  font-family: \"pencil\";\n  src: url(\"../fonts/Pencil-Regular.woff2\") format(\"woff2\"),\n    url(\"../fonts/Pencil-Regular.woff\") format(\"woff\");\n}\n\n* {\n  margin: 0px;\n  padding: 0px;\n  box-sizing: border-box;\n}\n\nhtml,\nbody {\n  min-height: 100vh;\n  font-family: \"pencil\", sans-serif;\n}\n\nbody {\n  display: flex;\n  flex-direction: column;\n  background-image: url(\"../images/cook.png\");\n  background-repeat: no-repeat;\n  background-size: cover;\n  background-position-x: center;\n}\n\n.header {\n  height: 7vh;\n  position: sticky;\n  top: 0px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background-color: rgba(245, 245, 220, 0.9);\n}\n\n.nav-button {\n  font-family: inherit;\n  font-size: 2.5rem;\n  width: 15%;\n  height: 100%;\n  background-color: rgba(0, 0, 0, 0);\n  border: none;\n}\n\n.nav-button:hover:not(.active) {\n  background-color: rgba(250, 235, 215, 0.5);\n}\n\n.active {\n  background-color: rgb(250, 235, 215);\n}\n\n#content {\n  flex: 1;\n}\n\n.home-content {\n  display: grid;\n  grid-template-rows: repeat(3, 550px);\n  grid-template-columns: repeat(3, 1fr);\n  column-gap: 5vw;\n  row-gap: 5vh;\n  padding: 5vh 10vw;\n}\n\n.content-img img {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n  object-position: top;\n}\n\n.content-txt {\n  background-color: blanchedalmond;\n  border: 2px dashed #4e4941;\n  font-size: 2.5rem;\n  padding: 2% 5%;\n  overflow: hidden;\n}\n\n.content-txt h4 {\n  margin-bottom: 20px;\n  font-size: 3rem;\n  text-align: center;\n}\n\n#content .home-content div:nth-of-type(2),\n#content .home-content div:nth-of-type(6) {\n  grid-column: 2/4;\n}\n\n#content .home-content div:nth-of-type(3) {\n  grid-column: 1/3;\n}\n\na {\n  color: black;\n  text-decoration: none;\n}\n\n.menu-content {\n  display: grid;\n  justify-content: center;\n  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));\n  padding: 5vh 10vw;\n  column-gap: 75px;\n  row-gap: 75px;\n}\n\n.food-card {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  gap: 15px;\n  font-size: 2rem;\n  width: 100%;\n  height: 100%;\n  padding-top: 3%;\n  background-color: blanchedalmond;\n  border: 2px dashed #4e4941;\n}\n\n.food-card img {\n  width: 65%;\n  height: 65%;\n  object-fit: cover;\n}\n\n.food-card h5 {\n  font-size: 2.5rem;\n}\n\n.food-card p {\n  padding: 0 10% 5%;\n  height: 120px;\n  text-align: center;\n}\n\n.contact-div {\n  display: flex;\n  padding: 5%;\n  justify-content: center;\n}\n\nform {\n  display: grid;\n  padding: 20px 30px;\n  gap: 20px;\n  background-color: rgba(245, 245, 220, 0.9);\n  border-radius: 15px;\n}\n\nform h1 {\n  text-align: center;\n  font-size: 3rem;\n  grid-column: 1/3;\n}\n\n.input-div {\n  display: flex;\n  flex-direction: column;\n  align-items: start;\n  font-size: 2rem;\n}\n\n.input-div input {\n  font-size: 2rem;\n  font-family: inherit;\n  padding: 5px 10px;\n}\n\n.input-div:first-of-type {\n  grid-column: 1/2;\n}\n\n.input-div:nth-of-type(2) {\n  grid-column: 2/3;\n}\n\n.input-div:nth-of-type(2) input {\n  position: relative;\n  bottom: -7px;\n}\n\n.input-div:nth-of-type(3) {\n  grid-column: 1/3;\n  justify-self: stretch;\n}\n\n.input-div:nth-of-type(3) input {\n  width: 100%;\n}\n\n.input-div:nth-of-type(4) {\n  grid-column: 1/3;\n  justify-self: stretch;\n}\n\ntextarea {\n  padding: 10px;\n  width: 100%;\n  resize: none;\n}\n\ninput[type=\"submit\"] {\n  justify-self: center;\n  font-family: inherit;\n  background-color: #4e4941;\n  padding: 10px;\n  border-radius: 5px;\n  color: blanchedalmond;\n  font-size: 2rem;\n  grid-column: 1/3;\n  border: none;\n}\n\ninput[type=\"submit\"]:active {\n  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);\n}\n\n.contact-div img {\n  grid-column: 1/3;\n  justify-self: center;\n  width: 80%;\n  height: 80%;\n}\n\n.footer {\n  height: 5vh;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  font-size: 1.7rem;\n  background-color: rgba(245, 245, 220, 0.9);\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/style/style.css":
/*!*****************************!*\
  !*** ./src/style/style.css ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/modules/clear.js":
/*!******************************!*\
  !*** ./src/modules/clear.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ clearElem)
/* harmony export */ });
function clearElem(contentElem) {
  while (contentElem.firstChild) {
    contentElem.removeChild(contentElem.firstChild);
  }
}


/***/ }),

/***/ "./src/modules/contact.js":
/*!********************************!*\
  !*** ./src/modules/contact.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ contactPage)
/* harmony export */ });
/* harmony import */ var _images_pets_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../images/pets.png */ "./src/images/pets.png");


const createInput = (
  type,
  name,
  required,
  minlength,
  pattern,
  placeholder,
  labelName
) => {
  const inputDiv = document.createElement("div");
  inputDiv.classList.add("input-div");

  const inputElem = document.createElement("input");
  inputElem.setAttribute("type", type);
  inputElem.setAttribute("name", name);
  inputElem.setAttribute("id", name);
  if (required) inputElem.required = true;
  if (minlength) inputElem.setAttribute("minlength", minlength);
  if (pattern) inputElem.setAttribute("pattern", pattern);
  inputElem.setAttribute("placeholder", placeholder);

  const inputLabel = document.createElement("label");
  inputLabel.setAttribute("for", name);
  inputLabel.textContent = labelName;

  inputDiv.appendChild(inputLabel);
  inputDiv.appendChild(inputElem);

  return inputDiv;
};

const headerAppend = (form, text) => {
  const formRef = form;
  formRef.appendChild(document.createElement("h1"));
  formRef.lastChild.textContent = text;
};

function contactPage(contentElem) {
  const contactDiv = document.createElement("div");
  contactDiv.classList.add("contact-div");

  const contactForm = document.createElement("form");
  contactForm.appendChild(document.createElement("h1"));
  contactForm.firstChild.textContent = "Contact us!";
  contactForm.classList.add("contact-form");
  contactForm.appendChild(
    createInput(
      "text",
      "name",
      true,
      "3",
      "^[a-zA-Z]+(?:[\\s-][a-zA-Z]+)*$",
      "Your name",
      "Name*"
    )
  );

  contactForm.appendChild(
    createInput("tel", "phone", false, "", "", "Your phone", "Phone")
  );

  contactForm.appendChild(
    createInput("email", "email", true, "", "", "Your email", "Email*")
  );

  const inputDiv = document.createElement("div");
  inputDiv.classList.add("input-div");

  const textareaLabel = document.createElement("label");
  textareaLabel.setAttribute("for", "message");
  textareaLabel.textContent = "Write us a message!*";

  const textArea = document.createElement("textarea");
  textArea.setAttribute("id", "message");
  textArea.setAttribute("name", "message");
  textArea.setAttribute("rows", "10");
  textArea.setAttribute("minlength", "20");
  textArea.setAttribute("cols", "55");
  textArea.required = true;

  inputDiv.appendChild(textareaLabel);
  inputDiv.appendChild(textArea);

  contactForm.appendChild(inputDiv);

  const submitBtn = document.createElement("input");
  submitBtn.setAttribute("type", "submit");
  submitBtn.setAttribute("value", "Send message");

  contactForm.addEventListener("submit", (e) => {
    e.preventDefault();
    while (contactForm.firstChild) {
      contactForm.removeChild(contactForm.firstChild);
    }
    headerAppend(contactForm, "Thank you for reaching out!");
    headerAppend(contactForm, "We will surely respond to you soon.");
    headerAppend(contactForm, "Meanwhile meet our cute pets!");
    contactForm.appendChild(document.createElement("img"));
    contactForm.lastChild.setAttribute("src", _images_pets_png__WEBPACK_IMPORTED_MODULE_0__);
  });

  contactForm.appendChild(submitBtn);

  contactDiv.appendChild(contactForm);

  contentElem.appendChild(contactDiv);
}


/***/ }),

/***/ "./src/modules/header-footer.js":
/*!**************************************!*\
  !*** ./src/modules/header-footer.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createFooter": () => (/* binding */ createFooter),
/* harmony export */   "createHeader": () => (/* binding */ createHeader)
/* harmony export */ });
/* harmony import */ var _clear__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./clear */ "./src/modules/clear.js");
/* harmony import */ var _main_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./main-page */ "./src/modules/main-page.js");
/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menu */ "./src/modules/menu.js");
/* harmony import */ var _contact__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./contact */ "./src/modules/contact.js");





function createHeader(contentElem) {
  const headerElem = document.createElement("div");
  headerElem.setAttribute("class", "header");

  const navButton = document.createElement("button");
  navButton.setAttribute("class", "nav-button");

  const homeButton = navButton.cloneNode();
  const menuButton = navButton.cloneNode();
  const contactButton = navButton.cloneNode();

  homeButton.textContent = "Home";
  homeButton.classList.add("active");
  menuButton.textContent = "Menu";
  contactButton.textContent = "Contact";

  const buttons = [homeButton, menuButton, contactButton];

  buttons.forEach((btn) => {
    btn.addEventListener("click", () => {
      (0,_clear__WEBPACK_IMPORTED_MODULE_0__["default"])(contentElem);
      buttons.forEach((_btn) => {
        if (_btn.classList.contains("active")) {
          _btn.classList.remove("active");
        }
      });
      btn.classList.add("active");

      if (btn.textContent === "Home") {
        (0,_main_page__WEBPACK_IMPORTED_MODULE_1__["default"])(contentElem);
      } else if (btn.textContent === "Menu") {
        (0,_menu__WEBPACK_IMPORTED_MODULE_2__["default"])(contentElem);
      } else {
        (0,_contact__WEBPACK_IMPORTED_MODULE_3__["default"])(contentElem);
      }
    });
    headerElem.appendChild(btn);
  });

  contentElem.before(headerElem);
}

function createFooter(contentElem) {
  const footerElem = document.createElement("div");
  footerElem.setAttribute("class", "footer");
  const gitLink = document.createElement("a");
  gitLink.setAttribute("href", "https://github.com/Confucii");
  gitLink.textContent = "Created by Confucii!";
  footerElem.appendChild(gitLink);
  contentElem.after(footerElem);
}


/***/ }),

/***/ "./src/modules/main-page.js":
/*!**********************************!*\
  !*** ./src/modules/main-page.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ homePage)
/* harmony export */ });
/* harmony import */ var _images_hero_cook_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../images/hero-cook.png */ "./src/images/hero-cook.png");
/* harmony import */ var _images_restaurant_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../images/restaurant.png */ "./src/images/restaurant.png");
/* harmony import */ var _images_staff_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../images/staff.png */ "./src/images/staff.png");




function homePage(contentElem) {
  const homeContent = document.createElement("div");
  homeContent.classList.add("home-content");

  const imgDiv = document.createElement("div");
  imgDiv.appendChild(document.createElement("img"));
  imgDiv.classList.add("content-img");

  const txtDiv = document.createElement("div");
  txtDiv.appendChild(document.createElement("h4"));
  txtDiv.appendChild(document.createElement("p"));
  txtDiv.classList.add("content-txt");

  const founderImg = imgDiv.cloneNode(true);
  const founderTxt = txtDiv.cloneNode(true);
  const locationTxt = txtDiv.cloneNode(true);
  const locationImg = imgDiv.cloneNode(true);
  const promiseImg = imgDiv.cloneNode(true);
  const promiseTxt = txtDiv.cloneNode(true);

  founderImg.firstChild.setAttribute("src", _images_hero_cook_png__WEBPACK_IMPORTED_MODULE_0__);
  locationImg.firstChild.setAttribute("src", _images_restaurant_png__WEBPACK_IMPORTED_MODULE_1__);
  promiseImg.firstChild.setAttribute("src", _images_staff_png__WEBPACK_IMPORTED_MODULE_2__);

  founderTxt.firstChild.textContent = "Story";
  founderTxt.lastChild.textContent =
    "Pencil Sketch Kitchen, established twelve years ago, is a restaurant where every dish is a work of art, drawn in pencil by skilled chefs. The idea came from a group of passionate artists who combined their love for art and food to create a unique dining experience. The restaurant gained popularity among foodies and art enthusiasts, constantly evolving its menu with new dishes and pencil sketches. It has become a well-known destination for food and art lovers, hosting art exhibitions and events, and inspiring customers with its artistic approach to food.";
  locationTxt.firstChild.textContent = "Location";
  locationTxt.lastChild.textContent =
    "The main location of Pencil Sketch Kitchen is situated in the center of Vienna. The restaurant is located in a spacious building that was previously an art gallery. The interiors of the restaurant are adorned with pencil sketches of various dishes, adding to the artistic ambiance. The kitchen is open, allowing customers to witness the chefs at work, drawing and preparing their dishes. The location is easily accessible by public transportation, and it is a popular destination for tourists and locals alike who are looking for a unique dining experience.";
  promiseTxt.firstChild.textContent = "Promise";
  promiseTxt.lastChild.textContent =
    "Our talented chefs use their artistic skills to bring every dish to life, from the appetizers to the desserts. At our restaurant, you will not only enjoy an unforgettable culinary experience, but also have the opportunity to admire the intricate pencil drawings that accompany each dish. Our carefully curated decor showcases the incredible talent of our chefs and will transport you to a world of creativity and imagination.";

  homeContent.appendChild(founderImg);
  homeContent.appendChild(founderTxt);
  homeContent.appendChild(locationTxt);
  homeContent.appendChild(locationImg);
  homeContent.appendChild(promiseImg);
  homeContent.appendChild(promiseTxt);

  contentElem.appendChild(homeContent);
}


/***/ }),

/***/ "./src/modules/menu.js":
/*!*****************************!*\
  !*** ./src/modules/menu.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ menuPage)
/* harmony export */ });
/* harmony import */ var _images_beefstroganoff_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../images/beefstroganoff.png */ "./src/images/beefstroganoff.png");
/* harmony import */ var _images_burger_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../images/burger.png */ "./src/images/burger.png");
/* harmony import */ var _images_curry_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../images/curry.png */ "./src/images/curry.png");
/* harmony import */ var _images_padthai_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../images/padthai.png */ "./src/images/padthai.png");
/* harmony import */ var _images_pasta_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../images/pasta.png */ "./src/images/pasta.png");
/* harmony import */ var _images_pizza_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../images/pizza.png */ "./src/images/pizza.png");
/* harmony import */ var _images_salmon_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../images/salmon.png */ "./src/images/salmon.png");
/* harmony import */ var _images_tikkimasala_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../images/tikkimasala.png */ "./src/images/tikkimasala.png");
/* harmony import */ var _images_tiramisu_png__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../images/tiramisu.png */ "./src/images/tiramisu.png");
/* harmony import */ var _images_wrap_png__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../images/wrap.png */ "./src/images/wrap.png");











const foodFactory = (img, name, description) => {
  const foodCard = document.createElement("div");
  foodCard.classList.add("food-card");
  foodCard.appendChild(document.createElement("img"));
  foodCard.lastChild.setAttribute("src", img);
  foodCard.appendChild(document.createElement("h5"));
  foodCard.lastChild.textContent = name;
  foodCard.appendChild(document.createElement("p"));
  foodCard.lastChild.textContent = description;

  return foodCard;
};

function menuPage(contentElem) {
  const dish1 = foodFactory(
    _images_pasta_png__WEBPACK_IMPORTED_MODULE_4__,
    "Pesto Pasta",
    "Pasta with homemade pesto sauce"
  );
  const dish2 = foodFactory(
    _images_salmon_png__WEBPACK_IMPORTED_MODULE_6__,
    "Grilled Salmon",
    "Fresh salmon grilled with lemon and herbs"
  );
  const dish3 = foodFactory(
    _images_tikkimasala_png__WEBPACK_IMPORTED_MODULE_7__,
    "Chicken Tikka Masala",
    "Chicken marinated in spices and cooked in a creamy tomato sauce"
  );
  const dish4 = foodFactory(
    _images_beefstroganoff_png__WEBPACK_IMPORTED_MODULE_0__,
    "Beef Stroganoff",
    "Tender beef strips cooked in a rich mushroom sauce"
  );
  const dish5 = foodFactory(
    _images_pizza_png__WEBPACK_IMPORTED_MODULE_5__,
    "Margherita Pizza",
    "Classic pizza with tomato sauce, mozzarella, and fresh basil"
  );
  const dish6 = foodFactory(
    _images_padthai_png__WEBPACK_IMPORTED_MODULE_3__,
    "Pad Thai",
    "Stir-fried rice noodles with shrimp, peanuts, and bean sprouts"
  );
  const dish7 = foodFactory(
    _images_wrap_png__WEBPACK_IMPORTED_MODULE_9__,
    "Falafel Wrap",
    "Falafel balls with lettuce, tomatoes, and tahini sauce wrapped in a pita"
  );
  const dish8 = foodFactory(
    _images_burger_png__WEBPACK_IMPORTED_MODULE_1__,
    "Beef Burger",
    "Juicy beef patty with cheese, lettuce, and tomato on a brioche bun"
  );
  const dish9 = foodFactory(
    _images_curry_png__WEBPACK_IMPORTED_MODULE_2__,
    "Vegetable Curry",
    "Assorted vegetables cooked in a spicy curry sauce"
  );
  const dish10 = foodFactory(
    _images_tiramisu_png__WEBPACK_IMPORTED_MODULE_8__,
    "Tiramisu",
    "Classic Italian dessert with layers of mascarpone cheese and ladyfingers"
  );

  const foods = [
    dish1,
    dish2,
    dish3,
    dish4,
    dish5,
    dish6,
    dish7,
    dish8,
    dish9,
    dish10,
  ];
  const homeContent = document.createElement("div");
  homeContent.classList.add("menu-content");

  foods.forEach((food) => {
    homeContent.appendChild(food);
  });

  contentElem.appendChild(homeContent);
}


/***/ }),

/***/ "./src/fonts/Pencil-Regular.woff":
/*!***************************************!*\
  !*** ./src/fonts/Pencil-Regular.woff ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "e952f90991f4631e185f.woff";

/***/ }),

/***/ "./src/fonts/Pencil-Regular.woff2":
/*!****************************************!*\
  !*** ./src/fonts/Pencil-Regular.woff2 ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "cdacabe5626850c3cd69.woff2";

/***/ }),

/***/ "./src/images/beefstroganoff.png":
/*!***************************************!*\
  !*** ./src/images/beefstroganoff.png ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "e5765a1cd2b5a86cb39b.png";

/***/ }),

/***/ "./src/images/burger.png":
/*!*******************************!*\
  !*** ./src/images/burger.png ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "477aa36e7ccd32c17afe.png";

/***/ }),

/***/ "./src/images/cook.png":
/*!*****************************!*\
  !*** ./src/images/cook.png ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "1bfdbfdcd902ed15b152.png";

/***/ }),

/***/ "./src/images/curry.png":
/*!******************************!*\
  !*** ./src/images/curry.png ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "701bc2d0db649182cc06.png";

/***/ }),

/***/ "./src/images/hero-cook.png":
/*!**********************************!*\
  !*** ./src/images/hero-cook.png ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "07014abb2334b6754818.png";

/***/ }),

/***/ "./src/images/padthai.png":
/*!********************************!*\
  !*** ./src/images/padthai.png ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "780a6e835bfa3a5bca61.png";

/***/ }),

/***/ "./src/images/pasta.png":
/*!******************************!*\
  !*** ./src/images/pasta.png ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "9dcca2a82f07149763ce.png";

/***/ }),

/***/ "./src/images/pets.png":
/*!*****************************!*\
  !*** ./src/images/pets.png ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "30c5f7d274f650468c04.png";

/***/ }),

/***/ "./src/images/pizza.png":
/*!******************************!*\
  !*** ./src/images/pizza.png ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "82c21db229748479a8a5.png";

/***/ }),

/***/ "./src/images/restaurant.png":
/*!***********************************!*\
  !*** ./src/images/restaurant.png ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "86c087f6ad708f904cfc.png";

/***/ }),

/***/ "./src/images/salmon.png":
/*!*******************************!*\
  !*** ./src/images/salmon.png ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "196f54292a65e1d52a89.png";

/***/ }),

/***/ "./src/images/staff.png":
/*!******************************!*\
  !*** ./src/images/staff.png ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "a4df153b8a7ee7d9a36c.png";

/***/ }),

/***/ "./src/images/tikkimasala.png":
/*!************************************!*\
  !*** ./src/images/tikkimasala.png ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "9245876b5453d0df322a.png";

/***/ }),

/***/ "./src/images/tiramisu.png":
/*!*********************************!*\
  !*** ./src/images/tiramisu.png ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "bd77cfed0233cff0d34b.png";

/***/ }),

/***/ "./src/images/wrap.png":
/*!*****************************!*\
  !*** ./src/images/wrap.png ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "387e66ac3877482d1065.png";

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
/******/ 			id: moduleId,
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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
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
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
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
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
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
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style/style.css */ "./src/style/style.css");
/* harmony import */ var _modules_header_footer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/header-footer */ "./src/modules/header-footer.js");
/* harmony import */ var _modules_main_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/main-page */ "./src/modules/main-page.js");




function Render() {
  const bodySelector = document.querySelector("body");

  const contentDiv = document.createElement("div");
  contentDiv.setAttribute("id", "content");

  bodySelector.appendChild(contentDiv);

  _modules_header_footer__WEBPACK_IMPORTED_MODULE_1__.createFooter(contentDiv);
  _modules_header_footer__WEBPACK_IMPORTED_MODULE_1__.createHeader(contentDiv);
  (0,_modules_main_page__WEBPACK_IMPORTED_MODULE_2__["default"])(contentDiv);
}

Render();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQ2hHQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOztVQUVBO1VBQ0E7Ozs7O1dDekJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSxHQUFHO1dBQ0g7V0FDQTtXQUNBLENBQUM7Ozs7O1dDUEQ7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOzs7OztXQ2ZBOztXQUVBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7Ozs7V0NyQkE7Ozs7Ozs7Ozs7Ozs7O0FDQTJCO0FBQzZCO0FBQ2I7O0FBRTNDO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQSxFQUFFLGdFQUF5QjtBQUMzQixFQUFFLGdFQUF5QjtBQUMzQixFQUFFLDhEQUFRO0FBQ1Y7O0FBRUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvc3R5bGUvc3R5bGUuY3NzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvc3R5bGUvc3R5bGUuY3NzP2M5ZjAiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvbW9kdWxlcy9jbGVhci5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvbW9kdWxlcy9jb250YWN0LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9tb2R1bGVzL2hlYWRlci1mb290ZXIuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL21vZHVsZXMvbWFpbi1wYWdlLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9tb2R1bGVzL21lbnUuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi4uL2ZvbnRzL1BlbmNpbC1SZWd1bGFyLndvZmYyXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18gPSBuZXcgVVJMKFwiLi4vZm9udHMvUGVuY2lsLVJlZ3VsYXIud29mZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8yX19fID0gbmV3IFVSTChcIi4uL2ltYWdlcy9jb29rLnBuZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMl9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzJfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogXFxcInBlbmNpbFxcXCI7XFxuICBzcmM6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gKyBcIikgZm9ybWF0KFxcXCJ3b2ZmMlxcXCIpLFxcbiAgICB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fICsgXCIpIGZvcm1hdChcXFwid29mZlxcXCIpO1xcbn1cXG5cXG4qIHtcXG4gIG1hcmdpbjogMHB4O1xcbiAgcGFkZGluZzogMHB4O1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuaHRtbCxcXG5ib2R5IHtcXG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xcbiAgZm9udC1mYW1pbHk6IFxcXCJwZW5jaWxcXFwiLCBzYW5zLXNlcmlmO1xcbn1cXG5cXG5ib2R5IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMl9fXyArIFwiKTtcXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcbiAgYmFja2dyb3VuZC1wb3NpdGlvbi14OiBjZW50ZXI7XFxufVxcblxcbi5oZWFkZXIge1xcbiAgaGVpZ2h0OiA3dmg7XFxuICBwb3NpdGlvbjogc3RpY2t5O1xcbiAgdG9wOiAwcHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNDUsIDI0NSwgMjIwLCAwLjkpO1xcbn1cXG5cXG4ubmF2LWJ1dHRvbiB7XFxuICBmb250LWZhbWlseTogaW5oZXJpdDtcXG4gIGZvbnQtc2l6ZTogMi41cmVtO1xcbiAgd2lkdGg6IDE1JTtcXG4gIGhlaWdodDogMTAwJTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMCk7XFxuICBib3JkZXI6IG5vbmU7XFxufVxcblxcbi5uYXYtYnV0dG9uOmhvdmVyOm5vdCguYWN0aXZlKSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1MCwgMjM1LCAyMTUsIDAuNSk7XFxufVxcblxcbi5hY3RpdmUge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1MCwgMjM1LCAyMTUpO1xcbn1cXG5cXG4jY29udGVudCB7XFxuICBmbGV4OiAxO1xcbn1cXG5cXG4uaG9tZS1jb250ZW50IHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgzLCA1NTBweCk7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgzLCAxZnIpO1xcbiAgY29sdW1uLWdhcDogNXZ3O1xcbiAgcm93LWdhcDogNXZoO1xcbiAgcGFkZGluZzogNXZoIDEwdnc7XFxufVxcblxcbi5jb250ZW50LWltZyBpbWcge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBvYmplY3QtZml0OiBjb3ZlcjtcXG4gIG9iamVjdC1wb3NpdGlvbjogdG9wO1xcbn1cXG5cXG4uY29udGVudC10eHQge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhbmNoZWRhbG1vbmQ7XFxuICBib3JkZXI6IDJweCBkYXNoZWQgIzRlNDk0MTtcXG4gIGZvbnQtc2l6ZTogMi41cmVtO1xcbiAgcGFkZGluZzogMiUgNSU7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbn1cXG5cXG4uY29udGVudC10eHQgaDQge1xcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcXG4gIGZvbnQtc2l6ZTogM3JlbTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuI2NvbnRlbnQgLmhvbWUtY29udGVudCBkaXY6bnRoLW9mLXR5cGUoMiksXFxuI2NvbnRlbnQgLmhvbWUtY29udGVudCBkaXY6bnRoLW9mLXR5cGUoNikge1xcbiAgZ3JpZC1jb2x1bW46IDIvNDtcXG59XFxuXFxuI2NvbnRlbnQgLmhvbWUtY29udGVudCBkaXY6bnRoLW9mLXR5cGUoMykge1xcbiAgZ3JpZC1jb2x1bW46IDEvMztcXG59XFxuXFxuYSB7XFxuICBjb2xvcjogYmxhY2s7XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxufVxcblxcbi5tZW51LWNvbnRlbnQge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maXQsIG1pbm1heCgzNTBweCwgMWZyKSk7XFxuICBwYWRkaW5nOiA1dmggMTB2dztcXG4gIGNvbHVtbi1nYXA6IDc1cHg7XFxuICByb3ctZ2FwOiA3NXB4O1xcbn1cXG5cXG4uZm9vZC1jYXJkIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ2FwOiAxNXB4O1xcbiAgZm9udC1zaXplOiAycmVtO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBwYWRkaW5nLXRvcDogMyU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFuY2hlZGFsbW9uZDtcXG4gIGJvcmRlcjogMnB4IGRhc2hlZCAjNGU0OTQxO1xcbn1cXG5cXG4uZm9vZC1jYXJkIGltZyB7XFxuICB3aWR0aDogNjUlO1xcbiAgaGVpZ2h0OiA2NSU7XFxuICBvYmplY3QtZml0OiBjb3ZlcjtcXG59XFxuXFxuLmZvb2QtY2FyZCBoNSB7XFxuICBmb250LXNpemU6IDIuNXJlbTtcXG59XFxuXFxuLmZvb2QtY2FyZCBwIHtcXG4gIHBhZGRpbmc6IDAgMTAlIDUlO1xcbiAgaGVpZ2h0OiAxMjBweDtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLmNvbnRhY3QtZGl2IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBwYWRkaW5nOiA1JTtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5cXG5mb3JtIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBwYWRkaW5nOiAyMHB4IDMwcHg7XFxuICBnYXA6IDIwcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI0NSwgMjQ1LCAyMjAsIDAuOSk7XFxuICBib3JkZXItcmFkaXVzOiAxNXB4O1xcbn1cXG5cXG5mb3JtIGgxIHtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGZvbnQtc2l6ZTogM3JlbTtcXG4gIGdyaWQtY29sdW1uOiAxLzM7XFxufVxcblxcbi5pbnB1dC1kaXYge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogc3RhcnQ7XFxuICBmb250LXNpemU6IDJyZW07XFxufVxcblxcbi5pbnB1dC1kaXYgaW5wdXQge1xcbiAgZm9udC1zaXplOiAycmVtO1xcbiAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XFxuICBwYWRkaW5nOiA1cHggMTBweDtcXG59XFxuXFxuLmlucHV0LWRpdjpmaXJzdC1vZi10eXBlIHtcXG4gIGdyaWQtY29sdW1uOiAxLzI7XFxufVxcblxcbi5pbnB1dC1kaXY6bnRoLW9mLXR5cGUoMikge1xcbiAgZ3JpZC1jb2x1bW46IDIvMztcXG59XFxuXFxuLmlucHV0LWRpdjpudGgtb2YtdHlwZSgyKSBpbnB1dCB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBib3R0b206IC03cHg7XFxufVxcblxcbi5pbnB1dC1kaXY6bnRoLW9mLXR5cGUoMykge1xcbiAgZ3JpZC1jb2x1bW46IDEvMztcXG4gIGp1c3RpZnktc2VsZjogc3RyZXRjaDtcXG59XFxuXFxuLmlucHV0LWRpdjpudGgtb2YtdHlwZSgzKSBpbnB1dCB7XFxuICB3aWR0aDogMTAwJTtcXG59XFxuXFxuLmlucHV0LWRpdjpudGgtb2YtdHlwZSg0KSB7XFxuICBncmlkLWNvbHVtbjogMS8zO1xcbiAganVzdGlmeS1zZWxmOiBzdHJldGNoO1xcbn1cXG5cXG50ZXh0YXJlYSB7XFxuICBwYWRkaW5nOiAxMHB4O1xcbiAgd2lkdGg6IDEwMCU7XFxuICByZXNpemU6IG5vbmU7XFxufVxcblxcbmlucHV0W3R5cGU9XFxcInN1Ym1pdFxcXCJdIHtcXG4gIGp1c3RpZnktc2VsZjogY2VudGVyO1xcbiAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNGU0OTQxO1xcbiAgcGFkZGluZzogMTBweDtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIGNvbG9yOiBibGFuY2hlZGFsbW9uZDtcXG4gIGZvbnQtc2l6ZTogMnJlbTtcXG4gIGdyaWQtY29sdW1uOiAxLzM7XFxuICBib3JkZXI6IG5vbmU7XFxufVxcblxcbmlucHV0W3R5cGU9XFxcInN1Ym1pdFxcXCJdOmFjdGl2ZSB7XFxuICBib3gtc2hhZG93OiAwIDAgMTBweCByZ2JhKDAsIDAsIDAsIDAuNSk7XFxufVxcblxcbi5jb250YWN0LWRpdiBpbWcge1xcbiAgZ3JpZC1jb2x1bW46IDEvMztcXG4gIGp1c3RpZnktc2VsZjogY2VudGVyO1xcbiAgd2lkdGg6IDgwJTtcXG4gIGhlaWdodDogODAlO1xcbn1cXG5cXG4uZm9vdGVyIHtcXG4gIGhlaWdodDogNXZoO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGZvbnQtc2l6ZTogMS43cmVtO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNDUsIDI0NSwgMjIwLCAwLjkpO1xcbn1cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0UscUJBQXFCO0VBQ3JCOzBEQUNvRDtBQUN0RDs7QUFFQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0VBQ1osc0JBQXNCO0FBQ3hCOztBQUVB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Q1wiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwicGVuY2lsXFxcIjtcXG4gIHNyYzogdXJsKFxcXCIuLi9mb250cy9QZW5jaWwtUmVndWxhci53b2ZmMlxcXCIpIGZvcm1hdChcXFwid29mZjJcXFwiKSxcXG4gICAgdXJsKFxcXCIuLi9mb250cy9QZW5jaWwtUmVndWxhci53b2ZmXFxcIikgZm9ybWF0KFxcXCJ3b2ZmXFxcIik7XFxufVxcblxcbioge1xcbiAgbWFyZ2luOiAwcHg7XFxuICBwYWRkaW5nOiAwcHg7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG5odG1sLFxcbmJvZHkge1xcbiAgbWluLWhlaWdodDogMTAwdmg7XFxuICBmb250LWZhbWlseTogXFxcInBlbmNpbFxcXCIsIHNhbnMtc2VyaWY7XFxufVxcblxcbmJvZHkge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXFxcIi4uL2ltYWdlcy9jb29rLnBuZ1xcXCIpO1xcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uLXg6IGNlbnRlcjtcXG59XFxuXFxuLmhlYWRlciB7XFxuICBoZWlnaHQ6IDd2aDtcXG4gIHBvc2l0aW9uOiBzdGlja3k7XFxuICB0b3A6IDBweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI0NSwgMjQ1LCAyMjAsIDAuOSk7XFxufVxcblxcbi5uYXYtYnV0dG9uIHtcXG4gIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xcbiAgZm9udC1zaXplOiAyLjVyZW07XFxuICB3aWR0aDogMTUlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwKTtcXG4gIGJvcmRlcjogbm9uZTtcXG59XFxuXFxuLm5hdi1idXR0b246aG92ZXI6bm90KC5hY3RpdmUpIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjUwLCAyMzUsIDIxNSwgMC41KTtcXG59XFxuXFxuLmFjdGl2ZSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjUwLCAyMzUsIDIxNSk7XFxufVxcblxcbiNjb250ZW50IHtcXG4gIGZsZXg6IDE7XFxufVxcblxcbi5ob21lLWNvbnRlbnQge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDMsIDU1MHB4KTtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDMsIDFmcik7XFxuICBjb2x1bW4tZ2FwOiA1dnc7XFxuICByb3ctZ2FwOiA1dmg7XFxuICBwYWRkaW5nOiA1dmggMTB2dztcXG59XFxuXFxuLmNvbnRlbnQtaW1nIGltZyB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwJTtcXG4gIG9iamVjdC1maXQ6IGNvdmVyO1xcbiAgb2JqZWN0LXBvc2l0aW9uOiB0b3A7XFxufVxcblxcbi5jb250ZW50LXR4dCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFuY2hlZGFsbW9uZDtcXG4gIGJvcmRlcjogMnB4IGRhc2hlZCAjNGU0OTQxO1xcbiAgZm9udC1zaXplOiAyLjVyZW07XFxuICBwYWRkaW5nOiAyJSA1JTtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxufVxcblxcbi5jb250ZW50LXR4dCBoNCB7XFxuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xcbiAgZm9udC1zaXplOiAzcmVtO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4jY29udGVudCAuaG9tZS1jb250ZW50IGRpdjpudGgtb2YtdHlwZSgyKSxcXG4jY29udGVudCAuaG9tZS1jb250ZW50IGRpdjpudGgtb2YtdHlwZSg2KSB7XFxuICBncmlkLWNvbHVtbjogMi80O1xcbn1cXG5cXG4jY29udGVudCAuaG9tZS1jb250ZW50IGRpdjpudGgtb2YtdHlwZSgzKSB7XFxuICBncmlkLWNvbHVtbjogMS8zO1xcbn1cXG5cXG5hIHtcXG4gIGNvbG9yOiBibGFjaztcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG59XFxuXFxuLm1lbnUtY29udGVudCB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpdCwgbWlubWF4KDM1MHB4LCAxZnIpKTtcXG4gIHBhZGRpbmc6IDV2aCAxMHZ3O1xcbiAgY29sdW1uLWdhcDogNzVweDtcXG4gIHJvdy1nYXA6IDc1cHg7XFxufVxcblxcbi5mb29kLWNhcmQge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBnYXA6IDE1cHg7XFxuICBmb250LXNpemU6IDJyZW07XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwJTtcXG4gIHBhZGRpbmctdG9wOiAzJTtcXG4gIGJhY2tncm91bmQtY29sb3I6IGJsYW5jaGVkYWxtb25kO1xcbiAgYm9yZGVyOiAycHggZGFzaGVkICM0ZTQ5NDE7XFxufVxcblxcbi5mb29kLWNhcmQgaW1nIHtcXG4gIHdpZHRoOiA2NSU7XFxuICBoZWlnaHQ6IDY1JTtcXG4gIG9iamVjdC1maXQ6IGNvdmVyO1xcbn1cXG5cXG4uZm9vZC1jYXJkIGg1IHtcXG4gIGZvbnQtc2l6ZTogMi41cmVtO1xcbn1cXG5cXG4uZm9vZC1jYXJkIHAge1xcbiAgcGFkZGluZzogMCAxMCUgNSU7XFxuICBoZWlnaHQ6IDEyMHB4O1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4uY29udGFjdC1kaXYge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIHBhZGRpbmc6IDUlO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbmZvcm0ge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIHBhZGRpbmc6IDIwcHggMzBweDtcXG4gIGdhcDogMjBweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjQ1LCAyNDUsIDIyMCwgMC45KTtcXG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XFxufVxcblxcbmZvcm0gaDEge1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgZm9udC1zaXplOiAzcmVtO1xcbiAgZ3JpZC1jb2x1bW46IDEvMztcXG59XFxuXFxuLmlucHV0LWRpdiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBzdGFydDtcXG4gIGZvbnQtc2l6ZTogMnJlbTtcXG59XFxuXFxuLmlucHV0LWRpdiBpbnB1dCB7XFxuICBmb250LXNpemU6IDJyZW07XFxuICBmb250LWZhbWlseTogaW5oZXJpdDtcXG4gIHBhZGRpbmc6IDVweCAxMHB4O1xcbn1cXG5cXG4uaW5wdXQtZGl2OmZpcnN0LW9mLXR5cGUge1xcbiAgZ3JpZC1jb2x1bW46IDEvMjtcXG59XFxuXFxuLmlucHV0LWRpdjpudGgtb2YtdHlwZSgyKSB7XFxuICBncmlkLWNvbHVtbjogMi8zO1xcbn1cXG5cXG4uaW5wdXQtZGl2Om50aC1vZi10eXBlKDIpIGlucHV0IHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGJvdHRvbTogLTdweDtcXG59XFxuXFxuLmlucHV0LWRpdjpudGgtb2YtdHlwZSgzKSB7XFxuICBncmlkLWNvbHVtbjogMS8zO1xcbiAganVzdGlmeS1zZWxmOiBzdHJldGNoO1xcbn1cXG5cXG4uaW5wdXQtZGl2Om50aC1vZi10eXBlKDMpIGlucHV0IHtcXG4gIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG4uaW5wdXQtZGl2Om50aC1vZi10eXBlKDQpIHtcXG4gIGdyaWQtY29sdW1uOiAxLzM7XFxuICBqdXN0aWZ5LXNlbGY6IHN0cmV0Y2g7XFxufVxcblxcbnRleHRhcmVhIHtcXG4gIHBhZGRpbmc6IDEwcHg7XFxuICB3aWR0aDogMTAwJTtcXG4gIHJlc2l6ZTogbm9uZTtcXG59XFxuXFxuaW5wdXRbdHlwZT1cXFwic3VibWl0XFxcIl0ge1xcbiAganVzdGlmeS1zZWxmOiBjZW50ZXI7XFxuICBmb250LWZhbWlseTogaW5oZXJpdDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICM0ZTQ5NDE7XFxuICBwYWRkaW5nOiAxMHB4O1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgY29sb3I6IGJsYW5jaGVkYWxtb25kO1xcbiAgZm9udC1zaXplOiAycmVtO1xcbiAgZ3JpZC1jb2x1bW46IDEvMztcXG4gIGJvcmRlcjogbm9uZTtcXG59XFxuXFxuaW5wdXRbdHlwZT1cXFwic3VibWl0XFxcIl06YWN0aXZlIHtcXG4gIGJveC1zaGFkb3c6IDAgMCAxMHB4IHJnYmEoMCwgMCwgMCwgMC41KTtcXG59XFxuXFxuLmNvbnRhY3QtZGl2IGltZyB7XFxuICBncmlkLWNvbHVtbjogMS8zO1xcbiAganVzdGlmeS1zZWxmOiBjZW50ZXI7XFxuICB3aWR0aDogODAlO1xcbiAgaGVpZ2h0OiA4MCU7XFxufVxcblxcbi5mb290ZXIge1xcbiAgaGVpZ2h0OiA1dmg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZm9udC1zaXplOiAxLjdyZW07XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI0NSwgMjQ1LCAyMjAsIDAuOSk7XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7XG5cbiAgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH1cblxuICAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG4gIGlmICgvW1wiJygpIFxcdFxcbl18KCUyMCkvLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY2xlYXJFbGVtKGNvbnRlbnRFbGVtKSB7XG4gIHdoaWxlIChjb250ZW50RWxlbS5maXJzdENoaWxkKSB7XG4gICAgY29udGVudEVsZW0ucmVtb3ZlQ2hpbGQoY29udGVudEVsZW0uZmlyc3RDaGlsZCk7XG4gIH1cbn1cbiIsImltcG9ydCBwZXRzIGZyb20gXCIuLi9pbWFnZXMvcGV0cy5wbmdcIjtcblxuY29uc3QgY3JlYXRlSW5wdXQgPSAoXG4gIHR5cGUsXG4gIG5hbWUsXG4gIHJlcXVpcmVkLFxuICBtaW5sZW5ndGgsXG4gIHBhdHRlcm4sXG4gIHBsYWNlaG9sZGVyLFxuICBsYWJlbE5hbWVcbikgPT4ge1xuICBjb25zdCBpbnB1dERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGlucHV0RGl2LmNsYXNzTGlzdC5hZGQoXCJpbnB1dC1kaXZcIik7XG5cbiAgY29uc3QgaW5wdXRFbGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICBpbnB1dEVsZW0uc2V0QXR0cmlidXRlKFwidHlwZVwiLCB0eXBlKTtcbiAgaW5wdXRFbGVtLnNldEF0dHJpYnV0ZShcIm5hbWVcIiwgbmFtZSk7XG4gIGlucHV0RWxlbS5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBuYW1lKTtcbiAgaWYgKHJlcXVpcmVkKSBpbnB1dEVsZW0ucmVxdWlyZWQgPSB0cnVlO1xuICBpZiAobWlubGVuZ3RoKSBpbnB1dEVsZW0uc2V0QXR0cmlidXRlKFwibWlubGVuZ3RoXCIsIG1pbmxlbmd0aCk7XG4gIGlmIChwYXR0ZXJuKSBpbnB1dEVsZW0uc2V0QXR0cmlidXRlKFwicGF0dGVyblwiLCBwYXR0ZXJuKTtcbiAgaW5wdXRFbGVtLnNldEF0dHJpYnV0ZShcInBsYWNlaG9sZGVyXCIsIHBsYWNlaG9sZGVyKTtcblxuICBjb25zdCBpbnB1dExhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpO1xuICBpbnB1dExhYmVsLnNldEF0dHJpYnV0ZShcImZvclwiLCBuYW1lKTtcbiAgaW5wdXRMYWJlbC50ZXh0Q29udGVudCA9IGxhYmVsTmFtZTtcblxuICBpbnB1dERpdi5hcHBlbmRDaGlsZChpbnB1dExhYmVsKTtcbiAgaW5wdXREaXYuYXBwZW5kQ2hpbGQoaW5wdXRFbGVtKTtcblxuICByZXR1cm4gaW5wdXREaXY7XG59O1xuXG5jb25zdCBoZWFkZXJBcHBlbmQgPSAoZm9ybSwgdGV4dCkgPT4ge1xuICBjb25zdCBmb3JtUmVmID0gZm9ybTtcbiAgZm9ybVJlZi5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDFcIikpO1xuICBmb3JtUmVmLmxhc3RDaGlsZC50ZXh0Q29udGVudCA9IHRleHQ7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjb250YWN0UGFnZShjb250ZW50RWxlbSkge1xuICBjb25zdCBjb250YWN0RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29udGFjdERpdi5jbGFzc0xpc3QuYWRkKFwiY29udGFjdC1kaXZcIik7XG5cbiAgY29uc3QgY29udGFjdEZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZm9ybVwiKTtcbiAgY29udGFjdEZvcm0uYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgxXCIpKTtcbiAgY29udGFjdEZvcm0uZmlyc3RDaGlsZC50ZXh0Q29udGVudCA9IFwiQ29udGFjdCB1cyFcIjtcbiAgY29udGFjdEZvcm0uY2xhc3NMaXN0LmFkZChcImNvbnRhY3QtZm9ybVwiKTtcbiAgY29udGFjdEZvcm0uYXBwZW5kQ2hpbGQoXG4gICAgY3JlYXRlSW5wdXQoXG4gICAgICBcInRleHRcIixcbiAgICAgIFwibmFtZVwiLFxuICAgICAgdHJ1ZSxcbiAgICAgIFwiM1wiLFxuICAgICAgXCJeW2EtekEtWl0rKD86W1xcXFxzLV1bYS16QS1aXSspKiRcIixcbiAgICAgIFwiWW91ciBuYW1lXCIsXG4gICAgICBcIk5hbWUqXCJcbiAgICApXG4gICk7XG5cbiAgY29udGFjdEZvcm0uYXBwZW5kQ2hpbGQoXG4gICAgY3JlYXRlSW5wdXQoXCJ0ZWxcIiwgXCJwaG9uZVwiLCBmYWxzZSwgXCJcIiwgXCJcIiwgXCJZb3VyIHBob25lXCIsIFwiUGhvbmVcIilcbiAgKTtcblxuICBjb250YWN0Rm9ybS5hcHBlbmRDaGlsZChcbiAgICBjcmVhdGVJbnB1dChcImVtYWlsXCIsIFwiZW1haWxcIiwgdHJ1ZSwgXCJcIiwgXCJcIiwgXCJZb3VyIGVtYWlsXCIsIFwiRW1haWwqXCIpXG4gICk7XG5cbiAgY29uc3QgaW5wdXREaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBpbnB1dERpdi5jbGFzc0xpc3QuYWRkKFwiaW5wdXQtZGl2XCIpO1xuXG4gIGNvbnN0IHRleHRhcmVhTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XG4gIHRleHRhcmVhTGFiZWwuc2V0QXR0cmlidXRlKFwiZm9yXCIsIFwibWVzc2FnZVwiKTtcbiAgdGV4dGFyZWFMYWJlbC50ZXh0Q29udGVudCA9IFwiV3JpdGUgdXMgYSBtZXNzYWdlISpcIjtcblxuICBjb25zdCB0ZXh0QXJlYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0ZXh0YXJlYVwiKTtcbiAgdGV4dEFyZWEuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJtZXNzYWdlXCIpO1xuICB0ZXh0QXJlYS5zZXRBdHRyaWJ1dGUoXCJuYW1lXCIsIFwibWVzc2FnZVwiKTtcbiAgdGV4dEFyZWEuc2V0QXR0cmlidXRlKFwicm93c1wiLCBcIjEwXCIpO1xuICB0ZXh0QXJlYS5zZXRBdHRyaWJ1dGUoXCJtaW5sZW5ndGhcIiwgXCIyMFwiKTtcbiAgdGV4dEFyZWEuc2V0QXR0cmlidXRlKFwiY29sc1wiLCBcIjU1XCIpO1xuICB0ZXh0QXJlYS5yZXF1aXJlZCA9IHRydWU7XG5cbiAgaW5wdXREaXYuYXBwZW5kQ2hpbGQodGV4dGFyZWFMYWJlbCk7XG4gIGlucHV0RGl2LmFwcGVuZENoaWxkKHRleHRBcmVhKTtcblxuICBjb250YWN0Rm9ybS5hcHBlbmRDaGlsZChpbnB1dERpdik7XG5cbiAgY29uc3Qgc3VibWl0QnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICBzdWJtaXRCdG4uc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcInN1Ym1pdFwiKTtcbiAgc3VibWl0QnRuLnNldEF0dHJpYnV0ZShcInZhbHVlXCIsIFwiU2VuZCBtZXNzYWdlXCIpO1xuXG4gIGNvbnRhY3RGb3JtLmFkZEV2ZW50TGlzdGVuZXIoXCJzdWJtaXRcIiwgKGUpID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgd2hpbGUgKGNvbnRhY3RGb3JtLmZpcnN0Q2hpbGQpIHtcbiAgICAgIGNvbnRhY3RGb3JtLnJlbW92ZUNoaWxkKGNvbnRhY3RGb3JtLmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBoZWFkZXJBcHBlbmQoY29udGFjdEZvcm0sIFwiVGhhbmsgeW91IGZvciByZWFjaGluZyBvdXQhXCIpO1xuICAgIGhlYWRlckFwcGVuZChjb250YWN0Rm9ybSwgXCJXZSB3aWxsIHN1cmVseSByZXNwb25kIHRvIHlvdSBzb29uLlwiKTtcbiAgICBoZWFkZXJBcHBlbmQoY29udGFjdEZvcm0sIFwiTWVhbndoaWxlIG1lZXQgb3VyIGN1dGUgcGV0cyFcIik7XG4gICAgY29udGFjdEZvcm0uYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKSk7XG4gICAgY29udGFjdEZvcm0ubGFzdENoaWxkLnNldEF0dHJpYnV0ZShcInNyY1wiLCBwZXRzKTtcbiAgfSk7XG5cbiAgY29udGFjdEZvcm0uYXBwZW5kQ2hpbGQoc3VibWl0QnRuKTtcblxuICBjb250YWN0RGl2LmFwcGVuZENoaWxkKGNvbnRhY3RGb3JtKTtcblxuICBjb250ZW50RWxlbS5hcHBlbmRDaGlsZChjb250YWN0RGl2KTtcbn1cbiIsImltcG9ydCBjbGVhckVsZW0gZnJvbSBcIi4vY2xlYXJcIjtcbmltcG9ydCBob21lUGFnZSBmcm9tIFwiLi9tYWluLXBhZ2VcIjtcbmltcG9ydCBtZW51UGFnZSBmcm9tIFwiLi9tZW51XCI7XG5pbXBvcnQgY29udGFjdFBhZ2UgZnJvbSBcIi4vY29udGFjdFwiO1xuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlSGVhZGVyKGNvbnRlbnRFbGVtKSB7XG4gIGNvbnN0IGhlYWRlckVsZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBoZWFkZXJFbGVtLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwiaGVhZGVyXCIpO1xuXG4gIGNvbnN0IG5hdkJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gIG5hdkJ1dHRvbi5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcIm5hdi1idXR0b25cIik7XG5cbiAgY29uc3QgaG9tZUJ1dHRvbiA9IG5hdkJ1dHRvbi5jbG9uZU5vZGUoKTtcbiAgY29uc3QgbWVudUJ1dHRvbiA9IG5hdkJ1dHRvbi5jbG9uZU5vZGUoKTtcbiAgY29uc3QgY29udGFjdEJ1dHRvbiA9IG5hdkJ1dHRvbi5jbG9uZU5vZGUoKTtcblxuICBob21lQnV0dG9uLnRleHRDb250ZW50ID0gXCJIb21lXCI7XG4gIGhvbWVCdXR0b24uY2xhc3NMaXN0LmFkZChcImFjdGl2ZVwiKTtcbiAgbWVudUJ1dHRvbi50ZXh0Q29udGVudCA9IFwiTWVudVwiO1xuICBjb250YWN0QnV0dG9uLnRleHRDb250ZW50ID0gXCJDb250YWN0XCI7XG5cbiAgY29uc3QgYnV0dG9ucyA9IFtob21lQnV0dG9uLCBtZW51QnV0dG9uLCBjb250YWN0QnV0dG9uXTtcblxuICBidXR0b25zLmZvckVhY2goKGJ0bikgPT4ge1xuICAgIGJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgY2xlYXJFbGVtKGNvbnRlbnRFbGVtKTtcbiAgICAgIGJ1dHRvbnMuZm9yRWFjaCgoX2J0bikgPT4ge1xuICAgICAgICBpZiAoX2J0bi5jbGFzc0xpc3QuY29udGFpbnMoXCJhY3RpdmVcIikpIHtcbiAgICAgICAgICBfYnRuLmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIik7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgICAgYnRuLmNsYXNzTGlzdC5hZGQoXCJhY3RpdmVcIik7XG5cbiAgICAgIGlmIChidG4udGV4dENvbnRlbnQgPT09IFwiSG9tZVwiKSB7XG4gICAgICAgIGhvbWVQYWdlKGNvbnRlbnRFbGVtKTtcbiAgICAgIH0gZWxzZSBpZiAoYnRuLnRleHRDb250ZW50ID09PSBcIk1lbnVcIikge1xuICAgICAgICBtZW51UGFnZShjb250ZW50RWxlbSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb250YWN0UGFnZShjb250ZW50RWxlbSk7XG4gICAgICB9XG4gICAgfSk7XG4gICAgaGVhZGVyRWxlbS5hcHBlbmRDaGlsZChidG4pO1xuICB9KTtcblxuICBjb250ZW50RWxlbS5iZWZvcmUoaGVhZGVyRWxlbSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVGb290ZXIoY29udGVudEVsZW0pIHtcbiAgY29uc3QgZm9vdGVyRWxlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGZvb3RlckVsZW0uc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJmb290ZXJcIik7XG4gIGNvbnN0IGdpdExpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYVwiKTtcbiAgZ2l0TGluay5zZXRBdHRyaWJ1dGUoXCJocmVmXCIsIFwiaHR0cHM6Ly9naXRodWIuY29tL0NvbmZ1Y2lpXCIpO1xuICBnaXRMaW5rLnRleHRDb250ZW50ID0gXCJDcmVhdGVkIGJ5IENvbmZ1Y2lpIVwiO1xuICBmb290ZXJFbGVtLmFwcGVuZENoaWxkKGdpdExpbmspO1xuICBjb250ZW50RWxlbS5hZnRlcihmb290ZXJFbGVtKTtcbn1cbiIsImltcG9ydCBpbWdDb29rIGZyb20gXCIuLi9pbWFnZXMvaGVyby1jb29rLnBuZ1wiO1xuaW1wb3J0IGltZ1Jlc3RhdXJhbnQgZnJvbSBcIi4uL2ltYWdlcy9yZXN0YXVyYW50LnBuZ1wiO1xuaW1wb3J0IGltZ1N0YWZmIGZyb20gXCIuLi9pbWFnZXMvc3RhZmYucG5nXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGhvbWVQYWdlKGNvbnRlbnRFbGVtKSB7XG4gIGNvbnN0IGhvbWVDb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgaG9tZUNvbnRlbnQuY2xhc3NMaXN0LmFkZChcImhvbWUtY29udGVudFwiKTtcblxuICBjb25zdCBpbWdEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBpbWdEaXYuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKSk7XG4gIGltZ0Rpdi5jbGFzc0xpc3QuYWRkKFwiY29udGVudC1pbWdcIik7XG5cbiAgY29uc3QgdHh0RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgdHh0RGl2LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoNFwiKSk7XG4gIHR4dERpdi5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKSk7XG4gIHR4dERpdi5jbGFzc0xpc3QuYWRkKFwiY29udGVudC10eHRcIik7XG5cbiAgY29uc3QgZm91bmRlckltZyA9IGltZ0Rpdi5jbG9uZU5vZGUodHJ1ZSk7XG4gIGNvbnN0IGZvdW5kZXJUeHQgPSB0eHREaXYuY2xvbmVOb2RlKHRydWUpO1xuICBjb25zdCBsb2NhdGlvblR4dCA9IHR4dERpdi5jbG9uZU5vZGUodHJ1ZSk7XG4gIGNvbnN0IGxvY2F0aW9uSW1nID0gaW1nRGl2LmNsb25lTm9kZSh0cnVlKTtcbiAgY29uc3QgcHJvbWlzZUltZyA9IGltZ0Rpdi5jbG9uZU5vZGUodHJ1ZSk7XG4gIGNvbnN0IHByb21pc2VUeHQgPSB0eHREaXYuY2xvbmVOb2RlKHRydWUpO1xuXG4gIGZvdW5kZXJJbWcuZmlyc3RDaGlsZC5zZXRBdHRyaWJ1dGUoXCJzcmNcIiwgaW1nQ29vayk7XG4gIGxvY2F0aW9uSW1nLmZpcnN0Q2hpbGQuc2V0QXR0cmlidXRlKFwic3JjXCIsIGltZ1Jlc3RhdXJhbnQpO1xuICBwcm9taXNlSW1nLmZpcnN0Q2hpbGQuc2V0QXR0cmlidXRlKFwic3JjXCIsIGltZ1N0YWZmKTtcblxuICBmb3VuZGVyVHh0LmZpcnN0Q2hpbGQudGV4dENvbnRlbnQgPSBcIlN0b3J5XCI7XG4gIGZvdW5kZXJUeHQubGFzdENoaWxkLnRleHRDb250ZW50ID1cbiAgICBcIlBlbmNpbCBTa2V0Y2ggS2l0Y2hlbiwgZXN0YWJsaXNoZWQgdHdlbHZlIHllYXJzIGFnbywgaXMgYSByZXN0YXVyYW50IHdoZXJlIGV2ZXJ5IGRpc2ggaXMgYSB3b3JrIG9mIGFydCwgZHJhd24gaW4gcGVuY2lsIGJ5IHNraWxsZWQgY2hlZnMuIFRoZSBpZGVhIGNhbWUgZnJvbSBhIGdyb3VwIG9mIHBhc3Npb25hdGUgYXJ0aXN0cyB3aG8gY29tYmluZWQgdGhlaXIgbG92ZSBmb3IgYXJ0IGFuZCBmb29kIHRvIGNyZWF0ZSBhIHVuaXF1ZSBkaW5pbmcgZXhwZXJpZW5jZS4gVGhlIHJlc3RhdXJhbnQgZ2FpbmVkIHBvcHVsYXJpdHkgYW1vbmcgZm9vZGllcyBhbmQgYXJ0IGVudGh1c2lhc3RzLCBjb25zdGFudGx5IGV2b2x2aW5nIGl0cyBtZW51IHdpdGggbmV3IGRpc2hlcyBhbmQgcGVuY2lsIHNrZXRjaGVzLiBJdCBoYXMgYmVjb21lIGEgd2VsbC1rbm93biBkZXN0aW5hdGlvbiBmb3IgZm9vZCBhbmQgYXJ0IGxvdmVycywgaG9zdGluZyBhcnQgZXhoaWJpdGlvbnMgYW5kIGV2ZW50cywgYW5kIGluc3BpcmluZyBjdXN0b21lcnMgd2l0aCBpdHMgYXJ0aXN0aWMgYXBwcm9hY2ggdG8gZm9vZC5cIjtcbiAgbG9jYXRpb25UeHQuZmlyc3RDaGlsZC50ZXh0Q29udGVudCA9IFwiTG9jYXRpb25cIjtcbiAgbG9jYXRpb25UeHQubGFzdENoaWxkLnRleHRDb250ZW50ID1cbiAgICBcIlRoZSBtYWluIGxvY2F0aW9uIG9mIFBlbmNpbCBTa2V0Y2ggS2l0Y2hlbiBpcyBzaXR1YXRlZCBpbiB0aGUgY2VudGVyIG9mIFZpZW5uYS4gVGhlIHJlc3RhdXJhbnQgaXMgbG9jYXRlZCBpbiBhIHNwYWNpb3VzIGJ1aWxkaW5nIHRoYXQgd2FzIHByZXZpb3VzbHkgYW4gYXJ0IGdhbGxlcnkuIFRoZSBpbnRlcmlvcnMgb2YgdGhlIHJlc3RhdXJhbnQgYXJlIGFkb3JuZWQgd2l0aCBwZW5jaWwgc2tldGNoZXMgb2YgdmFyaW91cyBkaXNoZXMsIGFkZGluZyB0byB0aGUgYXJ0aXN0aWMgYW1iaWFuY2UuIFRoZSBraXRjaGVuIGlzIG9wZW4sIGFsbG93aW5nIGN1c3RvbWVycyB0byB3aXRuZXNzIHRoZSBjaGVmcyBhdCB3b3JrLCBkcmF3aW5nIGFuZCBwcmVwYXJpbmcgdGhlaXIgZGlzaGVzLiBUaGUgbG9jYXRpb24gaXMgZWFzaWx5IGFjY2Vzc2libGUgYnkgcHVibGljIHRyYW5zcG9ydGF0aW9uLCBhbmQgaXQgaXMgYSBwb3B1bGFyIGRlc3RpbmF0aW9uIGZvciB0b3VyaXN0cyBhbmQgbG9jYWxzIGFsaWtlIHdobyBhcmUgbG9va2luZyBmb3IgYSB1bmlxdWUgZGluaW5nIGV4cGVyaWVuY2UuXCI7XG4gIHByb21pc2VUeHQuZmlyc3RDaGlsZC50ZXh0Q29udGVudCA9IFwiUHJvbWlzZVwiO1xuICBwcm9taXNlVHh0Lmxhc3RDaGlsZC50ZXh0Q29udGVudCA9XG4gICAgXCJPdXIgdGFsZW50ZWQgY2hlZnMgdXNlIHRoZWlyIGFydGlzdGljIHNraWxscyB0byBicmluZyBldmVyeSBkaXNoIHRvIGxpZmUsIGZyb20gdGhlIGFwcGV0aXplcnMgdG8gdGhlIGRlc3NlcnRzLiBBdCBvdXIgcmVzdGF1cmFudCwgeW91IHdpbGwgbm90IG9ubHkgZW5qb3kgYW4gdW5mb3JnZXR0YWJsZSBjdWxpbmFyeSBleHBlcmllbmNlLCBidXQgYWxzbyBoYXZlIHRoZSBvcHBvcnR1bml0eSB0byBhZG1pcmUgdGhlIGludHJpY2F0ZSBwZW5jaWwgZHJhd2luZ3MgdGhhdCBhY2NvbXBhbnkgZWFjaCBkaXNoLiBPdXIgY2FyZWZ1bGx5IGN1cmF0ZWQgZGVjb3Igc2hvd2Nhc2VzIHRoZSBpbmNyZWRpYmxlIHRhbGVudCBvZiBvdXIgY2hlZnMgYW5kIHdpbGwgdHJhbnNwb3J0IHlvdSB0byBhIHdvcmxkIG9mIGNyZWF0aXZpdHkgYW5kIGltYWdpbmF0aW9uLlwiO1xuXG4gIGhvbWVDb250ZW50LmFwcGVuZENoaWxkKGZvdW5kZXJJbWcpO1xuICBob21lQ29udGVudC5hcHBlbmRDaGlsZChmb3VuZGVyVHh0KTtcbiAgaG9tZUNvbnRlbnQuYXBwZW5kQ2hpbGQobG9jYXRpb25UeHQpO1xuICBob21lQ29udGVudC5hcHBlbmRDaGlsZChsb2NhdGlvbkltZyk7XG4gIGhvbWVDb250ZW50LmFwcGVuZENoaWxkKHByb21pc2VJbWcpO1xuICBob21lQ29udGVudC5hcHBlbmRDaGlsZChwcm9taXNlVHh0KTtcblxuICBjb250ZW50RWxlbS5hcHBlbmRDaGlsZChob21lQ29udGVudCk7XG59XG4iLCJpbXBvcnQgYmVlZlN0cm9nYW5vZmYgZnJvbSBcIi4uL2ltYWdlcy9iZWVmc3Ryb2dhbm9mZi5wbmdcIjtcbmltcG9ydCBidXJnZXIgZnJvbSBcIi4uL2ltYWdlcy9idXJnZXIucG5nXCI7XG5pbXBvcnQgY3VycnkgZnJvbSBcIi4uL2ltYWdlcy9jdXJyeS5wbmdcIjtcbmltcG9ydCBwYWR0aGFpIGZyb20gXCIuLi9pbWFnZXMvcGFkdGhhaS5wbmdcIjtcbmltcG9ydCBwYXN0YSBmcm9tIFwiLi4vaW1hZ2VzL3Bhc3RhLnBuZ1wiO1xuaW1wb3J0IHBpenphIGZyb20gXCIuLi9pbWFnZXMvcGl6emEucG5nXCI7XG5pbXBvcnQgc2FsbW9uIGZyb20gXCIuLi9pbWFnZXMvc2FsbW9uLnBuZ1wiO1xuaW1wb3J0IHRpa2tpbWFzYWxhIGZyb20gXCIuLi9pbWFnZXMvdGlra2ltYXNhbGEucG5nXCI7XG5pbXBvcnQgdGlyYW1pc3UgZnJvbSBcIi4uL2ltYWdlcy90aXJhbWlzdS5wbmdcIjtcbmltcG9ydCB3cmFwIGZyb20gXCIuLi9pbWFnZXMvd3JhcC5wbmdcIjtcblxuY29uc3QgZm9vZEZhY3RvcnkgPSAoaW1nLCBuYW1lLCBkZXNjcmlwdGlvbikgPT4ge1xuICBjb25zdCBmb29kQ2FyZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGZvb2RDYXJkLmNsYXNzTGlzdC5hZGQoXCJmb29kLWNhcmRcIik7XG4gIGZvb2RDYXJkLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIikpO1xuICBmb29kQ2FyZC5sYXN0Q2hpbGQuc2V0QXR0cmlidXRlKFwic3JjXCIsIGltZyk7XG4gIGZvb2RDYXJkLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoNVwiKSk7XG4gIGZvb2RDYXJkLmxhc3RDaGlsZC50ZXh0Q29udGVudCA9IG5hbWU7XG4gIGZvb2RDYXJkLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpKTtcbiAgZm9vZENhcmQubGFzdENoaWxkLnRleHRDb250ZW50ID0gZGVzY3JpcHRpb247XG5cbiAgcmV0dXJuIGZvb2RDYXJkO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbWVudVBhZ2UoY29udGVudEVsZW0pIHtcbiAgY29uc3QgZGlzaDEgPSBmb29kRmFjdG9yeShcbiAgICBwYXN0YSxcbiAgICBcIlBlc3RvIFBhc3RhXCIsXG4gICAgXCJQYXN0YSB3aXRoIGhvbWVtYWRlIHBlc3RvIHNhdWNlXCJcbiAgKTtcbiAgY29uc3QgZGlzaDIgPSBmb29kRmFjdG9yeShcbiAgICBzYWxtb24sXG4gICAgXCJHcmlsbGVkIFNhbG1vblwiLFxuICAgIFwiRnJlc2ggc2FsbW9uIGdyaWxsZWQgd2l0aCBsZW1vbiBhbmQgaGVyYnNcIlxuICApO1xuICBjb25zdCBkaXNoMyA9IGZvb2RGYWN0b3J5KFxuICAgIHRpa2tpbWFzYWxhLFxuICAgIFwiQ2hpY2tlbiBUaWtrYSBNYXNhbGFcIixcbiAgICBcIkNoaWNrZW4gbWFyaW5hdGVkIGluIHNwaWNlcyBhbmQgY29va2VkIGluIGEgY3JlYW15IHRvbWF0byBzYXVjZVwiXG4gICk7XG4gIGNvbnN0IGRpc2g0ID0gZm9vZEZhY3RvcnkoXG4gICAgYmVlZlN0cm9nYW5vZmYsXG4gICAgXCJCZWVmIFN0cm9nYW5vZmZcIixcbiAgICBcIlRlbmRlciBiZWVmIHN0cmlwcyBjb29rZWQgaW4gYSByaWNoIG11c2hyb29tIHNhdWNlXCJcbiAgKTtcbiAgY29uc3QgZGlzaDUgPSBmb29kRmFjdG9yeShcbiAgICBwaXp6YSxcbiAgICBcIk1hcmdoZXJpdGEgUGl6emFcIixcbiAgICBcIkNsYXNzaWMgcGl6emEgd2l0aCB0b21hdG8gc2F1Y2UsIG1venphcmVsbGEsIGFuZCBmcmVzaCBiYXNpbFwiXG4gICk7XG4gIGNvbnN0IGRpc2g2ID0gZm9vZEZhY3RvcnkoXG4gICAgcGFkdGhhaSxcbiAgICBcIlBhZCBUaGFpXCIsXG4gICAgXCJTdGlyLWZyaWVkIHJpY2Ugbm9vZGxlcyB3aXRoIHNocmltcCwgcGVhbnV0cywgYW5kIGJlYW4gc3Byb3V0c1wiXG4gICk7XG4gIGNvbnN0IGRpc2g3ID0gZm9vZEZhY3RvcnkoXG4gICAgd3JhcCxcbiAgICBcIkZhbGFmZWwgV3JhcFwiLFxuICAgIFwiRmFsYWZlbCBiYWxscyB3aXRoIGxldHR1Y2UsIHRvbWF0b2VzLCBhbmQgdGFoaW5pIHNhdWNlIHdyYXBwZWQgaW4gYSBwaXRhXCJcbiAgKTtcbiAgY29uc3QgZGlzaDggPSBmb29kRmFjdG9yeShcbiAgICBidXJnZXIsXG4gICAgXCJCZWVmIEJ1cmdlclwiLFxuICAgIFwiSnVpY3kgYmVlZiBwYXR0eSB3aXRoIGNoZWVzZSwgbGV0dHVjZSwgYW5kIHRvbWF0byBvbiBhIGJyaW9jaGUgYnVuXCJcbiAgKTtcbiAgY29uc3QgZGlzaDkgPSBmb29kRmFjdG9yeShcbiAgICBjdXJyeSxcbiAgICBcIlZlZ2V0YWJsZSBDdXJyeVwiLFxuICAgIFwiQXNzb3J0ZWQgdmVnZXRhYmxlcyBjb29rZWQgaW4gYSBzcGljeSBjdXJyeSBzYXVjZVwiXG4gICk7XG4gIGNvbnN0IGRpc2gxMCA9IGZvb2RGYWN0b3J5KFxuICAgIHRpcmFtaXN1LFxuICAgIFwiVGlyYW1pc3VcIixcbiAgICBcIkNsYXNzaWMgSXRhbGlhbiBkZXNzZXJ0IHdpdGggbGF5ZXJzIG9mIG1hc2NhcnBvbmUgY2hlZXNlIGFuZCBsYWR5ZmluZ2Vyc1wiXG4gICk7XG5cbiAgY29uc3QgZm9vZHMgPSBbXG4gICAgZGlzaDEsXG4gICAgZGlzaDIsXG4gICAgZGlzaDMsXG4gICAgZGlzaDQsXG4gICAgZGlzaDUsXG4gICAgZGlzaDYsXG4gICAgZGlzaDcsXG4gICAgZGlzaDgsXG4gICAgZGlzaDksXG4gICAgZGlzaDEwLFxuICBdO1xuICBjb25zdCBob21lQ29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGhvbWVDb250ZW50LmNsYXNzTGlzdC5hZGQoXCJtZW51LWNvbnRlbnRcIik7XG5cbiAgZm9vZHMuZm9yRWFjaCgoZm9vZCkgPT4ge1xuICAgIGhvbWVDb250ZW50LmFwcGVuZENoaWxkKGZvb2QpO1xuICB9KTtcblxuICBjb250ZW50RWxlbS5hcHBlbmRDaGlsZChob21lQ29udGVudCk7XG59XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjO1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHNjcmlwdFVybCA9IHNjcmlwdHNbc2NyaXB0cy5sZW5ndGggLSAxXS5zcmNcblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5iID0gZG9jdW1lbnQuYmFzZVVSSSB8fCBzZWxmLmxvY2F0aW9uLmhyZWY7XG5cbi8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4vLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbi8vIFtyZXNvbHZlLCByZWplY3QsIFByb21pc2VdID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxudmFyIGluc3RhbGxlZENodW5rcyA9IHtcblx0XCJtYWluXCI6IDBcbn07XG5cbi8vIG5vIGNodW5rIG9uIGRlbWFuZCBsb2FkaW5nXG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbi8vIG5vIG9uIGNodW5rcyBsb2FkZWRcblxuLy8gbm8ganNvbnAgZnVuY3Rpb24iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCBcIi4vc3R5bGUvc3R5bGUuY3NzXCI7XG5pbXBvcnQgKiBhcyBoZWFkZXJGb290ZXIgZnJvbSBcIi4vbW9kdWxlcy9oZWFkZXItZm9vdGVyXCI7XG5pbXBvcnQgaG9tZVBhZ2UgZnJvbSBcIi4vbW9kdWxlcy9tYWluLXBhZ2VcIjtcblxuZnVuY3Rpb24gUmVuZGVyKCkge1xuICBjb25zdCBib2R5U2VsZWN0b3IgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiYm9keVwiKTtcblxuICBjb25zdCBjb250ZW50RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29udGVudERpdi5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImNvbnRlbnRcIik7XG5cbiAgYm9keVNlbGVjdG9yLmFwcGVuZENoaWxkKGNvbnRlbnREaXYpO1xuXG4gIGhlYWRlckZvb3Rlci5jcmVhdGVGb290ZXIoY29udGVudERpdik7XG4gIGhlYWRlckZvb3Rlci5jcmVhdGVIZWFkZXIoY29udGVudERpdik7XG4gIGhvbWVQYWdlKGNvbnRlbnREaXYpO1xufVxuXG5SZW5kZXIoKTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==