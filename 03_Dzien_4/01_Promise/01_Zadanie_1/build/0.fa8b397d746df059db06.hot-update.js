self["webpackHotUpdatees6_async_await"](0,{

/***/ 23:
/***/ (() => {

var ulList = document.querySelector(".list-group");
var getNames = function getNames() {
  var names = ["Jan", "Piotr", "Anna"];
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      resolve(names);
    }, 2000);
  });
};
var ul = document.querySelector("ul");
function createList(names) {
  names.forEach(function (name) {
    var li = document.createElement("li");
    li.classList.add("list-group");
    li.innerText = name;
    ul.appendChild(li);
  });
}
getNames().then(function (names) {
  return createList(names);
})["catch"](function (error) {
  return console.warn(error);
});

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("945f2a07db52bd0744e6")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5mYThiMzk3ZDc0NmRmMDU5ZGIwNi5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsSUFBTUEsTUFBTSxHQUFHQyxRQUFRLENBQUNDLGFBQWEsQ0FBQyxhQUFhLENBQUM7QUFFcEQsSUFBTUMsUUFBUSxHQUFHLFNBQVhBLFFBQVFBLENBQUEsRUFBZTtFQUN6QixJQUFNQyxLQUFLLEdBQUcsQ0FBQyxLQUFLLEVBQUUsT0FBTyxFQUFFLE1BQU0sQ0FBQztFQUV0QyxPQUFPLElBQUlDLE9BQU8sQ0FBQyxVQUFDQyxPQUFPLEVBQUVDLE1BQU0sRUFBSztJQUNwQ0MsVUFBVSxDQUFDLFlBQU07TUFDYkYsT0FBTyxDQUFDRixLQUFLLENBQUM7SUFDbEIsQ0FBQyxFQUFFLElBQUksQ0FBQztFQUNaLENBQUMsQ0FBQztBQUNOLENBQUM7QUFFRCxJQUFNSyxFQUFFLEdBQUdSLFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLElBQUksQ0FBQztBQUV2QyxTQUFTUSxVQUFVQSxDQUFDTixLQUFLLEVBQUU7RUFDdkJBLEtBQUssQ0FBQ08sT0FBTyxDQUFDLFVBQVVDLElBQUksRUFBRTtJQUMxQixJQUFNQyxFQUFFLEdBQUdaLFFBQVEsQ0FBQ2EsYUFBYSxDQUFDLElBQUksQ0FBQztJQUN2Q0QsRUFBRSxDQUFDRSxTQUFTLENBQUNDLEdBQUcsQ0FBQyxZQUFZLENBQUM7SUFDOUJILEVBQUUsQ0FBQ0ksU0FBUyxHQUFHTCxJQUFJO0lBQ25CSCxFQUFFLENBQUNTLFdBQVcsQ0FBQ0wsRUFBRSxDQUFDO0VBQ3RCLENBQUMsQ0FBQztBQUNOO0FBRUFWLFFBQVEsQ0FBQyxDQUFDLENBQ0xnQixJQUFJLENBQUMsVUFBQWYsS0FBSztFQUFBLE9BQUlNLFVBQVUsQ0FBQ04sS0FBSyxDQUFDO0FBQUEsRUFBQyxTQUMzQixDQUFDLFVBQUFnQixLQUFLO0VBQUEsT0FBSUMsT0FBTyxDQUFDQyxJQUFJLENBQUNGLEtBQUssQ0FBQztBQUFBLEVBQUM7Ozs7Ozs7O1VDekJ4QyIsInNvdXJjZXMiOlsid2VicGFjazovL2VzNi1hc3luYy1hd2FpdC8uLzAzX0R6aWVuXzQvMDFfUHJvbWlzZS8wMV9aYWRhbmllXzEvanMvYXBwLmpzIiwid2VicGFjazovL2VzNi1hc3luYy1hd2FpdC93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgdWxMaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5saXN0LWdyb3VwXCIpO1xuXG5jb25zdCBnZXROYW1lcyA9IGZ1bmN0aW9uICgpIHtcbiAgICBjb25zdCBuYW1lcyA9IFtcIkphblwiLCBcIlBpb3RyXCIsIFwiQW5uYVwiXTtcblxuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgcmVzb2x2ZShuYW1lcyk7XG4gICAgICAgIH0sIDIwMDApO1xuICAgIH0pO1xufTtcblxuY29uc3QgdWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwidWxcIik7XG5cbmZ1bmN0aW9uIGNyZWF0ZUxpc3QobmFtZXMpIHtcbiAgICBuYW1lcy5mb3JFYWNoKGZ1bmN0aW9uIChuYW1lKSB7XG4gICAgICAgIGNvbnN0IGxpID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xuICAgICAgICBsaS5jbGFzc0xpc3QuYWRkKFwibGlzdC1ncm91cFwiKTtcbiAgICAgICAgbGkuaW5uZXJUZXh0ID0gbmFtZTtcbiAgICAgICAgdWwuYXBwZW5kQ2hpbGQobGkpO1xuICAgIH0pXG59XG5cbmdldE5hbWVzKClcbiAgICAudGhlbihuYW1lcyA9PiBjcmVhdGVMaXN0KG5hbWVzKSlcbiAgICAuY2F0Y2goZXJyb3IgPT4gY29uc29sZS53YXJuKGVycm9yKSk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiOTQ1ZjJhMDdkYjUyYmQwNzQ0ZTZcIikiXSwibmFtZXMiOlsidWxMaXN0IiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwiZ2V0TmFtZXMiLCJuYW1lcyIsIlByb21pc2UiLCJyZXNvbHZlIiwicmVqZWN0Iiwic2V0VGltZW91dCIsInVsIiwiY3JlYXRlTGlzdCIsImZvckVhY2giLCJuYW1lIiwibGkiLCJjcmVhdGVFbGVtZW50IiwiY2xhc3NMaXN0IiwiYWRkIiwiaW5uZXJUZXh0IiwiYXBwZW5kQ2hpbGQiLCJ0aGVuIiwiZXJyb3IiLCJjb25zb2xlIiwid2FybiJdLCJzb3VyY2VSb290IjoiIn0=