interface Pokemon {
    id: number;
    name: string;
    height: number;
    weight: number;
}
interface PokemonListItem {
    name: string;
    url: string;
}
interface PokemonList {
    results: PokemonListItem[];
}

async function getPokemon(name: string) {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);

    if (!response.ok) {
        throw new Error("HTTP Error");
    }

    const data: Pokemon = await response.json();

    console.log(data.id);
    console.log(data.name);
    console.log(data.height);
    console.log(data.weight);
}

async function getPokemonList() {
    const response = await fetch(
        "https://pokeapi.co/api/v2/pokemon?limit=5"
    );
    if (!response.ok) {
        throw new Error("HTTP Error");
    }
    const data: PokemonList = await response.json();
    for (const pokemon of data.results) {
        console.log(pokemon.name);
    }

    return data.results
}

async function main() {
    try {
        console.log("Loding...");
        const pokemonList = await getPokemonList();
        await getPokemon(pokemonList[0].name);
    } catch (error) {
        console.log("ポケモンの取得に失敗しました");
    }

}
main();