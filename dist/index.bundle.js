"use strict";
(self["webpackChunkexample_heroku_pro"] = self["webpackChunkexample_heroku_pro"] || []).push([["index"],{

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);

// import printMe from './print.js';

function component() {
    const element = document.createElement('div');
    const btn = document.createElement('button');

    // Lodash, currently included via a script, is required for this line to work
    // Lodash, now imported by this script
    element.innerHTML = lodash__WEBPACK_IMPORTED_MODULE_0___default().join(['Hello world', 'webpack'], ' ');

    btn.innerHTML = 'Click me and check the console Mea  amor!';
    // btn.onclick = printMe;
    element.appendChild(btn);

    return element;
}

document.body.appendChild(component());

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["shared"], () => (__webpack_exec__("./src/index.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUF1QjtBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLGtEQUFNO0FBQzlCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL2V4YW1wbGUtaGVyb2t1LXByby8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgXyBmcm9tICdsb2Rhc2gnO1xyXG4vLyBpbXBvcnQgcHJpbnRNZSBmcm9tICcuL3ByaW50LmpzJztcclxuXHJcbmZ1bmN0aW9uIGNvbXBvbmVudCgpIHtcclxuICAgIGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGNvbnN0IGJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xyXG5cclxuICAgIC8vIExvZGFzaCwgY3VycmVudGx5IGluY2x1ZGVkIHZpYSBhIHNjcmlwdCwgaXMgcmVxdWlyZWQgZm9yIHRoaXMgbGluZSB0byB3b3JrXHJcbiAgICAvLyBMb2Rhc2gsIG5vdyBpbXBvcnRlZCBieSB0aGlzIHNjcmlwdFxyXG4gICAgZWxlbWVudC5pbm5lckhUTUwgPSBfLmpvaW4oWydIZWxsbyB3b3JsZCcsICd3ZWJwYWNrJ10sICcgJyk7XHJcblxyXG4gICAgYnRuLmlubmVySFRNTCA9ICdDbGljayBtZSBhbmQgY2hlY2sgdGhlIGNvbnNvbGUgTWVhICBhbW9yISc7XHJcbiAgICAvLyBidG4ub25jbGljayA9IHByaW50TWU7XHJcbiAgICBlbGVtZW50LmFwcGVuZENoaWxkKGJ0bik7XHJcblxyXG4gICAgcmV0dXJuIGVsZW1lbnQ7XHJcbn1cclxuXHJcbmRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoY29tcG9uZW50KCkpOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==