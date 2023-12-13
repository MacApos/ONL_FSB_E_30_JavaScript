function getPokemons() {
    fetch("https://pokeapi.co/api/v2/pokemon")
        .then(response => {
            if (!response.ok) {
                throw new Error();
            }
            return response.json();
        })
        .then(pokemons => pokemons.results.forEach(pokemon => createPokemon(pokemon.name)))
        .catch(err => console.warn(err));
}

function createPokemon(pokemon) {
    const ul = document.querySelector("ul.list-group");
    const li = document.createElement("li");
    li.classList.add("list-group-item");
    li.innerText = pokemon;
    ul.appendChild(li);
}

Element.prototype.toggleClass = function (className) {
    if(this.classList.contains(className)){
        this.classList.remove(className);
    } else {
        this.classList.add(className);
    }
    console.log(this.classList)
}

const $body = document.querySelector("body");
$body.toggleClass("kaka");

getPokemons();