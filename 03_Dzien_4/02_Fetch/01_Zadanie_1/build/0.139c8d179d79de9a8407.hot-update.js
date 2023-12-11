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
  .then(function (name) {
    return console.log(name);
  })["catch"](function (error) {
    return console.warn(error);
  });
}
findBook("0747532680");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("c2f58dc4dfb685367062")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC4xMzljOGQxNzlkNzlkZTlhODQwNy5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFNBQVNBLFFBQVFBLENBQUNDLElBQUksRUFBQztFQUNuQkMsS0FBSyx1REFBQUMsTUFBQSxDQUF1REYsSUFBSSxDQUFFLENBQUMsQ0FDOURHLElBQUksQ0FBQyxVQUFBQyxRQUFRLEVBQUk7SUFDbEIsSUFBSSxDQUFDQSxRQUFRLENBQUNDLEVBQUUsRUFBRTtNQUNkLE1BQU0sSUFBSUMsS0FBSyxDQUFDLENBQUM7SUFDckI7SUFDQSxPQUFPRixRQUFRLENBQUNHLElBQUksQ0FBQyxDQUFDO0VBQzFCLENBQUM7RUFDRztFQUFBLENBQ0NKLElBQUksQ0FBQyxVQUFBSyxJQUFJO0lBQUEsT0FBSUMsT0FBTyxDQUFDQyxHQUFHLENBQUNGLElBQUksQ0FBQztFQUFBLEVBQUMsU0FDMUIsQ0FBQyxVQUFBRyxLQUFLO0lBQUEsT0FBSUYsT0FBTyxDQUFDRyxJQUFJLENBQUNELEtBQUssQ0FBQztFQUFBLEVBQUM7QUFDNUM7QUFFQVosUUFBUSxDQUFDLFlBQVksQ0FBQzs7Ozs7Ozs7VUN2QnRCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZXM2LWFzeW5jLWF3YWl0Ly4vMDNfRHppZW5fNC8wMl9GZXRjaC8wMV9aYWRhbmllXzEvanMvYXBwLmpzIiwid2VicGFjazovL2VzNi1hc3luYy1hd2FpdC93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiLy8gZmV0Y2goXCJodHRwczovL3d3dy5nb29nbGVhcGlzLmNvbS9ib29rcy92MS92b2x1bWVzP3E9aXNibjowNzQ3NTMyNjgwXCIpXG4vLyAgICAgLnRoZW4ocmVzcG9uc2UgPT4ge1xuLy8gICAgICAgICBpZiAoIXJlc3BvbnNlLm9rKSB7XG4vLyAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoKTtcbi8vICAgICAgICAgfVxuLy8gICAgICAgICByZXR1cm4gcmVzcG9uc2UuanNvbigpXG4vLyAgICAgfSlcbi8vICAgICAudGhlbihuYW1lID0+IGNvbnNvbGUubG9nKG5hbWUuaXRlbXNbMF0udm9sdW1lSW5mby50aXRsZSkpXG4vLyAgICAgLmNhdGNoKGVycm9yID0+IGNvbnNvbGUud2FybihlcnJvcikpO1xuXG5mdW5jdGlvbiBmaW5kQm9vayhpc2JuKXtcbiAgICBmZXRjaChgaHR0cHM6Ly93d3cuZ29vZ2xlYXBpcy5jb20vYm9va3MvdjEvdm9sdW1lcz9xPWlzYm46JHtpc2JufWApXG4gICAgICAgIC50aGVuKHJlc3BvbnNlID0+IHtcbiAgICAgICAgaWYgKCFyZXNwb25zZS5vaykge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJlc3BvbnNlLmpzb24oKVxuICAgIH0pXG4gICAgICAgIC8vIC50aGVuKG5hbWUgPT4gY29uc29sZS5sb2cobmFtZS5pdGVtc1swXS52b2x1bWVJbmZvLnRpdGxlKSlcbiAgICAgICAgLnRoZW4obmFtZSA9PiBjb25zb2xlLmxvZyhuYW1lKSlcbiAgICAgICAgLmNhdGNoKGVycm9yID0+IGNvbnNvbGUud2FybihlcnJvcikpO1xufVxuXG5maW5kQm9vayhcIjA3NDc1MzI2ODBcIilcbiIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcImMyZjU4ZGM0ZGZiNjg1MzY3MDYyXCIpIl0sIm5hbWVzIjpbImZpbmRCb29rIiwiaXNibiIsImZldGNoIiwiY29uY2F0IiwidGhlbiIsInJlc3BvbnNlIiwib2siLCJFcnJvciIsImpzb24iLCJuYW1lIiwiY29uc29sZSIsImxvZyIsImVycm9yIiwid2FybiJdLCJzb3VyY2VSb290IjoiIn0=