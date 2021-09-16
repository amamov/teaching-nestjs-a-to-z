exports.id = 538;
exports.ids = [538];
exports.modules = {

/***/ 8231:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ layouts_AppLayout)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(9297);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(6731);
var router_default = /*#__PURE__*/__webpack_require__.n(router_);
// EXTERNAL MODULE: external "antd"
var external_antd_ = __webpack_require__(953);
// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(9914);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);
// EXTERNAL MODULE: ./utils/store.tsx
var store = __webpack_require__(9380);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
// EXTERNAL MODULE: ./hooks/useInput.ts
var useInput = __webpack_require__(8981);
// EXTERNAL MODULE: external "axios"
var external_axios_ = __webpack_require__(2376);
var external_axios_default = /*#__PURE__*/__webpack_require__.n(external_axios_);
// EXTERNAL MODULE: ./utils/api.ts
var api = __webpack_require__(3);
;// CONCATENATED MODULE: ./components/layouts/AccountForm.tsx



function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }









const FormWrapper = external_styled_components_default()(external_antd_.Form).withConfig({
  displayName: "AccountForm__FormWrapper",
  componentId: "sc-3tz9l9-0"
})(["padding:1rem;"]);
const ButtonWrapper = external_styled_components_default().div.withConfig({
  displayName: "AccountForm__ButtonWrapper",
  componentId: "sc-3tz9l9-1"
})(["margin-top:0.8rem;"]);
const ZButton = external_styled_components_default()(external_antd_.Button).withConfig({
  displayName: "AccountForm__ZButton",
  componentId: "sc-3tz9l9-2"
})(["background-color:rgb(228,35,76);border-color:rgb(228,35,76);font-weight:500;"]);

const LoginForm = () => {
  const [email, handleEmail] = (0,useInput/* default */.Z)("");
  const [password, handlePassword] = (0,useInput/* default */.Z)("");
  const {
    0: message,
    1: setMessage
  } = (0,external_react_.useState)("");
  const {
    0: isLogging,
    1: setIsLogging
  } = (0,external_react_.useState)(false);
  const {
    me,
    login,
    logout
  } = (0,store/* useAuth */.a)();
  const handleSubmit = (0,external_react_.useCallback)(async () => {
    //* 로그인
    try {
      const response = await external_axios_default().post(`${api/* default.cats */.Z.cats}/login`, {
        email,
        password
      }, {
        withCredentials: true
      });
      console.log(response.data);
      const getReponse = await external_axios_default().get(`${api/* default.cats */.Z.cats}`, {
        withCredentials: true,
        headers: {
          Authorization: "Bearer " + response.data.data.token
        }
      });
      login(_objectSpread(_objectSpread({}, getReponse.data.data), {}, {
        token: response.data.data.token
      }));
    } catch (error) {
      if (error.response) {
        console.log(error.response);
        alert(error.response.data.message);
      } else {
        alert(error.message);
      }
    }
  }, [email, password]);
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(FormWrapper, {
    onFinish: handleSubmit,
    children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      children: [/*#__PURE__*/jsx_runtime_.jsx("label", {
        htmlFor: "email",
        children: "Cat Email"
      }), /*#__PURE__*/jsx_runtime_.jsx("br", {}), /*#__PURE__*/jsx_runtime_.jsx(external_antd_.Input, {
        name: "email",
        value: email,
        onChange: handleEmail,
        required: true
      })]
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      children: [/*#__PURE__*/jsx_runtime_.jsx("label", {
        htmlFor: "password",
        children: "Cat Password"
      }), /*#__PURE__*/jsx_runtime_.jsx("br", {}), /*#__PURE__*/jsx_runtime_.jsx(external_antd_.Input, {
        name: "password",
        type: "password",
        value: password,
        onChange: handlePassword,
        required: true
      })]
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(ButtonWrapper, {
      children: [/*#__PURE__*/jsx_runtime_.jsx(ZButton, {
        type: "primary",
        htmlType: "submit",
        loading: isLogging,
        children: "Login"
      }), /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
        href: "/signup",
        children: /*#__PURE__*/jsx_runtime_.jsx("a", {
          children: /*#__PURE__*/jsx_runtime_.jsx(external_antd_.Button, {
            children: "Sign up"
          })
        })
      })]
    }), /*#__PURE__*/jsx_runtime_.jsx("div", {
      children: /*#__PURE__*/jsx_runtime_.jsx("span", {
        children: message
      })
    })]
  });
};

