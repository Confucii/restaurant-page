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
___CSS_LOADER_EXPORT___.push([module.id, "@font-face {\n  font-family: \"pencil\";\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ") format(\"woff2\"),\n    url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ") format(\"woff\");\n}\n\n* {\n  margin: 0px;\n  padding: 0px;\n  box-sizing: border-box;\n}\n\nhtml,\nbody {\n  min-height: 100vh;\n  font-family: \"pencil\", sans-serif;\n}\n\nbody {\n  display: flex;\n  flex-direction: column;\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + ");\n  background-repeat: no-repeat;\n  background-size: cover;\n  background-position-x: center;\n}\n\n.header {\n  height: 7vh;\n  position: sticky;\n  top: 0px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background-color: rgba(245, 245, 220, 0.9);\n}\n\n.nav-button {\n  font-family: inherit;\n  font-size: 2.5rem;\n  width: 15%;\n  height: 100%;\n  background-color: rgba(0, 0, 0, 0);\n  border: none;\n}\n\n.nav-button:hover:not(.active) {\n  background-color: rgba(250, 235, 215, 0.5);\n}\n\n.active {\n  background-color: rgb(250, 235, 215);\n}\n\n#content {\n  flex: 1;\n}\n\n.home-content {\n  display: grid;\n  grid-template-rows: repeat(3, 550px);\n  grid-template-columns: repeat(3, 1fr);\n  column-gap: 5vw;\n  row-gap: 5vh;\n  padding: 5vh 10vw;\n}\n\n.content-img img {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n  object-position: top;\n}\n\n.content-txt {\n  background-color: blanchedalmond;\n  border: 2px dashed #4e4941;\n  font-size: 2.5rem;\n  padding: 2% 5%;\n  overflow: hidden;\n}\n\n.content-txt h4 {\n  margin-bottom: 20px;\n  font-size: 3rem;\n  text-align: center;\n}\n\n#content .home-content div:nth-of-type(2),\n#content .home-content div:nth-of-type(6) {\n  grid-column: 2/4;\n}\n\n#content .home-content div:nth-of-type(3) {\n  grid-column: 1/3;\n}\n\na {\n  color: black;\n  text-decoration: none;\n}\n\n.menu-content {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));\n  padding: 5vh 10vw;\n  column-gap: 75px;\n  row-gap: 75px;\n}\n\n.food-card {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  gap: 15px;\n  font-size: 2rem;\n  width: 100%;\n  height: 100%;\n  padding-top: 3%;\n  background-color: blanchedalmond;\n  border: 2px dashed #4e4941;\n}\n\n.food-card img {\n  width: 65%;\n  height: 65%;\n  object-fit: cover;\n}\n\n.food-card h5 {\n  font-size: 2.5rem;\n}\n\n.food-card p {\n  padding: 0 10% 5%;\n  height: 120px;\n  text-align: center;\n}\n\n.contact-div {\n  display: flex;\n  padding: 5%;\n  justify-content: center;\n}\n\nform {\n  display: grid;\n  padding: 20px 30px;\n  gap: 20px;\n  background-color: rgba(245, 245, 220, 0.9);\n  border-radius: 15px;\n}\n\nform h1 {\n  text-align: center;\n  font-size: 3rem;\n  grid-column: 1/3;\n}\n\n.input-div {\n  display: flex;\n  flex-direction: column;\n  align-items: start;\n  font-size: 2rem;\n}\n\n.input-div input {\n  font-size: 2rem;\n  font-family: inherit;\n}\n\n.input-div:first-of-type {\n  grid-column: 1/2;\n}\n\n.input-div:nth-of-type(2) {\n  grid-column: 2/3;\n}\n\n.footer {\n  height: 5vh;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  font-size: 1.7rem;\n  background-color: rgba(245, 245, 220, 0.9);\n}\n", "",{"version":3,"sources":["webpack://./src/style/style.css"],"names":[],"mappings":"AAAA;EACE,qBAAqB;EACrB;0DACoD;AACtD;;AAEA;EACE,WAAW;EACX,YAAY;EACZ,sBAAsB;AACxB;;AAEA;;EAEE,iBAAiB;EACjB,iCAAiC;AACnC;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,yDAA2C;EAC3C,4BAA4B;EAC5B,sBAAsB;EACtB,6BAA6B;AAC/B;;AAEA;EACE,WAAW;EACX,gBAAgB;EAChB,QAAQ;EACR,aAAa;EACb,uBAAuB;EACvB,mBAAmB;EACnB,0CAA0C;AAC5C;;AAEA;EACE,oBAAoB;EACpB,iBAAiB;EACjB,UAAU;EACV,YAAY;EACZ,kCAAkC;EAClC,YAAY;AACd;;AAEA;EACE,0CAA0C;AAC5C;;AAEA;EACE,oCAAoC;AACtC;;AAEA;EACE,OAAO;AACT;;AAEA;EACE,aAAa;EACb,oCAAoC;EACpC,qCAAqC;EACrC,eAAe;EACf,YAAY;EACZ,iBAAiB;AACnB;;AAEA;EACE,WAAW;EACX,YAAY;EACZ,iBAAiB;EACjB,oBAAoB;AACtB;;AAEA;EACE,gCAAgC;EAChC,0BAA0B;EAC1B,iBAAiB;EACjB,cAAc;EACd,gBAAgB;AAClB;;AAEA;EACE,mBAAmB;EACnB,eAAe;EACf,kBAAkB;AACpB;;AAEA;;EAEE,gBAAgB;AAClB;;AAEA;EACE,gBAAgB;AAClB;;AAEA;EACE,YAAY;EACZ,qBAAqB;AACvB;;AAEA;EACE,aAAa;EACb,2DAA2D;EAC3D,iBAAiB;EACjB,gBAAgB;EAChB,aAAa;AACf;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,uBAAuB;EACvB,mBAAmB;EACnB,SAAS;EACT,eAAe;EACf,WAAW;EACX,YAAY;EACZ,eAAe;EACf,gCAAgC;EAChC,0BAA0B;AAC5B;;AAEA;EACE,UAAU;EACV,WAAW;EACX,iBAAiB;AACnB;;AAEA;EACE,iBAAiB;AACnB;;AAEA;EACE,iBAAiB;EACjB,aAAa;EACb,kBAAkB;AACpB;;AAEA;EACE,aAAa;EACb,WAAW;EACX,uBAAuB;AACzB;;AAEA;EACE,aAAa;EACb,kBAAkB;EAClB,SAAS;EACT,0CAA0C;EAC1C,mBAAmB;AACrB;;AAEA;EACE,kBAAkB;EAClB,eAAe;EACf,gBAAgB;AAClB;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,kBAAkB;EAClB,eAAe;AACjB;;AAEA;EACE,eAAe;EACf,oBAAoB;AACtB;;AAEA;EACE,gBAAgB;AAClB;;AAEA;EACE,gBAAgB;AAClB;;AAEA;EACE,WAAW;EACX,aAAa;EACb,uBAAuB;EACvB,mBAAmB;EACnB,iBAAiB;EACjB,0CAA0C;AAC5C","sourcesContent":["@font-face {\n  font-family: \"pencil\";\n  src: url(\"../fonts/Pencil-Regular.woff2\") format(\"woff2\"),\n    url(\"../fonts/Pencil-Regular.woff\") format(\"woff\");\n}\n\n* {\n  margin: 0px;\n  padding: 0px;\n  box-sizing: border-box;\n}\n\nhtml,\nbody {\n  min-height: 100vh;\n  font-family: \"pencil\", sans-serif;\n}\n\nbody {\n  display: flex;\n  flex-direction: column;\n  background-image: url(\"../images/cook.png\");\n  background-repeat: no-repeat;\n  background-size: cover;\n  background-position-x: center;\n}\n\n.header {\n  height: 7vh;\n  position: sticky;\n  top: 0px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background-color: rgba(245, 245, 220, 0.9);\n}\n\n.nav-button {\n  font-family: inherit;\n  font-size: 2.5rem;\n  width: 15%;\n  height: 100%;\n  background-color: rgba(0, 0, 0, 0);\n  border: none;\n}\n\n.nav-button:hover:not(.active) {\n  background-color: rgba(250, 235, 215, 0.5);\n}\n\n.active {\n  background-color: rgb(250, 235, 215);\n}\n\n#content {\n  flex: 1;\n}\n\n.home-content {\n  display: grid;\n  grid-template-rows: repeat(3, 550px);\n  grid-template-columns: repeat(3, 1fr);\n  column-gap: 5vw;\n  row-gap: 5vh;\n  padding: 5vh 10vw;\n}\n\n.content-img img {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n  object-position: top;\n}\n\n.content-txt {\n  background-color: blanchedalmond;\n  border: 2px dashed #4e4941;\n  font-size: 2.5rem;\n  padding: 2% 5%;\n  overflow: hidden;\n}\n\n.content-txt h4 {\n  margin-bottom: 20px;\n  font-size: 3rem;\n  text-align: center;\n}\n\n#content .home-content div:nth-of-type(2),\n#content .home-content div:nth-of-type(6) {\n  grid-column: 2/4;\n}\n\n#content .home-content div:nth-of-type(3) {\n  grid-column: 1/3;\n}\n\na {\n  color: black;\n  text-decoration: none;\n}\n\n.menu-content {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));\n  padding: 5vh 10vw;\n  column-gap: 75px;\n  row-gap: 75px;\n}\n\n.food-card {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  gap: 15px;\n  font-size: 2rem;\n  width: 100%;\n  height: 100%;\n  padding-top: 3%;\n  background-color: blanchedalmond;\n  border: 2px dashed #4e4941;\n}\n\n.food-card img {\n  width: 65%;\n  height: 65%;\n  object-fit: cover;\n}\n\n.food-card h5 {\n  font-size: 2.5rem;\n}\n\n.food-card p {\n  padding: 0 10% 5%;\n  height: 120px;\n  text-align: center;\n}\n\n.contact-div {\n  display: flex;\n  padding: 5%;\n  justify-content: center;\n}\n\nform {\n  display: grid;\n  padding: 20px 30px;\n  gap: 20px;\n  background-color: rgba(245, 245, 220, 0.9);\n  border-radius: 15px;\n}\n\nform h1 {\n  text-align: center;\n  font-size: 3rem;\n  grid-column: 1/3;\n}\n\n.input-div {\n  display: flex;\n  flex-direction: column;\n  align-items: start;\n  font-size: 2rem;\n}\n\n.input-div input {\n  font-size: 2rem;\n  font-family: inherit;\n}\n\n.input-div:first-of-type {\n  grid-column: 1/2;\n}\n\n.input-div:nth-of-type(2) {\n  grid-column: 2/3;\n}\n\n.footer {\n  height: 5vh;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  font-size: 1.7rem;\n  background-color: rgba(245, 245, 220, 0.9);\n}\n"],"sourceRoot":""}]);
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
      "^[A-Za-z]+(?:s+[A-Za-z]+)*$",
      "Your name",
      "Name"
    )
  );

  contactForm.appendChild(
    createInput("email", "email", true, "", "", "Your email", "Email")
  );

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOztVQUVBO1VBQ0E7Ozs7O1dDekJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSxHQUFHO1dBQ0g7V0FDQTtXQUNBLENBQUM7Ozs7O1dDUEQ7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOzs7OztXQ2ZBOztXQUVBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7Ozs7V0NyQkE7Ozs7Ozs7Ozs7Ozs7O0FDQTJCO0FBQzZCO0FBQ2I7O0FBRTNDO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQSxFQUFFLGdFQUF5QjtBQUMzQixFQUFFLGdFQUF5QjtBQUMzQixFQUFFLDhEQUFRO0FBQ1Y7O0FBRUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvc3R5bGUvc3R5bGUuY3NzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvc3R5bGUvc3R5bGUuY3NzP2M5ZjAiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvbW9kdWxlcy9jbGVhci5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvbW9kdWxlcy9jb250YWN0LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9tb2R1bGVzL2hlYWRlci1mb290ZXIuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL21vZHVsZXMvbWFpbi1wYWdlLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9tb2R1bGVzL21lbnUuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi4uL2ZvbnRzL1BlbmNpbC1SZWd1bGFyLndvZmYyXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18gPSBuZXcgVVJMKFwiLi4vZm9udHMvUGVuY2lsLVJlZ3VsYXIud29mZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8yX19fID0gbmV3IFVSTChcIi4uL2ltYWdlcy9jb29rLnBuZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMl9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzJfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogXFxcInBlbmNpbFxcXCI7XFxuICBzcmM6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gKyBcIikgZm9ybWF0KFxcXCJ3b2ZmMlxcXCIpLFxcbiAgICB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fICsgXCIpIGZvcm1hdChcXFwid29mZlxcXCIpO1xcbn1cXG5cXG4qIHtcXG4gIG1hcmdpbjogMHB4O1xcbiAgcGFkZGluZzogMHB4O1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuaHRtbCxcXG5ib2R5IHtcXG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xcbiAgZm9udC1mYW1pbHk6IFxcXCJwZW5jaWxcXFwiLCBzYW5zLXNlcmlmO1xcbn1cXG5cXG5ib2R5IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMl9fXyArIFwiKTtcXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcbiAgYmFja2dyb3VuZC1wb3NpdGlvbi14OiBjZW50ZXI7XFxufVxcblxcbi5oZWFkZXIge1xcbiAgaGVpZ2h0OiA3dmg7XFxuICBwb3NpdGlvbjogc3RpY2t5O1xcbiAgdG9wOiAwcHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNDUsIDI0NSwgMjIwLCAwLjkpO1xcbn1cXG5cXG4ubmF2LWJ1dHRvbiB7XFxuICBmb250LWZhbWlseTogaW5oZXJpdDtcXG4gIGZvbnQtc2l6ZTogMi41cmVtO1xcbiAgd2lkdGg6IDE1JTtcXG4gIGhlaWdodDogMTAwJTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMCk7XFxuICBib3JkZXI6IG5vbmU7XFxufVxcblxcbi5uYXYtYnV0dG9uOmhvdmVyOm5vdCguYWN0aXZlKSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1MCwgMjM1LCAyMTUsIDAuNSk7XFxufVxcblxcbi5hY3RpdmUge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1MCwgMjM1LCAyMTUpO1xcbn1cXG5cXG4jY29udGVudCB7XFxuICBmbGV4OiAxO1xcbn1cXG5cXG4uaG9tZS1jb250ZW50IHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgzLCA1NTBweCk7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgzLCAxZnIpO1xcbiAgY29sdW1uLWdhcDogNXZ3O1xcbiAgcm93LWdhcDogNXZoO1xcbiAgcGFkZGluZzogNXZoIDEwdnc7XFxufVxcblxcbi5jb250ZW50LWltZyBpbWcge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBvYmplY3QtZml0OiBjb3ZlcjtcXG4gIG9iamVjdC1wb3NpdGlvbjogdG9wO1xcbn1cXG5cXG4uY29udGVudC10eHQge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhbmNoZWRhbG1vbmQ7XFxuICBib3JkZXI6IDJweCBkYXNoZWQgIzRlNDk0MTtcXG4gIGZvbnQtc2l6ZTogMi41cmVtO1xcbiAgcGFkZGluZzogMiUgNSU7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbn1cXG5cXG4uY29udGVudC10eHQgaDQge1xcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcXG4gIGZvbnQtc2l6ZTogM3JlbTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuI2NvbnRlbnQgLmhvbWUtY29udGVudCBkaXY6bnRoLW9mLXR5cGUoMiksXFxuI2NvbnRlbnQgLmhvbWUtY29udGVudCBkaXY6bnRoLW9mLXR5cGUoNikge1xcbiAgZ3JpZC1jb2x1bW46IDIvNDtcXG59XFxuXFxuI2NvbnRlbnQgLmhvbWUtY29udGVudCBkaXY6bnRoLW9mLXR5cGUoMykge1xcbiAgZ3JpZC1jb2x1bW46IDEvMztcXG59XFxuXFxuYSB7XFxuICBjb2xvcjogYmxhY2s7XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxufVxcblxcbi5tZW51LWNvbnRlbnQge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZml0LCBtaW5tYXgoMzUwcHgsIDFmcikpO1xcbiAgcGFkZGluZzogNXZoIDEwdnc7XFxuICBjb2x1bW4tZ2FwOiA3NXB4O1xcbiAgcm93LWdhcDogNzVweDtcXG59XFxuXFxuLmZvb2QtY2FyZCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogMTVweDtcXG4gIGZvbnQtc2l6ZTogMnJlbTtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgcGFkZGluZy10b3A6IDMlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhbmNoZWRhbG1vbmQ7XFxuICBib3JkZXI6IDJweCBkYXNoZWQgIzRlNDk0MTtcXG59XFxuXFxuLmZvb2QtY2FyZCBpbWcge1xcbiAgd2lkdGg6IDY1JTtcXG4gIGhlaWdodDogNjUlO1xcbiAgb2JqZWN0LWZpdDogY292ZXI7XFxufVxcblxcbi5mb29kLWNhcmQgaDUge1xcbiAgZm9udC1zaXplOiAyLjVyZW07XFxufVxcblxcbi5mb29kLWNhcmQgcCB7XFxuICBwYWRkaW5nOiAwIDEwJSA1JTtcXG4gIGhlaWdodDogMTIwcHg7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbi5jb250YWN0LWRpdiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgcGFkZGluZzogNSU7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuZm9ybSB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgcGFkZGluZzogMjBweCAzMHB4O1xcbiAgZ2FwOiAyMHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNDUsIDI0NSwgMjIwLCAwLjkpO1xcbiAgYm9yZGVyLXJhZGl1czogMTVweDtcXG59XFxuXFxuZm9ybSBoMSB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBmb250LXNpemU6IDNyZW07XFxuICBncmlkLWNvbHVtbjogMS8zO1xcbn1cXG5cXG4uaW5wdXQtZGl2IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IHN0YXJ0O1xcbiAgZm9udC1zaXplOiAycmVtO1xcbn1cXG5cXG4uaW5wdXQtZGl2IGlucHV0IHtcXG4gIGZvbnQtc2l6ZTogMnJlbTtcXG4gIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xcbn1cXG5cXG4uaW5wdXQtZGl2OmZpcnN0LW9mLXR5cGUge1xcbiAgZ3JpZC1jb2x1bW46IDEvMjtcXG59XFxuXFxuLmlucHV0LWRpdjpudGgtb2YtdHlwZSgyKSB7XFxuICBncmlkLWNvbHVtbjogMi8zO1xcbn1cXG5cXG4uZm9vdGVyIHtcXG4gIGhlaWdodDogNXZoO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGZvbnQtc2l6ZTogMS43cmVtO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNDUsIDI0NSwgMjIwLCAwLjkpO1xcbn1cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0UscUJBQXFCO0VBQ3JCOzBEQUNvRDtBQUN0RDs7QUFFQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0VBQ1osc0JBQXNCO0FBQ3hCOztBQUVBOztFQUVFLGlCQUFpQjtFQUNqQixpQ0FBaUM7QUFDbkM7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLHlEQUEyQztFQUMzQyw0QkFBNEI7RUFDNUIsc0JBQXNCO0VBQ3RCLDZCQUE2QjtBQUMvQjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxnQkFBZ0I7RUFDaEIsUUFBUTtFQUNSLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLDBDQUEwQztBQUM1Qzs7QUFFQTtFQUNFLG9CQUFvQjtFQUNwQixpQkFBaUI7RUFDakIsVUFBVTtFQUNWLFlBQVk7RUFDWixrQ0FBa0M7RUFDbEMsWUFBWTtBQUNkOztBQUVBO0VBQ0UsMENBQTBDO0FBQzVDOztBQUVBO0VBQ0Usb0NBQW9DO0FBQ3RDOztBQUVBO0VBQ0UsT0FBTztBQUNUOztBQUVBO0VBQ0UsYUFBYTtFQUNiLG9DQUFvQztFQUNwQyxxQ0FBcUM7RUFDckMsZUFBZTtFQUNmLFlBQVk7RUFDWixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLGlCQUFpQjtFQUNqQixvQkFBb0I7QUFDdEI7O0FBRUE7RUFDRSxnQ0FBZ0M7RUFDaEMsMEJBQTBCO0VBQzFCLGlCQUFpQjtFQUNqQixjQUFjO0VBQ2QsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsbUJBQW1CO0VBQ25CLGVBQWU7RUFDZixrQkFBa0I7QUFDcEI7O0FBRUE7O0VBRUUsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLGFBQWE7RUFDYiwyREFBMkQ7RUFDM0QsaUJBQWlCO0VBQ2pCLGdCQUFnQjtFQUNoQixhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsU0FBUztFQUNULGVBQWU7RUFDZixXQUFXO0VBQ1gsWUFBWTtFQUNaLGVBQWU7RUFDZixnQ0FBZ0M7RUFDaEMsMEJBQTBCO0FBQzVCOztBQUVBO0VBQ0UsVUFBVTtFQUNWLFdBQVc7RUFDWCxpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsYUFBYTtFQUNiLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixXQUFXO0VBQ1gsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLGtCQUFrQjtFQUNsQixTQUFTO0VBQ1QsMENBQTBDO0VBQzFDLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixlQUFlO0VBQ2YsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixrQkFBa0I7RUFDbEIsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGVBQWU7RUFDZixvQkFBb0I7QUFDdEI7O0FBRUE7RUFDRSxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsaUJBQWlCO0VBQ2pCLDBDQUEwQztBQUM1Q1wiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwicGVuY2lsXFxcIjtcXG4gIHNyYzogdXJsKFxcXCIuLi9mb250cy9QZW5jaWwtUmVndWxhci53b2ZmMlxcXCIpIGZvcm1hdChcXFwid29mZjJcXFwiKSxcXG4gICAgdXJsKFxcXCIuLi9mb250cy9QZW5jaWwtUmVndWxhci53b2ZmXFxcIikgZm9ybWF0KFxcXCJ3b2ZmXFxcIik7XFxufVxcblxcbioge1xcbiAgbWFyZ2luOiAwcHg7XFxuICBwYWRkaW5nOiAwcHg7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG5odG1sLFxcbmJvZHkge1xcbiAgbWluLWhlaWdodDogMTAwdmg7XFxuICBmb250LWZhbWlseTogXFxcInBlbmNpbFxcXCIsIHNhbnMtc2VyaWY7XFxufVxcblxcbmJvZHkge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXFxcIi4uL2ltYWdlcy9jb29rLnBuZ1xcXCIpO1xcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uLXg6IGNlbnRlcjtcXG59XFxuXFxuLmhlYWRlciB7XFxuICBoZWlnaHQ6IDd2aDtcXG4gIHBvc2l0aW9uOiBzdGlja3k7XFxuICB0b3A6IDBweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI0NSwgMjQ1LCAyMjAsIDAuOSk7XFxufVxcblxcbi5uYXYtYnV0dG9uIHtcXG4gIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xcbiAgZm9udC1zaXplOiAyLjVyZW07XFxuICB3aWR0aDogMTUlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwKTtcXG4gIGJvcmRlcjogbm9uZTtcXG59XFxuXFxuLm5hdi1idXR0b246aG92ZXI6bm90KC5hY3RpdmUpIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjUwLCAyMzUsIDIxNSwgMC41KTtcXG59XFxuXFxuLmFjdGl2ZSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjUwLCAyMzUsIDIxNSk7XFxufVxcblxcbiNjb250ZW50IHtcXG4gIGZsZXg6IDE7XFxufVxcblxcbi5ob21lLWNvbnRlbnQge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDMsIDU1MHB4KTtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDMsIDFmcik7XFxuICBjb2x1bW4tZ2FwOiA1dnc7XFxuICByb3ctZ2FwOiA1dmg7XFxuICBwYWRkaW5nOiA1dmggMTB2dztcXG59XFxuXFxuLmNvbnRlbnQtaW1nIGltZyB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwJTtcXG4gIG9iamVjdC1maXQ6IGNvdmVyO1xcbiAgb2JqZWN0LXBvc2l0aW9uOiB0b3A7XFxufVxcblxcbi5jb250ZW50LXR4dCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFuY2hlZGFsbW9uZDtcXG4gIGJvcmRlcjogMnB4IGRhc2hlZCAjNGU0OTQxO1xcbiAgZm9udC1zaXplOiAyLjVyZW07XFxuICBwYWRkaW5nOiAyJSA1JTtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxufVxcblxcbi5jb250ZW50LXR4dCBoNCB7XFxuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xcbiAgZm9udC1zaXplOiAzcmVtO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4jY29udGVudCAuaG9tZS1jb250ZW50IGRpdjpudGgtb2YtdHlwZSgyKSxcXG4jY29udGVudCAuaG9tZS1jb250ZW50IGRpdjpudGgtb2YtdHlwZSg2KSB7XFxuICBncmlkLWNvbHVtbjogMi80O1xcbn1cXG5cXG4jY29udGVudCAuaG9tZS1jb250ZW50IGRpdjpudGgtb2YtdHlwZSgzKSB7XFxuICBncmlkLWNvbHVtbjogMS8zO1xcbn1cXG5cXG5hIHtcXG4gIGNvbG9yOiBibGFjaztcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG59XFxuXFxuLm1lbnUtY29udGVudCB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maXQsIG1pbm1heCgzNTBweCwgMWZyKSk7XFxuICBwYWRkaW5nOiA1dmggMTB2dztcXG4gIGNvbHVtbi1nYXA6IDc1cHg7XFxuICByb3ctZ2FwOiA3NXB4O1xcbn1cXG5cXG4uZm9vZC1jYXJkIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ2FwOiAxNXB4O1xcbiAgZm9udC1zaXplOiAycmVtO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBwYWRkaW5nLXRvcDogMyU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFuY2hlZGFsbW9uZDtcXG4gIGJvcmRlcjogMnB4IGRhc2hlZCAjNGU0OTQxO1xcbn1cXG5cXG4uZm9vZC1jYXJkIGltZyB7XFxuICB3aWR0aDogNjUlO1xcbiAgaGVpZ2h0OiA2NSU7XFxuICBvYmplY3QtZml0OiBjb3ZlcjtcXG59XFxuXFxuLmZvb2QtY2FyZCBoNSB7XFxuICBmb250LXNpemU6IDIuNXJlbTtcXG59XFxuXFxuLmZvb2QtY2FyZCBwIHtcXG4gIHBhZGRpbmc6IDAgMTAlIDUlO1xcbiAgaGVpZ2h0OiAxMjBweDtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLmNvbnRhY3QtZGl2IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBwYWRkaW5nOiA1JTtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5cXG5mb3JtIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBwYWRkaW5nOiAyMHB4IDMwcHg7XFxuICBnYXA6IDIwcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI0NSwgMjQ1LCAyMjAsIDAuOSk7XFxuICBib3JkZXItcmFkaXVzOiAxNXB4O1xcbn1cXG5cXG5mb3JtIGgxIHtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGZvbnQtc2l6ZTogM3JlbTtcXG4gIGdyaWQtY29sdW1uOiAxLzM7XFxufVxcblxcbi5pbnB1dC1kaXYge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogc3RhcnQ7XFxuICBmb250LXNpemU6IDJyZW07XFxufVxcblxcbi5pbnB1dC1kaXYgaW5wdXQge1xcbiAgZm9udC1zaXplOiAycmVtO1xcbiAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XFxufVxcblxcbi5pbnB1dC1kaXY6Zmlyc3Qtb2YtdHlwZSB7XFxuICBncmlkLWNvbHVtbjogMS8yO1xcbn1cXG5cXG4uaW5wdXQtZGl2Om50aC1vZi10eXBlKDIpIHtcXG4gIGdyaWQtY29sdW1uOiAyLzM7XFxufVxcblxcbi5mb290ZXIge1xcbiAgaGVpZ2h0OiA1dmg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZm9udC1zaXplOiAxLjdyZW07XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI0NSwgMjQ1LCAyMjAsIDAuOSk7XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7XG5cbiAgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH1cblxuICAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG4gIGlmICgvW1wiJygpIFxcdFxcbl18KCUyMCkvLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY2xlYXJFbGVtKGNvbnRlbnRFbGVtKSB7XG4gIHdoaWxlIChjb250ZW50RWxlbS5maXJzdENoaWxkKSB7XG4gICAgY29udGVudEVsZW0ucmVtb3ZlQ2hpbGQoY29udGVudEVsZW0uZmlyc3RDaGlsZCk7XG4gIH1cbn1cbiIsImNvbnN0IGNyZWF0ZUlucHV0ID0gKFxuICB0eXBlLFxuICBuYW1lLFxuICByZXF1aXJlZCxcbiAgbWlubGVuZ3RoLFxuICBwYXR0ZXJuLFxuICBwbGFjZWhvbGRlcixcbiAgbGFiZWxOYW1lXG4pID0+IHtcbiAgY29uc3QgaW5wdXREaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBpbnB1dERpdi5jbGFzc0xpc3QuYWRkKFwiaW5wdXQtZGl2XCIpO1xuXG4gIGNvbnN0IGlucHV0RWxlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgaW5wdXRFbGVtLnNldEF0dHJpYnV0ZShcInR5cGVcIiwgdHlwZSk7XG4gIGlucHV0RWxlbS5zZXRBdHRyaWJ1dGUoXCJuYW1lXCIsIG5hbWUpO1xuICBpbnB1dEVsZW0uc2V0QXR0cmlidXRlKFwiaWRcIiwgbmFtZSk7XG4gIGlmIChyZXF1aXJlZCkgaW5wdXRFbGVtLnJlcXVpcmVkID0gdHJ1ZTtcbiAgaWYgKG1pbmxlbmd0aCkgaW5wdXRFbGVtLnNldEF0dHJpYnV0ZShcIm1pbmxlbmd0aFwiLCBtaW5sZW5ndGgpO1xuICBpZiAocGF0dGVybikgaW5wdXRFbGVtLnNldEF0dHJpYnV0ZShcInBhdHRlcm5cIiwgcGF0dGVybik7XG4gIGlucHV0RWxlbS5zZXRBdHRyaWJ1dGUoXCJwbGFjZWhvbGRlclwiLCBwbGFjZWhvbGRlcik7XG5cbiAgY29uc3QgaW5wdXRMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcbiAgaW5wdXRMYWJlbC5zZXRBdHRyaWJ1dGUoXCJmb3JcIiwgbmFtZSk7XG4gIGlucHV0TGFiZWwudGV4dENvbnRlbnQgPSBsYWJlbE5hbWU7XG5cbiAgaW5wdXREaXYuYXBwZW5kQ2hpbGQoaW5wdXRMYWJlbCk7XG4gIGlucHV0RGl2LmFwcGVuZENoaWxkKGlucHV0RWxlbSk7XG5cbiAgcmV0dXJuIGlucHV0RGl2O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY29udGFjdFBhZ2UoY29udGVudEVsZW0pIHtcbiAgY29uc3QgY29udGFjdERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnRhY3REaXYuY2xhc3NMaXN0LmFkZChcImNvbnRhY3QtZGl2XCIpO1xuXG4gIGNvbnN0IGNvbnRhY3RGb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImZvcm1cIik7XG4gIGNvbnRhY3RGb3JtLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMVwiKSk7XG4gIGNvbnRhY3RGb3JtLmZpcnN0Q2hpbGQudGV4dENvbnRlbnQgPSBcIkNvbnRhY3QgdXMhXCI7XG4gIGNvbnRhY3RGb3JtLmNsYXNzTGlzdC5hZGQoXCJjb250YWN0LWZvcm1cIik7XG4gIGNvbnRhY3RGb3JtLmFwcGVuZENoaWxkKFxuICAgIGNyZWF0ZUlucHV0KFxuICAgICAgXCJ0ZXh0XCIsXG4gICAgICBcIm5hbWVcIixcbiAgICAgIHRydWUsXG4gICAgICBcIjNcIixcbiAgICAgIFwiXltBLVphLXpdKyg/OnMrW0EtWmEtel0rKSokXCIsXG4gICAgICBcIllvdXIgbmFtZVwiLFxuICAgICAgXCJOYW1lXCJcbiAgICApXG4gICk7XG5cbiAgY29udGFjdEZvcm0uYXBwZW5kQ2hpbGQoXG4gICAgY3JlYXRlSW5wdXQoXCJlbWFpbFwiLCBcImVtYWlsXCIsIHRydWUsIFwiXCIsIFwiXCIsIFwiWW91ciBlbWFpbFwiLCBcIkVtYWlsXCIpXG4gICk7XG5cbiAgY29udGFjdERpdi5hcHBlbmRDaGlsZChjb250YWN0Rm9ybSk7XG5cbiAgY29udGVudEVsZW0uYXBwZW5kQ2hpbGQoY29udGFjdERpdik7XG59XG4iLCJpbXBvcnQgY2xlYXJFbGVtIGZyb20gXCIuL2NsZWFyXCI7XG5pbXBvcnQgaG9tZVBhZ2UgZnJvbSBcIi4vbWFpbi1wYWdlXCI7XG5pbXBvcnQgbWVudVBhZ2UgZnJvbSBcIi4vbWVudVwiO1xuaW1wb3J0IGNvbnRhY3RQYWdlIGZyb20gXCIuL2NvbnRhY3RcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUhlYWRlcihjb250ZW50RWxlbSkge1xuICBjb25zdCBoZWFkZXJFbGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgaGVhZGVyRWxlbS5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcImhlYWRlclwiKTtcblxuICBjb25zdCBuYXZCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICBuYXZCdXR0b24uc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJuYXYtYnV0dG9uXCIpO1xuXG4gIGNvbnN0IGhvbWVCdXR0b24gPSBuYXZCdXR0b24uY2xvbmVOb2RlKCk7XG4gIGNvbnN0IG1lbnVCdXR0b24gPSBuYXZCdXR0b24uY2xvbmVOb2RlKCk7XG4gIGNvbnN0IGNvbnRhY3RCdXR0b24gPSBuYXZCdXR0b24uY2xvbmVOb2RlKCk7XG5cbiAgaG9tZUJ1dHRvbi50ZXh0Q29udGVudCA9IFwiSG9tZVwiO1xuICBob21lQnV0dG9uLmNsYXNzTGlzdC5hZGQoXCJhY3RpdmVcIik7XG4gIG1lbnVCdXR0b24udGV4dENvbnRlbnQgPSBcIk1lbnVcIjtcbiAgY29udGFjdEJ1dHRvbi50ZXh0Q29udGVudCA9IFwiQ29udGFjdFwiO1xuXG4gIGNvbnN0IGJ1dHRvbnMgPSBbaG9tZUJ1dHRvbiwgbWVudUJ1dHRvbiwgY29udGFjdEJ1dHRvbl07XG5cbiAgYnV0dG9ucy5mb3JFYWNoKChidG4pID0+IHtcbiAgICBidG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgIGNsZWFyRWxlbShjb250ZW50RWxlbSk7XG4gICAgICBidXR0b25zLmZvckVhY2goKF9idG4pID0+IHtcbiAgICAgICAgaWYgKF9idG4uY2xhc3NMaXN0LmNvbnRhaW5zKFwiYWN0aXZlXCIpKSB7XG4gICAgICAgICAgX2J0bi5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICAgIGJ0bi5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlXCIpO1xuXG4gICAgICBpZiAoYnRuLnRleHRDb250ZW50ID09PSBcIkhvbWVcIikge1xuICAgICAgICBob21lUGFnZShjb250ZW50RWxlbSk7XG4gICAgICB9IGVsc2UgaWYgKGJ0bi50ZXh0Q29udGVudCA9PT0gXCJNZW51XCIpIHtcbiAgICAgICAgbWVudVBhZ2UoY29udGVudEVsZW0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29udGFjdFBhZ2UoY29udGVudEVsZW0pO1xuICAgICAgfVxuICAgIH0pO1xuICAgIGhlYWRlckVsZW0uYXBwZW5kQ2hpbGQoYnRuKTtcbiAgfSk7XG5cbiAgY29udGVudEVsZW0uYmVmb3JlKGhlYWRlckVsZW0pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlRm9vdGVyKGNvbnRlbnRFbGVtKSB7XG4gIGNvbnN0IGZvb3RlckVsZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBmb290ZXJFbGVtLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwiZm9vdGVyXCIpO1xuICBjb25zdCBnaXRMaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImFcIik7XG4gIGdpdExpbmsuc2V0QXR0cmlidXRlKFwiaHJlZlwiLCBcImh0dHBzOi8vZ2l0aHViLmNvbS9Db25mdWNpaVwiKTtcbiAgZ2l0TGluay50ZXh0Q29udGVudCA9IFwiQ3JlYXRlZCBieSBDb25mdWNpaSFcIjtcbiAgZm9vdGVyRWxlbS5hcHBlbmRDaGlsZChnaXRMaW5rKTtcbiAgY29udGVudEVsZW0uYWZ0ZXIoZm9vdGVyRWxlbSk7XG59XG4iLCJpbXBvcnQgaW1nQ29vayBmcm9tIFwiLi4vaW1hZ2VzL2hlcm8tY29vay5wbmdcIjtcbmltcG9ydCBpbWdSZXN0YXVyYW50IGZyb20gXCIuLi9pbWFnZXMvcmVzdGF1cmFudC5wbmdcIjtcbmltcG9ydCBpbWdTdGFmZiBmcm9tIFwiLi4vaW1hZ2VzL3N0YWZmLnBuZ1wiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBob21lUGFnZShjb250ZW50RWxlbSkge1xuICBjb25zdCBob21lQ29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGhvbWVDb250ZW50LmNsYXNzTGlzdC5hZGQoXCJob21lLWNvbnRlbnRcIik7XG5cbiAgY29uc3QgaW1nRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgaW1nRGl2LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIikpO1xuICBpbWdEaXYuY2xhc3NMaXN0LmFkZChcImNvbnRlbnQtaW1nXCIpO1xuXG4gIGNvbnN0IHR4dERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIHR4dERpdi5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDRcIikpO1xuICB0eHREaXYuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIikpO1xuICB0eHREaXYuY2xhc3NMaXN0LmFkZChcImNvbnRlbnQtdHh0XCIpO1xuXG4gIGNvbnN0IGZvdW5kZXJJbWcgPSBpbWdEaXYuY2xvbmVOb2RlKHRydWUpO1xuICBjb25zdCBmb3VuZGVyVHh0ID0gdHh0RGl2LmNsb25lTm9kZSh0cnVlKTtcbiAgY29uc3QgbG9jYXRpb25UeHQgPSB0eHREaXYuY2xvbmVOb2RlKHRydWUpO1xuICBjb25zdCBsb2NhdGlvbkltZyA9IGltZ0Rpdi5jbG9uZU5vZGUodHJ1ZSk7XG4gIGNvbnN0IHByb21pc2VJbWcgPSBpbWdEaXYuY2xvbmVOb2RlKHRydWUpO1xuICBjb25zdCBwcm9taXNlVHh0ID0gdHh0RGl2LmNsb25lTm9kZSh0cnVlKTtcblxuICBmb3VuZGVySW1nLmZpcnN0Q2hpbGQuc2V0QXR0cmlidXRlKFwic3JjXCIsIGltZ0Nvb2spO1xuICBsb2NhdGlvbkltZy5maXJzdENoaWxkLnNldEF0dHJpYnV0ZShcInNyY1wiLCBpbWdSZXN0YXVyYW50KTtcbiAgcHJvbWlzZUltZy5maXJzdENoaWxkLnNldEF0dHJpYnV0ZShcInNyY1wiLCBpbWdTdGFmZik7XG5cbiAgZm91bmRlclR4dC5maXJzdENoaWxkLnRleHRDb250ZW50ID0gXCJTdG9yeVwiO1xuICBmb3VuZGVyVHh0Lmxhc3RDaGlsZC50ZXh0Q29udGVudCA9XG4gICAgXCJQZW5jaWwgU2tldGNoIEtpdGNoZW4sIGVzdGFibGlzaGVkIHR3ZWx2ZSB5ZWFycyBhZ28sIGlzIGEgcmVzdGF1cmFudCB3aGVyZSBldmVyeSBkaXNoIGlzIGEgd29yayBvZiBhcnQsIGRyYXduIGluIHBlbmNpbCBieSBza2lsbGVkIGNoZWZzLiBUaGUgaWRlYSBjYW1lIGZyb20gYSBncm91cCBvZiBwYXNzaW9uYXRlIGFydGlzdHMgd2hvIGNvbWJpbmVkIHRoZWlyIGxvdmUgZm9yIGFydCBhbmQgZm9vZCB0byBjcmVhdGUgYSB1bmlxdWUgZGluaW5nIGV4cGVyaWVuY2UuIFRoZSByZXN0YXVyYW50IGdhaW5lZCBwb3B1bGFyaXR5IGFtb25nIGZvb2RpZXMgYW5kIGFydCBlbnRodXNpYXN0cywgY29uc3RhbnRseSBldm9sdmluZyBpdHMgbWVudSB3aXRoIG5ldyBkaXNoZXMgYW5kIHBlbmNpbCBza2V0Y2hlcy4gSXQgaGFzIGJlY29tZSBhIHdlbGwta25vd24gZGVzdGluYXRpb24gZm9yIGZvb2QgYW5kIGFydCBsb3ZlcnMsIGhvc3RpbmcgYXJ0IGV4aGliaXRpb25zIGFuZCBldmVudHMsIGFuZCBpbnNwaXJpbmcgY3VzdG9tZXJzIHdpdGggaXRzIGFydGlzdGljIGFwcHJvYWNoIHRvIGZvb2QuXCI7XG4gIGxvY2F0aW9uVHh0LmZpcnN0Q2hpbGQudGV4dENvbnRlbnQgPSBcIkxvY2F0aW9uXCI7XG4gIGxvY2F0aW9uVHh0Lmxhc3RDaGlsZC50ZXh0Q29udGVudCA9XG4gICAgXCJUaGUgbWFpbiBsb2NhdGlvbiBvZiBQZW5jaWwgU2tldGNoIEtpdGNoZW4gaXMgc2l0dWF0ZWQgaW4gdGhlIGNlbnRlciBvZiBWaWVubmEuIFRoZSByZXN0YXVyYW50IGlzIGxvY2F0ZWQgaW4gYSBzcGFjaW91cyBidWlsZGluZyB0aGF0IHdhcyBwcmV2aW91c2x5IGFuIGFydCBnYWxsZXJ5LiBUaGUgaW50ZXJpb3JzIG9mIHRoZSByZXN0YXVyYW50IGFyZSBhZG9ybmVkIHdpdGggcGVuY2lsIHNrZXRjaGVzIG9mIHZhcmlvdXMgZGlzaGVzLCBhZGRpbmcgdG8gdGhlIGFydGlzdGljIGFtYmlhbmNlLiBUaGUga2l0Y2hlbiBpcyBvcGVuLCBhbGxvd2luZyBjdXN0b21lcnMgdG8gd2l0bmVzcyB0aGUgY2hlZnMgYXQgd29yaywgZHJhd2luZyBhbmQgcHJlcGFyaW5nIHRoZWlyIGRpc2hlcy4gVGhlIGxvY2F0aW9uIGlzIGVhc2lseSBhY2Nlc3NpYmxlIGJ5IHB1YmxpYyB0cmFuc3BvcnRhdGlvbiwgYW5kIGl0IGlzIGEgcG9wdWxhciBkZXN0aW5hdGlvbiBmb3IgdG91cmlzdHMgYW5kIGxvY2FscyBhbGlrZSB3aG8gYXJlIGxvb2tpbmcgZm9yIGEgdW5pcXVlIGRpbmluZyBleHBlcmllbmNlLlwiO1xuICBwcm9taXNlVHh0LmZpcnN0Q2hpbGQudGV4dENvbnRlbnQgPSBcIlByb21pc2VcIjtcbiAgcHJvbWlzZVR4dC5sYXN0Q2hpbGQudGV4dENvbnRlbnQgPVxuICAgIFwiT3VyIHRhbGVudGVkIGNoZWZzIHVzZSB0aGVpciBhcnRpc3RpYyBza2lsbHMgdG8gYnJpbmcgZXZlcnkgZGlzaCB0byBsaWZlLCBmcm9tIHRoZSBhcHBldGl6ZXJzIHRvIHRoZSBkZXNzZXJ0cy4gQXQgb3VyIHJlc3RhdXJhbnQsIHlvdSB3aWxsIG5vdCBvbmx5IGVuam95IGFuIHVuZm9yZ2V0dGFibGUgY3VsaW5hcnkgZXhwZXJpZW5jZSwgYnV0IGFsc28gaGF2ZSB0aGUgb3Bwb3J0dW5pdHkgdG8gYWRtaXJlIHRoZSBpbnRyaWNhdGUgcGVuY2lsIGRyYXdpbmdzIHRoYXQgYWNjb21wYW55IGVhY2ggZGlzaC4gT3VyIGNhcmVmdWxseSBjdXJhdGVkIGRlY29yIHNob3djYXNlcyB0aGUgaW5jcmVkaWJsZSB0YWxlbnQgb2Ygb3VyIGNoZWZzIGFuZCB3aWxsIHRyYW5zcG9ydCB5b3UgdG8gYSB3b3JsZCBvZiBjcmVhdGl2aXR5IGFuZCBpbWFnaW5hdGlvbi5cIjtcblxuICBob21lQ29udGVudC5hcHBlbmRDaGlsZChmb3VuZGVySW1nKTtcbiAgaG9tZUNvbnRlbnQuYXBwZW5kQ2hpbGQoZm91bmRlclR4dCk7XG4gIGhvbWVDb250ZW50LmFwcGVuZENoaWxkKGxvY2F0aW9uVHh0KTtcbiAgaG9tZUNvbnRlbnQuYXBwZW5kQ2hpbGQobG9jYXRpb25JbWcpO1xuICBob21lQ29udGVudC5hcHBlbmRDaGlsZChwcm9taXNlSW1nKTtcbiAgaG9tZUNvbnRlbnQuYXBwZW5kQ2hpbGQocHJvbWlzZVR4dCk7XG5cbiAgY29udGVudEVsZW0uYXBwZW5kQ2hpbGQoaG9tZUNvbnRlbnQpO1xufVxuIiwiaW1wb3J0IGJlZWZTdHJvZ2Fub2ZmIGZyb20gXCIuLi9pbWFnZXMvYmVlZnN0cm9nYW5vZmYucG5nXCI7XG5pbXBvcnQgYnVyZ2VyIGZyb20gXCIuLi9pbWFnZXMvYnVyZ2VyLnBuZ1wiO1xuaW1wb3J0IGN1cnJ5IGZyb20gXCIuLi9pbWFnZXMvY3VycnkucG5nXCI7XG5pbXBvcnQgcGFkdGhhaSBmcm9tIFwiLi4vaW1hZ2VzL3BhZHRoYWkucG5nXCI7XG5pbXBvcnQgcGFzdGEgZnJvbSBcIi4uL2ltYWdlcy9wYXN0YS5wbmdcIjtcbmltcG9ydCBwaXp6YSBmcm9tIFwiLi4vaW1hZ2VzL3BpenphLnBuZ1wiO1xuaW1wb3J0IHNhbG1vbiBmcm9tIFwiLi4vaW1hZ2VzL3NhbG1vbi5wbmdcIjtcbmltcG9ydCB0aWtraW1hc2FsYSBmcm9tIFwiLi4vaW1hZ2VzL3Rpa2tpbWFzYWxhLnBuZ1wiO1xuaW1wb3J0IHRpcmFtaXN1IGZyb20gXCIuLi9pbWFnZXMvdGlyYW1pc3UucG5nXCI7XG5pbXBvcnQgd3JhcCBmcm9tIFwiLi4vaW1hZ2VzL3dyYXAucG5nXCI7XG5cbmNvbnN0IGZvb2RGYWN0b3J5ID0gKGltZywgbmFtZSwgZGVzY3JpcHRpb24pID0+IHtcbiAgY29uc3QgZm9vZENhcmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBmb29kQ2FyZC5jbGFzc0xpc3QuYWRkKFwiZm9vZC1jYXJkXCIpO1xuICBmb29kQ2FyZC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpKTtcbiAgZm9vZENhcmQubGFzdENoaWxkLnNldEF0dHJpYnV0ZShcInNyY1wiLCBpbWcpO1xuICBmb29kQ2FyZC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDVcIikpO1xuICBmb29kQ2FyZC5sYXN0Q2hpbGQudGV4dENvbnRlbnQgPSBuYW1lO1xuICBmb29kQ2FyZC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKSk7XG4gIGZvb2RDYXJkLmxhc3RDaGlsZC50ZXh0Q29udGVudCA9IGRlc2NyaXB0aW9uO1xuXG4gIHJldHVybiBmb29kQ2FyZDtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIG1lbnVQYWdlKGNvbnRlbnRFbGVtKSB7XG4gIGNvbnN0IGRpc2gxID0gZm9vZEZhY3RvcnkoXG4gICAgcGFzdGEsXG4gICAgXCJQZXN0byBQYXN0YVwiLFxuICAgIFwiUGFzdGEgd2l0aCBob21lbWFkZSBwZXN0byBzYXVjZVwiXG4gICk7XG4gIGNvbnN0IGRpc2gyID0gZm9vZEZhY3RvcnkoXG4gICAgc2FsbW9uLFxuICAgIFwiR3JpbGxlZCBTYWxtb25cIixcbiAgICBcIkZyZXNoIHNhbG1vbiBncmlsbGVkIHdpdGggbGVtb24gYW5kIGhlcmJzXCJcbiAgKTtcbiAgY29uc3QgZGlzaDMgPSBmb29kRmFjdG9yeShcbiAgICB0aWtraW1hc2FsYSxcbiAgICBcIkNoaWNrZW4gVGlra2EgTWFzYWxhXCIsXG4gICAgXCJDaGlja2VuIG1hcmluYXRlZCBpbiBzcGljZXMgYW5kIGNvb2tlZCBpbiBhIGNyZWFteSB0b21hdG8gc2F1Y2VcIlxuICApO1xuICBjb25zdCBkaXNoNCA9IGZvb2RGYWN0b3J5KFxuICAgIGJlZWZTdHJvZ2Fub2ZmLFxuICAgIFwiQmVlZiBTdHJvZ2Fub2ZmXCIsXG4gICAgXCJUZW5kZXIgYmVlZiBzdHJpcHMgY29va2VkIGluIGEgcmljaCBtdXNocm9vbSBzYXVjZVwiXG4gICk7XG4gIGNvbnN0IGRpc2g1ID0gZm9vZEZhY3RvcnkoXG4gICAgcGl6emEsXG4gICAgXCJNYXJnaGVyaXRhIFBpenphXCIsXG4gICAgXCJDbGFzc2ljIHBpenphIHdpdGggdG9tYXRvIHNhdWNlLCBtb3p6YXJlbGxhLCBhbmQgZnJlc2ggYmFzaWxcIlxuICApO1xuICBjb25zdCBkaXNoNiA9IGZvb2RGYWN0b3J5KFxuICAgIHBhZHRoYWksXG4gICAgXCJQYWQgVGhhaVwiLFxuICAgIFwiU3Rpci1mcmllZCByaWNlIG5vb2RsZXMgd2l0aCBzaHJpbXAsIHBlYW51dHMsIGFuZCBiZWFuIHNwcm91dHNcIlxuICApO1xuICBjb25zdCBkaXNoNyA9IGZvb2RGYWN0b3J5KFxuICAgIHdyYXAsXG4gICAgXCJGYWxhZmVsIFdyYXBcIixcbiAgICBcIkZhbGFmZWwgYmFsbHMgd2l0aCBsZXR0dWNlLCB0b21hdG9lcywgYW5kIHRhaGluaSBzYXVjZSB3cmFwcGVkIGluIGEgcGl0YVwiXG4gICk7XG4gIGNvbnN0IGRpc2g4ID0gZm9vZEZhY3RvcnkoXG4gICAgYnVyZ2VyLFxuICAgIFwiQmVlZiBCdXJnZXJcIixcbiAgICBcIkp1aWN5IGJlZWYgcGF0dHkgd2l0aCBjaGVlc2UsIGxldHR1Y2UsIGFuZCB0b21hdG8gb24gYSBicmlvY2hlIGJ1blwiXG4gICk7XG4gIGNvbnN0IGRpc2g5ID0gZm9vZEZhY3RvcnkoXG4gICAgY3VycnksXG4gICAgXCJWZWdldGFibGUgQ3VycnlcIixcbiAgICBcIkFzc29ydGVkIHZlZ2V0YWJsZXMgY29va2VkIGluIGEgc3BpY3kgY3Vycnkgc2F1Y2VcIlxuICApO1xuICBjb25zdCBkaXNoMTAgPSBmb29kRmFjdG9yeShcbiAgICB0aXJhbWlzdSxcbiAgICBcIlRpcmFtaXN1XCIsXG4gICAgXCJDbGFzc2ljIEl0YWxpYW4gZGVzc2VydCB3aXRoIGxheWVycyBvZiBtYXNjYXJwb25lIGNoZWVzZSBhbmQgbGFkeWZpbmdlcnNcIlxuICApO1xuXG4gIGNvbnN0IGZvb2RzID0gW1xuICAgIGRpc2gxLFxuICAgIGRpc2gyLFxuICAgIGRpc2gzLFxuICAgIGRpc2g0LFxuICAgIGRpc2g1LFxuICAgIGRpc2g2LFxuICAgIGRpc2g3LFxuICAgIGRpc2g4LFxuICAgIGRpc2g5LFxuICAgIGRpc2gxMCxcbiAgXTtcbiAgY29uc3QgaG9tZUNvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBob21lQ29udGVudC5jbGFzc0xpc3QuYWRkKFwibWVudS1jb250ZW50XCIpO1xuXG4gIGZvb2RzLmZvckVhY2goKGZvb2QpID0+IHtcbiAgICBob21lQ29udGVudC5hcHBlbmRDaGlsZChmb29kKTtcbiAgfSk7XG5cbiAgY29udGVudEVsZW0uYXBwZW5kQ2hpbGQoaG9tZUNvbnRlbnQpO1xufVxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBfX3dlYnBhY2tfbW9kdWxlc19fO1xuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyYztcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSBzY3JpcHRVcmwgPSBzY3JpcHRzW3NjcmlwdHMubGVuZ3RoIC0gMV0uc3JjXG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18uYiA9IGRvY3VtZW50LmJhc2VVUkkgfHwgc2VsZi5sb2NhdGlvbi5ocmVmO1xuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBbcmVzb2x2ZSwgcmVqZWN0LCBQcm9taXNlXSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdFwibWFpblwiOiAwXG59O1xuXG4vLyBubyBjaHVuayBvbiBkZW1hbmQgbG9hZGluZ1xuXG4vLyBubyBwcmVmZXRjaGluZ1xuXG4vLyBubyBwcmVsb2FkZWRcblxuLy8gbm8gSE1SXG5cbi8vIG5vIEhNUiBtYW5pZmVzdFxuXG4vLyBubyBvbiBjaHVua3MgbG9hZGVkXG5cbi8vIG5vIGpzb25wIGZ1bmN0aW9uIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgXCIuL3N0eWxlL3N0eWxlLmNzc1wiO1xuaW1wb3J0ICogYXMgaGVhZGVyRm9vdGVyIGZyb20gXCIuL21vZHVsZXMvaGVhZGVyLWZvb3RlclwiO1xuaW1wb3J0IGhvbWVQYWdlIGZyb20gXCIuL21vZHVsZXMvbWFpbi1wYWdlXCI7XG5cbmZ1bmN0aW9uIFJlbmRlcigpIHtcbiAgY29uc3QgYm9keVNlbGVjdG9yID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImJvZHlcIik7XG5cbiAgY29uc3QgY29udGVudERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnRlbnREaXYuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJjb250ZW50XCIpO1xuXG4gIGJvZHlTZWxlY3Rvci5hcHBlbmRDaGlsZChjb250ZW50RGl2KTtcblxuICBoZWFkZXJGb290ZXIuY3JlYXRlRm9vdGVyKGNvbnRlbnREaXYpO1xuICBoZWFkZXJGb290ZXIuY3JlYXRlSGVhZGVyKGNvbnRlbnREaXYpO1xuICBob21lUGFnZShjb250ZW50RGl2KTtcbn1cblxuUmVuZGVyKCk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=