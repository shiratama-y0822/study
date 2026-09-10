type Props = {
    params: Promise<{
        id: string;
    }>;
}

export default async function PokemonDetailPage({ params }: Props) {
    const { id } = await params;
    const response = await fetch(
        `https://pokeapi.co/api/v2/pokemon/${id}`
    );

    if (!response.ok) {
        throw new Error("ポケモンの取得に失敗しました");
    }

    const pokemon = await response.json();

    return (
        <main>
            <h1>Pokemon Detail</h1>

            <p>ポケモンID: {id}</p>
            <p>名前: {pokemon.name}</p>
            <p>高さ: {pokemon.height}</p>
            <p>重さ: {pokemon.weight}</p>
        </main>
    );
}