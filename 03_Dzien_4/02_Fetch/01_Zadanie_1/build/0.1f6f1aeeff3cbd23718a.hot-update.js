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
var selector = document.querySelector(".book-info");
var input = document.querySelector("input");
function createElement(book) {
  var title = book.items[0].volumeInfo.title;
  var h2 = document.createElement("h2");
  h2.innerText = title;
  selector.appendChild(h2);
}
findBook(input.value);

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("164b0ff8dd3c2c2723ea")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC4xZjZmMWFlZWZmM2NiZDIzNzE4YS5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsU0FBU0EsUUFBUUEsQ0FBQ0MsSUFBSSxFQUFDO0VBQ25CQyxLQUFLLHVEQUFBQyxNQUFBLENBQXVERixJQUFJLENBQUUsQ0FBQyxDQUM5REcsSUFBSSxDQUFDLFVBQUFDLFFBQVEsRUFBSTtJQUNsQixJQUFJLENBQUNBLFFBQVEsQ0FBQ0MsRUFBRSxFQUFFO01BQ2QsTUFBTSxJQUFJQyxLQUFLLENBQUMsQ0FBQztJQUNyQjtJQUNBLE9BQU9GLFFBQVEsQ0FBQ0csSUFBSSxDQUFDLENBQUM7RUFDMUIsQ0FBQyxDQUFDLENBQ0dKLElBQUksQ0FBQyxVQUFBSyxJQUFJO0lBQUEsT0FBSUMsYUFBYSxDQUFDRCxJQUFJLENBQUM7RUFBQSxFQUFDLFNBQzVCLENBQUMsVUFBQUUsS0FBSztJQUFBLE9BQUlDLE9BQU8sQ0FBQ0MsSUFBSSxDQUFDRixLQUFLLENBQUM7RUFBQSxFQUFDO0FBQzVDO0FBRUEsSUFBTUcsUUFBUSxHQUFHQyxRQUFRLENBQUNDLGFBQWEsQ0FBQyxZQUFZLENBQUM7QUFDckQsSUFBTUMsS0FBSyxHQUFHRixRQUFRLENBQUNDLGFBQWEsQ0FBQyxPQUFPLENBQUM7QUFDN0MsU0FBU04sYUFBYUEsQ0FBQ0QsSUFBSSxFQUFDO0VBQ3hCLElBQU1TLEtBQUssR0FBR1QsSUFBSSxDQUFDVSxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUNDLFVBQVUsQ0FBQ0YsS0FBSztFQUM1QyxJQUFNRyxFQUFFLEdBQUdOLFFBQVEsQ0FBQ0wsYUFBYSxDQUFDLElBQUksQ0FBQztFQUN2Q1csRUFBRSxDQUFDQyxTQUFTLEdBQUdKLEtBQUs7RUFDcEJKLFFBQVEsQ0FBQ1MsV0FBVyxDQUFDRixFQUFFLENBQUM7QUFDNUI7QUFFQXJCLFFBQVEsQ0FBQ2lCLEtBQUssQ0FBQ08sS0FBSyxDQUFDOzs7Ozs7OztVQ3JCckIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9lczYtYXN5bmMtYXdhaXQvLi8wM19Eemllbl80LzAyX0ZldGNoLzAxX1phZGFuaWVfMS9qcy9hcHAuanMiLCJ3ZWJwYWNrOi8vZXM2LWFzeW5jLWF3YWl0L3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyJmdW5jdGlvbiBmaW5kQm9vayhpc2JuKXtcbiAgICBmZXRjaChgaHR0cHM6Ly93d3cuZ29vZ2xlYXBpcy5jb20vYm9va3MvdjEvdm9sdW1lcz9xPWlzYm46JHtpc2JufWApXG4gICAgICAgIC50aGVuKHJlc3BvbnNlID0+IHtcbiAgICAgICAgaWYgKCFyZXNwb25zZS5vaykge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJlc3BvbnNlLmpzb24oKVxuICAgIH0pXG4gICAgICAgIC50aGVuKGJvb2sgPT4gY3JlYXRlRWxlbWVudChib29rKSlcbiAgICAgICAgLmNhdGNoKGVycm9yID0+IGNvbnNvbGUud2FybihlcnJvcikpO1xufVxuXG5jb25zdCBzZWxlY3RvciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYm9vay1pbmZvXCIpO1xuY29uc3QgaW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiaW5wdXRcIik7XG5mdW5jdGlvbiBjcmVhdGVFbGVtZW50KGJvb2spe1xuICAgIGNvbnN0IHRpdGxlID0gYm9vay5pdGVtc1swXS52b2x1bWVJbmZvLnRpdGxlO1xuICAgIGNvbnN0IGgyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgyXCIpO1xuICAgIGgyLmlubmVyVGV4dCA9IHRpdGxlO1xuICAgIHNlbGVjdG9yLmFwcGVuZENoaWxkKGgyKTtcbn1cblxuZmluZEJvb2soaW5wdXQudmFsdWUpO1xuIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiMTY0YjBmZjhkZDNjMmMyNzIzZWFcIikiXSwibmFtZXMiOlsiZmluZEJvb2siLCJpc2JuIiwiZmV0Y2giLCJjb25jYXQiLCJ0aGVuIiwicmVzcG9uc2UiLCJvayIsIkVycm9yIiwianNvbiIsImJvb2siLCJjcmVhdGVFbGVtZW50IiwiZXJyb3IiLCJjb25zb2xlIiwid2FybiIsInNlbGVjdG9yIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwiaW5wdXQiLCJ0aXRsZSIsIml0ZW1zIiwidm9sdW1lSW5mbyIsImgyIiwiaW5uZXJUZXh0IiwiYXBwZW5kQ2hpbGQiLCJ2YWx1ZSJdLCJzb3VyY2VSb290IjoiIn0=