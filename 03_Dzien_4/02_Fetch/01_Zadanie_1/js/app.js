function findBook(isbn) {
    fetch(`https://www.googleapis.com/books/v1/volumes?q=isbn:${isbn}`)
        .then(response => {
            if (!response.ok) {
                throw new Error();
            }
            return response.json()
        })
        .then(book => createElement(book))
        .catch(error => console.warn(error));
}

function createElement(book) {
    const title = book.items[0].volumeInfo.title;
    const h2 = document.createElement("h2");
    h2.innerText = title;
    const selector = document.querySelector(".book-info");
    selector.appendChild(h2);
}

const form = document.querySelector("form");
const input = form.querySelector("input");
form.addEventListener("submit", function (event) {
    event.preventDefault();
    findBook(input.value);
})
