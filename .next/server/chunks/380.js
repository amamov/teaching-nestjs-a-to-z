"use strict";
exports.id = 380;
exports.ids = [380];
exports.modules = {

/***/ 9380:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "a": () => (/* binding */ useAuth),
/* harmony export */   "H": () => (/* binding */ AuthProvider)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


 // * 1. Create context type

// * 2. Create context default values
const contextDefaultValues = {
  me: null,
  login: me => {},
  logout: () => {}
}; // * 3. Define createContext and create custom useContext

const Context = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)(contextDefaultValues);
const useAuth = () => {
  return (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(Context);
}; // * 4. Create a provider function

const AuthProvider = ({
  children
}) => {
  const {
    0: me,
    1: setMe
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);

  const login = me => {
    setMe(me);
  };

  const logout = () => {
    setMe(null);
  };

  const value = {
    me,
    login,
    logout
  };
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Context.Provider, {
      value: value,
      children: children
    })
  });
}; // * 5. wrapping _app.tsx
// function RootApp({ Component, pageProps }) {
//     return (
//         <>
//             <AuthProvider>
//                 <Component {...pageProps} />
//             </AuthProvider>
//         </>
//     );
// }
// * 6. using context
// const { me, login, logout } = useAuth();

/***/ })

};
;