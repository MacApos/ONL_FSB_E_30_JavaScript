self["webpackHotUpdatees6_async_await"](0,{

/***/ 23:
/***/ (() => {

var numbers = [4, 12, 23, 76, 4];
var array1 = [1, 2, 3, 4];
Array.prototype.customReduce = function (fn, init) {
  var accumulator = typeof init === "undefined" ? this[0] : init;
  var initialIndex = typeof init === "undefined" ? 1 : 0;
  var result;
  for (var i = initialIndex; i < this.length; i++) {
    result = fn(accumulator, this[i]);
    accumulator = result;
  }
  return result;
};
var number = numbers.customReduce(function (acu, curr) {
  return acu * curr;
});
// const sumWithInitial = array1.reduce((accumulator, currentValue) => accumulator + currentValue, 0,);
console.log(number);

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("8ba2e8fbff1749db55b9")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC45MzRhZGQzOGMzNDg3MzkzN2YzYy5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsSUFBTUEsT0FBTyxHQUFHLENBQUMsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQztBQUNsQyxJQUFNQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUM7QUFFM0JDLEtBQUssQ0FBQ0MsU0FBUyxDQUFDQyxZQUFZLEdBQUcsVUFBVUMsRUFBRSxFQUFFQyxJQUFJLEVBQUU7RUFDL0MsSUFBSUMsV0FBVyxHQUFHLE9BQU9ELElBQUksS0FBSyxXQUFXLEdBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQyxHQUFHQSxJQUFJO0VBQzlELElBQUlFLFlBQVksR0FBRyxPQUFPRixJQUFJLEtBQUssV0FBVyxHQUFHLENBQUMsR0FBRyxDQUFDO0VBQ3RELElBQUlHLE1BQU07RUFFVixLQUFLLElBQUlDLENBQUMsR0FBR0YsWUFBWSxFQUFFRSxDQUFDLEdBQUcsSUFBSSxDQUFDQyxNQUFNLEVBQUVELENBQUMsRUFBRSxFQUFFO0lBQzdDRCxNQUFNLEdBQUdKLEVBQUUsQ0FBQ0UsV0FBVyxFQUFFLElBQUksQ0FBQ0csQ0FBQyxDQUFDLENBQUM7SUFDakNILFdBQVcsR0FBR0UsTUFBTTtFQUN4QjtFQUNBLE9BQU9BLE1BQU07QUFDakIsQ0FBQztBQUVELElBQUlHLE1BQU0sR0FBR1osT0FBTyxDQUFDSSxZQUFZLENBQUMsVUFBQ1MsR0FBRyxFQUFFQyxJQUFJO0VBQUEsT0FBS0QsR0FBRyxHQUFHQyxJQUFJO0FBQUEsRUFBQztBQUM1RDtBQUNBQyxPQUFPLENBQUNDLEdBQUcsQ0FBQ0osTUFBTSxDQUFDOzs7Ozs7OztVQ2pCbkIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9lczYtYXN5bmMtYXdhaXQvLi8wMV9Eemllbl8xLzAxX1phZGFuaWEvMDFfWmFkYW5pZV8xL2pzL2FwcC5qcyIsIndlYnBhY2s6Ly9lczYtYXN5bmMtYXdhaXQvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IG51bWJlcnMgPSBbNCwgMTIsIDIzLCA3NiwgNF07XG5jb25zdCBhcnJheTEgPSBbMSwgMiwgMywgNF07XG5cbkFycmF5LnByb3RvdHlwZS5jdXN0b21SZWR1Y2UgPSBmdW5jdGlvbiAoZm4sIGluaXQpIHtcbiAgICBsZXQgYWNjdW11bGF0b3IgPSB0eXBlb2YgaW5pdCA9PT0gXCJ1bmRlZmluZWRcIiA/IHRoaXNbMF0gOiBpbml0O1xuICAgIGxldCBpbml0aWFsSW5kZXggPSB0eXBlb2YgaW5pdCA9PT0gXCJ1bmRlZmluZWRcIiA/IDEgOiAwO1xuICAgIGxldCByZXN1bHQ7XG5cbiAgICBmb3IgKGxldCBpID0gaW5pdGlhbEluZGV4OyBpIDwgdGhpcy5sZW5ndGg7IGkrKykge1xuICAgICAgICByZXN1bHQgPSBmbihhY2N1bXVsYXRvciwgdGhpc1tpXSlcbiAgICAgICAgYWNjdW11bGF0b3IgPSByZXN1bHQ7XG4gICAgfVxuICAgIHJldHVybiByZXN1bHQ7XG59XG5cbmxldCBudW1iZXIgPSBudW1iZXJzLmN1c3RvbVJlZHVjZSgoYWN1LCBjdXJyKSA9PiBhY3UgKiBjdXJyKTtcbi8vIGNvbnN0IHN1bVdpdGhJbml0aWFsID0gYXJyYXkxLnJlZHVjZSgoYWNjdW11bGF0b3IsIGN1cnJlbnRWYWx1ZSkgPT4gYWNjdW11bGF0b3IgKyBjdXJyZW50VmFsdWUsIDAsKTtcbmNvbnNvbGUubG9nKG51bWJlcik7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiOGJhMmU4ZmJmZjE3NDlkYjU1YjlcIikiXSwibmFtZXMiOlsibnVtYmVycyIsImFycmF5MSIsIkFycmF5IiwicHJvdG90eXBlIiwiY3VzdG9tUmVkdWNlIiwiZm4iLCJpbml0IiwiYWNjdW11bGF0b3IiLCJpbml0aWFsSW5kZXgiLCJyZXN1bHQiLCJpIiwibGVuZ3RoIiwibnVtYmVyIiwiYWN1IiwiY3VyciIsImNvbnNvbGUiLCJsb2ciXSwic291cmNlUm9vdCI6IiJ9