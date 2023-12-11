self["webpackHotUpdatees6_async_await"](0,{

/***/ 23:
/***/ (() => {

/**
 * Przerób poniższe metody na funkcje strzałkowe
 */
// function isArrayIncludeValue(value, array) {
//     return array.includes(value);
// }

// isArrayIncludeValue = (array, value) => {
//     return array.includes(value);
// }

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
var result1 = isArrayIncludeValue2(2, [1, 2, 3, 5, 3, 2, 5]);
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
/******/ 	__webpack_require__.h = () => ("efe9d47a84ae1231e973")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5iNzc4MGFkYWNmYTI5MWE1Y2MyMi5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUFBLEdBQUcsR0FBRyxTQUFBQSxJQUFDQyxJQUFJLEVBQUVDLElBQUk7RUFBQSxPQUFLRCxJQUFJLEdBQUdDLElBQUk7QUFBQTs7QUFFakM7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQUMsVUFBVSxHQUFHLFNBQUFBLFdBQUNDLEtBQUs7RUFBQSxPQUFLQSxLQUFLLENBQUNDLE9BQU8sQ0FBQyxVQUFDQyxPQUFPO0lBQUEsT0FBS0MsT0FBTyxDQUFDQyxHQUFHLENBQUNGLE9BQU8sQ0FBQztFQUFBLEVBQUM7QUFBQTs7QUFFeEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQUcsc0JBQXNCLEdBQUcsU0FBQUEsdUJBQUNMLEtBQUs7RUFBQSxPQUFLQSxLQUFLLENBQUNNLE1BQU0sQ0FBQyxVQUFDQyxFQUFFO0lBQUEsT0FBSyxPQUFPQSxFQUFFLEtBQUssUUFBUTtFQUFBLEVBQUM7QUFBQTs7QUFFaEY7QUFDQTtBQUNBO0FBQ0E7QUFDQUosT0FBTyxDQUFDQyxHQUFHLENBQUMsNkJBQTZCLENBQUM7QUFDMUMsSUFBTUksT0FBTyxHQUFHQyxtQkFBbUIsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztBQUM3RE4sT0FBTyxDQUFDQyxHQUFHLENBQUNJLE9BQU8sQ0FBQztBQUVwQkwsT0FBTyxDQUFDQyxHQUFHLENBQUMsZUFBZSxDQUFDO0FBQzVCLElBQU1NLE9BQU8sR0FBR2QsR0FBRyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUM7QUFDekJPLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDTSxPQUFPLENBQUM7QUFFcEJQLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLHNCQUFzQixDQUFDO0FBQ25DTCxVQUFVLENBQUMsQ0FBQyxLQUFLLEVBQUUsT0FBTyxFQUFFLEtBQUssRUFBRSxPQUFPLEVBQUUsT0FBTyxDQUFDLENBQUM7QUFFckRJLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLGtDQUFrQyxDQUFDO0FBQy9DLElBQU1PLGFBQWEsR0FBR04sc0JBQXNCLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxFQUFFLEtBQUssRUFBRSxPQUFPLEVBQUUsQ0FBQyxFQUFFLE1BQU0sRUFBRSxFQUFFLENBQUMsQ0FBQztBQUN2RkYsT0FBTyxDQUFDQyxHQUFHLENBQUNPLGFBQWEsQ0FBQzs7Ozs7Ozs7VUNsRDFCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZXM2LWFzeW5jLWF3YWl0Ly4vMDFfRHppZW5fMS8wMV9aYWRhbmlhLzAyX1phZGFuaWVfMi9qcy9hcHAuanMiLCJ3ZWJwYWNrOi8vZXM2LWFzeW5jLWF3YWl0L3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIFByemVyw7NiIHBvbmnFvHN6ZSBtZXRvZHkgbmEgZnVua2NqZSBzdHJ6YcWCa293ZVxuICovXG4vLyBmdW5jdGlvbiBpc0FycmF5SW5jbHVkZVZhbHVlKHZhbHVlLCBhcnJheSkge1xuLy8gICAgIHJldHVybiBhcnJheS5pbmNsdWRlcyh2YWx1ZSk7XG4vLyB9XG5cbi8vIGlzQXJyYXlJbmNsdWRlVmFsdWUgPSAoYXJyYXksIHZhbHVlKSA9PiB7XG4vLyAgICAgcmV0dXJuIGFycmF5LmluY2x1ZGVzKHZhbHVlKTtcbi8vIH1cblxuLy8gZnVuY3Rpb24gc3VtKG51bTEsIG51bTIpIHtcbi8vICAgICByZXR1cm4gbnVtMSArIG51bTI7XG4vLyB9XG5cbnN1bSA9IChudW0xLCBudW0yKSA9PiBudW0xICsgbnVtMjtcblxuLy8gbGV0IHByaW50QXJyYXkgPSBmdW5jdGlvbiAoYXJyYXkpIHtcbi8vICAgICBhcnJheS5mb3JFYWNoKGZ1bmN0aW9uIChlbGVtZW50KSB7XG4vLyAgICAgICAgIGNvbnNvbGUubG9nKGVsZW1lbnQpO1xuLy8gICAgIH0pO1xuLy8gfTtcblxucHJpbnRBcnJheSA9IChhcnJheSkgPT4gYXJyYXkuZm9yRWFjaCgoZWxlbWVudCkgPT4gY29uc29sZS5sb2coZWxlbWVudCkpO1xuXG4vLyBsZXQgZmlsdGVyTnVtYmVyc0Zyb21BcnJheSA9IGZ1bmN0aW9uIChhcnJheSkge1xuLy8gICAgIHJldHVybiBhcnJheS5maWx0ZXIoZnVuY3Rpb24gKGVsKSB7XG4vLyAgICAgICAgIHJldHVybiB0eXBlb2YgZWwgPT09IFwibnVtYmVyXCI7XG4vLyAgICAgfSk7XG4vLyB9O1xuXG5maWx0ZXJOdW1iZXJzRnJvbUFycmF5ID0gKGFycmF5KSA9PiBhcnJheS5maWx0ZXIoKGVsKSA9PiB0eXBlb2YgZWwgPT09IFwibnVtYmVyXCIpO1xuXG4vKipcbiAqIFd5d2/FgmFuaWFcbiAqIE5pZSB6bWllbmlhaiBrb2R1IHBvbmnFvGVqIVxuICovXG5jb25zb2xlLmxvZyhcIi0tLSBpc0FycmF5SW5jbHVkZVZhbHVlIC0tLVwiKTtcbmNvbnN0IHJlc3VsdDEgPSBpc0FycmF5SW5jbHVkZVZhbHVlKDIsIFsxLCAyLCAzLCA1LCAzLCAyLCA1XSk7XG5jb25zb2xlLmxvZyhyZXN1bHQxKTtcblxuY29uc29sZS5sb2coXCJcXG4tLS0gc3VtIC0tLVwiKTtcbmNvbnN0IHJlc3VsdDIgPSBzdW0oMiwgMyk7XG5jb25zb2xlLmxvZyhyZXN1bHQyKTtcblxuY29uc29sZS5sb2coXCJcXG4tLS0gcHJpbnRBcnJheSAtLS1cIik7XG5wcmludEFycmF5KFtcIkFsYVwiLCBcIlpvc2lhXCIsIFwiRXdhXCIsIFwiUGlvdHJcIiwgXCJEYXJla1wiXSk7XG5cbmNvbnNvbGUubG9nKFwiXFxuLS0tIGZpbHRlck51bWJlcnNGcm9tQXJyYXkgLS0tXCIpO1xuY29uc3QgZmlsdGVyZWRBcnJheSA9IGZpbHRlck51bWJlcnNGcm9tQXJyYXkoW1wiQWxhXCIsIDUsIFwiRXdhXCIsIFwiUGlvdHJcIiwgMiwgXCJBZGFtXCIsIDE5XSk7XG5jb25zb2xlLmxvZyhmaWx0ZXJlZEFycmF5KTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCJlZmU5ZDQ3YTg0YWUxMjMxZTk3M1wiKSJdLCJuYW1lcyI6WyJzdW0iLCJudW0xIiwibnVtMiIsInByaW50QXJyYXkiLCJhcnJheSIsImZvckVhY2giLCJlbGVtZW50IiwiY29uc29sZSIsImxvZyIsImZpbHRlck51bWJlcnNGcm9tQXJyYXkiLCJmaWx0ZXIiLCJlbCIsInJlc3VsdDEiLCJpc0FycmF5SW5jbHVkZVZhbHVlIiwicmVzdWx0MiIsImZpbHRlcmVkQXJyYXkiXSwic291cmNlUm9vdCI6IiJ9