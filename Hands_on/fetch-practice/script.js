const status = document.querySelector('#status');

async function getPokemon() {
    status.textContent = 'Loading...';
    const response = await fetch("https://pokeapi.co/api/v2/pokemon/pikachu");

    const data = await response.json();
    status.textContent = data.name;
}

getPokemon();