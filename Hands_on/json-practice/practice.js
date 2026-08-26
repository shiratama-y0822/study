const jsonText = `
[
 {
  "name":Pikachu",
  "type":"Electric",
  "level":25
},
 {
  "name":"Bulbasaur",
  "type":"Grass",
  "level":10
 },
 {
  "name":"Squiirtle",
  "type":"Water",
  "level":15
 }
]
 `;

 const pokemon = JSON.parse(jsonText);

 console.log(pokemon);

 console.log(pokemon[0]);
 console.log(pokemon[0].name);