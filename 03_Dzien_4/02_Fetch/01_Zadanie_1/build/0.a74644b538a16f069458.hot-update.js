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
function createElement(book) {
  var title = book.items[0].volumeInfo.title;
}
findBook("0747532680");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("ec35264b7b77e8cbbaa9")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5hNzQ2NDRiNTM4YTE2ZjA2OTQ1OC5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFNBQVNBLFFBQVFBLENBQUNDLElBQUksRUFBQztFQUNuQkMsS0FBSyx1REFBQUMsTUFBQSxDQUF1REYsSUFBSSxDQUFFLENBQUMsQ0FDOURHLElBQUksQ0FBQyxVQUFBQyxRQUFRLEVBQUk7SUFDbEIsSUFBSSxDQUFDQSxRQUFRLENBQUNDLEVBQUUsRUFBRTtNQUNkLE1BQU0sSUFBSUMsS0FBSyxDQUFDLENBQUM7SUFDckI7SUFDQSxPQUFPRixRQUFRLENBQUNHLElBQUksQ0FBQyxDQUFDO0VBQzFCLENBQUM7RUFDRztFQUFBLENBQ0NKLElBQUksQ0FBQyxVQUFBSyxJQUFJO0lBQUEsT0FBSUMsT0FBTyxDQUFDQyxHQUFHLENBQUNGLElBQUksQ0FBQztFQUFBLEVBQUMsU0FDMUIsQ0FBQyxVQUFBRyxLQUFLO0lBQUEsT0FBSUYsT0FBTyxDQUFDRyxJQUFJLENBQUNELEtBQUssQ0FBQztFQUFBLEVBQUM7QUFDNUM7QUFFQSxTQUFTRSxhQUFhQSxDQUFDTCxJQUFJLEVBQUM7RUFDeEIsSUFBTU0sS0FBSyxHQUFHTixJQUFJLENBQUNPLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQ0MsVUFBVSxDQUFDRixLQUFLO0FBRWhEO0FBRUFmLFFBQVEsQ0FBQyxZQUFZLENBQUM7Ozs7Ozs7O1VDNUJ0QiIsInNvdXJjZXMiOlsid2VicGFjazovL2VzNi1hc3luYy1hd2FpdC8uLzAzX0R6aWVuXzQvMDJfRmV0Y2gvMDFfWmFkYW5pZV8xL2pzL2FwcC5qcyIsIndlYnBhY2s6Ly9lczYtYXN5bmMtYXdhaXQvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIGZldGNoKFwiaHR0cHM6Ly93d3cuZ29vZ2xlYXBpcy5jb20vYm9va3MvdjEvdm9sdW1lcz9xPWlzYm46MDc0NzUzMjY4MFwiKVxuLy8gICAgIC50aGVuKHJlc3BvbnNlID0+IHtcbi8vICAgICAgICAgaWYgKCFyZXNwb25zZS5vaykge1xuLy8gICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCk7XG4vLyAgICAgICAgIH1cbi8vICAgICAgICAgcmV0dXJuIHJlc3BvbnNlLmpzb24oKVxuLy8gICAgIH0pXG4vLyAgICAgLnRoZW4obmFtZSA9PiBjb25zb2xlLmxvZyhuYW1lLml0ZW1zWzBdLnZvbHVtZUluZm8udGl0bGUpKVxuLy8gICAgIC5jYXRjaChlcnJvciA9PiBjb25zb2xlLndhcm4oZXJyb3IpKTtcblxuZnVuY3Rpb24gZmluZEJvb2soaXNibil7XG4gICAgZmV0Y2goYGh0dHBzOi8vd3d3Lmdvb2dsZWFwaXMuY29tL2Jvb2tzL3YxL3ZvbHVtZXM/cT1pc2JuOiR7aXNibn1gKVxuICAgICAgICAudGhlbihyZXNwb25zZSA9PiB7XG4gICAgICAgIGlmICghcmVzcG9uc2Uub2spIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcigpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiByZXNwb25zZS5qc29uKClcbiAgICB9KVxuICAgICAgICAvLyAudGhlbihuYW1lID0+IGNvbnNvbGUubG9nKG5hbWUuaXRlbXNbMF0udm9sdW1lSW5mby50aXRsZSkpXG4gICAgICAgIC50aGVuKGJvb2sgPT4gY29uc29sZS5sb2coYm9vaykpXG4gICAgICAgIC5jYXRjaChlcnJvciA9PiBjb25zb2xlLndhcm4oZXJyb3IpKTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlRWxlbWVudChib29rKXtcbiAgICBjb25zdCB0aXRsZSA9IGJvb2suaXRlbXNbMF0udm9sdW1lSW5mby50aXRsZTtcblxufVxuXG5maW5kQm9vayhcIjA3NDc1MzI2ODBcIilcbiIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcImVjMzUyNjRiN2I3N2U4Y2JiYWE5XCIpIl0sIm5hbWVzIjpbImZpbmRCb29rIiwiaXNibiIsImZldGNoIiwiY29uY2F0IiwidGhlbiIsInJlc3BvbnNlIiwib2siLCJFcnJvciIsImpzb24iLCJib29rIiwiY29uc29sZSIsImxvZyIsImVycm9yIiwid2FybiIsImNyZWF0ZUVsZW1lbnQiLCJ0aXRsZSIsIml0ZW1zIiwidm9sdW1lSW5mbyJdLCJzb3VyY2VSb290IjoiIn0=