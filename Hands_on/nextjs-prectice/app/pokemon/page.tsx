import Link from "next/link";

export default function PokemonPage() {
    const pokemonList = [
        { id: 25, name: "pikachu" },
        { id: 1, name: "bulbasaur" },
        { id: 4, name: "charamander" },
    ];

    return (
        <main>
            <h1>Pokemon List</h1>
            <ul>
                {pokemonList.map((pokemon) => (
                    <li key={pokemon.id}>
                        <Link href={`/pokemon/${pokemon.id}`}>
                            {pokemon.name}
                        </Link>
                    </li>
                ))}
            </ul>
        </main>
    );
} 