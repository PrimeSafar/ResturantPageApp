/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);\n// Imports\n\n\n\nvar ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./asset/logoimg.jpg */ \"./src/asset/logoimg.jpg\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ../../../../../src/asset/logoimg.jpg */ \"./src/asset/logoimg.jpg\"), __webpack_require__.b);\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n___CSS_LOADER_EXPORT___.push([module.id, \"@import url(https://fonts.googleapis.com/css2?family=Great+Vibes&display=swap);\"]);\n___CSS_LOADER_EXPORT___.push([module.id, \"@import url(https://fonts.googleapis.com/css2?family=Great+Vibes&family=Playfair+Display:wght@400;600&display=swap);\"]);\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);\nvar ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `/* Reset */\n* {\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n}\n\nhtml, body {\n    height: 100%;\n    font-family: \"Playfair Display\", serif;\n}\n\n/* Background Image */\n.imgpage {\n    background-image: url(${___CSS_LOADER_URL_REPLACEMENT_0___}); /* Replace with your image path */\n    background-size: cover;\n    background-position: center;\n    background-repeat: no-repeat;\n    width: 100%;\n    height: 100%;\n}\n\n/* Header */\n.Header {\n    background-color: rgba(0, 0, 0, 0.6);\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    padding: 0 5%;\n    height: 80px;\n    position: fixed;\n    width: 100%;\n    top: 0;\n    z-index: 10;\n}\n\n.HeaderText {\n    font-family: \"Great Vibes\", serif;\n    font-size: 2.5rem;\n    color: aliceblue;\n}\n\n/* Navigation */\n.Nav {\n    display: flex;\n    gap: 20px;\n}\n\n.nav-btnHome,.nav-btnMenu,.nav-btnCont {\n    background: none;\n    border: none;\n    color: aliceblue;\n    font-size: 1.2rem;\n    font-weight: 600;\n    cursor: pointer;\n    font-family: \"Playfair Display\", serif;\n    transition: color 0.3s ease;\n}\n\n.nav-btnHome:hover,.nav-btnMenu:hover,.nav-btnCont:hover {\n    color: goldenrod;\n}\n\n/* Center Text */\n.CenterText {\n    position: absolute;\n    top: 45%;\n    left: 10%;\n    color: aliceblue;\n    font-size: 1.5rem;\n    text-align: left;\n}\n\n.CenterRes {\n    font-family: \"Great Vibes\", serif;\n    font-size: 2.5rem;\n    color: aliceblue;\n}\n\n/* Footer */\n.footer1 {\n    font-family: \"Great Vibes\", serif;\n    color: aliceblue;\n    font-size: 1.2rem;\n    font-weight: 600;\n    background-color: rgba(0, 0, 0, 0.8);\n    text-align: center;\n    padding: 10px;\n    position: fixed;\n    left: 0%;\n    bottom: 0;\n    width: 100%;\n}\n/* Add to the bottom of style.css */\n\n/* Mobile Responsiveness */\n@media (max-width: 768px) {\n    /* Header adjustments */\n    .Header {\n      flex-direction: column;\n      height: auto;\n      padding: 15px 5%;\n    }\n  \n    .HeaderText {\n      font-size: 2rem;\n      margin-bottom: 10px;\n    }\n  \n    .Nav {\n      width: 100%;\n      justify-content: space-around;\n      gap: 10px;\n    }\n  \n    /* Center text adjustments */\n    .CenterText {\n      top: 30%;\n      left: 5%;\n      right: 5%;\n      width: 90%;\n      font-size: 1.2rem;\n      text-align: center;\n    }\n  \n    .CenterRes {\n      font-size: 2rem;\n    }\n  \n    /* Footer adjustments */\n    .footer1 {\n      font-size: 1rem;\n      padding: 8px;\n    }\n  }\n\n\n\n\n\n\n\n \n/* === Home Section Styles === */\n.home-active .imgpage {\n  background-image: url(${___CSS_LOADER_URL_REPLACEMENT_0___});\n}\n\n.home-active .CenterText {\n  position: absolute;\n  top: 45%;\n  left: 10%;\n  color: aliceblue;\n  font-size: 1.6rem;\n  text-align: left;\n  background-color: transparent;\n}\n\n.home-active .CenterRes {\n  font-size: 2rem;\n  color: #fcfbfa;\n}\n\n/* === Menu Section Styles === */\n.menu-active .imgpage {\n  background-color: rgb(248, 248, 248);\n  background-image: none;\n}\n\n.menu-active .CenterText {\n  font-family: \"Great Vibes\", serif;\n  position: absolute;\n  top: 15%;\n  color: black;\n  font-size: 4rem;\n  padding-top: 1%;\n  height: 75%;\n  width: 100%;\n  left: 0%;\n  text-align: center;\n  background-color: rgb(233, 230, 230);\n}\n\n/* Menu Items */\n.MenuDiv1, .MenuDiv2, .MenuDiv3 {\n  width: 400px;\n  padding-left: 1%;\n  height: 200px;\n  font-size: 3rem;\n  display: flex;\n}\n\n.pizzaWrapper {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: space-between;\n}\n\n.PizzaImg1, .PizzaImg2, .PizzaImg3,\n.SpaghettiImg1, .SpaghettiImg2, .SpaghettiImg3 {\n  width: 125px;\n  height: 125px;\n  border-radius: 50%;\n  margin-top: 15px;\n  margin-left: 8px;\n}\n\n.Text1Img, .TextImg2, .TextImg3,\n.Text1ImgSp1, .TextImgSp2, .TextImgSp3 {\n  font-family: \"Playfair Display\", serif;\n  font-size: 1.8rem;\n  padding-top: 15px;\n  padding-right: 10px;\n  font-weight: 600;\n  text-align: start;\n  padding-left: 7%;\n  padding-bottom: 2%;\n}\n\n.PricePizza1, .PricePizza2, .price3,\n.PriceSpaghetti1, .PriceSpaghetti2, .PriceSpaghetti3 {\n  font-size: 2.2rem;\n  text-align: start;\n  padding-left: 7%;\n  color: rgb(202, 114, 0);\n}\n\n.descripPizza, .descriptionPizz2, .descripPizza3,\n.descripSpaghetti, .descriptionSpaghetti2, .descripSpaghetti3 {\n  font-family: \"Playfair Display\", serif;\n  font-size: 0.9rem;\n  padding-left: 5px;\n}\n\n.merge {\n  display: flex;\n  flex-direction: column;\n}\n\n/* === Contact Section Styles === */\n.content-active .imgpage {\n  background-image: url(${___CSS_LOADER_URL_REPLACEMENT_1___});\n}\n\n.content-active .CenterText {\n  position: absolute;\n  top: 7%;\n  background-color: transparent;\n}\n\n.contact-us {\n  font-family: 'Roboto', sans-serif;\n  max-width: 900px;\n  margin: 40px auto;\n  padding: 40px;\n  background-color: #ffffff;\n  border-radius: 8px;\n  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);\n  text-align: center;\n}\n\n.contact-us h2 {\n  font-size: 2.5rem;\n  color: #333;\n  margin-bottom: 20px;\n  text-transform: uppercase;\n  letter-spacing: 1px;\n}\n\n.contact-us p {\n  font-size: 1.1rem;\n  color: #555;\n  margin-bottom: 30px;\n}\n\n.contact-details {\n  display: flex;\n  justify-content: space-around;\n  margin-bottom: 30px;\n}\n\n.contact-item {\n  font-size: 1.1rem;\n  color: #333;\n}\n\n.contact-item h3 {\n  font-size: 1.3rem;\n  font-weight: 600;\n  color: #e67e22;\n  margin-bottom: 5px;\n}\n\n.contact-item p {\n  font-size: 1rem;\n  color: #777;\n}\n\n.contact-item a {\n  color: #e67e22;\n  text-decoration: none;\n  font-weight: bold;\n}\n\n.contact-item a:hover {\n  text-decoration: underline;\n  color: #d35400;\n}\n\n/* Form Styles */\nform {\n  display: grid;\n  grid-template-columns: 1fr;\n  gap: 20px;\n  width: 100%;\n}\n\n.form-group {\n  display: flex;\n  flex-direction: column;\n}\n\nlabel {\n  font-size: 1.1rem;\n  font-weight: 600;\n  margin-bottom: 8px;\n  color: #333;\n}\n\ninput, textarea {\n  padding: 10px;\n  font-size: 1rem;\n  border: 2px solid #ccc;\n  border-radius: 8px;\n  outline: none;\n  transition: border-color 0.3s ease;\n}\n\ninput:focus, textarea:focus {\n  border-color: #e67e22;\n}\n\ntextarea {\n  resize: horizontal;\n  min-height: 30px;\n}\n\n.contButton {\n  width: 400px;\n  margin: 30px;\n  height: 50px;\n  background-color: #e67e22;\n  color: white;\n  border: none;\n  border-radius: 8px;\n  font-size: 1.2rem;\n  cursor: pointer;\n  transition: background-color 0.3s ease;\n}\n\n.contButton:hover {\n  background-color: #d35400;\n}\n\n.contButton:active {\n  background-color: #c0392b;\n}\n\n/* === Responsive Styles === */\n@media (max-width: 768px) {\n  /* General */\n  .CenterText {\n    top: 20%;\n    font-size: 3rem;\n    padding-top: 20px;\n    height: auto;\n  }\n  \n  /* Home */\n  .home-active .CenterText {\n    top: 55%;\n    left: 5%;\n    right: 5%;\n    width: 90%;\n    text-align: center;\n  }\n  \n  /* Menu */\n  .pizzaWrapper {\n    flex-direction: column;\n    align-items: center;\n  }\n  \n  .MenuDiv1, .MenuDiv2, .MenuDiv3 {\n    width: 90%;\n    margin-bottom: 30px;\n    height: auto;\n    flex-direction: column;\n    align-items: center;\n    text-align: center;\n  }\n  \n  .PizzaImg1, .PizzaImg2, .PizzaImg3,\n  .SpaghettiImg1, .SpaghettiImg2, .SpaghettiImg3 {\n    margin: 15px auto;\n  }\n  \n  .Text1Img, .TextImg2, .TextImg3,\n  .Text1ImgSp1, .TextImgSp2, .TextImgSp3 {\n    text-align: center;\n    padding-left: 0;\n  }\n  \n  .PricePizza1, .PricePizza2, .price3,\n  .PriceSpaghetti1, .PriceSpaghetti2, .PriceSpaghetti3 {\n    text-align: center;\n    padding-left: 0;\n  }\n  \n  /* Contact */\n  .contact-us {\n    padding: 20px;\n    margin: 20px auto;\n    width: 90%;\n  }\n  \n  .contact-us h2 {\n    font-size: 1.8rem;\n  }\n  \n  .contact-details {\n    flex-direction: column;\n    gap: 20px;\n  }\n  \n  .contact-item {\n    margin-bottom: 15px;\n  }\n  \n  form {\n    grid-template-columns: 1fr;\n  }\n  \n  .contButton {\n    width: 100%;\n    margin: 20px 0;\n  }\n  \n  .content-active .CenterText {\n    top: 20px;\n    position: relative;\n  }\n}\n\n@media (min-width: 769px) {\n  .contact-details {\n    flex-direction: row;\n    justify-content: space-between;\n  }\n  \n  form {\n    grid-template-columns: 1fr 1fr;\n    gap: 30px;\n  }\n}\n`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack:///./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack:///./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    options = {};\n  }\n  if (!url) {\n    return url;\n  }\n  url = String(url.__esModule ? url.default : url);\n\n  // If url is already wrapped in quotes, remove them\n  if (/^['\"].*['\"]$/.test(url)) {\n    url = url.slice(1, -1);\n  }\n  if (options.hash) {\n    url += options.hash;\n  }\n\n  // Should url be wrapped?\n  // See https://drafts.csswg.org/css-values-3/#urls\n  if (/[\"'() \\t\\n]|(%20)/.test(url) || options.needQuotes) {\n    return \"\\\"\".concat(url.replace(/\"/g, '\\\\\"').replace(/\\n/g, \"\\\\n\"), \"\\\"\");\n  }\n  return url;\n};\n\n//# sourceURL=webpack:///./node_modules/css-loader/dist/runtime/getUrl.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack:///./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack:///./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack:///./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack:///./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack:///./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack:///./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack:///./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/Content/content.js":
/*!********************************!*\
  !*** ./src/Content/content.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   loadContent: () => (/* binding */ loadContent)\n/* harmony export */ });\nfunction loadContent() {\n  console.log('Contact Us section loaded');\n  // Set body class for styling\n  document.body.className = 'content-active';\n\n  // Change content in the center text section\n  const content = document.querySelector('.CenterText');\n  content.innerHTML = '';  // Title for the Contact Us page\n\n  // Create the contact us form dynamically\n  const contactForm = document.createElement('div');\n  contactForm.classList.add('contact-us');\n\n  // Contact Us Form Header\n  const header = document.createElement('h2');\n  header.innerText = 'We\\'d Love to Hear from You!';\n  contactForm.appendChild(header);\n\n  const infoText = document.createElement('p');\n  infoText.innerText = 'Whether you have a question, want to make a reservation, or just want to share your experience, feel free to reach out.';\n  contactForm.appendChild(infoText);\n\n  // Contact details section (email, phone, location)\n  const contactDetails = document.createElement('div');\n  contactDetails.classList.add('contact-details');\n\n  const emailItem = document.createElement('div');\n  emailItem.classList.add('contact-item');\n  emailItem.innerHTML = '<h3>Email:</h3><p><a href=\"mailto:info@restaurant99.com\">info@restaurant99.com</a></p>';\n  contactDetails.appendChild(emailItem);\n\n  const phoneItem = document.createElement('div');\n  phoneItem.classList.add('contact-item');\n  phoneItem.innerHTML = '<h3>Phone:</h3><p><a href=\"tel:+1234567890\">+1 (234) 567-890</a></p>';\n  contactDetails.appendChild(phoneItem);\n\n  const locationItem = document.createElement('div');\n  locationItem.classList.add('contact-item');\n  locationItem.innerHTML = '<h3>Location:</h3><p>Restaurant99, 123 Flavor Street, City, Country, 56789</p>';\n  contactDetails.appendChild(locationItem);\n\n  contactForm.appendChild(contactDetails);\n\n  // Contact form\n  const form = document.createElement('form');\n  form.action = '/submit_contact';\n  form.method = 'POST';\n\n  const nameGroup = document.createElement('div');\n  nameGroup.classList.add('form-group');\n  nameGroup.innerHTML = '<label for=\"name\">Your Name:</label><input type=\"text\" id=\"name\" name=\"name\" required>';\n  form.appendChild(nameGroup);\n\n  const emailGroup = document.createElement('div');\n  emailGroup.classList.add('form-group');\n  emailGroup.innerHTML = '<label for=\"email\">Your Email:</label><input type=\"email\" id=\"email\" name=\"email\" required>';\n  form.appendChild(emailGroup);\n\n  const messageGroup = document.createElement('div');\n  messageGroup.classList.add('form-group');\n  messageGroup.innerHTML = '<label for=\"message\">Message:</label><textarea id=\"message\" name=\"message\" required></textarea>';\n  form.appendChild(messageGroup);\n\n  const submitButton = document.createElement('button');\n  submitButton.classList.add('contButton');\n  submitButton.type = 'submit';\n  submitButton.innerText = 'Send Message';\n  form.appendChild(submitButton);\n\n  contactForm.appendChild(form);\n\n  // Append the Contact Us form to the content\n  content.appendChild(contactForm);\n}\n\n//# sourceURL=webpack:///./src/Content/content.js?");

/***/ }),

