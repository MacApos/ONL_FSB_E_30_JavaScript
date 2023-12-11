function holidaysByCountry(country) {
    fetch(`https://fer-api.coderslab.pl/v1/holidays?key=e92601251-c0a2-4s63-v73f-54041195480f&country=${country}`)
        .then(response => {
            if (!response.ok) {
                throw new Error();
            }
            return response.json();
        })
        .then(country => country.holidays.forEach(holiday => createListItem(holiday)))
        .catch(error => console.warn(error));
}

function createListItem(holiday) {
    const li = document.createElement("li");
    const h3 = document.createElement("h3");
    const div = document.createElement("div");
    h3.innerText = holiday.name;
    h3.classList.add("holiday-name");
    div.innerText = holiday.date;
    div.classList.add("holiday-date");
    li.appendChild(h3);
    li.appendChild(div);
    document.querySelector("ul.list").appendChild(li);
}

const main = document.querySelector("main");
const select = document.createElement("select");
["PL", "GB", "US"].forEach(country => {
    const option = document.createElement("option");
    option.selected = country === "PL"
    option.value = country;
    option.innerText = country;
    select.appendChild(option);
})
main.insertBefore(select, document.querySelector("ul.list"));

select.addEventListener("change", function (event) {
    const ul = document.querySelector("ul.list");
    ul.parentElement.replaceChild(ul.cloneNode(false), ul);
    holidaysByCountry(this.value);
})