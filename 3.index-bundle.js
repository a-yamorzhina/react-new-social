(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[3],{

/***/ "./src/components/Dialogs/AddMessageForm.jsx":
/*!***************************************************!*\
  !*** ./src/components/Dialogs/AddMessageForm.jsx ***!
  \***************************************************/
/*! exports provided: AddMessageFormRedux */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"AddMessageFormRedux\", function() { return AddMessageFormRedux; });\n/* harmony import */ var _Dialogs_module_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Dialogs.module.css */ \"./src/components/Dialogs/Dialogs.module.css\");\n/* harmony import */ var _Dialogs_module_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Dialogs_module_css__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var redux_form__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! redux-form */ \"./node_modules/redux-form/es/index.js\");\n/* harmony import */ var _common_FormsControls_FormsControls__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../common/FormsControls/FormsControls */ \"./src/components/common/FormsControls/FormsControls.js\");\n/* harmony import */ var _utils_validators_validators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../utils/validators/validators */ \"./src/utils/validators/validators.js\");\n\n\n\n\n\nvar maxLength100 = Object(_utils_validators_validators__WEBPACK_IMPORTED_MODULE_4__[\"maxLengthCreator\"])(100);\n\nvar AddMessageForm = function AddMessageForm(props) {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"form\", {\n    onSubmit: props.handleSubmit,\n    className: _Dialogs_module_css__WEBPACK_IMPORTED_MODULE_0___default.a.textareaDiv\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(redux_form__WEBPACK_IMPORTED_MODULE_2__[\"Field\"], {\n    name: \"newMessageBody\",\n    placeholder: \"Enter your message\",\n    component: _common_FormsControls_FormsControls__WEBPACK_IMPORTED_MODULE_3__[\"Textarea\"],\n    className: _Dialogs_module_css__WEBPACK_IMPORTED_MODULE_0___default.a.textareaStyle,\n    validate: [_utils_validators_validators__WEBPACK_IMPORTED_MODULE_4__[\"required\"], maxLength100]\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"button\", {\n    className: _Dialogs_module_css__WEBPACK_IMPORTED_MODULE_0___default.a.mainButton\n  }, \"Send\"));\n};\n\nvar AddMessageFormRedux = Object(redux_form__WEBPACK_IMPORTED_MODULE_2__[\"reduxForm\"])({\n  form: 'dialog-add-message-form'\n})(AddMessageForm);\n\n//# sourceURL=webpack:///./src/components/Dialogs/AddMessageForm.jsx?");

/***/ }),

/***/ "./src/components/Dialogs/DialogItem/DialogItem.jsx":
/*!**********************************************************!*\
  !*** ./src/components/Dialogs/DialogItem/DialogItem.jsx ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Dialogs_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Dialogs.module.css */ \"./src/components/Dialogs/Dialogs.module.css\");\n/* harmony import */ var _Dialogs_module_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Dialogs_module_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ \"./node_modules/react-router-dom/esm/react-router-dom.js\");\n\n\n\n\nvar DialogItem = function DialogItem(props) {\n  var path = \"/dialogs/\" + props.id;\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: _Dialogs_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.dialog + ' ' + _Dialogs_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.active\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"img\", {\n    className: _Dialogs_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.dialogImg,\n    src: props.src,\n    alt: \"dialogImg\"\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__[\"NavLink\"], {\n    to: path,\n    className: _Dialogs_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.textType\n  }, \" \", props.name, \" \"));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (DialogItem);\n\n//# sourceURL=webpack:///./src/components/Dialogs/DialogItem/DialogItem.jsx?");

/***/ }),

/***/ "./src/components/Dialogs/Dialogs.jsx":
/*!********************************************!*\
  !*** ./src/components/Dialogs/Dialogs.jsx ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Dialogs_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Dialogs.module.css */ \"./src/components/Dialogs/Dialogs.module.css\");\n/* harmony import */ var _Dialogs_module_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Dialogs_module_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _DialogItem_DialogItem__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./DialogItem/DialogItem */ \"./src/components/Dialogs/DialogItem/DialogItem.jsx\");\n/* harmony import */ var _Message_Message__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Message/Message */ \"./src/components/Dialogs/Message/Message.jsx\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-router-dom */ \"./node_modules/react-router-dom/esm/react-router-dom.js\");\n/* harmony import */ var _AddMessageForm__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./AddMessageForm */ \"./src/components/Dialogs/AddMessageForm.jsx\");\n\n\n\n\n\n\n\nvar Dialogs = function Dialogs(props) {\n  var dialogsMas = props.dialogsPage.dialogs.map(function (d) {\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_DialogItem_DialogItem__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n      name: d.name,\n      id: d.id,\n      key: d.id,\n      src: d.src\n    });\n  });\n  var messagesMas = props.dialogsPage.messages.map(function (m) {\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Message_Message__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n      message: m.message,\n      key: m.id\n    });\n  }); // debugger;\n\n  var addNewMessage = function addNewMessage(values) {\n    props.sendMessage(values.newMessageBody);\n  };\n\n  if (!props.isAuth) {\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_4__[\"Redirect\"], {\n      to: \"/login\"\n    });\n  }\n\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: _Dialogs_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.dialogs\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: _Dialogs_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.dialogItems\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null), dialogsMas), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: _Dialogs_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.messages\n  }, messagesMas), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_AddMessageForm__WEBPACK_IMPORTED_MODULE_5__[\"AddMessageFormRedux\"], {\n    onSubmit: addNewMessage\n  }));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Dialogs);\n\n//# sourceURL=webpack:///./src/components/Dialogs/Dialogs.jsx?");

