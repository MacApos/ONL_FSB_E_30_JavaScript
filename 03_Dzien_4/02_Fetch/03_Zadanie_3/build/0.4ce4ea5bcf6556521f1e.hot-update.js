self["webpackHotUpdatees6_async_await"](0,{

/***/ 24:
/***/ (() => {

fetch("https://fer-api.coderslab.pl/v1/holidays?key=e92601251-c0a2-4s63-v73f-54041195480f&country=PL").then(function (response) {
  if (!response.ok) {
    throw new Error();
  }
  return response.json();
}).then(function (country) {
  return console.log(country.holidays[106]);
})["catch"](function (error) {
  return console.warn(error);
});
var main = document.querySelector("main");
var select = document.createElement("select");
["PL", "GB", "US"].forEach(function (country) {
  var option = document.createElement("option");
  option.innerText = country;
  select.appendChild(option);
});
main.appendChild(select);

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("1f8b727d9b6513a5b62e")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC40Y2U0ZWE1YmNmNjU1NjUyMWYxZS5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQUFBLEtBQUssZ0dBQWdHLENBQUMsQ0FDakdDLElBQUksQ0FBQyxVQUFBQyxRQUFRLEVBQUk7RUFDZCxJQUFJLENBQUNBLFFBQVEsQ0FBQ0MsRUFBRSxFQUFFO0lBQ2QsTUFBTSxJQUFJQyxLQUFLLENBQUMsQ0FBQztFQUNyQjtFQUNBLE9BQU9GLFFBQVEsQ0FBQ0csSUFBSSxDQUFDLENBQUM7QUFDMUIsQ0FBQyxDQUFDLENBQ0RKLElBQUksQ0FBQyxVQUFBSyxPQUFPO0VBQUEsT0FBSUMsT0FBTyxDQUFDQyxHQUFHLENBQUNGLE9BQU8sQ0FBQ0csUUFBUSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0FBQUEsRUFBQyxTQUM5QyxDQUFDLFVBQUFDLEtBQUs7RUFBQSxPQUFJSCxPQUFPLENBQUNJLElBQUksQ0FBQ0QsS0FBSyxDQUFDO0FBQUEsRUFBQztBQUV4QyxJQUFNRSxJQUFJLEdBQUdDLFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLE1BQU0sQ0FBQztBQUMzQyxJQUFNQyxNQUFNLEdBQUdGLFFBQVEsQ0FBQ0csYUFBYSxDQUFDLFFBQVEsQ0FBQztBQUMvQyxDQUFDLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUNDLE9BQU8sQ0FBQyxVQUFTWCxPQUFPLEVBQUM7RUFDeEMsSUFBTVksTUFBTSxHQUFHTCxRQUFRLENBQUNHLGFBQWEsQ0FBQyxRQUFRLENBQUM7RUFDL0NFLE1BQU0sQ0FBQ0MsU0FBUyxHQUFHYixPQUFPO0VBQzFCUyxNQUFNLENBQUNLLFdBQVcsQ0FBQ0YsTUFBTSxDQUFDO0FBQzlCLENBQUMsQ0FBQztBQUNGTixJQUFJLENBQUNRLFdBQVcsQ0FBQ0wsTUFBTSxDQUFDOzs7Ozs7OztVQ2pCeEIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9lczYtYXN5bmMtYXdhaXQvLi8wM19Eemllbl80LzAyX0ZldGNoLzAzX1phZGFuaWVfMy9qcy9hcHAuanMiLCJ3ZWJwYWNrOi8vZXM2LWFzeW5jLWF3YWl0L3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyJmZXRjaChgaHR0cHM6Ly9mZXItYXBpLmNvZGVyc2xhYi5wbC92MS9ob2xpZGF5cz9rZXk9ZTkyNjAxMjUxLWMwYTItNHM2My12NzNmLTU0MDQxMTk1NDgwZiZjb3VudHJ5PVBMYClcbiAgICAudGhlbihyZXNwb25zZSA9PiB7XG4gICAgICAgIGlmICghcmVzcG9uc2Uub2spIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcigpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiByZXNwb25zZS5qc29uKCk7XG4gICAgfSlcbiAgICAudGhlbihjb3VudHJ5ID0+IGNvbnNvbGUubG9nKGNvdW50cnkuaG9saWRheXNbMTA2XSkpXG4gICAgLmNhdGNoKGVycm9yID0+IGNvbnNvbGUud2FybihlcnJvcikpO1xuXG5jb25zdCBtYWluID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIm1haW5cIik7XG5jb25zdCBzZWxlY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2VsZWN0XCIpO1xuW1wiUExcIiwgXCJHQlwiLCBcIlVTXCJdLmZvckVhY2goZnVuY3Rpb24oY291bnRyeSl7XG4gICAgY29uc3Qgb3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm9wdGlvblwiKTtcbiAgICBvcHRpb24uaW5uZXJUZXh0ID0gY291bnRyeTtcbiAgICBzZWxlY3QuYXBwZW5kQ2hpbGQob3B0aW9uKTtcbn0pXG5tYWluLmFwcGVuZENoaWxkKHNlbGVjdCk7XG5cbiIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcIjFmOGI3MjdkOWI2NTEzYTViNjJlXCIpIl0sIm5hbWVzIjpbImZldGNoIiwidGhlbiIsInJlc3BvbnNlIiwib2siLCJFcnJvciIsImpzb24iLCJjb3VudHJ5IiwiY29uc29sZSIsImxvZyIsImhvbGlkYXlzIiwiZXJyb3IiLCJ3YXJuIiwibWFpbiIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsInNlbGVjdCIsImNyZWF0ZUVsZW1lbnQiLCJmb3JFYWNoIiwib3B0aW9uIiwiaW5uZXJUZXh0IiwiYXBwZW5kQ2hpbGQiXSwic291cmNlUm9vdCI6IiJ9