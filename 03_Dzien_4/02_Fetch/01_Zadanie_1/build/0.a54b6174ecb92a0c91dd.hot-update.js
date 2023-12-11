self["webpackHotUpdatees6_async_await"](0,{

/***/ 24:
/***/ (() => {

// function findBook(isbn){
//     fetch(`https://www.googleapis.com/books/v1/volumes?q=isbn:${isbn}`)
//         .then(response => {
//         if (!response.ok) {
//             throw new Error();
//         }
//         return response.json()
//     })
//         .then(book => createElement(book))
//         .catch(error => console.warn(error));
// }

var selector = document.querySelector(".book-info");
var form = document.querySelector("form");
var input = form.querySelector("input");
console.log(form);
form.addEventListener("submit", function (event) {
  event.preventDefault();
  console.log(input.value);
});
// function createElement(book){
//     const title = book.items[0].volumeInfo.title;
//     const h2 = document.createElement("h2");
//     h2.innerText = title;
//     selector.appendChild(h2);
// }

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("cbacef6c8ec7829bff66")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5hNTRiNjE3NGVjYjkyYTBjOTFkZC5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxRQUFRLEdBQUdDLFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLFlBQVksQ0FBQztBQUNyRCxJQUFNQyxJQUFJLEdBQUdGLFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLE1BQU0sQ0FBQztBQUMzQyxJQUFNRSxLQUFLLEdBQUdELElBQUksQ0FBQ0QsYUFBYSxDQUFDLE9BQU8sQ0FBQztBQUN6Q0csT0FBTyxDQUFDQyxHQUFHLENBQUNILElBQUksQ0FBQztBQUNqQkEsSUFBSSxDQUFDSSxnQkFBZ0IsQ0FBQyxRQUFRLEVBQUUsVUFBVUMsS0FBSyxFQUFDO0VBQzVDQSxLQUFLLENBQUNDLGNBQWMsQ0FBQyxDQUFDO0VBQ3RCSixPQUFPLENBQUNDLEdBQUcsQ0FBQ0YsS0FBSyxDQUFDTSxLQUFLLENBQUM7QUFDNUIsQ0FBQyxDQUFDO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7OztVQ3pCQSIsInNvdXJjZXMiOlsid2VicGFjazovL2VzNi1hc3luYy1hd2FpdC8uLzAzX0R6aWVuXzQvMDJfRmV0Y2gvMDFfWmFkYW5pZV8xL2pzL2FwcC5qcyIsIndlYnBhY2s6Ly9lczYtYXN5bmMtYXdhaXQvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIGZ1bmN0aW9uIGZpbmRCb29rKGlzYm4pe1xuLy8gICAgIGZldGNoKGBodHRwczovL3d3dy5nb29nbGVhcGlzLmNvbS9ib29rcy92MS92b2x1bWVzP3E9aXNibjoke2lzYm59YClcbi8vICAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4ge1xuLy8gICAgICAgICBpZiAoIXJlc3BvbnNlLm9rKSB7XG4vLyAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoKTtcbi8vICAgICAgICAgfVxuLy8gICAgICAgICByZXR1cm4gcmVzcG9uc2UuanNvbigpXG4vLyAgICAgfSlcbi8vICAgICAgICAgLnRoZW4oYm9vayA9PiBjcmVhdGVFbGVtZW50KGJvb2spKVxuLy8gICAgICAgICAuY2F0Y2goZXJyb3IgPT4gY29uc29sZS53YXJuKGVycm9yKSk7XG4vLyB9XG5cbmNvbnN0IHNlbGVjdG9yID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5ib29rLWluZm9cIik7XG5jb25zdCBmb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImZvcm1cIik7XG5jb25zdCBpbnB1dCA9IGZvcm0ucXVlcnlTZWxlY3RvcihcImlucHV0XCIpO1xuY29uc29sZS5sb2coZm9ybSk7XG5mb3JtLmFkZEV2ZW50TGlzdGVuZXIoXCJzdWJtaXRcIiwgZnVuY3Rpb24gKGV2ZW50KXtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGNvbnNvbGUubG9nKGlucHV0LnZhbHVlKTtcbn0pXG4vLyBmdW5jdGlvbiBjcmVhdGVFbGVtZW50KGJvb2spe1xuLy8gICAgIGNvbnN0IHRpdGxlID0gYm9vay5pdGVtc1swXS52b2x1bWVJbmZvLnRpdGxlO1xuLy8gICAgIGNvbnN0IGgyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgyXCIpO1xuLy8gICAgIGgyLmlubmVyVGV4dCA9IHRpdGxlO1xuLy8gICAgIHNlbGVjdG9yLmFwcGVuZENoaWxkKGgyKTtcbi8vIH1cblxuIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiY2JhY2VmNmM4ZWM3ODI5YmZmNjZcIikiXSwibmFtZXMiOlsic2VsZWN0b3IiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJmb3JtIiwiaW5wdXQiLCJjb25zb2xlIiwibG9nIiwiYWRkRXZlbnRMaXN0ZW5lciIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJ2YWx1ZSJdLCJzb3VyY2VSb290IjoiIn0=