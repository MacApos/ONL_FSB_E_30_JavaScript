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
  }
  return result;
};
var number = numbers.customReduce(function (acu, curr) {
  return acu + curr;
});
// const sumWithInitial = array1.reduce((accumulator, currentValue) => accumulator + currentValue, 0,);
console.log(number);

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("353e9cb3ff7ba9a21c72")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5hOTU1NDU1OWFlNzg4NGYwOWY2Ni5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsSUFBTUEsT0FBTyxHQUFHLENBQUMsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQztBQUNsQyxJQUFNQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUM7QUFFM0JDLEtBQUssQ0FBQ0MsU0FBUyxDQUFDQyxZQUFZLEdBQUcsVUFBVUMsRUFBRSxFQUFFQyxJQUFJLEVBQUU7RUFDL0MsSUFBSUMsV0FBVyxHQUFHLE9BQU9ELElBQUksS0FBSyxXQUFXLEdBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQyxHQUFHQSxJQUFJO0VBQzlELElBQUlFLFlBQVksR0FBRyxPQUFPRixJQUFJLEtBQUssV0FBVyxHQUFHLENBQUMsR0FBRyxDQUFDO0VBQ3RELElBQUlHLE1BQU07RUFFVixLQUFLLElBQUlDLENBQUMsR0FBR0YsWUFBWSxFQUFFRSxDQUFDLEdBQUcsSUFBSSxDQUFDQyxNQUFNLEVBQUVELENBQUMsRUFBRSxFQUFFO0lBQzdDRCxNQUFNLEdBQUdKLEVBQUUsQ0FBQ0UsV0FBVyxFQUFFLElBQUksQ0FBQ0csQ0FBQyxDQUFDLENBQUM7RUFDckM7RUFFQSxPQUFPRCxNQUFNO0FBRWpCLENBQUM7QUFFRCxJQUFJRyxNQUFNLEdBQUdaLE9BQU8sQ0FBQ0ksWUFBWSxDQUFDLFVBQUNTLEdBQUcsRUFBRUMsSUFBSTtFQUFBLE9BQUtELEdBQUcsR0FBR0MsSUFBSTtBQUFBLEVBQUM7QUFDNUQ7QUFDQUMsT0FBTyxDQUFDQyxHQUFHLENBQUNKLE1BQU0sQ0FBQzs7Ozs7Ozs7VUNsQm5CIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZXM2LWFzeW5jLWF3YWl0Ly4vMDFfRHppZW5fMS8wMV9aYWRhbmlhLzAxX1phZGFuaWVfMS9qcy9hcHAuanMiLCJ3ZWJwYWNrOi8vZXM2LWFzeW5jLWF3YWl0L3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBudW1iZXJzID0gWzQsIDEyLCAyMywgNzYsIDRdO1xuY29uc3QgYXJyYXkxID0gWzEsIDIsIDMsIDRdO1xuXG5BcnJheS5wcm90b3R5cGUuY3VzdG9tUmVkdWNlID0gZnVuY3Rpb24gKGZuLCBpbml0KSB7XG4gICAgbGV0IGFjY3VtdWxhdG9yID0gdHlwZW9mIGluaXQgPT09IFwidW5kZWZpbmVkXCIgPyB0aGlzWzBdIDogaW5pdDtcbiAgICBsZXQgaW5pdGlhbEluZGV4ID0gdHlwZW9mIGluaXQgPT09IFwidW5kZWZpbmVkXCIgPyAxIDogMDtcbiAgICBsZXQgcmVzdWx0O1xuXG4gICAgZm9yIChsZXQgaSA9IGluaXRpYWxJbmRleDsgaSA8IHRoaXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgcmVzdWx0ID0gZm4oYWNjdW11bGF0b3IsIHRoaXNbaV0pXG4gICAgfVxuXG4gICAgcmV0dXJuIHJlc3VsdDtcblxufVxuXG5sZXQgbnVtYmVyID0gbnVtYmVycy5jdXN0b21SZWR1Y2UoKGFjdSwgY3VycikgPT4gYWN1ICsgY3Vycik7XG4vLyBjb25zdCBzdW1XaXRoSW5pdGlhbCA9IGFycmF5MS5yZWR1Y2UoKGFjY3VtdWxhdG9yLCBjdXJyZW50VmFsdWUpID0+IGFjY3VtdWxhdG9yICsgY3VycmVudFZhbHVlLCAwLCk7XG5jb25zb2xlLmxvZyhudW1iZXIpOyIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcIjM1M2U5Y2IzZmY3YmE5YTIxYzcyXCIpIl0sIm5hbWVzIjpbIm51bWJlcnMiLCJhcnJheTEiLCJBcnJheSIsInByb3RvdHlwZSIsImN1c3RvbVJlZHVjZSIsImZuIiwiaW5pdCIsImFjY3VtdWxhdG9yIiwiaW5pdGlhbEluZGV4IiwicmVzdWx0IiwiaSIsImxlbmd0aCIsIm51bWJlciIsImFjdSIsImN1cnIiLCJjb25zb2xlIiwibG9nIl0sInNvdXJjZVJvb3QiOiIifQ==