/* harmony default export */ const AccountForm = (LoginForm);
;// CONCATENATED MODULE: ./components/layouts/AppLayout.tsx




function AppLayout_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function AppLayout_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { AppLayout_ownKeys(Object(source), true).forEach(function (key) { AppLayout_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { AppLayout_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function AppLayout_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }









const {
  Header,
  Content,
  Footer,
  Sider
} = external_antd_.Layout;
const {
  Meta
} = external_antd_.Card;
const ZLayout = external_styled_components_default()(external_antd_.Layout).withConfig({
  displayName: "AppLayout__ZLayout",
  componentId: "sc-c58rb2-0"
})(["min-height:100vh;"]);
const ZHeader = external_styled_components_default()(Header).withConfig({
  displayName: "AppLayout__ZHeader",
  componentId: "sc-c58rb2-1"
})(["padding:0;display:flex;justify-content:center;align-items:center;color:white;font-size:2.5rem;@media only screen and (max-width:768px){font-size:2rem;}@media only screen and (max-width:390px){font-size:1.2rem;}"]);
const ZSider = external_styled_components_default()(Sider).withConfig({
  displayName: "AppLayout__ZSider",
  componentId: "sc-c58rb2-2"
})(["text-align:center;"]);
const ZCard = external_styled_components_default()(external_antd_.Card).withConfig({
  displayName: "AppLayout__ZCard",
  componentId: "sc-c58rb2-3"
})(["width:inherit;"]);
const XLoading = external_styled_components_default().div.withConfig({
  displayName: "AppLayout__XLoading",
  componentId: "sc-c58rb2-4"
})(["color:white;font-size:1.3rem;font-weight:700;"]);
const ZFooter = external_styled_components_default()(Footer).withConfig({
  displayName: "AppLayout__ZFooter",
  componentId: "sc-c58rb2-5"
})(["text-align:center;@media only screen and (max-width:768px){font-size:0.7rem;}@media only screen and (max-width:390px){display:none;}"]);
const AppLayout_ZButton = external_styled_components_default()(external_antd_.Button).withConfig({
  displayName: "AppLayout__ZButton",
  componentId: "sc-c58rb2-6"
})(["background-color:rgb(228,35,76);border-color:rgb(228,35,76);color:rgb(0,22,40);font-weight:500;@media only screen and (max-width:390px){position:relative;left:auto;bottom:auto;margin-top:150px;}position:absolute;left:30%;bottom:30px;"]);
const XImageBox = external_styled_components_default().div.withConfig({
  displayName: "AppLayout__XImageBox",
  componentId: "sc-c58rb2-7"
})(["margin-top:10px;"]);

const AppLayout = ({
  children,
  isSignup = false
}) => {
  const {
    0: collapsed,
    1: setCollapsed
  } = (0,external_react_.useState)(true);
  const {
    0: broken,
    1: setBroken
  } = (0,external_react_.useState)(false);
  const {
    me,
    login,
    logout
  } = (0,store/* useAuth */.a)(); //TODO

  const {
    0: isUpdated,
    1: setIsUpdated
  } = (0,external_react_.useState)(true);
  const {
    0: trigger,
    1: setTrigger
  } = (0,external_react_.useState)(false);
  const imageInput = (0,external_react_.useRef)();
  const handleLogOutClink = (0,external_react_.useCallback)(async () => {
    logout();
  }, []);
  (0,external_react_.useEffect)(() => {
    if (me && isSignup) {
      router_default().replace("/");
    }
  }, []);
  (0,external_react_.useEffect)(() => {
    setIsUpdated(true);
  }, [trigger]);
  const handleCollapse = (0,external_react_.useCallback)((collapsed, type) => {
    setCollapsed(collapsed);
  }, [collapsed]);
  const handleBroken = (0,external_react_.useCallback)(broken => {
    setBroken(broken);
  }, [broken]);
  const handleImgChange = (0,external_react_.useCallback)(async event => {
    //* 이미지 추가
    const files = event.target.files;
    const form = new FormData();
    Array.from(files).forEach(file => {
      form.append("image", file);
    });
    console.log(form.getAll("image"));

    try {
      setIsUpdated(false);
      const newCatResponse = await external_axios_default().post(`${api/* default.cats */.Z.cats}/upload`, form, {
        withCredentials: true,
        headers: {
          Authorization: "Bearer " + me.token
        }
      });
      console.log(newCatResponse);
      login(AppLayout_objectSpread(AppLayout_objectSpread({}, newCatResponse.data.data), {}, {
        token: me.token
      }));
      setTrigger(preState => !preState);
    } catch (error) {
      if (error.response) {
        console.log(error.response);
        alert(error.response.data.message);
      } else {
        alert(error.message);
      }
    }
  }, [me, isUpdated, trigger]);
  const handleImgUpload = (0,external_react_.useCallback)(() => {
    if (imageInput.current !== undefined) {
      imageInput.current.click();
    }
  }, [imageInput.current]);
  return /*#__PURE__*/jsx_runtime_.jsx(jsx_runtime_.Fragment, {
    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(ZLayout, {
      children: [me && /*#__PURE__*/(0,jsx_runtime_.jsxs)(ZSider, {
        breakpoint: "lg",
        collapsedWidth: "0",
        onBreakpoint: handleBroken,
        onCollapse: handleCollapse,
        children: [/*#__PURE__*/jsx_runtime_.jsx(ZCard, {
          hoverable: true,
          cover: /*#__PURE__*/jsx_runtime_.jsx(external_antd_.Image, {
            alt: "cat",
            src: me.imgUrl
          }),
          children: /*#__PURE__*/jsx_runtime_.jsx(Meta, {
            title: me.email,
            description: me.name
          })
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(XImageBox, {
          children: [/*#__PURE__*/jsx_runtime_.jsx("input", {
            type: "file",
            name: "image",
            multiple: true,
            hidden: true,
            ref: imageInput,
            onChange: handleImgChange
          }), !isUpdated && /*#__PURE__*/jsx_runtime_.jsx(XLoading, {
            children: "\uC774\uBBF8\uC9C0 \uBCC0\uACBD\uC911..."
          }), /*#__PURE__*/jsx_runtime_.jsx(external_antd_.Button, {
            onClick: handleImgUpload,
            children: "Image Update"
          })]
        }), /*#__PURE__*/jsx_runtime_.jsx(AppLayout_ZButton, {
          type: "primary",
          size: "large",
          onClick: handleLogOutClink,
          children: "Logout"
        })]
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(external_antd_.Layout, {
        children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)(ZHeader, {
          style: {
            display: collapsed || !me ? "flex" : !collapsed && broken ? "none" : "flex"
          },
          children: [/*#__PURE__*/jsx_runtime_.jsx("img", {
            width: 43,
            height: "auto",
            src: "/nestjs.svg"
          }), /*#__PURE__*/jsx_runtime_.jsx("span", {
            style: {
              marginLeft: 10
            },
            children: "Cat Information Community"
          })]
        }), /*#__PURE__*/jsx_runtime_.jsx(Content, {
          style: {
            margin: "45px 16px 0"
          },
          children: me ? /*#__PURE__*/jsx_runtime_.jsx(jsx_runtime_.Fragment, {
            children: children
          }) : isSignup ? /*#__PURE__*/jsx_runtime_.jsx(jsx_runtime_.Fragment, {
            children: children
          }) : /*#__PURE__*/jsx_runtime_.jsx(AccountForm, {})
        }), /*#__PURE__*/jsx_runtime_.jsx(ZFooter, {
          children: "C.I.C \xA92021 Created by Yoon Sang Seok"
        })]
      })]
    })
  });
};

/* harmony default export */ const layouts_AppLayout = (AppLayout);

/***/ }),

/***/ 8981:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


function useInput(initialValue) {
  const {
    0: value,
    1: setValue
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(initialValue);
  const handleChange = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(({
    target: {
      value
    }
  }) => {
    setValue(value);
  }, []);
  return [value, handleChange, setValue];
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useInput);

/***/ }),

/***/ 3:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const apiHost = "http://localhost:8000" || 0;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  cats: `${apiHost}/cats`
});

/***/ }),

/***/ 2431:
/***/ (() => {

/* (ignored) */

/***/ })

};
;