(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[2],{

/***/ "./src/assets/images/key.svg":
/*!***********************************!*\
  !*** ./src/assets/images/key.svg ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"109e38dc64efe16a148a1860dc11ed0c.svg\");\n\n//# sourceURL=webpack:///./src/assets/images/key.svg?");

/***/ }),

/***/ "./src/assets/images/mini-user.svg":
/*!*****************************************!*\
  !*** ./src/assets/images/mini-user.svg ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"9f181f97183f39ba1c864dff6bd608eb.svg\");\n\n//# sourceURL=webpack:///./src/assets/images/mini-user.svg?");

/***/ }),

/***/ "./src/assets/images/user-guest.svg":
/*!******************************************!*\
  !*** ./src/assets/images/user-guest.svg ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"570dca0f7540d9cfb893de673e306644.svg\");\n\n//# sourceURL=webpack:///./src/assets/images/user-guest.svg?");

/***/ }),

/***/ "./src/components/Login/Form/LoginForm.jsx":
/*!*************************************************!*\
  !*** ./src/components/Login/Form/LoginForm.jsx ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Login_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Login.module.css */ \"./src/components/Login/Login.module.css\");\n/* harmony import */ var _Login_module_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Login_module_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _assets_images_mini_user_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../assets/images/mini-user.svg */ \"./src/assets/images/mini-user.svg\");\n/* harmony import */ var _assets_images_key_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../assets/images/key.svg */ \"./src/assets/images/key.svg\");\n/* harmony import */ var redux_form__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! redux-form */ \"./node_modules/redux-form/es/index.js\");\n/* harmony import */ var _utils_validators_validators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../utils/validators/validators */ \"./src/utils/validators/validators.js\");\n/* harmony import */ var _common_FormsControls_FormsControls__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../common/FormsControls/FormsControls */ \"./src/components/common/FormsControls/FormsControls.js\");\n\n\n\n\n\n\n\n\nvar LoginForm = function LoginForm(_ref) {\n  var handleSubmit = _ref.handleSubmit,\n      error = _ref.error;\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"form\", {\n    onSubmit: handleSubmit,\n    className: _Login_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.form\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: _Login_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.userName\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"label\", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"span\", {\n    className: _Login_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.icon\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"img\", {\n    className: _Login_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.userIcon,\n    src: _assets_images_mini_user_svg__WEBPACK_IMPORTED_MODULE_2__[\"default\"],\n    alt: \"mini-user\"\n  })), Object(_common_FormsControls_FormsControls__WEBPACK_IMPORTED_MODULE_6__[\"CreateField\"])('Email or username', 'email', _utils_validators_validators__WEBPACK_IMPORTED_MODULE_5__[\"required\"], _common_FormsControls_FormsControls__WEBPACK_IMPORTED_MODULE_6__[\"Input\"], 'text', 'input')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: _Login_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.password\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"label\", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"span\", {\n    className: _Login_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.iconPassword\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"img\", {\n    className: _Login_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.passwordIcon,\n    src: _assets_images_key_svg__WEBPACK_IMPORTED_MODULE_3__[\"default\"],\n    alt: \"password\"\n  })), Object(_common_FormsControls_FormsControls__WEBPACK_IMPORTED_MODULE_6__[\"CreateField\"])('Password', 'password', _utils_validators_validators__WEBPACK_IMPORTED_MODULE_5__[\"required\"], _common_FormsControls_FormsControls__WEBPACK_IMPORTED_MODULE_6__[\"Input\"], 'password', 'input')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: _Login_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.rememberMe\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"label\", {\n    className: _Login_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.rememberText\n  }, Object(_common_FormsControls_FormsControls__WEBPACK_IMPORTED_MODULE_6__[\"CreateField\"])(null, 'rememberMe', _utils_validators_validators__WEBPACK_IMPORTED_MODULE_5__[\"unrequired\"], _common_FormsControls_FormsControls__WEBPACK_IMPORTED_MODULE_6__[\"Input\"], 'checkbox', 'elementRememberMe'), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"span\", null, \"Remember me\"))), error && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: _Login_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.formSummaryError\n  }, error), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"button\", {\n    type: \"submit\",\n    className: _Login_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.submit\n  }, \"Log Into Your Account\"));\n};\n\nvar LoginReduxForm = Object(redux_form__WEBPACK_IMPORTED_MODULE_4__[\"reduxForm\"])({\n  form: 'login'\n})(LoginForm);\n/* harmony default export */ __webpack_exports__[\"default\"] = (LoginReduxForm);\n\n//# sourceURL=webpack:///./src/components/Login/Form/LoginForm.jsx?");

