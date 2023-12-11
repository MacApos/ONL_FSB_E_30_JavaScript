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
var button = document.querySelector("button");
button.addEventListener("submit", function () {
  console.log(this);
});
function createElement(book) {
  var title = book.items[0].volumeInfo.title;
  var h2 = document.createElement("h2");
  h2.innerText = title;
  selector.appendChild(h2);
}

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("ef854427f88a2d0f016d")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC42ZTdhZTZlY2NkNDg4NWQwYTkzYS5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsU0FBU0EsUUFBUUEsQ0FBQ0MsSUFBSSxFQUFDO0VBQ25CQyxLQUFLLHVEQUFBQyxNQUFBLENBQXVERixJQUFJLENBQUUsQ0FBQyxDQUM5REcsSUFBSSxDQUFDLFVBQUFDLFFBQVEsRUFBSTtJQUNsQixJQUFJLENBQUNBLFFBQVEsQ0FBQ0MsRUFBRSxFQUFFO01BQ2QsTUFBTSxJQUFJQyxLQUFLLENBQUMsQ0FBQztJQUNyQjtJQUNBLE9BQU9GLFFBQVEsQ0FBQ0csSUFBSSxDQUFDLENBQUM7RUFDMUIsQ0FBQyxDQUFDLENBQ0dKLElBQUksQ0FBQyxVQUFBSyxJQUFJO0lBQUEsT0FBSUMsYUFBYSxDQUFDRCxJQUFJLENBQUM7RUFBQSxFQUFDLFNBQzVCLENBQUMsVUFBQUUsS0FBSztJQUFBLE9BQUlDLE9BQU8sQ0FBQ0MsSUFBSSxDQUFDRixLQUFLLENBQUM7RUFBQSxFQUFDO0FBQzVDO0FBRUEsSUFBTUcsUUFBUSxHQUFHQyxRQUFRLENBQUNDLGFBQWEsQ0FBQyxZQUFZLENBQUM7QUFDckQsSUFBTUMsTUFBTSxHQUFHRixRQUFRLENBQUNDLGFBQWEsQ0FBQyxRQUFRLENBQUM7QUFFL0NDLE1BQU0sQ0FBQ0MsZ0JBQWdCLENBQUMsUUFBUSxFQUFFLFlBQVc7RUFDekNOLE9BQU8sQ0FBQ08sR0FBRyxDQUFDLElBQUksQ0FBQztBQUNyQixDQUFDLENBQUM7QUFDRixTQUFTVCxhQUFhQSxDQUFDRCxJQUFJLEVBQUM7RUFDeEIsSUFBTVcsS0FBSyxHQUFHWCxJQUFJLENBQUNZLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQ0MsVUFBVSxDQUFDRixLQUFLO0VBQzVDLElBQU1HLEVBQUUsR0FBR1IsUUFBUSxDQUFDTCxhQUFhLENBQUMsSUFBSSxDQUFDO0VBQ3ZDYSxFQUFFLENBQUNDLFNBQVMsR0FBR0osS0FBSztFQUNwQk4sUUFBUSxDQUFDVyxXQUFXLENBQUNGLEVBQUUsQ0FBQztBQUM1Qjs7Ozs7Ozs7VUN2QkEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9lczYtYXN5bmMtYXdhaXQvLi8wM19Eemllbl80LzAyX0ZldGNoLzAxX1phZGFuaWVfMS9qcy9hcHAuanMiLCJ3ZWJwYWNrOi8vZXM2LWFzeW5jLWF3YWl0L3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyJmdW5jdGlvbiBmaW5kQm9vayhpc2JuKXtcbiAgICBmZXRjaChgaHR0cHM6Ly93d3cuZ29vZ2xlYXBpcy5jb20vYm9va3MvdjEvdm9sdW1lcz9xPWlzYm46JHtpc2JufWApXG4gICAgICAgIC50aGVuKHJlc3BvbnNlID0+IHtcbiAgICAgICAgaWYgKCFyZXNwb25zZS5vaykge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJlc3BvbnNlLmpzb24oKVxuICAgIH0pXG4gICAgICAgIC50aGVuKGJvb2sgPT4gY3JlYXRlRWxlbWVudChib29rKSlcbiAgICAgICAgLmNhdGNoKGVycm9yID0+IGNvbnNvbGUud2FybihlcnJvcikpO1xufVxuXG5jb25zdCBzZWxlY3RvciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYm9vay1pbmZvXCIpO1xuY29uc3QgYnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImJ1dHRvblwiKTtcblxuYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJzdWJtaXRcIiwgZnVuY3Rpb24gKCl7XG4gICAgY29uc29sZS5sb2codGhpcylcbn0pXG5mdW5jdGlvbiBjcmVhdGVFbGVtZW50KGJvb2spe1xuICAgIGNvbnN0IHRpdGxlID0gYm9vay5pdGVtc1swXS52b2x1bWVJbmZvLnRpdGxlO1xuICAgIGNvbnN0IGgyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgyXCIpO1xuICAgIGgyLmlubmVyVGV4dCA9IHRpdGxlO1xuICAgIHNlbGVjdG9yLmFwcGVuZENoaWxkKGgyKTtcbn1cblxuIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiZWY4NTQ0MjdmODhhMmQwZjAxNmRcIikiXSwibmFtZXMiOlsiZmluZEJvb2siLCJpc2JuIiwiZmV0Y2giLCJjb25jYXQiLCJ0aGVuIiwicmVzcG9uc2UiLCJvayIsIkVycm9yIiwianNvbiIsImJvb2siLCJjcmVhdGVFbGVtZW50IiwiZXJyb3IiLCJjb25zb2xlIiwid2FybiIsInNlbGVjdG9yIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwiYnV0dG9uIiwiYWRkRXZlbnRMaXN0ZW5lciIsImxvZyIsInRpdGxlIiwiaXRlbXMiLCJ2b2x1bWVJbmZvIiwiaDIiLCJpbm5lclRleHQiLCJhcHBlbmRDaGlsZCJdLCJzb3VyY2VSb290IjoiIn0=