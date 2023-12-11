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
  var option = document.createElement("option[value=`".concat(country, "`]"));
  option.innerText = country;
  select.appendChild(option);
});
main.appendChild(select);

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("7e1f6c73f08646a411a2")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC4xZjhiNzI3ZDliNjUxM2E1YjYyZS5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQUFBLEtBQUssZ0dBQWdHLENBQUMsQ0FDakdDLElBQUksQ0FBQyxVQUFBQyxRQUFRLEVBQUk7RUFDZCxJQUFJLENBQUNBLFFBQVEsQ0FBQ0MsRUFBRSxFQUFFO0lBQ2QsTUFBTSxJQUFJQyxLQUFLLENBQUMsQ0FBQztFQUNyQjtFQUNBLE9BQU9GLFFBQVEsQ0FBQ0csSUFBSSxDQUFDLENBQUM7QUFDMUIsQ0FBQyxDQUFDLENBQ0RKLElBQUksQ0FBQyxVQUFBSyxPQUFPO0VBQUEsT0FBSUMsT0FBTyxDQUFDQyxHQUFHLENBQUNGLE9BQU8sQ0FBQ0csUUFBUSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0FBQUEsRUFBQyxTQUM5QyxDQUFDLFVBQUFDLEtBQUs7RUFBQSxPQUFJSCxPQUFPLENBQUNJLElBQUksQ0FBQ0QsS0FBSyxDQUFDO0FBQUEsRUFBQztBQUV4QyxJQUFNRSxJQUFJLEdBQUdDLFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLE1BQU0sQ0FBQztBQUMzQyxJQUFNQyxNQUFNLEdBQUdGLFFBQVEsQ0FBQ0csYUFBYSxDQUFDLFFBQVEsQ0FBQztBQUMvQyxDQUFDLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUNDLE9BQU8sQ0FBQyxVQUFTWCxPQUFPLEVBQUM7RUFDeEMsSUFBTVksTUFBTSxHQUFHTCxRQUFRLENBQUNHLGFBQWEsa0JBQUFHLE1BQUEsQ0FBbUJiLE9BQU8sT0FBSyxDQUFDO0VBQ3JFWSxNQUFNLENBQUNFLFNBQVMsR0FBR2QsT0FBTztFQUMxQlMsTUFBTSxDQUFDTSxXQUFXLENBQUNILE1BQU0sQ0FBQztBQUM5QixDQUFDLENBQUM7QUFDRk4sSUFBSSxDQUFDUyxXQUFXLENBQUNOLE1BQU0sQ0FBQzs7Ozs7Ozs7VUNqQnhCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZXM2LWFzeW5jLWF3YWl0Ly4vMDNfRHppZW5fNC8wMl9GZXRjaC8wM19aYWRhbmllXzMvanMvYXBwLmpzIiwid2VicGFjazovL2VzNi1hc3luYy1hd2FpdC93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiZmV0Y2goYGh0dHBzOi8vZmVyLWFwaS5jb2RlcnNsYWIucGwvdjEvaG9saWRheXM/a2V5PWU5MjYwMTI1MS1jMGEyLTRzNjMtdjczZi01NDA0MTE5NTQ4MGYmY291bnRyeT1QTGApXG4gICAgLnRoZW4ocmVzcG9uc2UgPT4ge1xuICAgICAgICBpZiAoIXJlc3BvbnNlLm9rKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmVzcG9uc2UuanNvbigpO1xuICAgIH0pXG4gICAgLnRoZW4oY291bnRyeSA9PiBjb25zb2xlLmxvZyhjb3VudHJ5LmhvbGlkYXlzWzEwNl0pKVxuICAgIC5jYXRjaChlcnJvciA9PiBjb25zb2xlLndhcm4oZXJyb3IpKTtcblxuY29uc3QgbWFpbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJtYWluXCIpO1xuY29uc3Qgc2VsZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNlbGVjdFwiKTtcbltcIlBMXCIsIFwiR0JcIiwgXCJVU1wiXS5mb3JFYWNoKGZ1bmN0aW9uKGNvdW50cnkpe1xuICAgIGNvbnN0IG9wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoYG9wdGlvblt2YWx1ZT1cXGAke2NvdW50cnl9XFxgXWApO1xuICAgIG9wdGlvbi5pbm5lclRleHQgPSBjb3VudHJ5O1xuICAgIHNlbGVjdC5hcHBlbmRDaGlsZChvcHRpb24pO1xufSlcbm1haW4uYXBwZW5kQ2hpbGQoc2VsZWN0KTtcblxuIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiN2UxZjZjNzNmMDg2NDZhNDExYTJcIikiXSwibmFtZXMiOlsiZmV0Y2giLCJ0aGVuIiwicmVzcG9uc2UiLCJvayIsIkVycm9yIiwianNvbiIsImNvdW50cnkiLCJjb25zb2xlIiwibG9nIiwiaG9saWRheXMiLCJlcnJvciIsIndhcm4iLCJtYWluIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwic2VsZWN0IiwiY3JlYXRlRWxlbWVudCIsImZvckVhY2giLCJvcHRpb24iLCJjb25jYXQiLCJpbm5lclRleHQiLCJhcHBlbmRDaGlsZCJdLCJzb3VyY2VSb290IjoiIn0=