self["webpackHotUpdatees6_async_await"](0,{

/***/ 24:
/***/ (() => {

// fetch("https://www.googleapis.com/books/v1/volumes?q=isbn:0747532680")
//     .then(response => {
//         if (!response.ok) {
//             throw new Error();
//         }
//         return response.json()
//     })
//     .then(name => console.log(name.items[0].volumeInfo.title))
//     .catch(error => console.warn(error));

function findBook(isbn) {
  fetch("https://www.googleapis.com/books/v1/volumes?q=isbn:".concat(isbn)).then(function (response) {
    if (!response.ok) {
      throw new Error();
    }
    return response.json();
  })
  // .then(name => console.log(name.items[0].volumeInfo.title))
  .then(function (book) {
    return console.log(book);
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
/******/ 	__webpack_require__.h = () => ("a4895929d0b48fc6da6c")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5lYzM1MjY0YjdiNzdlOGNiYmFhOS5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFNBQVNBLFFBQVFBLENBQUNDLElBQUksRUFBQztFQUNuQkMsS0FBSyx1REFBQUMsTUFBQSxDQUF1REYsSUFBSSxDQUFFLENBQUMsQ0FDOURHLElBQUksQ0FBQyxVQUFBQyxRQUFRLEVBQUk7SUFDbEIsSUFBSSxDQUFDQSxRQUFRLENBQUNDLEVBQUUsRUFBRTtNQUNkLE1BQU0sSUFBSUMsS0FBSyxDQUFDLENBQUM7SUFDckI7SUFDQSxPQUFPRixRQUFRLENBQUNHLElBQUksQ0FBQyxDQUFDO0VBQzFCLENBQUM7RUFDRztFQUFBLENBQ0NKLElBQUksQ0FBQyxVQUFBSyxJQUFJO0lBQUEsT0FBSUMsT0FBTyxDQUFDQyxHQUFHLENBQUNGLElBQUksQ0FBQztFQUFBLEVBQUMsU0FDMUIsQ0FBQyxVQUFBRyxLQUFLO0lBQUEsT0FBSUYsT0FBTyxDQUFDRyxJQUFJLENBQUNELEtBQUssQ0FBQztFQUFBLEVBQUM7QUFDNUM7QUFFQSxJQUFNRSxRQUFRLEdBQUdDLFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLFlBQVksQ0FBQztBQUNyRCxTQUFTQyxhQUFhQSxDQUFDUixJQUFJLEVBQUM7RUFDeEIsSUFBTVMsS0FBSyxHQUFHVCxJQUFJLENBQUNVLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQ0MsVUFBVSxDQUFDRixLQUFLO0VBQzVDLElBQU1HLEVBQUUsR0FBR04sUUFBUSxDQUFDRSxhQUFhLENBQUMsSUFBSSxDQUFDO0VBQ3ZDSSxFQUFFLENBQUNDLFNBQVMsR0FBR0osS0FBSztFQUNwQkosUUFBUSxDQUFDUyxXQUFXLENBQUNGLEVBQUUsQ0FBQztBQUM1QjtBQUVBckIsUUFBUSxDQUFDLFlBQVksQ0FBQzs7Ozs7Ozs7VUMvQnRCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZXM2LWFzeW5jLWF3YWl0Ly4vMDNfRHppZW5fNC8wMl9GZXRjaC8wMV9aYWRhbmllXzEvanMvYXBwLmpzIiwid2VicGFjazovL2VzNi1hc3luYy1hd2FpdC93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiLy8gZmV0Y2goXCJodHRwczovL3d3dy5nb29nbGVhcGlzLmNvbS9ib29rcy92MS92b2x1bWVzP3E9aXNibjowNzQ3NTMyNjgwXCIpXG4vLyAgICAgLnRoZW4ocmVzcG9uc2UgPT4ge1xuLy8gICAgICAgICBpZiAoIXJlc3BvbnNlLm9rKSB7XG4vLyAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoKTtcbi8vICAgICAgICAgfVxuLy8gICAgICAgICByZXR1cm4gcmVzcG9uc2UuanNvbigpXG4vLyAgICAgfSlcbi8vICAgICAudGhlbihuYW1lID0+IGNvbnNvbGUubG9nKG5hbWUuaXRlbXNbMF0udm9sdW1lSW5mby50aXRsZSkpXG4vLyAgICAgLmNhdGNoKGVycm9yID0+IGNvbnNvbGUud2FybihlcnJvcikpO1xuXG5mdW5jdGlvbiBmaW5kQm9vayhpc2JuKXtcbiAgICBmZXRjaChgaHR0cHM6Ly93d3cuZ29vZ2xlYXBpcy5jb20vYm9va3MvdjEvdm9sdW1lcz9xPWlzYm46JHtpc2JufWApXG4gICAgICAgIC50aGVuKHJlc3BvbnNlID0+IHtcbiAgICAgICAgaWYgKCFyZXNwb25zZS5vaykge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJlc3BvbnNlLmpzb24oKVxuICAgIH0pXG4gICAgICAgIC8vIC50aGVuKG5hbWUgPT4gY29uc29sZS5sb2cobmFtZS5pdGVtc1swXS52b2x1bWVJbmZvLnRpdGxlKSlcbiAgICAgICAgLnRoZW4oYm9vayA9PiBjb25zb2xlLmxvZyhib29rKSlcbiAgICAgICAgLmNhdGNoKGVycm9yID0+IGNvbnNvbGUud2FybihlcnJvcikpO1xufVxuXG5jb25zdCBzZWxlY3RvciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYm9vay1pbmZvXCIpO1xuZnVuY3Rpb24gY3JlYXRlRWxlbWVudChib29rKXtcbiAgICBjb25zdCB0aXRsZSA9IGJvb2suaXRlbXNbMF0udm9sdW1lSW5mby50aXRsZTtcbiAgICBjb25zdCBoMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMlwiKTtcbiAgICBoMi5pbm5lclRleHQgPSB0aXRsZTtcbiAgICBzZWxlY3Rvci5hcHBlbmRDaGlsZChoMik7XG59XG5cbmZpbmRCb29rKFwiMDc0NzUzMjY4MFwiKVxuIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiYTQ4OTU5MjlkMGI0OGZjNmRhNmNcIikiXSwibmFtZXMiOlsiZmluZEJvb2siLCJpc2JuIiwiZmV0Y2giLCJjb25jYXQiLCJ0aGVuIiwicmVzcG9uc2UiLCJvayIsIkVycm9yIiwianNvbiIsImJvb2siLCJjb25zb2xlIiwibG9nIiwiZXJyb3IiLCJ3YXJuIiwic2VsZWN0b3IiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJjcmVhdGVFbGVtZW50IiwidGl0bGUiLCJpdGVtcyIsInZvbHVtZUluZm8iLCJoMiIsImlubmVyVGV4dCIsImFwcGVuZENoaWxkIl0sInNvdXJjZVJvb3QiOiIifQ==