/***/ "./src/Home/home.js":
/*!**************************!*\
  !*** ./src/Home/home.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   loadHome: () => (/* binding */ loadHome)\n/* harmony export */ });\nfunction loadHome() {\n    console.log('Home section loaded');\n\n      // Set body class for styling\n    document.body.className = 'home-active';\n    // Change content in the center text section\n    const content = document.querySelector('.CenterText');\n    content.innerHTML = `Welcome to <span class=\"CenterRes\">Restaurant99!</span> <br> \n                         Enjoy fresh flavors, warm hospitality, <br> and a dining experience made just for you.`;\n\n    // Dynamically load the Home section's CSS\n   \n\n    // Dynamically load the Home section's JS (optional here, just for clarity)\n    const script = document.createElement('script');\n    script.src = './Home/home.js';  // Path to Home section's JS\n    \n    document.body.appendChild(script);\n}\n\n\n//# sourceURL=webpack:///./src/Home/home.js?");

/***/ }),

/***/ "./src/Menu/menu.js":
/*!**************************!*\
  !*** ./src/Menu/menu.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   loadMenu: () => (/* binding */ loadMenu)\n/* harmony export */ });\n/* harmony import */ var _asset_pizza1_removebg_preview_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../asset/pizza1-removebg-preview.png */ \"./src/asset/pizza1-removebg-preview.png\");\n/* harmony import */ var _asset_pizza2_removebg_preview_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../asset/pizza2-removebg-preview.png */ \"./src/asset/pizza2-removebg-preview.png\");\n/* harmony import */ var _asset_pizza3_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../asset/pizza3.png */ \"./src/asset/pizza3.png\");\n/* harmony import */ var _asset_sp1_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../asset/sp1.png */ \"./src/asset/sp1.png\");\n/* harmony import */ var _asset_sp2_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../asset/sp2.png */ \"./src/asset/sp2.png\");\n/* harmony import */ var _asset_spagitywithmeat_removebg_preview_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../asset/spagitywithmeat-removebg-preview.png */ \"./src/asset/spagitywithmeat-removebg-preview.png\");\n\n\n\n\n\n\nfunction loadMenu() {\n  console.log('Menu section loaded');\n  document.body.className = 'menu-active';\n\n  // Change content in the center text section\n  const content = document.querySelector('.CenterText');\n  content.innerHTML = 'The Menu';\n\n  // Create wrapper div for pizzas and apply flex display\n  const pizzaWrapper = document.createElement('div');\n  pizzaWrapper.classList.add('pizzaWrapper');\n\n  // Create MenuDiv for Pizza 1\n  const MenuDiv1 = document.createElement('div');\n  MenuDiv1.classList.add('MenuDiv1');\n  const Pizza1 = document.createElement('img');\n  Pizza1.classList.add('PizzaImg1');\n  Pizza1.src = _asset_pizza1_removebg_preview_png__WEBPACK_IMPORTED_MODULE_0__;\n  Pizza1.alt = 'The pizza 1';\n  const TextImg1 = document.createElement('div');\n  TextImg1.classList.add('Text1Img');\n  TextImg1.textContent = 'American Pizza';\n  const price1 = document.createElement('div');\n  price1.classList.add('PricePizza1');\n  price1.textContent = 'Price 9$';\n  const descripPizza1 = document.createElement('div');\n  descripPizza1.textContent = '\"Fresh veggies, and melted cheese on a crispy crust.\"';\n  descripPizza1.classList.add('descripPizza');\n  const merge1 = document.createElement('div');\n  merge1.classList.add('merge');\n  merge1.appendChild(TextImg1);\n  merge1.appendChild(price1);\n  merge1.appendChild(descripPizza1);\n  MenuDiv1.appendChild(merge1);\n  MenuDiv1.appendChild(Pizza1);\n\n  // Create MenuDiv for Pizza 2\n  const MenuDiv2 = document.createElement('div');\n  MenuDiv2.classList.add('MenuDiv2');\n  const Pizza2 = document.createElement('img');\n  Pizza2.classList.add('ImgPizza2', 'PizzaImg2');\n  Pizza2.src = _asset_pizza2_removebg_preview_png__WEBPACK_IMPORTED_MODULE_1__;\n  Pizza2.alt = 'The pizza 2';\n  const TextImg2 = document.createElement('div');\n  TextImg2.classList.add('TextImg2');\n  TextImg2.textContent = 'Italian Pizza';\n  const price2 = document.createElement('div');\n  price2.textContent = 'Price 12$';\n  price2.classList.add('PricePizza2');\n  const descripPizza2 = document.createElement('div');\n  descripPizza2.textContent = '\"Fresh veggies, savory black olives, mushrooms, and melted cheese.\"';\n  descripPizza2.classList.add('descriptionPizz2');\n  const merge2 = document.createElement('div');\n  merge2.classList.add('merge');\n  merge2.appendChild(TextImg2);\n  merge2.appendChild(price2);\n  merge2.appendChild(descripPizza2);\n  MenuDiv2.appendChild(merge2);\n  MenuDiv2.appendChild(Pizza2);\n\n  // Create MenuDiv for Pizza 3\n  const MenuDiv3 = document.createElement('div');\n  MenuDiv3.classList.add('MenuDiv3');\n  const pizza3 = document.createElement('img');\n  pizza3.src = _asset_pizza3_png__WEBPACK_IMPORTED_MODULE_2__;\n  pizza3.alt = 'The pizza 3';\n  pizza3.classList.add('PizzaImg3');\n  const TextImg3 = document.createElement('div');\n  TextImg3.classList.add('TextImg3');\n  TextImg3.textContent = 'Seafood Pizza';\n  const price3 = document.createElement('div');\n  price3.classList.add('price3');\n  price3.textContent = 'Price 15$';\n  const descripPizza3 = document.createElement('div');\n  descripPizza3.classList.add('descripPizza3');\n  descripPizza3.textContent = '\"A delicious combination of shrimp, mussels, and cheese.\"';\n  const merge3 = document.createElement('div');\n  merge3.classList.add('merge');\n  merge3.appendChild(TextImg3);\n  merge3.appendChild(price3);\n  merge3.appendChild(descripPizza3);\n  MenuDiv3.appendChild(merge3);\n    MenuDiv3.appendChild(pizza3);\n\n\n  // Append pizzas to the pizzaWrapper\n  pizzaWrapper.appendChild(MenuDiv1);\n  pizzaWrapper.appendChild(MenuDiv2);\n  pizzaWrapper.appendChild(MenuDiv3);\n\n  // Create MenuDiv for Spaghetti 1\n  const SpaghettiDiv1 = document.createElement('div');\n  SpaghettiDiv1.classList.add('MenuDiv1');\n  const Spaghetti1 = document.createElement('img');\n  Spaghetti1.classList.add('SpaghettiImg1');\n  Spaghetti1.src = _asset_sp1_png__WEBPACK_IMPORTED_MODULE_3__;\n  Spaghetti1.alt = 'Spaghetti 1';\n  const TextImgSpaghetti1 = document.createElement('div');\n  TextImgSpaghetti1.classList.add('Text1ImgSp1');\n  TextImgSpaghetti1.textContent = 'Spaghetti Marinara';\n  const priceSpaghetti1 = document.createElement('div');\n  priceSpaghetti1.classList.add('PriceSpaghetti1');\n  priceSpaghetti1.textContent = 'Price 10$';\n  const descripSpaghetti1 = document.createElement('div');\n  descripSpaghetti1.textContent = '\"Classic spaghetti with marinara sauce and herbs.\"';\n  descripSpaghetti1.classList.add('descripSpaghetti');\n  const mergeSpaghetti1 = document.createElement('div');\n  mergeSpaghetti1.classList.add('merge');\n  mergeSpaghetti1.appendChild(TextImgSpaghetti1);\n  mergeSpaghetti1.appendChild(priceSpaghetti1);\n  mergeSpaghetti1.appendChild(descripSpaghetti1);\n  SpaghettiDiv1.appendChild(mergeSpaghetti1);\n  SpaghettiDiv1.appendChild(Spaghetti1);\n\n  // Create MenuDiv for Spaghetti 2\n  const SpaghettiDiv2 = document.createElement('div');\n  SpaghettiDiv2.classList.add('MenuDiv2');\n  const Spaghetti2 = document.createElement('img');\n  Spaghetti2.classList.add('SpaghettiImg2');\n  Spaghetti2.src = _asset_sp2_png__WEBPACK_IMPORTED_MODULE_4__;\n  Spaghetti2.alt = 'Spaghetti 2';\n  const TextImgSpaghetti2 = document.createElement('div');\n  TextImgSpaghetti2.classList.add('TextImgSp2');\n  TextImgSpaghetti2.textContent = 'Spaghetti Bolognese';\n  const priceSpaghetti2 = document.createElement('div');\n  priceSpaghetti2.classList.add('PriceSpaghetti2');\n  priceSpaghetti2.textContent = 'Price 13$';\n  const descripSpaghetti2 = document.createElement('div');\n  descripSpaghetti2.classList.add('descriptionSpaghetti2');\n  descripSpaghetti2.textContent = '\"A creamy carbonara sauce with crispy pancetta.\"';\n  const mergeSpaghetti2 = document.createElement('div');\n  mergeSpaghetti2.classList.add('merge');\n  mergeSpaghetti2.appendChild(TextImgSpaghetti2);\n  mergeSpaghetti2.appendChild(priceSpaghetti2);\n  mergeSpaghetti2.appendChild(descripSpaghetti2);\n  SpaghettiDiv2.appendChild(mergeSpaghetti2);\n  SpaghettiDiv2.appendChild(Spaghetti2);\n\n  // Create MenuDiv for Spaghetti 3\n  const SpaghettiDiv3 = document.createElement('div');\n  SpaghettiDiv3.classList.add('MenuDiv3');\n  const Spaghetti3 = document.createElement('img');\n  Spaghetti3.classList.add('SpaghettiImg3');\n  Spaghetti3.src = _asset_spagitywithmeat_removebg_preview_png__WEBPACK_IMPORTED_MODULE_5__;\n  Spaghetti3.alt = 'Spaghetti 3';\n  const TextImgSpaghetti3 = document.createElement('div');\n  TextImgSpaghetti3.classList.add('TextImgSp3');\n  TextImgSpaghetti3.textContent = 'Spaghetti Carbonara';\n  const priceSpaghetti3 = document.createElement('div');\n  priceSpaghetti3.classList.add('PriceSpaghetti3');\n  priceSpaghetti3.textContent = 'Price 14$';\n  const descripSpaghetti3 = document.createElement('div');\n  descripSpaghetti3.classList.add('descripSpaghetti3');\n  descripSpaghetti3.textContent = '\"Spaghetti with rich meat sauce and herbs.\"';\n  const mergeSpaghetti3 = document.createElement('div');\n  mergeSpaghetti3.classList.add('merge');\n  mergeSpaghetti3.appendChild(TextImgSpaghetti3);\n  mergeSpaghetti3.appendChild(priceSpaghetti3);\n  mergeSpaghetti3.appendChild(descripSpaghetti3);\n  SpaghettiDiv3.appendChild(mergeSpaghetti3);\n  SpaghettiDiv3.appendChild(Spaghetti3);\n\n  // Append spaghetti to the pizzaWrapper\n  pizzaWrapper.appendChild(SpaghettiDiv1);\n  pizzaWrapper.appendChild(SpaghettiDiv2);\n  pizzaWrapper.appendChild(SpaghettiDiv3);\n\n  // Add the pizzaWrapper to the content section\n  content.appendChild(pizzaWrapper);\n}\n\n//# sourceURL=webpack:///./src/Menu/menu.js?");

