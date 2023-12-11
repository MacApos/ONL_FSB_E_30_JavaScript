"use strict";
self["webpackHotUpdatees6_async_await"](0,{

/***/ 23:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(29);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(31);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(33);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(24);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(25);





function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_2__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_2__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0,_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_1__["default"])(this, result); }; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
var Duck = /*#__PURE__*/function () {
  function Duck() {
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_3__["default"])(this, Duck);
    this.type = "zwykła";
  }
  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_4__["default"])(Duck, [{
    key: "quack",
    value: function quack() {
      console.log("kwa kwa");
    }
  }, {
    key: "swim",
    value: function swim() {
      console.log("kwa kwa");
    }
  }, {
    key: "print",
    value: function print() {
      console.log("Wygl\u0105da jak ".concat(this.type, " kaczka."));
    }
  }]);
  return Duck;
}();
var WildDuck = /*#__PURE__*/function (_Duck) {
  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_0__["default"])(WildDuck, _Duck);
  var _super = _createSuper(WildDuck);
  function WildDuck() {
    var _this;
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_3__["default"])(this, WildDuck);
    _this = _super.call(this);
    _this.type = "dzika";
    return _this;
  }
  return (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_4__["default"])(WildDuck);
}(Duck);
var duck = new Duck();
duck.print();

/***/ }),

/***/ 32:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _assertThisInitialized)
/* harmony export */ });
function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }
  return self;
}

/***/ }),

/***/ 33:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _getPrototypeOf)
/* harmony export */ });
function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

/***/ }),

/***/ 29:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _inherits)
/* harmony export */ });
/* harmony import */ var _setPrototypeOf_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(30);

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }
  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  Object.defineProperty(subClass, "prototype", {
    writable: false
  });
  if (superClass) (0,_setPrototypeOf_js__WEBPACK_IMPORTED_MODULE_0__["default"])(subClass, superClass);
}

/***/ }),

/***/ 31:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _possibleConstructorReturn)
/* harmony export */ });
/* harmony import */ var _typeof_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(27);
/* harmony import */ var _assertThisInitialized_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(32);


function _possibleConstructorReturn(self, call) {
  if (call && ((0,_typeof_js__WEBPACK_IMPORTED_MODULE_0__["default"])(call) === "object" || typeof call === "function")) {
    return call;
  } else if (call !== void 0) {
    throw new TypeError("Derived constructors may only return object or undefined");
  }
  return (0,_assertThisInitialized_js__WEBPACK_IMPORTED_MODULE_1__["default"])(self);
}

/***/ }),

