fetch(`https://fer-api.coderslab.pl/v1/holidays?key=e92601251-c0a2-4s63-v73f-54041195480f&country=PL`)
    .then(response => {
        if (!response.ok) {
            throw new Error();
        }
        return response.json();
    })
    .then(country => console.log(country.holidays[106]))
    .catch(error => console.warn(error));

const main = document.querySelector("main");
const ul = main.querySelector("ul");
const select = document.createElement("select");
["PL", "GB", "US"].forEach(country => {
    const option = document.createElement("option");
    option.selected = country === "PL"
    option.value = country;
    option.innerText = country;
    select.appendChild(option);
})
main.insertBefore(select, ul);

select.addEventListener("change", function(event){
    console.log(this.value);
})