/***/ }),

/***/ "./src/asset/logoimg.jpg":
/*!*******************************!*\
  !*** ./src/asset/logoimg.jpg ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"f79d28c8eb79caa36e47.jpg\";\n\n//# sourceURL=webpack:///./src/asset/logoimg.jpg?");

/***/ }),

/***/ "./src/asset/pizza1-removebg-preview.png":
/*!***********************************************!*\
  !*** ./src/asset/pizza1-removebg-preview.png ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"39034c045e6148634922.png\";\n\n//# sourceURL=webpack:///./src/asset/pizza1-removebg-preview.png?");

/***/ }),

/***/ "./src/asset/pizza2-removebg-preview.png":
/*!***********************************************!*\
  !*** ./src/asset/pizza2-removebg-preview.png ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"c9ace2c815d92198a14f.png\";\n\n//# sourceURL=webpack:///./src/asset/pizza2-removebg-preview.png?");

/***/ }),

/***/ "./src/asset/pizza3.png":
/*!******************************!*\
  !*** ./src/asset/pizza3.png ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"5c62ff44aa06930c2ea0.png\";\n\n//# sourceURL=webpack:///./src/asset/pizza3.png?");

/***/ }),

/***/ "./src/asset/sp1.png":
/*!***************************!*\
  !*** ./src/asset/sp1.png ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"8c3033b09cee7dc821ce.png\";\n\n//# sourceURL=webpack:///./src/asset/sp1.png?");

/***/ }),