/***/ }),

/***/ "./src/components/Login/Login.jsx":
/*!****************************************!*\
  !*** ./src/components/Login/Login.jsx ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Login_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Login.module.css */ \"./src/components/Login/Login.module.css\");\n/* harmony import */ var _Login_module_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Login_module_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _assets_images_user_guest_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../assets/images/user-guest.svg */ \"./src/assets/images/user-guest.svg\");\n/* harmony import */ var _Form_LoginForm__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Form/LoginForm */ \"./src/components/Login/Form/LoginForm.jsx\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var _redux_auth_reducer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../redux/auth-reducer */ \"./src/redux/auth-reducer.js\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-router-dom */ \"./node_modules/react-router-dom/esm/react-router-dom.js\");\n\n\n\n\n\n\n\n\nvar Login = function Login(props) {\n  var onSubmit = function onSubmit(formData) {\n    props.login(formData.email, formData.password, formData.rememberMe);\n  };\n\n  if (props.isAuth) {\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_6__[\"Redirect\"], {\n      to: \"/profile\"\n    });\n  }\n\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: _Login_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.overlay\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: _Login_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.loginBlock\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"img\", {\n    className: _Login_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.avatarGuest,\n    alt: \"avatar-guest\",\n    src: _assets_images_user_guest_svg__WEBPACK_IMPORTED_MODULE_2__[\"default\"]\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h1\", {\n    className: _Login_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.title\n  }, \"Log into your account\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Form_LoginForm__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n    onSubmit: onSubmit\n  })));\n};\n\nvar mapStateToProps = function mapStateToProps(state) {\n  return {\n    isAuth: state.auth.isAuth\n  };\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_4__[\"connect\"])(mapStateToProps, {\n  login: _redux_auth_reducer__WEBPACK_IMPORTED_MODULE_5__[\"login\"]\n})(Login)); // export default compose(\n//   connect(mapStateToProps, {login}),\n//   withRouter\n// )(Login);\n\n//# sourceURL=webpack:///./src/components/Login/Login.jsx?");

/***/ }),

/***/ "./src/components/Login/Login.module.css":
/*!***********************************************!*\
  !*** ./src/components/Login/Login.module.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\nmodule.exports = {\"overlay\":\"src-components-Login-Login-module__overlay--3Yl3B\",\"loginBlock\":\"src-components-Login-Login-module__loginBlock--3fGau\",\"avatarGuest\":\"src-components-Login-Login-module__avatarGuest--3P5xt\",\"title\":\"src-components-Login-Login-module__title--LllEd\",\"form\":\"src-components-Login-Login-module__form--3o8Na\",\"userName\":\"src-components-Login-Login-module__userName--3xa3z\",\"password\":\"src-components-Login-Login-module__password--2CQ2Z\",\"input\":\"src-components-Login-Login-module__input--1-WVL\",\"icon\":\"src-components-Login-Login-module__icon--2k-Up\",\"userIcon\":\"src-components-Login-Login-module__userIcon--13hvw\",\"passwordIcon\":\"src-components-Login-Login-module__passwordIcon--1bnT3\",\"iconPassword\":\"src-components-Login-Login-module__iconPassword--3k-2w\",\"submit\":\"src-components-Login-Login-module__submit--1VVNM\",\"rememberMe\":\"src-components-Login-Login-module__rememberMe--2CX0g\",\"elementRememberMe\":\"src-components-Login-Login-module__elementRememberMe--EX5v4\",\"rememberText\":\"src-components-Login-Login-module__rememberText--1bQTg\",\"formSummaryError\":\"src-components-Login-Login-module__formSummaryError--2flue\"};\n\n//# sourceURL=webpack:///./src/components/Login/Login.module.css?");

/***/ }),

