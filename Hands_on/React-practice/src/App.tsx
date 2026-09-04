import { useState } from "react";

type PokemonCardProps = {
  name: string;
};

function PokemonCard(props: PokemonCardProps) {
  const [level, setLevel] = useState(10);

  return (
    <>
      <h2>{props.name}</h2>
      <p>Lv.{level}</p>
      <button onClick={() => setLevel(level + 1)}>
        レベルアップ
      </button>
    </>
  );
}

function App() {
  return (
    <>
      <h1>ポケモンマネージャー</h1>
      <PokemonCard name="ピカチュウ" />
      <PokemonCard name="フシギダネ" />
    </>
  );
}

export default App;