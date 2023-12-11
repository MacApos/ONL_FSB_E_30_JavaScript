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
/******/ 	__webpack_require__.h = () => ("3240a4eeb56b725b4b3c")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC44ODdjNDIxNDRmODJmZTAyNDc4ZS5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBQSxtQkFBbUIsR0FBRyxTQUFBQSxvQkFBQ0MsS0FBSyxFQUFFQyxLQUFLO0VBQUEsT0FBS0QsS0FBSyxDQUFDRSxJQUFJLENBQUMsVUFBQUMsRUFBRTtJQUFBLE9BQUlBLEVBQUUsS0FBS0YsS0FBSztFQUFBLEVBQUM7QUFBQTs7QUFFdEU7QUFDQTtBQUNBOztBQUVBRyxHQUFHLEdBQUcsU0FBQUEsSUFBQ0MsSUFBSSxFQUFFQyxJQUFJO0VBQUEsT0FBS0QsSUFBSSxHQUFHQyxJQUFJO0FBQUE7O0FBRWpDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUFDLFVBQVUsR0FBRyxTQUFBQSxXQUFDUCxLQUFLO0VBQUEsT0FBS0EsS0FBSyxDQUFDUSxPQUFPLENBQUMsVUFBQ0MsT0FBTztJQUFBLE9BQUtDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDRixPQUFPLENBQUM7RUFBQSxFQUFDO0FBQUE7O0FBRXhFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUFHLHNCQUFzQixHQUFHLFNBQUFBLHVCQUFDWixLQUFLO0VBQUEsT0FBS0EsS0FBSyxDQUFDYSxNQUFNLENBQUMsVUFBQ1YsRUFBRTtJQUFBLE9BQUssT0FBT0EsRUFBRSxLQUFLLFFBQVE7RUFBQSxFQUFDO0FBQUE7O0FBRWhGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBTyxPQUFPLENBQUNDLEdBQUcsQ0FBQyxlQUFlLENBQUM7QUFDNUIsSUFBTUcsT0FBTyxHQUFHVixHQUFHLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQztBQUN6Qk0sT0FBTyxDQUFDQyxHQUFHLENBQUNHLE9BQU8sQ0FBQztBQUVwQkosT0FBTyxDQUFDQyxHQUFHLENBQUMsc0JBQXNCLENBQUM7QUFDbkNKLFVBQVUsQ0FBQyxDQUFDLEtBQUssRUFBRSxPQUFPLEVBQUUsS0FBSyxFQUFFLE9BQU8sRUFBRSxPQUFPLENBQUMsQ0FBQztBQUVyREcsT0FBTyxDQUFDQyxHQUFHLENBQUMsa0NBQWtDLENBQUM7QUFDL0MsSUFBTUksYUFBYSxHQUFHSCxzQkFBc0IsQ0FBQyxDQUFDLEtBQUssRUFBRSxDQUFDLEVBQUUsS0FBSyxFQUFFLE9BQU8sRUFBRSxDQUFDLEVBQUUsTUFBTSxFQUFFLEVBQUUsQ0FBQyxDQUFDO0FBQ3ZGRixPQUFPLENBQUNDLEdBQUcsQ0FBQ0ksYUFBYSxDQUFDOzs7Ozs7OztVQ2hEMUIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9lczYtYXN5bmMtYXdhaXQvLi8wMV9Eemllbl8xLzAxX1phZGFuaWEvMDJfWmFkYW5pZV8yL2pzL2FwcC5qcyIsIndlYnBhY2s6Ly9lczYtYXN5bmMtYXdhaXQvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogUHJ6ZXLDs2IgcG9uacW8c3plIG1ldG9keSBuYSBmdW5rY2plIHN0cnphxYJrb3dlXG4gKi9cbi8vIGZ1bmN0aW9uIGlzQXJyYXlJbmNsdWRlVmFsdWUodmFsdWUsIGFycmF5KSB7XG4vLyAgICAgcmV0dXJuIGFycmF5LmluY2x1ZGVzKHZhbHVlKTtcbi8vIH1cblxuaXNBcnJheUluY2x1ZGVWYWx1ZSA9IChhcnJheSwgdmFsdWUpID0+IGFycmF5LnNvbWUoZWwgPT4gZWwgPT09IHZhbHVlKTtcblxuLy8gZnVuY3Rpb24gc3VtKG51bTEsIG51bTIpIHtcbi8vICAgICByZXR1cm4gbnVtMSArIG51bTI7XG4vLyB9XG5cbnN1bSA9IChudW0xLCBudW0yKSA9PiBudW0xICsgbnVtMjtcblxuLy8gbGV0IHByaW50QXJyYXkgPSBmdW5jdGlvbiAoYXJyYXkpIHtcbi8vICAgICBhcnJheS5mb3JFYWNoKGZ1bmN0aW9uIChlbGVtZW50KSB7XG4vLyAgICAgICAgIGNvbnNvbGUubG9nKGVsZW1lbnQpO1xuLy8gICAgIH0pO1xuLy8gfTtcblxucHJpbnRBcnJheSA9IChhcnJheSkgPT4gYXJyYXkuZm9yRWFjaCgoZWxlbWVudCkgPT4gY29uc29sZS5sb2coZWxlbWVudCkpO1xuXG4vLyBsZXQgZmlsdGVyTnVtYmVyc0Zyb21BcnJheSA9IGZ1bmN0aW9uIChhcnJheSkge1xuLy8gICAgIHJldHVybiBhcnJheS5maWx0ZXIoZnVuY3Rpb24gKGVsKSB7XG4vLyAgICAgICAgIHJldHVybiB0eXBlb2YgZWwgPT09IFwibnVtYmVyXCI7XG4vLyAgICAgfSk7XG4vLyB9O1xuXG5maWx0ZXJOdW1iZXJzRnJvbUFycmF5ID0gKGFycmF5KSA9PiBhcnJheS5maWx0ZXIoKGVsKSA9PiB0eXBlb2YgZWwgPT09IFwibnVtYmVyXCIpO1xuXG4vKipcbiAqIFd5d2/FgmFuaWFcbiAqIE5pZSB6bWllbmlhaiBrb2R1IHBvbmnFvGVqIVxuICovXG4vLyBjb25zb2xlLmxvZyhcIi0tLSBpc0FycmF5SW5jbHVkZVZhbHVlIC0tLVwiKTtcbi8vIGNvbnN0IHJlc3VsdDEgPSBpc0FycmF5SW5jbHVkZVZhbHVlKDIsIFsxLCAyLCAzLCA1LCAzLCAyLCA1XSk7XG4vLyBjb25zb2xlLmxvZyhyZXN1bHQxKTtcblxuY29uc29sZS5sb2coXCJcXG4tLS0gc3VtIC0tLVwiKTtcbmNvbnN0IHJlc3VsdDIgPSBzdW0oMiwgMyk7XG5jb25zb2xlLmxvZyhyZXN1bHQyKTtcblxuY29uc29sZS5sb2coXCJcXG4tLS0gcHJpbnRBcnJheSAtLS1cIik7XG5wcmludEFycmF5KFtcIkFsYVwiLCBcIlpvc2lhXCIsIFwiRXdhXCIsIFwiUGlvdHJcIiwgXCJEYXJla1wiXSk7XG5cbmNvbnNvbGUubG9nKFwiXFxuLS0tIGZpbHRlck51bWJlcnNGcm9tQXJyYXkgLS0tXCIpO1xuY29uc3QgZmlsdGVyZWRBcnJheSA9IGZpbHRlck51bWJlcnNGcm9tQXJyYXkoW1wiQWxhXCIsIDUsIFwiRXdhXCIsIFwiUGlvdHJcIiwgMiwgXCJBZGFtXCIsIDE5XSk7XG5jb25zb2xlLmxvZyhmaWx0ZXJlZEFycmF5KTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCIzMjQwYTRlZWI1NmI3MjViNGIzY1wiKSJdLCJuYW1lcyI6WyJpc0FycmF5SW5jbHVkZVZhbHVlIiwiYXJyYXkiLCJ2YWx1ZSIsInNvbWUiLCJlbCIsInN1bSIsIm51bTEiLCJudW0yIiwicHJpbnRBcnJheSIsImZvckVhY2giLCJlbGVtZW50IiwiY29uc29sZSIsImxvZyIsImZpbHRlck51bWJlcnNGcm9tQXJyYXkiLCJmaWx0ZXIiLCJyZXN1bHQyIiwiZmlsdGVyZWRBcnJheSJdLCJzb3VyY2VSb290IjoiIn0=