/***/ 30:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _setPrototypeOf)
/* harmony export */ });
function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };
  return _setPrototypeOf(o, p);
}

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("3a2cccd78d3b99da2479")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC4zOGY1ZTUwZGE0OGU4MjlmZWMxNS5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFBTUEsSUFBSTtFQUNOLFNBQUFBLEtBQUEsRUFBYztJQUFBQyxpRkFBQSxPQUFBRCxJQUFBO0lBQ1YsSUFBSSxDQUFDRSxJQUFJLEdBQUcsUUFBUTtFQUN4QjtFQUFDQyw4RUFBQSxDQUFBSCxJQUFBO0lBQUFJLEdBQUE7SUFBQUMsS0FBQSxFQUVELFNBQUFDLE1BQUEsRUFBUTtNQUNKQyxPQUFPLENBQUNDLEdBQUcsQ0FBQyxTQUFTLENBQUM7SUFDMUI7RUFBQztJQUFBSixHQUFBO0lBQUFDLEtBQUEsRUFFRCxTQUFBSSxLQUFBLEVBQU87TUFDSEYsT0FBTyxDQUFDQyxHQUFHLENBQUMsU0FBUyxDQUFDO0lBQzFCO0VBQUM7SUFBQUosR0FBQTtJQUFBQyxLQUFBLEVBRUQsU0FBQUssTUFBQSxFQUFRO01BQ0pILE9BQU8sQ0FBQ0MsR0FBRyxxQkFBQUcsTUFBQSxDQUFnQixJQUFJLENBQUNULElBQUksYUFBVSxDQUFDO0lBQ25EO0VBQUM7RUFBQSxPQUFBRixJQUFBO0FBQUE7QUFBQSxJQUdDWSxRQUFRLDBCQUFBQyxLQUFBO0VBQUFDLDJFQUFBLENBQUFGLFFBQUEsRUFBQUMsS0FBQTtFQUFBLElBQUFFLE1BQUEsR0FBQUMsWUFBQSxDQUFBSixRQUFBO0VBQ1YsU0FBQUEsU0FBQSxFQUFjO0lBQUEsSUFBQUssS0FBQTtJQUFBaEIsaUZBQUEsT0FBQVcsUUFBQTtJQUNWSyxLQUFBLEdBQUFGLE1BQUEsQ0FBQUcsSUFBQTtJQUNBRCxLQUFBLENBQUtmLElBQUksR0FBRyxPQUFPO0lBQUEsT0FBQWUsS0FBQTtFQUN2QjtFQUFDLE9BQUFkLDhFQUFBLENBQUFTLFFBQUE7QUFBQSxFQUprQlosSUFBSTtBQU8zQixJQUFNbUIsSUFBSSxHQUFHLElBQUluQixJQUFJLENBQUMsQ0FBQztBQUN2Qm1CLElBQUksQ0FBQ1QsS0FBSyxDQUFDLENBQUM7Ozs7Ozs7Ozs7O0FDMUJHO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7QUNMZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ0xpRDtBQUNsQztBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNILGtCQUFrQiw4REFBYztBQUNoQzs7Ozs7Ozs7Ozs7OztBQ2hCa0M7QUFDNkI7QUFDaEQ7QUFDZixlQUFlLHNEQUFPO0FBQ3RCO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQSxTQUFTLHFFQUFxQjtBQUM5Qjs7Ozs7Ozs7Ozs7QUNUZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7VUNOQSIsInNvdXJjZXMiOlsid2VicGFjazovL2VzNi1hc3luYy1hd2FpdC8uLzAyX0R6aWVuXzItMy8wNV9PYmlla3Rvd29zYy8wMV9aYWRhbmllXzEvanMvYXBwLmpzIiwid2VicGFjazovL2VzNi1hc3luYy1hd2FpdC8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQuanMiLCJ3ZWJwYWNrOi8vZXM2LWFzeW5jLWF3YWl0Ly4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2dldFByb3RvdHlwZU9mLmpzIiwid2VicGFjazovL2VzNi1hc3luYy1hd2FpdC8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9pbmhlcml0cy5qcyIsIndlYnBhY2s6Ly9lczYtYXN5bmMtYXdhaXQvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vcG9zc2libGVDb25zdHJ1Y3RvclJldHVybi5qcyIsIndlYnBhY2s6Ly9lczYtYXN5bmMtYXdhaXQvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vc2V0UHJvdG90eXBlT2YuanMiLCJ3ZWJwYWNrOi8vZXM2LWFzeW5jLWF3YWl0L3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyJjbGFzcyBEdWNrIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy50eXBlID0gXCJ6d3lrxYJhXCI7XG4gICAgfVxuXG4gICAgcXVhY2soKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwia3dhIGt3YVwiKTtcbiAgICB9XG5cbiAgICBzd2ltKCkge1xuICAgICAgICBjb25zb2xlLmxvZyhcImt3YSBrd2FcIik7XG4gICAgfVxuXG4gICAgcHJpbnQoKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKGBXeWdsxIVkYSBqYWsgJHt0aGlzLnR5cGV9IGthY3prYS5gKTtcbiAgICB9XG59XG5cbmNsYXNzIFdpbGREdWNrIGV4dGVuZHMgRHVja3tcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy50eXBlID0gXCJkemlrYVwiXG4gICAgfVxufVxuXG5jb25zdCBkdWNrID0gbmV3IER1Y2soKTtcbmR1Y2sucHJpbnQoKTtcbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoc2VsZikge1xuICBpZiAoc2VsZiA9PT0gdm9pZCAwKSB7XG4gICAgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFwidGhpcyBoYXNuJ3QgYmVlbiBpbml0aWFsaXNlZCAtIHN1cGVyKCkgaGFzbid0IGJlZW4gY2FsbGVkXCIpO1xuICB9XG4gIHJldHVybiBzZWxmO1xufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF9nZXRQcm90b3R5cGVPZihvKSB7XG4gIF9nZXRQcm90b3R5cGVPZiA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5nZXRQcm90b3R5cGVPZi5iaW5kKCkgOiBmdW5jdGlvbiBfZ2V0UHJvdG90eXBlT2Yobykge1xuICAgIHJldHVybiBvLl9fcHJvdG9fXyB8fCBPYmplY3QuZ2V0UHJvdG90eXBlT2Yobyk7XG4gIH07XG4gIHJldHVybiBfZ2V0UHJvdG90eXBlT2Yobyk7XG59IiwiaW1wb3J0IHNldFByb3RvdHlwZU9mIGZyb20gXCIuL3NldFByb3RvdHlwZU9mLmpzXCI7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfaW5oZXJpdHMoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHtcbiAgaWYgKHR5cGVvZiBzdXBlckNsYXNzICE9PSBcImZ1bmN0aW9uXCIgJiYgc3VwZXJDbGFzcyAhPT0gbnVsbCkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvblwiKTtcbiAgfVxuICBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MgJiYgc3VwZXJDbGFzcy5wcm90b3R5cGUsIHtcbiAgICBjb25zdHJ1Y3Rvcjoge1xuICAgICAgdmFsdWU6IHN1YkNsYXNzLFxuICAgICAgd3JpdGFibGU6IHRydWUsXG4gICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9XG4gIH0pO1xuICBPYmplY3QuZGVmaW5lUHJvcGVydHkoc3ViQ2xhc3MsIFwicHJvdG90eXBlXCIsIHtcbiAgICB3cml0YWJsZTogZmFsc2VcbiAgfSk7XG4gIGlmIChzdXBlckNsYXNzKSBzZXRQcm90b3R5cGVPZihzdWJDbGFzcywgc3VwZXJDbGFzcyk7XG59IiwiaW1wb3J0IF90eXBlb2YgZnJvbSBcIi4vdHlwZW9mLmpzXCI7XG5pbXBvcnQgYXNzZXJ0VGhpc0luaXRpYWxpemVkIGZyb20gXCIuL2Fzc2VydFRoaXNJbml0aWFsaXplZC5qc1wiO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4oc2VsZiwgY2FsbCkge1xuICBpZiAoY2FsbCAmJiAoX3R5cGVvZihjYWxsKSA9PT0gXCJvYmplY3RcIiB8fCB0eXBlb2YgY2FsbCA9PT0gXCJmdW5jdGlvblwiKSkge1xuICAgIHJldHVybiBjYWxsO1xuICB9IGVsc2UgaWYgKGNhbGwgIT09IHZvaWQgMCkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJEZXJpdmVkIGNvbnN0cnVjdG9ycyBtYXkgb25seSByZXR1cm4gb2JqZWN0IG9yIHVuZGVmaW5lZFwiKTtcbiAgfVxuICByZXR1cm4gYXNzZXJ0VGhpc0luaXRpYWxpemVkKHNlbGYpO1xufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF9zZXRQcm90b3R5cGVPZihvLCBwKSB7XG4gIF9zZXRQcm90b3R5cGVPZiA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5zZXRQcm90b3R5cGVPZi5iaW5kKCkgOiBmdW5jdGlvbiBfc2V0UHJvdG90eXBlT2YobywgcCkge1xuICAgIG8uX19wcm90b19fID0gcDtcbiAgICByZXR1cm4gbztcbiAgfTtcbiAgcmV0dXJuIF9zZXRQcm90b3R5cGVPZihvLCBwKTtcbn0iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCIzYTJjY2NkNzhkM2I5OWRhMjQ3OVwiKSJdLCJuYW1lcyI6WyJEdWNrIiwiX2NsYXNzQ2FsbENoZWNrIiwidHlwZSIsIl9jcmVhdGVDbGFzcyIsImtleSIsInZhbHVlIiwicXVhY2siLCJjb25zb2xlIiwibG9nIiwic3dpbSIsInByaW50IiwiY29uY2F0IiwiV2lsZER1Y2siLCJfRHVjayIsIl9pbmhlcml0cyIsIl9zdXBlciIsIl9jcmVhdGVTdXBlciIsIl90aGlzIiwiY2FsbCIsImR1Y2siXSwic291cmNlUm9vdCI6IiJ9