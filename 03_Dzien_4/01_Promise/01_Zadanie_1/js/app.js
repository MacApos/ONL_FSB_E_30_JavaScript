const ulList = document.querySelector(".list-group");

const getNames = function () {
    const names = ["Jan", "Piotr", "Anna"];

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(names);
        }, 2000);
    });
};

const ul = document.querySelector("ul");

function createList(names) {
    names.forEach(function (name) {
        const li = document.createElement("li");
        li.classList.add("list-group-item");
        li.innerText = name;
        ul.appendChild(li);
    })
}

getNames()
    .then(names => createList(names))
    .catch(error => console.warn(error));