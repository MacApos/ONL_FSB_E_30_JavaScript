self["webpackHotUpdatees6_async_await"](0,{

/***/ 24:
/***/ (() => {

function findBook(isbn) {
  fetch("https://www.googleapis.com/books/v1/volumes?q=isbn:".concat(isbn)).then(function (response) {
    if (!response.ok) {
      throw new Error();
    }
    return response.json();
  }).then(function (book) {
    return createElement(book);
  })["catch"](function (error) {
    return console.warn(error);
  });
}
function createElement(book) {
  var title = book.items[0].volumeInfo.title;
  var h2 = document.createElement("h2");
  h2.innerText = title;
  selector.appendChild(h2);
}
var selector = document.querySelector(".book-info");
var form = document.querySelector("form");
var input = form.querySelector("input");
form.addEventListener("submit", function (event) {
  event.preventDefault();
  findBook(input.value);
});

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("944f2c0d9e475abbadea")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5jYmFjZWY2YzhlYzc4MjliZmY2Ni5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsU0FBU0EsUUFBUUEsQ0FBQ0MsSUFBSSxFQUFDO0VBQ25CQyxLQUFLLHVEQUFBQyxNQUFBLENBQXVERixJQUFJLENBQUUsQ0FBQyxDQUM5REcsSUFBSSxDQUFDLFVBQUFDLFFBQVEsRUFBSTtJQUNsQixJQUFJLENBQUNBLFFBQVEsQ0FBQ0MsRUFBRSxFQUFFO01BQ2QsTUFBTSxJQUFJQyxLQUFLLENBQUMsQ0FBQztJQUNyQjtJQUNBLE9BQU9GLFFBQVEsQ0FBQ0csSUFBSSxDQUFDLENBQUM7RUFDMUIsQ0FBQyxDQUFDLENBQ0dKLElBQUksQ0FBQyxVQUFBSyxJQUFJO0lBQUEsT0FBSUMsYUFBYSxDQUFDRCxJQUFJLENBQUM7RUFBQSxFQUFDLFNBQzVCLENBQUMsVUFBQUUsS0FBSztJQUFBLE9BQUlDLE9BQU8sQ0FBQ0MsSUFBSSxDQUFDRixLQUFLLENBQUM7RUFBQSxFQUFDO0FBQzVDO0FBRUEsU0FBU0QsYUFBYUEsQ0FBQ0QsSUFBSSxFQUFDO0VBQ3hCLElBQU1LLEtBQUssR0FBR0wsSUFBSSxDQUFDTSxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUNDLFVBQVUsQ0FBQ0YsS0FBSztFQUM1QyxJQUFNRyxFQUFFLEdBQUdDLFFBQVEsQ0FBQ1IsYUFBYSxDQUFDLElBQUksQ0FBQztFQUN2Q08sRUFBRSxDQUFDRSxTQUFTLEdBQUdMLEtBQUs7RUFDcEJNLFFBQVEsQ0FBQ0MsV0FBVyxDQUFDSixFQUFFLENBQUM7QUFDNUI7QUFFQSxJQUFNRyxRQUFRLEdBQUdGLFFBQVEsQ0FBQ0ksYUFBYSxDQUFDLFlBQVksQ0FBQztBQUNyRCxJQUFNQyxJQUFJLEdBQUdMLFFBQVEsQ0FBQ0ksYUFBYSxDQUFDLE1BQU0sQ0FBQztBQUMzQyxJQUFNRSxLQUFLLEdBQUdELElBQUksQ0FBQ0QsYUFBYSxDQUFDLE9BQU8sQ0FBQztBQUN6Q0MsSUFBSSxDQUFDRSxnQkFBZ0IsQ0FBQyxRQUFRLEVBQUUsVUFBVUMsS0FBSyxFQUFDO0VBQzVDQSxLQUFLLENBQUNDLGNBQWMsQ0FBQyxDQUFDO0VBQ3RCM0IsUUFBUSxDQUFDd0IsS0FBSyxDQUFDSSxLQUFLLENBQUM7QUFDekIsQ0FBQyxDQUFDOzs7Ozs7OztVQ3pCRiIsInNvdXJjZXMiOlsid2VicGFjazovL2VzNi1hc3luYy1hd2FpdC8uLzAzX0R6aWVuXzQvMDJfRmV0Y2gvMDFfWmFkYW5pZV8xL2pzL2FwcC5qcyIsIndlYnBhY2s6Ly9lczYtYXN5bmMtYXdhaXQvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbImZ1bmN0aW9uIGZpbmRCb29rKGlzYm4pe1xuICAgIGZldGNoKGBodHRwczovL3d3dy5nb29nbGVhcGlzLmNvbS9ib29rcy92MS92b2x1bWVzP3E9aXNibjoke2lzYm59YClcbiAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4ge1xuICAgICAgICBpZiAoIXJlc3BvbnNlLm9rKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmVzcG9uc2UuanNvbigpXG4gICAgfSlcbiAgICAgICAgLnRoZW4oYm9vayA9PiBjcmVhdGVFbGVtZW50KGJvb2spKVxuICAgICAgICAuY2F0Y2goZXJyb3IgPT4gY29uc29sZS53YXJuKGVycm9yKSk7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUVsZW1lbnQoYm9vayl7XG4gICAgY29uc3QgdGl0bGUgPSBib29rLml0ZW1zWzBdLnZvbHVtZUluZm8udGl0bGU7XG4gICAgY29uc3QgaDIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDJcIik7XG4gICAgaDIuaW5uZXJUZXh0ID0gdGl0bGU7XG4gICAgc2VsZWN0b3IuYXBwZW5kQ2hpbGQoaDIpO1xufVxuXG5jb25zdCBzZWxlY3RvciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYm9vay1pbmZvXCIpO1xuY29uc3QgZm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJmb3JtXCIpO1xuY29uc3QgaW5wdXQgPSBmb3JtLnF1ZXJ5U2VsZWN0b3IoXCJpbnB1dFwiKTtcbmZvcm0uYWRkRXZlbnRMaXN0ZW5lcihcInN1Ym1pdFwiLCBmdW5jdGlvbiAoZXZlbnQpe1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgZmluZEJvb2soaW5wdXQudmFsdWUpO1xufSlcblxuXG4iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCI5NDRmMmMwZDllNDc1YWJiYWRlYVwiKSJdLCJuYW1lcyI6WyJmaW5kQm9vayIsImlzYm4iLCJmZXRjaCIsImNvbmNhdCIsInRoZW4iLCJyZXNwb25zZSIsIm9rIiwiRXJyb3IiLCJqc29uIiwiYm9vayIsImNyZWF0ZUVsZW1lbnQiLCJlcnJvciIsImNvbnNvbGUiLCJ3YXJuIiwidGl0bGUiLCJpdGVtcyIsInZvbHVtZUluZm8iLCJoMiIsImRvY3VtZW50IiwiaW5uZXJUZXh0Iiwic2VsZWN0b3IiLCJhcHBlbmRDaGlsZCIsInF1ZXJ5U2VsZWN0b3IiLCJmb3JtIiwiaW5wdXQiLCJhZGRFdmVudExpc3RlbmVyIiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsInZhbHVlIl0sInNvdXJjZVJvb3QiOiIifQ==