/***/ "./src/asset/sp2.png":
/*!***************************!*\
  !*** ./src/asset/sp2.png ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"7ad6b1446b90ac263cf7.png\";\n\n//# sourceURL=webpack:///./src/asset/sp2.png?");

/***/ }),

/***/ "./src/asset/spagitywithmeat-removebg-preview.png":
/*!********************************************************!*\
  !*** ./src/asset/spagitywithmeat-removebg-preview.png ***!
  \********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"c8ac8f40af9173740f05.png\";\n\n//# sourceURL=webpack:///./src/asset/spagitywithmeat-removebg-preview.png?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Home_home_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Home/home.js */ \"./src/Home/home.js\");\n/* harmony import */ var _Menu_menu_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Menu/menu.js */ \"./src/Menu/menu.js\");\n/* harmony import */ var _Content_content_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Content/content.js */ \"./src/Content/content.js\");\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n// Import the page load functions at the top\n\n\n\n\n\n\n\n\n// Debugging helper\nconsole.log(\"index.js loaded - functions available:\", {\n  loadHome: typeof _Home_home_js__WEBPACK_IMPORTED_MODULE_0__.loadHome,\n  loadMenu: typeof _Menu_menu_js__WEBPACK_IMPORTED_MODULE_1__.loadMenu,\n  loadContent: typeof _Content_content_js__WEBPACK_IMPORTED_MODULE_2__.loadContent\n});\n\ndocument.addEventListener('DOMContentLoaded', () => {\n  console.log(\"DOM fully loaded\");\n  \n  const homeButton = document.querySelector('.nav-btnHome');\n  const menuButton = document.querySelector('.nav-btnMenu');\n  const contentButton = document.querySelector('.nav-btnCont');\n\n  // Debug button selection\n  console.log(\"Buttons found:\", { homeButton, menuButton, contentButton });\n\n  // Verify buttons exist before adding listeners\n  if (!homeButton || !menuButton || !contentButton) {\n    console.error(\"One or more navigation buttons not found!\");\n    return;\n  }\n\n  // Set home as default\n  (0,_Home_home_js__WEBPACK_IMPORTED_MODULE_0__.loadHome)();\n\n  // Add event listeners with error handling\n  homeButton.addEventListener('click', (e) => {\n    e.preventDefault();\n    console.log(\"Home button clicked\");\n    try {\n      (0,_Home_home_js__WEBPACK_IMPORTED_MODULE_0__.loadHome)();\n    } catch (error) {\n      console.error(\"Error loading home:\", error);\n    }\n  });\n  \n  menuButton.addEventListener('click', (e) => {\n    e.preventDefault();\n    console.log(\"Menu button clicked\");\n    try {\n      (0,_Menu_menu_js__WEBPACK_IMPORTED_MODULE_1__.loadMenu)();\n    } catch (error) {\n      console.error(\"Error loading menu:\", error);\n    }\n  });\n  \n  contentButton.addEventListener('click', (e) => {\n    e.preventDefault();\n    console.log(\"Contact button clicked\");\n    try {\n      (0,_Content_content_js__WEBPACK_IMPORTED_MODULE_2__.loadContent)();\n    } catch (error) {\n      console.error(\"Error loading contact:\", error);\n    }\n  });\n\n  console.log(\"Event listeners attached\");\n});\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\noptions.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack:///./src/style.css?");

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
/******/ 			if (document.currentScript && document.currentScript.tagName.toUpperCase() === 'SCRIPT')
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/^blob:/, "").replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;