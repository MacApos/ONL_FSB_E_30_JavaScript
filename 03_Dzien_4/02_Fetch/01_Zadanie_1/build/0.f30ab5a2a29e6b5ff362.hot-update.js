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
var input = document.querySelector("input");
console.log(input.value);
function createElement(book) {
  var title = book.items[0].volumeInfo.title;
  var h2 = document.createElement("h2");
  h2.innerText = title;
  selector.appendChild(h2);
}
input.addEventListener("submit", function () {
  console.log(this.value);
});

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("df1a0a923ccaca9a9abc")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5mMzBhYjVhMmEyOWU2YjVmZjM2Mi5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsU0FBU0EsUUFBUUEsQ0FBQ0MsSUFBSSxFQUFDO0VBQ25CQyxLQUFLLHVEQUFBQyxNQUFBLENBQXVERixJQUFJLENBQUUsQ0FBQyxDQUM5REcsSUFBSSxDQUFDLFVBQUFDLFFBQVEsRUFBSTtJQUNsQixJQUFJLENBQUNBLFFBQVEsQ0FBQ0MsRUFBRSxFQUFFO01BQ2QsTUFBTSxJQUFJQyxLQUFLLENBQUMsQ0FBQztJQUNyQjtJQUNBLE9BQU9GLFFBQVEsQ0FBQ0csSUFBSSxDQUFDLENBQUM7RUFDMUIsQ0FBQyxDQUFDLENBQ0dKLElBQUksQ0FBQyxVQUFBSyxJQUFJO0lBQUEsT0FBSUMsYUFBYSxDQUFDRCxJQUFJLENBQUM7RUFBQSxFQUFDLFNBQzVCLENBQUMsVUFBQUUsS0FBSztJQUFBLE9BQUlDLE9BQU8sQ0FBQ0MsSUFBSSxDQUFDRixLQUFLLENBQUM7RUFBQSxFQUFDO0FBQzVDO0FBRUEsSUFBTUcsUUFBUSxHQUFHQyxRQUFRLENBQUNDLGFBQWEsQ0FBQyxZQUFZLENBQUM7QUFDckQsSUFBTUMsS0FBSyxHQUFHRixRQUFRLENBQUNDLGFBQWEsQ0FBQyxPQUFPLENBQUM7QUFDN0NKLE9BQU8sQ0FBQ00sR0FBRyxDQUFDRCxLQUFLLENBQUNFLEtBQUssQ0FBQztBQUN4QixTQUFTVCxhQUFhQSxDQUFDRCxJQUFJLEVBQUM7RUFDeEIsSUFBTVcsS0FBSyxHQUFHWCxJQUFJLENBQUNZLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQ0MsVUFBVSxDQUFDRixLQUFLO0VBQzVDLElBQU1HLEVBQUUsR0FBR1IsUUFBUSxDQUFDTCxhQUFhLENBQUMsSUFBSSxDQUFDO0VBQ3ZDYSxFQUFFLENBQUNDLFNBQVMsR0FBR0osS0FBSztFQUNwQk4sUUFBUSxDQUFDVyxXQUFXLENBQUNGLEVBQUUsQ0FBQztBQUM1QjtBQUVBTixLQUFLLENBQUNTLGdCQUFnQixDQUFDLFFBQVEsRUFBRSxZQUFXO0VBQ3hDZCxPQUFPLENBQUNNLEdBQUcsQ0FBQyxJQUFJLENBQUNDLEtBQUssQ0FBQztBQUMzQixDQUFDLENBQUM7Ozs7Ozs7O1VDeEJGIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZXM2LWFzeW5jLWF3YWl0Ly4vMDNfRHppZW5fNC8wMl9GZXRjaC8wMV9aYWRhbmllXzEvanMvYXBwLmpzIiwid2VicGFjazovL2VzNi1hc3luYy1hd2FpdC93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiZnVuY3Rpb24gZmluZEJvb2soaXNibil7XG4gICAgZmV0Y2goYGh0dHBzOi8vd3d3Lmdvb2dsZWFwaXMuY29tL2Jvb2tzL3YxL3ZvbHVtZXM/cT1pc2JuOiR7aXNibn1gKVxuICAgICAgICAudGhlbihyZXNwb25zZSA9PiB7XG4gICAgICAgIGlmICghcmVzcG9uc2Uub2spIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcigpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiByZXNwb25zZS5qc29uKClcbiAgICB9KVxuICAgICAgICAudGhlbihib29rID0+IGNyZWF0ZUVsZW1lbnQoYm9vaykpXG4gICAgICAgIC5jYXRjaChlcnJvciA9PiBjb25zb2xlLndhcm4oZXJyb3IpKTtcbn1cblxuY29uc3Qgc2VsZWN0b3IgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmJvb2staW5mb1wiKTtcbmNvbnN0IGlucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImlucHV0XCIpO1xuY29uc29sZS5sb2coaW5wdXQudmFsdWUpXG5mdW5jdGlvbiBjcmVhdGVFbGVtZW50KGJvb2spe1xuICAgIGNvbnN0IHRpdGxlID0gYm9vay5pdGVtc1swXS52b2x1bWVJbmZvLnRpdGxlO1xuICAgIGNvbnN0IGgyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgyXCIpO1xuICAgIGgyLmlubmVyVGV4dCA9IHRpdGxlO1xuICAgIHNlbGVjdG9yLmFwcGVuZENoaWxkKGgyKTtcbn1cblxuaW5wdXQuYWRkRXZlbnRMaXN0ZW5lcihcInN1Ym1pdFwiLCBmdW5jdGlvbiAoKXtcbiAgICBjb25zb2xlLmxvZyh0aGlzLnZhbHVlKVxufSkiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCJkZjFhMGE5MjNjY2FjYTlhOWFiY1wiKSJdLCJuYW1lcyI6WyJmaW5kQm9vayIsImlzYm4iLCJmZXRjaCIsImNvbmNhdCIsInRoZW4iLCJyZXNwb25zZSIsIm9rIiwiRXJyb3IiLCJqc29uIiwiYm9vayIsImNyZWF0ZUVsZW1lbnQiLCJlcnJvciIsImNvbnNvbGUiLCJ3YXJuIiwic2VsZWN0b3IiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJpbnB1dCIsImxvZyIsInZhbHVlIiwidGl0bGUiLCJpdGVtcyIsInZvbHVtZUluZm8iLCJoMiIsImlubmVyVGV4dCIsImFwcGVuZENoaWxkIiwiYWRkRXZlbnRMaXN0ZW5lciJdLCJzb3VyY2VSb290IjoiIn0=