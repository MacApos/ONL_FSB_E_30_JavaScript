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
  return acu + curr;
}, 10);
// const sumWithInitial = array1.reduce((accumulator, currentValue) => accumulator + currentValue, 0,);
console.log(number);

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("934add38c34873937f3c")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC44YjY1ZDgwMTMzNTg4ZGNmOTE3MC5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsSUFBTUEsT0FBTyxHQUFHLENBQUMsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQztBQUNsQyxJQUFNQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUM7QUFFM0JDLEtBQUssQ0FBQ0MsU0FBUyxDQUFDQyxZQUFZLEdBQUcsVUFBVUMsRUFBRSxFQUFFQyxJQUFJLEVBQUU7RUFDL0MsSUFBSUMsV0FBVyxHQUFHLE9BQU9ELElBQUksS0FBSyxXQUFXLEdBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQyxHQUFHQSxJQUFJO0VBQzlELElBQUlFLFlBQVksR0FBRyxPQUFPRixJQUFJLEtBQUssV0FBVyxHQUFHLENBQUMsR0FBRyxDQUFDO0VBQ3RELElBQUlHLE1BQU07RUFFVixLQUFLLElBQUlDLENBQUMsR0FBR0YsWUFBWSxFQUFFRSxDQUFDLEdBQUcsSUFBSSxDQUFDQyxNQUFNLEVBQUVELENBQUMsRUFBRSxFQUFFO0lBQzdDRCxNQUFNLEdBQUdKLEVBQUUsQ0FBQ0UsV0FBVyxFQUFFLElBQUksQ0FBQ0csQ0FBQyxDQUFDLENBQUM7SUFDakNILFdBQVcsR0FBR0UsTUFBTTtFQUN4QjtFQUNBLE9BQU9BLE1BQU07QUFDakIsQ0FBQztBQUVELElBQUlHLE1BQU0sR0FBR1osT0FBTyxDQUFDSSxZQUFZLENBQUMsVUFBQ1MsR0FBRyxFQUFFQyxJQUFJO0VBQUEsT0FBS0QsR0FBRyxHQUFHQyxJQUFJO0FBQUEsR0FBRSxFQUFFLENBQUM7QUFDaEU7QUFDQUMsT0FBTyxDQUFDQyxHQUFHLENBQUNKLE1BQU0sQ0FBQzs7Ozs7Ozs7VUNqQm5CIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZXM2LWFzeW5jLWF3YWl0Ly4vMDFfRHppZW5fMS8wMV9aYWRhbmlhLzAxX1phZGFuaWVfMS9qcy9hcHAuanMiLCJ3ZWJwYWNrOi8vZXM2LWFzeW5jLWF3YWl0L3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBudW1iZXJzID0gWzQsIDEyLCAyMywgNzYsIDRdO1xuY29uc3QgYXJyYXkxID0gWzEsIDIsIDMsIDRdO1xuXG5BcnJheS5wcm90b3R5cGUuY3VzdG9tUmVkdWNlID0gZnVuY3Rpb24gKGZuLCBpbml0KSB7XG4gICAgbGV0IGFjY3VtdWxhdG9yID0gdHlwZW9mIGluaXQgPT09IFwidW5kZWZpbmVkXCIgPyB0aGlzWzBdIDogaW5pdDtcbiAgICBsZXQgaW5pdGlhbEluZGV4ID0gdHlwZW9mIGluaXQgPT09IFwidW5kZWZpbmVkXCIgPyAxIDogMDtcbiAgICBsZXQgcmVzdWx0O1xuXG4gICAgZm9yIChsZXQgaSA9IGluaXRpYWxJbmRleDsgaSA8IHRoaXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgcmVzdWx0ID0gZm4oYWNjdW11bGF0b3IsIHRoaXNbaV0pXG4gICAgICAgIGFjY3VtdWxhdG9yID0gcmVzdWx0O1xuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0O1xufVxuXG5sZXQgbnVtYmVyID0gbnVtYmVycy5jdXN0b21SZWR1Y2UoKGFjdSwgY3VycikgPT4gYWN1ICsgY3VyciwgMTApO1xuLy8gY29uc3Qgc3VtV2l0aEluaXRpYWwgPSBhcnJheTEucmVkdWNlKChhY2N1bXVsYXRvciwgY3VycmVudFZhbHVlKSA9PiBhY2N1bXVsYXRvciArIGN1cnJlbnRWYWx1ZSwgMCwpO1xuY29uc29sZS5sb2cobnVtYmVyKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCI5MzRhZGQzOGMzNDg3MzkzN2YzY1wiKSJdLCJuYW1lcyI6WyJudW1iZXJzIiwiYXJyYXkxIiwiQXJyYXkiLCJwcm90b3R5cGUiLCJjdXN0b21SZWR1Y2UiLCJmbiIsImluaXQiLCJhY2N1bXVsYXRvciIsImluaXRpYWxJbmRleCIsInJlc3VsdCIsImkiLCJsZW5ndGgiLCJudW1iZXIiLCJhY3UiLCJjdXJyIiwiY29uc29sZSIsImxvZyJdLCJzb3VyY2VSb290IjoiIn0=