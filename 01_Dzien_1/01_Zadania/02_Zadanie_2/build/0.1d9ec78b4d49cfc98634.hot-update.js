self["webpackHotUpdatees6_async_await"](0,{

/***/ 23:
/***/ (() => {

/**
 * Przerób poniższe metody na funkcje strzałkowe
 */
// function isArrayIncludeValue(value, array) {
//     return array.includes(value);
// }

isArrayIncludeValue2 = function isArrayIncludeValue(value, array) {
  return array.some(function (el) {
    return el === value;
  });
};

// function sum(num1, num2) {
//     return num1 + num2;
// }

sum2 = function sum(num1, num2) {
  return num1 + num2;
};

// let printArray = function (array) {
//     array.forEach(function (element) {
//         console.log(element);
//     });
// };

printArray2 = function printArray(array) {
  return array.forEach(function (element) {
    return console.log(element);
  });
};

// let filterNumbersFromArray = function (array) {
//     return array.filter(function (el) {
//         return typeof el === "number";
//     });
// };

filterNumbersFromArray2 = function filterNumbersFromArray(array) {
  return array.filter(function (el) {
    return typeof el === "number";
  });
};

/**
 * Wywołania
 * Nie zmieniaj kodu poniżej!
 */
console.log("--- isArrayIncludeValue ---");
var result1 = isArrayIncludeValue(2, [1, 2, 3, 5, 3, 2, 5]);
console.log(result1);
console.log("\n--- sum ---");
var result2 = sum(2, 3);
console.log(result2);
console.log("\n--- printArray ---");
printArray(["Ala", "Zosia", "Ewa", "Piotr", "Darek"]);
console.log("\n--- filterNumbersFromArray ---");
var filteredArray = filterNumbersFromArray(["Ala", 5, "Ewa", "Piotr", 2, "Adam", 19]);
console.log(filteredArray);

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("721adb96ffe09ceaf1b6")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC4xZDllYzc4YjRkNDljZmM5ODYzNC5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBQSxtQkFBbUIsR0FBRyxTQUFBQSxvQkFBQ0MsS0FBSyxFQUFFQyxLQUFLO0VBQUEsT0FBS0EsS0FBSyxDQUFDQyxJQUFJLENBQUMsVUFBQUMsRUFBRTtJQUFBLE9BQUlBLEVBQUUsS0FBS0gsS0FBSztFQUFBLEVBQUM7QUFBQTs7QUFFdEU7QUFDQTtBQUNBOztBQUVBSSxHQUFHLEdBQUcsU0FBQUEsSUFBQ0MsSUFBSSxFQUFFQyxJQUFJO0VBQUEsT0FBS0QsSUFBSSxHQUFHQyxJQUFJO0FBQUE7O0FBRWpDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUFDLFVBQVUsR0FBRyxTQUFBQSxXQUFDTixLQUFLO0VBQUEsT0FBS0EsS0FBSyxDQUFDTyxPQUFPLENBQUMsVUFBQ0MsT0FBTztJQUFBLE9BQUtDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDRixPQUFPLENBQUM7RUFBQSxFQUFDO0FBQUE7O0FBRXhFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUFHLHNCQUFzQixHQUFHLFNBQUFBLHVCQUFDWCxLQUFLO0VBQUEsT0FBS0EsS0FBSyxDQUFDWSxNQUFNLENBQUMsVUFBQ1YsRUFBRTtJQUFBLE9BQUssT0FBT0EsRUFBRSxLQUFLLFFBQVE7RUFBQSxFQUFDO0FBQUE7O0FBRWhGO0FBQ0E7QUFDQTtBQUNBO0FBQ0FPLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLDZCQUE2QixDQUFDO0FBQzFDLElBQU1HLE9BQU8sR0FBR2YsbUJBQW1CLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7QUFDN0RXLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDRyxPQUFPLENBQUM7QUFFcEJKLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLGVBQWUsQ0FBQztBQUM1QixJQUFNSSxPQUFPLEdBQUdYLEdBQUcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDO0FBQ3pCTSxPQUFPLENBQUNDLEdBQUcsQ0FBQ0ksT0FBTyxDQUFDO0FBRXBCTCxPQUFPLENBQUNDLEdBQUcsQ0FBQyxzQkFBc0IsQ0FBQztBQUNuQ0osVUFBVSxDQUFDLENBQUMsS0FBSyxFQUFFLE9BQU8sRUFBRSxLQUFLLEVBQUUsT0FBTyxFQUFFLE9BQU8sQ0FBQyxDQUFDO0FBRXJERyxPQUFPLENBQUNDLEdBQUcsQ0FBQyxrQ0FBa0MsQ0FBQztBQUMvQyxJQUFNSyxhQUFhLEdBQUdKLHNCQUFzQixDQUFDLENBQUMsS0FBSyxFQUFFLENBQUMsRUFBRSxLQUFLLEVBQUUsT0FBTyxFQUFFLENBQUMsRUFBRSxNQUFNLEVBQUUsRUFBRSxDQUFDLENBQUM7QUFDdkZGLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDSyxhQUFhLENBQUM7Ozs7Ozs7O1VDaEQxQiIsInNvdXJjZXMiOlsid2VicGFjazovL2VzNi1hc3luYy1hd2FpdC8uLzAxX0R6aWVuXzEvMDFfWmFkYW5pYS8wMl9aYWRhbmllXzIvanMvYXBwLmpzIiwid2VicGFjazovL2VzNi1hc3luYy1hd2FpdC93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBQcnplcsOzYiBwb25pxbxzemUgbWV0b2R5IG5hIGZ1bmtjamUgc3RyemHFgmtvd2VcbiAqL1xuLy8gZnVuY3Rpb24gaXNBcnJheUluY2x1ZGVWYWx1ZSh2YWx1ZSwgYXJyYXkpIHtcbi8vICAgICByZXR1cm4gYXJyYXkuaW5jbHVkZXModmFsdWUpO1xuLy8gfVxuXG5pc0FycmF5SW5jbHVkZVZhbHVlID0gKHZhbHVlLCBhcnJheSkgPT4gYXJyYXkuc29tZShlbCA9PiBlbCA9PT0gdmFsdWUpO1xuXG4vLyBmdW5jdGlvbiBzdW0obnVtMSwgbnVtMikge1xuLy8gICAgIHJldHVybiBudW0xICsgbnVtMjtcbi8vIH1cblxuc3VtID0gKG51bTEsIG51bTIpID0+IG51bTEgKyBudW0yO1xuXG4vLyBsZXQgcHJpbnRBcnJheSA9IGZ1bmN0aW9uIChhcnJheSkge1xuLy8gICAgIGFycmF5LmZvckVhY2goZnVuY3Rpb24gKGVsZW1lbnQpIHtcbi8vICAgICAgICAgY29uc29sZS5sb2coZWxlbWVudCk7XG4vLyAgICAgfSk7XG4vLyB9O1xuXG5wcmludEFycmF5ID0gKGFycmF5KSA9PiBhcnJheS5mb3JFYWNoKChlbGVtZW50KSA9PiBjb25zb2xlLmxvZyhlbGVtZW50KSk7XG5cbi8vIGxldCBmaWx0ZXJOdW1iZXJzRnJvbUFycmF5ID0gZnVuY3Rpb24gKGFycmF5KSB7XG4vLyAgICAgcmV0dXJuIGFycmF5LmZpbHRlcihmdW5jdGlvbiAoZWwpIHtcbi8vICAgICAgICAgcmV0dXJuIHR5cGVvZiBlbCA9PT0gXCJudW1iZXJcIjtcbi8vICAgICB9KTtcbi8vIH07XG5cbmZpbHRlck51bWJlcnNGcm9tQXJyYXkgPSAoYXJyYXkpID0+IGFycmF5LmZpbHRlcigoZWwpID0+IHR5cGVvZiBlbCA9PT0gXCJudW1iZXJcIik7XG5cbi8qKlxuICogV3l3b8WCYW5pYVxuICogTmllIHptaWVuaWFqIGtvZHUgcG9uacW8ZWohXG4gKi9cbmNvbnNvbGUubG9nKFwiLS0tIGlzQXJyYXlJbmNsdWRlVmFsdWUgLS0tXCIpO1xuY29uc3QgcmVzdWx0MSA9IGlzQXJyYXlJbmNsdWRlVmFsdWUoMiwgWzEsIDIsIDMsIDUsIDMsIDIsIDVdKTtcbmNvbnNvbGUubG9nKHJlc3VsdDEpO1xuXG5jb25zb2xlLmxvZyhcIlxcbi0tLSBzdW0gLS0tXCIpO1xuY29uc3QgcmVzdWx0MiA9IHN1bSgyLCAzKTtcbmNvbnNvbGUubG9nKHJlc3VsdDIpO1xuXG5jb25zb2xlLmxvZyhcIlxcbi0tLSBwcmludEFycmF5IC0tLVwiKTtcbnByaW50QXJyYXkoW1wiQWxhXCIsIFwiWm9zaWFcIiwgXCJFd2FcIiwgXCJQaW90clwiLCBcIkRhcmVrXCJdKTtcblxuY29uc29sZS5sb2coXCJcXG4tLS0gZmlsdGVyTnVtYmVyc0Zyb21BcnJheSAtLS1cIik7XG5jb25zdCBmaWx0ZXJlZEFycmF5ID0gZmlsdGVyTnVtYmVyc0Zyb21BcnJheShbXCJBbGFcIiwgNSwgXCJFd2FcIiwgXCJQaW90clwiLCAyLCBcIkFkYW1cIiwgMTldKTtcbmNvbnNvbGUubG9nKGZpbHRlcmVkQXJyYXkpOyIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcIjcyMWFkYjk2ZmZlMDljZWFmMWI2XCIpIl0sIm5hbWVzIjpbImlzQXJyYXlJbmNsdWRlVmFsdWUiLCJ2YWx1ZSIsImFycmF5Iiwic29tZSIsImVsIiwic3VtIiwibnVtMSIsIm51bTIiLCJwcmludEFycmF5IiwiZm9yRWFjaCIsImVsZW1lbnQiLCJjb25zb2xlIiwibG9nIiwiZmlsdGVyTnVtYmVyc0Zyb21BcnJheSIsImZpbHRlciIsInJlc3VsdDEiLCJyZXN1bHQyIiwiZmlsdGVyZWRBcnJheSJdLCJzb3VyY2VSb290IjoiIn0=