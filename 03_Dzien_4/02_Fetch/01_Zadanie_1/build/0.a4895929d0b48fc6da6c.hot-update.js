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
function createElement(book) {
  var title = book.items[0].volumeInfo.title;
  var h2 = document.createElement("h2");
  h2.innerText = title;
  selector.appendChild(h2);
}
findBook("0747532680");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("6ed7e5dff3b034dfc6c8")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5hNDg5NTkyOWQwYjQ4ZmM2ZGE2Yy5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsU0FBU0EsUUFBUUEsQ0FBQ0MsSUFBSSxFQUFDO0VBQ25CQyxLQUFLLHVEQUFBQyxNQUFBLENBQXVERixJQUFJLENBQUUsQ0FBQyxDQUM5REcsSUFBSSxDQUFDLFVBQUFDLFFBQVEsRUFBSTtJQUNsQixJQUFJLENBQUNBLFFBQVEsQ0FBQ0MsRUFBRSxFQUFFO01BQ2QsTUFBTSxJQUFJQyxLQUFLLENBQUMsQ0FBQztJQUNyQjtJQUNBLE9BQU9GLFFBQVEsQ0FBQ0csSUFBSSxDQUFDLENBQUM7RUFDMUIsQ0FBQyxDQUFDLENBQ0dKLElBQUksQ0FBQyxVQUFBSyxJQUFJO0lBQUEsT0FBSUMsYUFBYSxDQUFDRCxJQUFJLENBQUM7RUFBQSxFQUFDLFNBQzVCLENBQUMsVUFBQUUsS0FBSztJQUFBLE9BQUlDLE9BQU8sQ0FBQ0MsSUFBSSxDQUFDRixLQUFLLENBQUM7RUFBQSxFQUFDO0FBQzVDO0FBRUEsSUFBTUcsUUFBUSxHQUFHQyxRQUFRLENBQUNDLGFBQWEsQ0FBQyxZQUFZLENBQUM7QUFDckQsU0FBU04sYUFBYUEsQ0FBQ0QsSUFBSSxFQUFDO0VBQ3hCLElBQU1RLEtBQUssR0FBR1IsSUFBSSxDQUFDUyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUNDLFVBQVUsQ0FBQ0YsS0FBSztFQUM1QyxJQUFNRyxFQUFFLEdBQUdMLFFBQVEsQ0FBQ0wsYUFBYSxDQUFDLElBQUksQ0FBQztFQUN2Q1UsRUFBRSxDQUFDQyxTQUFTLEdBQUdKLEtBQUs7RUFDcEJILFFBQVEsQ0FBQ1EsV0FBVyxDQUFDRixFQUFFLENBQUM7QUFDNUI7QUFFQXBCLFFBQVEsQ0FBQyxZQUFZLENBQUM7Ozs7Ozs7O1VDcEJ0QiIsInNvdXJjZXMiOlsid2VicGFjazovL2VzNi1hc3luYy1hd2FpdC8uLzAzX0R6aWVuXzQvMDJfRmV0Y2gvMDFfWmFkYW5pZV8xL2pzL2FwcC5qcyIsIndlYnBhY2s6Ly9lczYtYXN5bmMtYXdhaXQvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbImZ1bmN0aW9uIGZpbmRCb29rKGlzYm4pe1xuICAgIGZldGNoKGBodHRwczovL3d3dy5nb29nbGVhcGlzLmNvbS9ib29rcy92MS92b2x1bWVzP3E9aXNibjoke2lzYm59YClcbiAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4ge1xuICAgICAgICBpZiAoIXJlc3BvbnNlLm9rKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmVzcG9uc2UuanNvbigpXG4gICAgfSlcbiAgICAgICAgLnRoZW4oYm9vayA9PiBjcmVhdGVFbGVtZW50KGJvb2spKVxuICAgICAgICAuY2F0Y2goZXJyb3IgPT4gY29uc29sZS53YXJuKGVycm9yKSk7XG59XG5cbmNvbnN0IHNlbGVjdG9yID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5ib29rLWluZm9cIik7XG5mdW5jdGlvbiBjcmVhdGVFbGVtZW50KGJvb2spe1xuICAgIGNvbnN0IHRpdGxlID0gYm9vay5pdGVtc1swXS52b2x1bWVJbmZvLnRpdGxlO1xuICAgIGNvbnN0IGgyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgyXCIpO1xuICAgIGgyLmlubmVyVGV4dCA9IHRpdGxlO1xuICAgIHNlbGVjdG9yLmFwcGVuZENoaWxkKGgyKTtcbn1cblxuZmluZEJvb2soXCIwNzQ3NTMyNjgwXCIpO1xuIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiNmVkN2U1ZGZmM2IwMzRkZmM2YzhcIikiXSwibmFtZXMiOlsiZmluZEJvb2siLCJpc2JuIiwiZmV0Y2giLCJjb25jYXQiLCJ0aGVuIiwicmVzcG9uc2UiLCJvayIsIkVycm9yIiwianNvbiIsImJvb2siLCJjcmVhdGVFbGVtZW50IiwiZXJyb3IiLCJjb25zb2xlIiwid2FybiIsInNlbGVjdG9yIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwidGl0bGUiLCJpdGVtcyIsInZvbHVtZUluZm8iLCJoMiIsImlubmVyVGV4dCIsImFwcGVuZENoaWxkIl0sInNvdXJjZVJvb3QiOiIifQ==