fetch("https://pokeapi.co/api/v2/pokemon")
    .then(response => {
        if (!response.ok) {
            throw new Error();
        }
        return response
    })
    .then(pokemon => console.log(pokemon.items[0]))
    .catch(err => console.warn(err));
