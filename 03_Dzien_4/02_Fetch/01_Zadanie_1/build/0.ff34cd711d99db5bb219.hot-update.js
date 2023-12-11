self["webpackHotUpdatees6_async_await"](0,{

/***/ 24:
/***/ (() => {

fetch("https://www.googleapis.com/books/v1/volumes?q=isbn:0747532680").then(function (response) {
  if (!response.ok) {
    throw new Error();
  }
  return response.json();
}).then(function (name) {
  return console.log(name.items[0].volumeInfo.title);
})["catch"](function (error) {
  return console.warn(error);
});
function findBook(isbn) {
  fetch("https://www.googleapis.com/books/v1/volumes?q=isbn:0747532680").then(function (response) {
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

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("139c8d179d79de9a8407")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5mZjM0Y2Q3MTFkOTlkYjViYjIxOS5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQUFBLEtBQUssQ0FBQywrREFBK0QsQ0FBQyxDQUNqRUMsSUFBSSxDQUFDLFVBQUFDLFFBQVEsRUFBSTtFQUNkLElBQUksQ0FBQ0EsUUFBUSxDQUFDQyxFQUFFLEVBQUU7SUFDZCxNQUFNLElBQUlDLEtBQUssQ0FBQyxDQUFDO0VBQ3JCO0VBQ0EsT0FBT0YsUUFBUSxDQUFDRyxJQUFJLENBQUMsQ0FBQztBQUMxQixDQUFDLENBQUMsQ0FDREosSUFBSSxDQUFDLFVBQUFLLElBQUk7RUFBQSxPQUFJQyxPQUFPLENBQUNDLEdBQUcsQ0FBQ0YsSUFBSSxDQUFDRyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUNDLFVBQVUsQ0FBQ0MsS0FBSyxDQUFDO0FBQUEsRUFBQyxTQUNwRCxDQUFDLFVBQUFDLEtBQUs7RUFBQSxPQUFJTCxPQUFPLENBQUNNLElBQUksQ0FBQ0QsS0FBSyxDQUFDO0FBQUEsRUFBQztBQUV4QyxTQUFTRSxRQUFRQSxDQUFDQyxJQUFJLEVBQUM7RUFDbkJmLEtBQUssZ0VBQWdFLENBQUMsQ0FDakVDLElBQUksQ0FBQyxVQUFBQyxRQUFRLEVBQUk7SUFDbEIsSUFBSSxDQUFDQSxRQUFRLENBQUNDLEVBQUUsRUFBRTtNQUNkLE1BQU0sSUFBSUMsS0FBSyxDQUFDLENBQUM7SUFDckI7SUFDQSxPQUFPRixRQUFRLENBQUNHLElBQUksQ0FBQyxDQUFDO0VBQzFCLENBQUM7RUFDRztFQUFBLENBQ0NKLElBQUksQ0FBQyxVQUFBSyxJQUFJO0lBQUEsT0FBSUMsT0FBTyxDQUFDQyxHQUFHLENBQUNGLElBQUksQ0FBQztFQUFBLEVBQUMsU0FDMUIsQ0FBQyxVQUFBTSxLQUFLO0lBQUEsT0FBSUwsT0FBTyxDQUFDTSxJQUFJLENBQUNELEtBQUssQ0FBQztFQUFBLEVBQUM7QUFDNUM7Ozs7Ozs7O1VDckJBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZXM2LWFzeW5jLWF3YWl0Ly4vMDNfRHppZW5fNC8wMl9GZXRjaC8wMV9aYWRhbmllXzEvanMvYXBwLmpzIiwid2VicGFjazovL2VzNi1hc3luYy1hd2FpdC93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiZmV0Y2goXCJodHRwczovL3d3dy5nb29nbGVhcGlzLmNvbS9ib29rcy92MS92b2x1bWVzP3E9aXNibjowNzQ3NTMyNjgwXCIpXG4gICAgLnRoZW4ocmVzcG9uc2UgPT4ge1xuICAgICAgICBpZiAoIXJlc3BvbnNlLm9rKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmVzcG9uc2UuanNvbigpXG4gICAgfSlcbiAgICAudGhlbihuYW1lID0+IGNvbnNvbGUubG9nKG5hbWUuaXRlbXNbMF0udm9sdW1lSW5mby50aXRsZSkpXG4gICAgLmNhdGNoKGVycm9yID0+IGNvbnNvbGUud2FybihlcnJvcikpO1xuXG5mdW5jdGlvbiBmaW5kQm9vayhpc2JuKXtcbiAgICBmZXRjaChgaHR0cHM6Ly93d3cuZ29vZ2xlYXBpcy5jb20vYm9va3MvdjEvdm9sdW1lcz9xPWlzYm46MDc0NzUzMjY4MGApXG4gICAgICAgIC50aGVuKHJlc3BvbnNlID0+IHtcbiAgICAgICAgaWYgKCFyZXNwb25zZS5vaykge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJlc3BvbnNlLmpzb24oKVxuICAgIH0pXG4gICAgICAgIC8vIC50aGVuKG5hbWUgPT4gY29uc29sZS5sb2cobmFtZS5pdGVtc1swXS52b2x1bWVJbmZvLnRpdGxlKSlcbiAgICAgICAgLnRoZW4obmFtZSA9PiBjb25zb2xlLmxvZyhuYW1lKSlcbiAgICAgICAgLmNhdGNoKGVycm9yID0+IGNvbnNvbGUud2FybihlcnJvcikpO1xufSIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcIjEzOWM4ZDE3OWQ3OWRlOWE4NDA3XCIpIl0sIm5hbWVzIjpbImZldGNoIiwidGhlbiIsInJlc3BvbnNlIiwib2siLCJFcnJvciIsImpzb24iLCJuYW1lIiwiY29uc29sZSIsImxvZyIsIml0ZW1zIiwidm9sdW1lSW5mbyIsInRpdGxlIiwiZXJyb3IiLCJ3YXJuIiwiZmluZEJvb2siLCJpc2JuIl0sInNvdXJjZVJvb3QiOiIifQ==