/***/ }),

/***/ "./src/components/Dialogs/Dialogs.module.css":
/*!***************************************************!*\
  !*** ./src/components/Dialogs/Dialogs.module.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\nmodule.exports = {\"dialogs\":\"src-components-Dialogs-Dialogs-module__dialogs--FLZR5\",\"dialogItems\":\"src-components-Dialogs-Dialogs-module__dialogItems--1tzao\",\"active\":\"src-components-Dialogs-Dialogs-module__active--3354n\",\"dialog\":\"src-components-Dialogs-Dialogs-module__dialog--2v0u9\",\"messages\":\"src-components-Dialogs-Dialogs-module__messages--3ntcv\",\"message\":\"src-components-Dialogs-Dialogs-module__message--j77t8\",\"textType\":\"src-components-Dialogs-Dialogs-module__textType--IrReU\",\"dialogImg\":\"src-components-Dialogs-Dialogs-module__dialogImg--22hT8\",\"textareaStyle\":\"src-components-Dialogs-Dialogs-module__textareaStyle--1SOWl\",\"mainButton\":\"src-components-Dialogs-Dialogs-module__mainButton--2uOJC\",\"textareaDiv\":\"src-components-Dialogs-Dialogs-module__textareaDiv--3vRrZ\"};\n\n//# sourceURL=webpack:///./src/components/Dialogs/Dialogs.module.css?");

/***/ }),

/***/ "./src/components/Dialogs/DialogsContainer.jsx":
/*!*****************************************************!*\
  !*** ./src/components/Dialogs/DialogsContainer.jsx ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _redux_dialogs_reducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../redux/dialogs-reducer */ \"./src/redux/dialogs-reducer.js\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var _hoc_withAuthRedirect__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../hoc/withAuthRedirect */ \"./src/hoc/withAuthRedirect.js\");\n/* harmony import */ var _Dialogs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Dialogs */ \"./src/components/Dialogs/Dialogs.jsx\");\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! redux */ \"./node_modules/redux/es/redux.js\");\n\n\n\n\n\n\n\nvar mapStateToProps = function mapStateToProps(state) {\n  return {\n    dialogsPage: state.dialogsPage\n  };\n};\n\nvar mapDispatchToProps = function mapDispatchToProps(dispatch) {\n  return {\n    sendMessage: function sendMessage(newMessageBody) {\n      dispatch(Object(_redux_dialogs_reducer__WEBPACK_IMPORTED_MODULE_1__[\"sendMessageCreator\"])(newMessageBody));\n    }\n  };\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(redux__WEBPACK_IMPORTED_MODULE_5__[\"compose\"])(Object(react_redux__WEBPACK_IMPORTED_MODULE_2__[\"connect\"])(mapStateToProps, mapDispatchToProps), _hoc_withAuthRedirect__WEBPACK_IMPORTED_MODULE_3__[\"withAuthRedirect\"])(_Dialogs__WEBPACK_IMPORTED_MODULE_4__[\"default\"]));\n\n//# sourceURL=webpack:///./src/components/Dialogs/DialogsContainer.jsx?");

/***/ }),

/***/ "./src/components/Dialogs/Message/Message.jsx":
/*!****************************************************!*\
  !*** ./src/components/Dialogs/Message/Message.jsx ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Dialogs_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Dialogs.module.css */ \"./src/components/Dialogs/Dialogs.module.css\");\n/* harmony import */ var _Dialogs_module_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Dialogs_module_css__WEBPACK_IMPORTED_MODULE_1__);\n\n\n\nvar Message = function Message(props) {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: _Dialogs_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.message\n  }, \" \", props.message, \" \");\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Message);\n\n//# sourceURL=webpack:///./src/components/Dialogs/Message/Message.jsx?");

/***/ })

}]);