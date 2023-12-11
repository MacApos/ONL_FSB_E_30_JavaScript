self["webpackHotUpdatees6_async_await"](0,{

/***/ 23:
/***/ (() => {

/**
 * Przerób poniższe metody na funkcje strzałkowe
 */
// function isArrayIncludeValue(value, array) {
//     return array.includes(value);
// }

isArrayIncludeValue2 = function isArrayIncludeValue(array, value) {
  if (array.includes(value)) {
    return true;
  }
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
// console.log("--- isArrayIncludeValue ---");
// const result1 = isArrayIncludeValue(2, [1, 2, 3, 5, 3, 2, 5]);
// console.log(result1);

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
/******/ 	__webpack_require__.h = () => ("1ff53d694d912d7285ef")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC4yMmFhM2VlMzhkMGJmNzEwODJiZS5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBQSxtQkFBbUIsR0FBRyxTQUFBQSxvQkFBQ0MsS0FBSyxFQUFFQyxLQUFLLEVBQUs7RUFDcEMsSUFBR0QsS0FBSyxDQUFDRSxRQUFRLENBQUNELEtBQUssQ0FBQyxFQUFDO0lBQ3JCLE9BQU8sSUFBSTtFQUNmO0FBQ0osQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7O0FBRUFFLEdBQUcsR0FBRyxTQUFBQSxJQUFDQyxJQUFJLEVBQUVDLElBQUk7RUFBQSxPQUFLRCxJQUFJLEdBQUdDLElBQUk7QUFBQTs7QUFFakM7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQUMsVUFBVSxHQUFHLFNBQUFBLFdBQUNOLEtBQUs7RUFBQSxPQUFLQSxLQUFLLENBQUNPLE9BQU8sQ0FBQyxVQUFDQyxPQUFPO0lBQUEsT0FBS0MsT0FBTyxDQUFDQyxHQUFHLENBQUNGLE9BQU8sQ0FBQztFQUFBLEVBQUM7QUFBQTs7QUFFeEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQUcsc0JBQXNCLEdBQUcsU0FBQUEsdUJBQUNYLEtBQUs7RUFBQSxPQUFLQSxLQUFLLENBQUNZLE1BQU0sQ0FBQyxVQUFDQyxFQUFFO0lBQUEsT0FBSyxPQUFPQSxFQUFFLEtBQUssUUFBUTtFQUFBLEVBQUM7QUFBQTs7QUFFaEY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUFKLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLGVBQWUsQ0FBQztBQUM1QixJQUFNSSxPQUFPLEdBQUdYLEdBQUcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDO0FBQ3pCTSxPQUFPLENBQUNDLEdBQUcsQ0FBQ0ksT0FBTyxDQUFDO0FBRXBCTCxPQUFPLENBQUNDLEdBQUcsQ0FBQyxzQkFBc0IsQ0FBQztBQUNuQ0osVUFBVSxDQUFDLENBQUMsS0FBSyxFQUFFLE9BQU8sRUFBRSxLQUFLLEVBQUUsT0FBTyxFQUFFLE9BQU8sQ0FBQyxDQUFDO0FBRXJERyxPQUFPLENBQUNDLEdBQUcsQ0FBQyxrQ0FBa0MsQ0FBQztBQUMvQyxJQUFNSyxhQUFhLEdBQUdKLHNCQUFzQixDQUFDLENBQUMsS0FBSyxFQUFFLENBQUMsRUFBRSxLQUFLLEVBQUUsT0FBTyxFQUFFLENBQUMsRUFBRSxNQUFNLEVBQUUsRUFBRSxDQUFDLENBQUM7QUFDdkZGLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDSyxhQUFhLENBQUM7Ozs7Ozs7O1VDcEQxQiIsInNvdXJjZXMiOlsid2VicGFjazovL2VzNi1hc3luYy1hd2FpdC8uLzAxX0R6aWVuXzEvMDFfWmFkYW5pYS8wMl9aYWRhbmllXzIvanMvYXBwLmpzIiwid2VicGFjazovL2VzNi1hc3luYy1hd2FpdC93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBQcnplcsOzYiBwb25pxbxzemUgbWV0b2R5IG5hIGZ1bmtjamUgc3RyemHFgmtvd2VcbiAqL1xuLy8gZnVuY3Rpb24gaXNBcnJheUluY2x1ZGVWYWx1ZSh2YWx1ZSwgYXJyYXkpIHtcbi8vICAgICByZXR1cm4gYXJyYXkuaW5jbHVkZXModmFsdWUpO1xuLy8gfVxuXG5pc0FycmF5SW5jbHVkZVZhbHVlID0gKGFycmF5LCB2YWx1ZSkgPT4ge1xuICAgIGlmKGFycmF5LmluY2x1ZGVzKHZhbHVlKSl7XG4gICAgICAgIHJldHVybiB0cnVlXG4gICAgfVxufVxuXG4vLyBmdW5jdGlvbiBzdW0obnVtMSwgbnVtMikge1xuLy8gICAgIHJldHVybiBudW0xICsgbnVtMjtcbi8vIH1cblxuc3VtID0gKG51bTEsIG51bTIpID0+IG51bTEgKyBudW0yO1xuXG4vLyBsZXQgcHJpbnRBcnJheSA9IGZ1bmN0aW9uIChhcnJheSkge1xuLy8gICAgIGFycmF5LmZvckVhY2goZnVuY3Rpb24gKGVsZW1lbnQpIHtcbi8vICAgICAgICAgY29uc29sZS5sb2coZWxlbWVudCk7XG4vLyAgICAgfSk7XG4vLyB9O1xuXG5wcmludEFycmF5ID0gKGFycmF5KSA9PiBhcnJheS5mb3JFYWNoKChlbGVtZW50KSA9PiBjb25zb2xlLmxvZyhlbGVtZW50KSk7XG5cbi8vIGxldCBmaWx0ZXJOdW1iZXJzRnJvbUFycmF5ID0gZnVuY3Rpb24gKGFycmF5KSB7XG4vLyAgICAgcmV0dXJuIGFycmF5LmZpbHRlcihmdW5jdGlvbiAoZWwpIHtcbi8vICAgICAgICAgcmV0dXJuIHR5cGVvZiBlbCA9PT0gXCJudW1iZXJcIjtcbi8vICAgICB9KTtcbi8vIH07XG5cbmZpbHRlck51bWJlcnNGcm9tQXJyYXkgPSAoYXJyYXkpID0+IGFycmF5LmZpbHRlcigoZWwpID0+IHR5cGVvZiBlbCA9PT0gXCJudW1iZXJcIik7XG5cbi8qKlxuICogV3l3b8WCYW5pYVxuICogTmllIHptaWVuaWFqIGtvZHUgcG9uacW8ZWohXG4gKi9cbi8vIGNvbnNvbGUubG9nKFwiLS0tIGlzQXJyYXlJbmNsdWRlVmFsdWUgLS0tXCIpO1xuLy8gY29uc3QgcmVzdWx0MSA9IGlzQXJyYXlJbmNsdWRlVmFsdWUoMiwgWzEsIDIsIDMsIDUsIDMsIDIsIDVdKTtcbi8vIGNvbnNvbGUubG9nKHJlc3VsdDEpO1xuXG5jb25zb2xlLmxvZyhcIlxcbi0tLSBzdW0gLS0tXCIpO1xuY29uc3QgcmVzdWx0MiA9IHN1bSgyLCAzKTtcbmNvbnNvbGUubG9nKHJlc3VsdDIpO1xuXG5jb25zb2xlLmxvZyhcIlxcbi0tLSBwcmludEFycmF5IC0tLVwiKTtcbnByaW50QXJyYXkoW1wiQWxhXCIsIFwiWm9zaWFcIiwgXCJFd2FcIiwgXCJQaW90clwiLCBcIkRhcmVrXCJdKTtcblxuY29uc29sZS5sb2coXCJcXG4tLS0gZmlsdGVyTnVtYmVyc0Zyb21BcnJheSAtLS1cIik7XG5jb25zdCBmaWx0ZXJlZEFycmF5ID0gZmlsdGVyTnVtYmVyc0Zyb21BcnJheShbXCJBbGFcIiwgNSwgXCJFd2FcIiwgXCJQaW90clwiLCAyLCBcIkFkYW1cIiwgMTldKTtcbmNvbnNvbGUubG9nKGZpbHRlcmVkQXJyYXkpOyIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcIjFmZjUzZDY5NGQ5MTJkNzI4NWVmXCIpIl0sIm5hbWVzIjpbImlzQXJyYXlJbmNsdWRlVmFsdWUiLCJhcnJheSIsInZhbHVlIiwiaW5jbHVkZXMiLCJzdW0iLCJudW0xIiwibnVtMiIsInByaW50QXJyYXkiLCJmb3JFYWNoIiwiZWxlbWVudCIsImNvbnNvbGUiLCJsb2ciLCJmaWx0ZXJOdW1iZXJzRnJvbUFycmF5IiwiZmlsdGVyIiwiZWwiLCJyZXN1bHQyIiwiZmlsdGVyZWRBcnJheSJdLCJzb3VyY2VSb290IjoiIn0=