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
  return array.includes(value);
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
/******/ 	__webpack_require__.h = () => ("b7780adacfa291a5cc22")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5jMzdmNDY4MmVhNjhmODgwOGIxNS5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBQSxtQkFBbUIsR0FBRyxTQUFBQSxvQkFBQ0MsS0FBSyxFQUFFQyxLQUFLLEVBQUs7RUFDcEMsT0FBT0QsS0FBSyxDQUFDRSxRQUFRLENBQUNELEtBQUssQ0FBQztBQUNoQyxDQUFDOztBQUVEO0FBQ0E7QUFDQTs7QUFFQUUsR0FBRyxHQUFHLFNBQUFBLElBQUNDLElBQUksRUFBRUMsSUFBSTtFQUFBLE9BQUtELElBQUksR0FBR0MsSUFBSTtBQUFBOztBQUVqQztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBQyxVQUFVLEdBQUcsU0FBQUEsV0FBQ04sS0FBSztFQUFBLE9BQUtBLEtBQUssQ0FBQ08sT0FBTyxDQUFDLFVBQUNDLE9BQU87SUFBQSxPQUFLQyxPQUFPLENBQUNDLEdBQUcsQ0FBQ0YsT0FBTyxDQUFDO0VBQUEsRUFBQztBQUFBOztBQUV4RTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBRyxzQkFBc0IsR0FBRyxTQUFBQSx1QkFBQ1gsS0FBSztFQUFBLE9BQUtBLEtBQUssQ0FBQ1ksTUFBTSxDQUFDLFVBQUNDLEVBQUU7SUFBQSxPQUFLLE9BQU9BLEVBQUUsS0FBSyxRQUFRO0VBQUEsRUFBQztBQUFBOztBQUVoRjtBQUNBO0FBQ0E7QUFDQTtBQUNBSixPQUFPLENBQUNDLEdBQUcsQ0FBQyw2QkFBNkIsQ0FBQztBQUMxQyxJQUFNSSxPQUFPLEdBQUdmLG1CQUFtQixDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO0FBQzdEVSxPQUFPLENBQUNDLEdBQUcsQ0FBQ0ksT0FBTyxDQUFDO0FBRXBCTCxPQUFPLENBQUNDLEdBQUcsQ0FBQyxlQUFlLENBQUM7QUFDNUIsSUFBTUssT0FBTyxHQUFHWixHQUFHLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQztBQUN6Qk0sT0FBTyxDQUFDQyxHQUFHLENBQUNLLE9BQU8sQ0FBQztBQUVwQk4sT0FBTyxDQUFDQyxHQUFHLENBQUMsc0JBQXNCLENBQUM7QUFDbkNKLFVBQVUsQ0FBQyxDQUFDLEtBQUssRUFBRSxPQUFPLEVBQUUsS0FBSyxFQUFFLE9BQU8sRUFBRSxPQUFPLENBQUMsQ0FBQztBQUVyREcsT0FBTyxDQUFDQyxHQUFHLENBQUMsa0NBQWtDLENBQUM7QUFDL0MsSUFBTU0sYUFBYSxHQUFHTCxzQkFBc0IsQ0FBQyxDQUFDLEtBQUssRUFBRSxDQUFDLEVBQUUsS0FBSyxFQUFFLE9BQU8sRUFBRSxDQUFDLEVBQUUsTUFBTSxFQUFFLEVBQUUsQ0FBQyxDQUFDO0FBQ3ZGRixPQUFPLENBQUNDLEdBQUcsQ0FBQ00sYUFBYSxDQUFDOzs7Ozs7OztVQ2xEMUIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9lczYtYXN5bmMtYXdhaXQvLi8wMV9Eemllbl8xLzAxX1phZGFuaWEvMDJfWmFkYW5pZV8yL2pzL2FwcC5qcyIsIndlYnBhY2s6Ly9lczYtYXN5bmMtYXdhaXQvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogUHJ6ZXLDs2IgcG9uacW8c3plIG1ldG9keSBuYSBmdW5rY2plIHN0cnphxYJrb3dlXG4gKi9cbi8vIGZ1bmN0aW9uIGlzQXJyYXlJbmNsdWRlVmFsdWUodmFsdWUsIGFycmF5KSB7XG4vLyAgICAgcmV0dXJuIGFycmF5LmluY2x1ZGVzKHZhbHVlKTtcbi8vIH1cblxuaXNBcnJheUluY2x1ZGVWYWx1ZSA9IChhcnJheSwgdmFsdWUpID0+IHtcbiAgICByZXR1cm4gYXJyYXkuaW5jbHVkZXModmFsdWUpO1xufVxuXG4vLyBmdW5jdGlvbiBzdW0obnVtMSwgbnVtMikge1xuLy8gICAgIHJldHVybiBudW0xICsgbnVtMjtcbi8vIH1cblxuc3VtID0gKG51bTEsIG51bTIpID0+IG51bTEgKyBudW0yO1xuXG4vLyBsZXQgcHJpbnRBcnJheSA9IGZ1bmN0aW9uIChhcnJheSkge1xuLy8gICAgIGFycmF5LmZvckVhY2goZnVuY3Rpb24gKGVsZW1lbnQpIHtcbi8vICAgICAgICAgY29uc29sZS5sb2coZWxlbWVudCk7XG4vLyAgICAgfSk7XG4vLyB9O1xuXG5wcmludEFycmF5ID0gKGFycmF5KSA9PiBhcnJheS5mb3JFYWNoKChlbGVtZW50KSA9PiBjb25zb2xlLmxvZyhlbGVtZW50KSk7XG5cbi8vIGxldCBmaWx0ZXJOdW1iZXJzRnJvbUFycmF5ID0gZnVuY3Rpb24gKGFycmF5KSB7XG4vLyAgICAgcmV0dXJuIGFycmF5LmZpbHRlcihmdW5jdGlvbiAoZWwpIHtcbi8vICAgICAgICAgcmV0dXJuIHR5cGVvZiBlbCA9PT0gXCJudW1iZXJcIjtcbi8vICAgICB9KTtcbi8vIH07XG5cbmZpbHRlck51bWJlcnNGcm9tQXJyYXkgPSAoYXJyYXkpID0+IGFycmF5LmZpbHRlcigoZWwpID0+IHR5cGVvZiBlbCA9PT0gXCJudW1iZXJcIik7XG5cbi8qKlxuICogV3l3b8WCYW5pYVxuICogTmllIHptaWVuaWFqIGtvZHUgcG9uacW8ZWohXG4gKi9cbmNvbnNvbGUubG9nKFwiLS0tIGlzQXJyYXlJbmNsdWRlVmFsdWUgLS0tXCIpO1xuY29uc3QgcmVzdWx0MSA9IGlzQXJyYXlJbmNsdWRlVmFsdWUoMiwgWzEsIDIsIDMsIDUsIDMsIDIsIDVdKTtcbmNvbnNvbGUubG9nKHJlc3VsdDEpO1xuXG5jb25zb2xlLmxvZyhcIlxcbi0tLSBzdW0gLS0tXCIpO1xuY29uc3QgcmVzdWx0MiA9IHN1bSgyLCAzKTtcbmNvbnNvbGUubG9nKHJlc3VsdDIpO1xuXG5jb25zb2xlLmxvZyhcIlxcbi0tLSBwcmludEFycmF5IC0tLVwiKTtcbnByaW50QXJyYXkoW1wiQWxhXCIsIFwiWm9zaWFcIiwgXCJFd2FcIiwgXCJQaW90clwiLCBcIkRhcmVrXCJdKTtcblxuY29uc29sZS5sb2coXCJcXG4tLS0gZmlsdGVyTnVtYmVyc0Zyb21BcnJheSAtLS1cIik7XG5jb25zdCBmaWx0ZXJlZEFycmF5ID0gZmlsdGVyTnVtYmVyc0Zyb21BcnJheShbXCJBbGFcIiwgNSwgXCJFd2FcIiwgXCJQaW90clwiLCAyLCBcIkFkYW1cIiwgMTldKTtcbmNvbnNvbGUubG9nKGZpbHRlcmVkQXJyYXkpOyIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcImI3NzgwYWRhY2ZhMjkxYTVjYzIyXCIpIl0sIm5hbWVzIjpbImlzQXJyYXlJbmNsdWRlVmFsdWUiLCJhcnJheSIsInZhbHVlIiwiaW5jbHVkZXMiLCJzdW0iLCJudW0xIiwibnVtMiIsInByaW50QXJyYXkiLCJmb3JFYWNoIiwiZWxlbWVudCIsImNvbnNvbGUiLCJsb2ciLCJmaWx0ZXJOdW1iZXJzRnJvbUFycmF5IiwiZmlsdGVyIiwiZWwiLCJyZXN1bHQxIiwicmVzdWx0MiIsImZpbHRlcmVkQXJyYXkiXSwic291cmNlUm9vdCI6IiJ9