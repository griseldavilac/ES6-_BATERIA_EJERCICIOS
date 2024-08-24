/*
EJERCICIO 5 - FILTER

5.1 Dado el siguiente array, utiliza .filter() para generar un nuevo array con los valores que sean mayor que 18
const ages = [22, 14, 24, 55, 65, 21, 12, 13, 90];

5.2 Dado el siguiente array, utiliza .filter() para generar un nuevo array con los valores que sean par.
const ages = [22, 14, 24, 55, 65, 21, 12, 13, 90];

5.3 Dado el siguiente array, utiliza .filter() para generar un nuevo array con los streamers que tengan el 
gameMorePlayed = 'League of Legends'.
const streamers = [
	{name: 'Rubius', age: 32, gameMorePlayed: 'Minecraft'},
	{name: 'Ibai', age: 25, gameMorePlayed: 'League of Legends'}, 
	{name: 'Reven', age: 43, gameMorePlayed: 'League of Legends'},
	{name: 'AuronPlay', age: 33, gameMorePlayed: 'Among Us'}
];

5.4 Dado el siguiente array, utiliza .filter() para generar un nuevo array con los streamers que incluyan el caracter 'u' en su propiedad .name. Recomendamos usar la funcion .includes() para la comprobación.
const streamers = [
	{name: 'Rubius', age: 32, gameMorePlayed: 'Minecraft'},
	{name: 'Ibai', age: 25, gameMorePlayed: 'League of Legends'},
	{name: 'Reven', age: 43, gameMorePlayed: 'League of Legends'},
	{name: 'AuronPlay', age: 33, gameMorePlayed: 'Among Us'}
];

5.5 utiliza .filter() para generar un nuevo array con los streamers que incluyan el caracter 'Legends' en su propiedad .gameMorePlayed. Recomendamos usar la funcion .includes() para la comprobación. Además, pon el valor de la propiedad .gameMorePlayed a MAYUSCULAS cuando 
.age sea mayor que 35.
*/

//-------------------EJERCICIO 5.1--------------------------------
// Definimos el array ages
const ages = [22, 14, 24, 55, 65, 21, 12, 13, 90]
// Usamos .filter() para crear un nuevo array con los valores mayores que 18
const agesGreaterThan18 = ages.filter((age) => age > 18)
// Imprimimos el nuevo array para verificar
console.log(agesGreaterThan18) // Resultado: [22, 24, 55, 65, 21, 90]

//-------------------EJERCICIO 5.2--------------------------------
// Usamos .filter() para crear un nuevo array con los valores que sean pares
const evenAges = ages.filter((age) => age % 2 === 0)
// Imprimimos el nuevo array para verificar
console.log(evenAges) // Resultado: [22, 14, 24, 12, 90]

//-------------------EJERCICIO 5.3--------------------------------
// Definimos el array streamers
const streamers = [
  { name: 'Rubius', age: 32, gameMorePlayed: 'Minecraft' },
  { name: 'Ibai', age: 25, gameMorePlayed: 'League of Legends' },
  { name: 'Reven', age: 43, gameMorePlayed: 'League of Legends' },
  { name: 'AuronPlay', age: 33, gameMorePlayed: 'Among Us' }
]
// Usamos .filter() para crear un nuevo array con los streamers que juegan League of Legends
const lolStreamers = streamers.filter(
  (streamer) => streamer.gameMorePlayed === 'League of Legends'
)
// Imprimimos el nuevo array para verificar
console.log(lolStreamers)
// Resultado: [{name: 'Ibai', age: 25, gameMorePlayed: 'League of Legends'}, {name: 'Reven', age: 43, gameMorePlayed: 'League of Legends'}]

//-------------------EJERCICIO 5.4--------------------------------
// Usamos .filter() para crear un nuevo array con los streamers que tienen 'u' en su nombre
const streamersWithU = streamers.filter((streamer) =>
  streamer.name.includes('u')
)
// Imprimimos el nuevo array para verificar
console.log(streamersWithU)
// Resultado: [{name: 'Rubius', age: 32, gameMorePlayed: 'Minecraft'}, {name: 'AuronPlay', age: 33, gameMorePlayed: 'Among Us'}]

//-------------------EJERCICIO 5.5--------------------------------
// Usamos .filter() para crear un nuevo array con los streamers que tienen 'Legends' en gameMorePlayed
const legendsStreamers = streamers.filter((streamer) => {
  if (streamer.gameMorePlayed.includes('Legends')) {
    // Si la edad es mayor que 35, convertir gameMorePlayed a mayúsculas
    if (streamer.age > 35) {
      streamer.gameMorePlayed = streamer.gameMorePlayed.toUpperCase()
    }
    return true
  }
  return false
})
// Imprimimos el nuevo array para verificar
console.log(legendsStreamers)
// Resultado: [{name: 'Ibai', age: 25, gameMorePlayed: 'League of Legends'}, {name: 'Reven', age: 43, gameMorePlayed: 'LEAGUE OF LEGENDS'}]
