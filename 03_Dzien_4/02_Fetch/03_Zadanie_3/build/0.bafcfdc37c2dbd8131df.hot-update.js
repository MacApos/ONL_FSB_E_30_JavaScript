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
var ul = main.querySelector("ul");
var select = document.createElement("select");
["PL", "GB", "US"].forEach(function (country) {
  var option = document.createElement("option");
  option.selected;
  option.value = country;
  option.innerText = country;
  select.appendChild(option);
});
main.insertBefore(select, ul);

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("bcc67712b856afdc65d6")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5iYWZjZmRjMzdjMmRiZDgxMzFkZi5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQUFBLEtBQUssZ0dBQWdHLENBQUMsQ0FDakdDLElBQUksQ0FBQyxVQUFBQyxRQUFRLEVBQUk7RUFDZCxJQUFJLENBQUNBLFFBQVEsQ0FBQ0MsRUFBRSxFQUFFO0lBQ2QsTUFBTSxJQUFJQyxLQUFLLENBQUMsQ0FBQztFQUNyQjtFQUNBLE9BQU9GLFFBQVEsQ0FBQ0csSUFBSSxDQUFDLENBQUM7QUFDMUIsQ0FBQyxDQUFDLENBQ0RKLElBQUksQ0FBQyxVQUFBSyxPQUFPO0VBQUEsT0FBSUMsT0FBTyxDQUFDQyxHQUFHLENBQUNGLE9BQU8sQ0FBQ0csUUFBUSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0FBQUEsRUFBQyxTQUM5QyxDQUFDLFVBQUFDLEtBQUs7RUFBQSxPQUFJSCxPQUFPLENBQUNJLElBQUksQ0FBQ0QsS0FBSyxDQUFDO0FBQUEsRUFBQztBQUV4QyxJQUFNRSxJQUFJLEdBQUdDLFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLE1BQU0sQ0FBQztBQUMzQyxJQUFNQyxFQUFFLEdBQUdILElBQUksQ0FBQ0UsYUFBYSxDQUFDLElBQUksQ0FBQztBQUNuQyxJQUFNRSxNQUFNLEdBQUdILFFBQVEsQ0FBQ0ksYUFBYSxDQUFDLFFBQVEsQ0FBQztBQUMvQyxDQUFDLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUNDLE9BQU8sQ0FBQyxVQUFVWixPQUFPLEVBQUU7RUFDMUMsSUFBTWEsTUFBTSxHQUFHTixRQUFRLENBQUNJLGFBQWEsQ0FBQyxRQUFRLENBQUM7RUFDL0NFLE1BQU0sQ0FBQ0MsUUFBUTtFQUNmRCxNQUFNLENBQUNFLEtBQUssR0FBR2YsT0FBTztFQUN0QmEsTUFBTSxDQUFDRyxTQUFTLEdBQUdoQixPQUFPO0VBQzFCVSxNQUFNLENBQUNPLFdBQVcsQ0FBQ0osTUFBTSxDQUFDO0FBQzlCLENBQUMsQ0FBQztBQUNGUCxJQUFJLENBQUNZLFlBQVksQ0FBQ1IsTUFBTSxFQUFFRCxFQUFFLENBQUM7Ozs7Ozs7O1VDcEI3QiIsInNvdXJjZXMiOlsid2VicGFjazovL2VzNi1hc3luYy1hd2FpdC8uLzAzX0R6aWVuXzQvMDJfRmV0Y2gvMDNfWmFkYW5pZV8zL2pzL2FwcC5qcyIsIndlYnBhY2s6Ly9lczYtYXN5bmMtYXdhaXQvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbImZldGNoKGBodHRwczovL2Zlci1hcGkuY29kZXJzbGFiLnBsL3YxL2hvbGlkYXlzP2tleT1lOTI2MDEyNTEtYzBhMi00czYzLXY3M2YtNTQwNDExOTU0ODBmJmNvdW50cnk9UExgKVxuICAgIC50aGVuKHJlc3BvbnNlID0+IHtcbiAgICAgICAgaWYgKCFyZXNwb25zZS5vaykge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJlc3BvbnNlLmpzb24oKTtcbiAgICB9KVxuICAgIC50aGVuKGNvdW50cnkgPT4gY29uc29sZS5sb2coY291bnRyeS5ob2xpZGF5c1sxMDZdKSlcbiAgICAuY2F0Y2goZXJyb3IgPT4gY29uc29sZS53YXJuKGVycm9yKSk7XG5cbmNvbnN0IG1haW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwibWFpblwiKTtcbmNvbnN0IHVsID0gbWFpbi5xdWVyeVNlbGVjdG9yKFwidWxcIik7XG5jb25zdCBzZWxlY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2VsZWN0XCIpO1xuW1wiUExcIiwgXCJHQlwiLCBcIlVTXCJdLmZvckVhY2goZnVuY3Rpb24gKGNvdW50cnkpIHtcbiAgICBjb25zdCBvcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwib3B0aW9uXCIpO1xuICAgIG9wdGlvbi5zZWxlY3RlZFxuICAgIG9wdGlvbi52YWx1ZSA9IGNvdW50cnk7XG4gICAgb3B0aW9uLmlubmVyVGV4dCA9IGNvdW50cnk7XG4gICAgc2VsZWN0LmFwcGVuZENoaWxkKG9wdGlvbik7XG59KVxubWFpbi5pbnNlcnRCZWZvcmUoc2VsZWN0LCB1bCk7XG5cbiIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcImJjYzY3NzEyYjg1NmFmZGM2NWQ2XCIpIl0sIm5hbWVzIjpbImZldGNoIiwidGhlbiIsInJlc3BvbnNlIiwib2siLCJFcnJvciIsImpzb24iLCJjb3VudHJ5IiwiY29uc29sZSIsImxvZyIsImhvbGlkYXlzIiwiZXJyb3IiLCJ3YXJuIiwibWFpbiIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsInVsIiwic2VsZWN0IiwiY3JlYXRlRWxlbWVudCIsImZvckVhY2giLCJvcHRpb24iLCJzZWxlY3RlZCIsInZhbHVlIiwiaW5uZXJUZXh0IiwiYXBwZW5kQ2hpbGQiLCJpbnNlcnRCZWZvcmUiXSwic291cmNlUm9vdCI6IiJ9