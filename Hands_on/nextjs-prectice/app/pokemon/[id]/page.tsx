type Props = {
    params: Promise<{
        id: string;
    }>;
}

export default async function PokemonDetailPage({ params }: Props) {
    const { id } = await params;

    return (
        <main>
            <h1>Pokemon Detail</h1>
            <p>ポケモンID: {id}</p>
        </main>
    );
}