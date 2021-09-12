webpackHotUpdate("app",{

/***/ "./src/plugins/axios.js":
/*!******************************!*\
  !*** ./src/plugins/axios.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ \"./node_modules/core-js/modules/es.object.to-string.js\");\n/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.esm.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\n\n // Full config:  https://github.com/axios/axios#request-config\n// axios.defaults.baseURL = process.env.baseURL || process.env.apiUrl || '';\n// axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;\n// axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';\n\nvar config = {// baseURL: process.env.baseURL || process.env.apiUrl || \"\"\n  // timeout: 60 * 1000, // Timeout\n  // withCredentials: true, // Check cross-site Access-Control\n};\n\nvar _axios = axios__WEBPACK_IMPORTED_MODULE_2___default.a.create(config);\n\n_axios.interceptors.request.use(function (config) {\n  // Do something before request is sent\n  return config;\n}, function (error) {\n  // Do something with request error\n  return Promise.reject(error);\n}); // Add a response interceptor\n\n\n_axios.interceptors.response.use(function (response) {\n  // Do something with response data\n  return response;\n}, function (error) {\n  // Do something with response error\n  return Promise.reject(error);\n});\n\nPlugin.install = function (Vue) {\n  Vue.axios = _axios;\n  window.axios = _axios;\n  Object.defineProperties(Vue.prototype, {\n    axios: {\n      get: function get() {\n        return _axios;\n      }\n    },\n    $axios: {\n      get: function get() {\n        return _axios;\n      }\n    }\n  });\n};\n\nvue__WEBPACK_IMPORTED_MODULE_1__[\"default\"].use(Plugin);\n/* harmony default export */ __webpack_exports__[\"default\"] = (Plugin);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGx1Z2lucy9heGlvcy5qcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9wbHVnaW5zL2F4aW9zLmpzP2JlM2IiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBWdWUgZnJvbSAndnVlJztcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcblxuLy8gRnVsbCBjb25maWc6ICBodHRwczovL2dpdGh1Yi5jb20vYXhpb3MvYXhpb3MjcmVxdWVzdC1jb25maWdcbi8vIGF4aW9zLmRlZmF1bHRzLmJhc2VVUkwgPSBwcm9jZXNzLmVudi5iYXNlVVJMIHx8IHByb2Nlc3MuZW52LmFwaVVybCB8fCAnJztcbi8vIGF4aW9zLmRlZmF1bHRzLmhlYWRlcnMuY29tbW9uWydBdXRob3JpemF0aW9uJ10gPSBBVVRIX1RPS0VOO1xuLy8gYXhpb3MuZGVmYXVsdHMuaGVhZGVycy5wb3N0WydDb250ZW50LVR5cGUnXSA9ICdhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWQnO1xuXG5sZXQgY29uZmlnID0ge1xuICAvLyBiYXNlVVJMOiBwcm9jZXNzLmVudi5iYXNlVVJMIHx8IHByb2Nlc3MuZW52LmFwaVVybCB8fCBcIlwiXG4gIC8vIHRpbWVvdXQ6IDYwICogMTAwMCwgLy8gVGltZW91dFxuICAvLyB3aXRoQ3JlZGVudGlhbHM6IHRydWUsIC8vIENoZWNrIGNyb3NzLXNpdGUgQWNjZXNzLUNvbnRyb2xcbn07XG5cbmNvbnN0IF9heGlvcyA9IGF4aW9zLmNyZWF0ZShjb25maWcpO1xuXG5fYXhpb3MuaW50ZXJjZXB0b3JzLnJlcXVlc3QudXNlKFxuICBmdW5jdGlvbihjb25maWcpIHtcbiAgICAvLyBEbyBzb21ldGhpbmcgYmVmb3JlIHJlcXVlc3QgaXMgc2VudFxuICAgIHJldHVybiBjb25maWc7XG4gIH0sXG4gIGZ1bmN0aW9uKGVycm9yKSB7XG4gICAgLy8gRG8gc29tZXRoaW5nIHdpdGggcmVxdWVzdCBlcnJvclxuICAgIHJldHVybiBQcm9taXNlLnJlamVjdChlcnJvcik7XG4gIH1cbik7XG5cbi8vIEFkZCBhIHJlc3BvbnNlIGludGVyY2VwdG9yXG5fYXhpb3MuaW50ZXJjZXB0b3JzLnJlc3BvbnNlLnVzZShcbiAgZnVuY3Rpb24ocmVzcG9uc2UpIHtcbiAgICAvLyBEbyBzb21ldGhpbmcgd2l0aCByZXNwb25zZSBkYXRhXG4gICAgcmV0dXJuIHJlc3BvbnNlO1xuICB9LFxuICBmdW5jdGlvbihlcnJvcikge1xuICAgIC8vIERvIHNvbWV0aGluZyB3aXRoIHJlc3BvbnNlIGVycm9yXG4gICAgcmV0dXJuIFByb21pc2UucmVqZWN0KGVycm9yKTtcbiAgfVxuKTtcblxuUGx1Z2luLmluc3RhbGwgPSBmdW5jdGlvbihWdWUpIHtcbiAgVnVlLmF4aW9zID0gX2F4aW9zO1xuICB3aW5kb3cuYXhpb3MgPSBfYXhpb3M7XG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKFZ1ZS5wcm90b3R5cGUsIHtcbiAgICBheGlvczoge1xuICAgICAgZ2V0KCkge1xuICAgICAgICByZXR1cm4gX2F4aW9zO1xuICAgICAgfVxuICAgIH0sXG4gICAgJGF4aW9zOiB7XG4gICAgICBnZXQoKSB7XG4gICAgICAgIHJldHVybiBfYXhpb3M7XG4gICAgICB9XG4gICAgfSxcbiAgfSk7XG59O1xuXG5WdWUudXNlKFBsdWdpbilcblxuZXhwb3J0IGRlZmF1bHQgUGx1Z2luO1xuIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBOztBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUhBO0FBQ0E7QUFLQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFOQTtBQVlBO0FBQ0E7QUFDQTtBQUVBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/plugins/axios.js\n");

/***/ })

})