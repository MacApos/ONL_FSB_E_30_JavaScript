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
console.log(input.value);
function createElement(book) {
  var title = book.items[0].volumeInfo.title;
  var h2 = document.createElement("h2");
  h2.innerText = title;
  selector.appendChild(h2);
}
findBook(input);

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("cc910849b5ccff3c3bdd")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5hYmQwNzA1MWQxOWEwYWFlODQyNS5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsU0FBU0EsUUFBUUEsQ0FBQ0MsSUFBSSxFQUFDO0VBQ25CQyxLQUFLLHVEQUFBQyxNQUFBLENBQXVERixJQUFJLENBQUUsQ0FBQyxDQUM5REcsSUFBSSxDQUFDLFVBQUFDLFFBQVEsRUFBSTtJQUNsQixJQUFJLENBQUNBLFFBQVEsQ0FBQ0MsRUFBRSxFQUFFO01BQ2QsTUFBTSxJQUFJQyxLQUFLLENBQUMsQ0FBQztJQUNyQjtJQUNBLE9BQU9GLFFBQVEsQ0FBQ0csSUFBSSxDQUFDLENBQUM7RUFDMUIsQ0FBQyxDQUFDLENBQ0dKLElBQUksQ0FBQyxVQUFBSyxJQUFJO0lBQUEsT0FBSUMsYUFBYSxDQUFDRCxJQUFJLENBQUM7RUFBQSxFQUFDLFNBQzVCLENBQUMsVUFBQUUsS0FBSztJQUFBLE9BQUlDLE9BQU8sQ0FBQ0MsSUFBSSxDQUFDRixLQUFLLENBQUM7RUFBQSxFQUFDO0FBQzVDO0FBRUEsSUFBTUcsUUFBUSxHQUFHQyxRQUFRLENBQUNDLGFBQWEsQ0FBQyxZQUFZLENBQUM7QUFDckQsSUFBTUMsS0FBSyxHQUFHRixRQUFRLENBQUNDLGFBQWEsQ0FBQyxPQUFPLENBQUM7QUFDN0NKLE9BQU8sQ0FBQ00sR0FBRyxDQUFDRCxLQUFLLENBQUNFLEtBQUssQ0FBQztBQUN4QixTQUFTVCxhQUFhQSxDQUFDRCxJQUFJLEVBQUM7RUFDeEIsSUFBTVcsS0FBSyxHQUFHWCxJQUFJLENBQUNZLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQ0MsVUFBVSxDQUFDRixLQUFLO0VBQzVDLElBQU1HLEVBQUUsR0FBR1IsUUFBUSxDQUFDTCxhQUFhLENBQUMsSUFBSSxDQUFDO0VBQ3ZDYSxFQUFFLENBQUNDLFNBQVMsR0FBR0osS0FBSztFQUNwQk4sUUFBUSxDQUFDVyxXQUFXLENBQUNGLEVBQUUsQ0FBQztBQUM1QjtBQUVBdkIsUUFBUSxDQUFDaUIsS0FBSyxDQUFDOzs7Ozs7OztVQ3RCZiIsInNvdXJjZXMiOlsid2VicGFjazovL2VzNi1hc3luYy1hd2FpdC8uLzAzX0R6aWVuXzQvMDJfRmV0Y2gvMDFfWmFkYW5pZV8xL2pzL2FwcC5qcyIsIndlYnBhY2s6Ly9lczYtYXN5bmMtYXdhaXQvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbImZ1bmN0aW9uIGZpbmRCb29rKGlzYm4pe1xuICAgIGZldGNoKGBodHRwczovL3d3dy5nb29nbGVhcGlzLmNvbS9ib29rcy92MS92b2x1bWVzP3E9aXNibjoke2lzYm59YClcbiAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4ge1xuICAgICAgICBpZiAoIXJlc3BvbnNlLm9rKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmVzcG9uc2UuanNvbigpXG4gICAgfSlcbiAgICAgICAgLnRoZW4oYm9vayA9PiBjcmVhdGVFbGVtZW50KGJvb2spKVxuICAgICAgICAuY2F0Y2goZXJyb3IgPT4gY29uc29sZS53YXJuKGVycm9yKSk7XG59XG5cbmNvbnN0IHNlbGVjdG9yID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5ib29rLWluZm9cIik7XG5jb25zdCBpbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJpbnB1dFwiKTtcbmNvbnNvbGUubG9nKGlucHV0LnZhbHVlKVxuZnVuY3Rpb24gY3JlYXRlRWxlbWVudChib29rKXtcbiAgICBjb25zdCB0aXRsZSA9IGJvb2suaXRlbXNbMF0udm9sdW1lSW5mby50aXRsZTtcbiAgICBjb25zdCBoMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMlwiKTtcbiAgICBoMi5pbm5lclRleHQgPSB0aXRsZTtcbiAgICBzZWxlY3Rvci5hcHBlbmRDaGlsZChoMik7XG59XG5cbmZpbmRCb29rKGlucHV0KTtcbiIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcImNjOTEwODQ5YjVjY2ZmM2MzYmRkXCIpIl0sIm5hbWVzIjpbImZpbmRCb29rIiwiaXNibiIsImZldGNoIiwiY29uY2F0IiwidGhlbiIsInJlc3BvbnNlIiwib2siLCJFcnJvciIsImpzb24iLCJib29rIiwiY3JlYXRlRWxlbWVudCIsImVycm9yIiwiY29uc29sZSIsIndhcm4iLCJzZWxlY3RvciIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsImlucHV0IiwibG9nIiwidmFsdWUiLCJ0aXRsZSIsIml0ZW1zIiwidm9sdW1lSW5mbyIsImgyIiwiaW5uZXJUZXh0IiwiYXBwZW5kQ2hpbGQiXSwic291cmNlUm9vdCI6IiJ9