/***/ "./src/components/common/FormsControls/FormsControls.js":
/*!**************************************************************!*\
  !*** ./src/components/common/FormsControls/FormsControls.js ***!
  \**************************************************************/
/*! exports provided: Textarea, Input, CreateField */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Textarea\", function() { return Textarea; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Input\", function() { return Input; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"CreateField\", function() { return CreateField; });\n/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ \"./node_modules/@babel/runtime/helpers/extends.js\");\n/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/objectWithoutProperties */ \"./node_modules/@babel/runtime/helpers/objectWithoutProperties.js\");\n/* harmony import */ var _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _FormsConttrols_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./FormsConttrols.module.css */ \"./src/components/common/FormsControls/FormsConttrols.module.css\");\n/* harmony import */ var _FormsConttrols_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_FormsConttrols_module_css__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _Login_Login_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../Login/Login.module.css */ \"./src/components/Login/Login.module.css\");\n/* harmony import */ var _Login_Login_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_Login_Login_module_css__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var redux_form__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! redux-form */ \"./node_modules/redux-form/es/index.js\");\n\n\n\n\n\n\n\nvar FormControl = function FormControl(_ref) {\n  var input = _ref.input,\n      _ref$meta = _ref.meta,\n      touched = _ref$meta.touched,\n      error = _ref$meta.error,\n      children = _ref.children;\n  var hasError = touched && error;\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(\"div\", {\n    className: _FormsConttrols_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.formControl + \" \" + (hasError && _FormsConttrols_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.error)\n  }, children);\n};\n\nvar Textarea = function Textarea(props) {\n  var input = props.input,\n      meta = props.meta,\n      child = props.child,\n      restProps = _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1___default()(props, [\"input\", \"meta\", \"child\"]);\n\n  var hasError = meta.touched && meta.error;\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(FormControl, props, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(\"textarea\", _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, input, restProps)), hasError && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(\"span\", null, meta.error));\n};\nvar Input = function Input(props) {\n  var input = props.input,\n      meta = props.meta,\n      child = props.child,\n      restProps = _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1___default()(props, [\"input\", \"meta\", \"child\"]);\n\n  var hasError = meta.touched && meta.error;\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(FormControl, props, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(\"input\", _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, input, restProps)));\n};\nvar CreateField = function CreateField(placeholder, name, validators, component, type, className) {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(redux_form__WEBPACK_IMPORTED_MODULE_5__[\"Field\"], {\n    component: component,\n    validate: [validators],\n    name: name,\n    className: _Login_Login_module_css__WEBPACK_IMPORTED_MODULE_4___default.a[className],\n    placeholder: placeholder,\n    type: type\n  });\n};\n\n//# sourceURL=webpack:///./src/components/common/FormsControls/FormsControls.js?");

/***/ }),

/***/ "./src/components/common/FormsControls/FormsConttrols.module.css":
/*!***********************************************************************!*\
  !*** ./src/components/common/FormsControls/FormsConttrols.module.css ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\nmodule.exports = {\"formControl\":\"src-components-common-FormsControls-FormsConttrols-module__formControl--1nMKh\",\"error\":\"src-components-common-FormsControls-FormsConttrols-module__error--IHRiO\"};\n\n//# sourceURL=webpack:///./src/components/common/FormsControls/FormsConttrols.module.css?");

/***/ }),

/***/ "./src/utils/validators/validators.js":
/*!********************************************!*\
  !*** ./src/utils/validators/validators.js ***!
  \********************************************/
/*! exports provided: required, unrequired, maxLengthCreator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"required\", function() { return required; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"unrequired\", function() { return unrequired; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"maxLengthCreator\", function() { return maxLengthCreator; });\nvar required = function required(value) {\n  if (value) return undefined;\n  return \"Field is required\";\n};\nvar unrequired = function unrequired(value) {\n  return value;\n};\nvar maxLength;\nvar maxLengthCreator = function maxLengthCreator(maxLength) {\n  return function (value) {\n    if (value.length > maxLength) return \"Max length should be \".concat(maxLength, \" symbols\");\n    return undefined;\n  };\n};\n\n//# sourceURL=webpack:///./src/utils/validators/validators.js?");

/***/ })

}]);