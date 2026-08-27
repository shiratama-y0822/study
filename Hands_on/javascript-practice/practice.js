const pokemon = [
    {
        name: "Pikachu",
        level: 25,
    },
    {
        name: "Charmander",
        level: 18,
    },
    {
        name: "Squirtle",
        level: 20,
    },
];

for (let i = 0; i < pokemon.length; i++) {
    if (pokemon[i].level >= 20) {
        console.log(pokemon[i].name);
    }
}