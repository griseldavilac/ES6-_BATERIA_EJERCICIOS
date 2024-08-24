/*
EJERCICIO 6 - FIND

6.1 Dado el siguiente array, usa .find() para encontrar el número 100.
const numbers = [32, 21, 63, 95, 100, 67, 43];

6.2 Dado el siguiente array, usa .find() para encontrar la película del año 2010.
const movies = [
	{title: 'Madagascar', stars: 4.5, date: 2015},
	{title: 'Origen', stars: 5, date: 2010},
	{title: 'Your Name', stars: 5, date: 2016}
];

6.3 Dado el siguiente javascript, usa .find() para encontrar el alien de nombre 'Cucushumushu' y la mutación 'Porompompero'. Una vez que los encuentres, usa spread operator para fusionarlos teniendo en cuenta que el objeto de la mutación lo queremos meter en la propiedad .mutation del objeto fusionado.
const aliens = [
	{name: 'Zalamero', planet: 'Eden', age: 4029},
	{name: 'Paktu', planet: 'Andromeda', age: 32},
	{name: 'Cucushumushu', planet: 'Marte', age: 503021}
];
const mutations = [
	{name: 'Porompompero', description: 'Hace que el alien pueda adquirir 
	la habilidad de tocar el tambor'},
	{name: 'Fly me to the moon', description: 'Permite volar, 
	solo y exclusivamente a la luna'},
	{name: 'Andando que es gerundio', description: 'Invoca a un 
	señor mayor como Personal Trainer'}
];
*/

//-------------------EJERCICIO 6.1--------------------------------
// Definimos el array numbers
const numbers = [32, 21, 63, 95, 100, 67, 43]
// Usamos .find() para encontrar el número 100
const foundNumber = numbers.find((number) => number === 100)
// Imprimimos el resultado
console.log(foundNumber) // Resultado: 100

//-------------------EJERCICIO 6.2--------------------------------
// Definimos el array movies
const movies = [
  { title: 'Madagascar', stars: 4.5, date: 2015 },
  { title: 'Origen', stars: 5, date: 2010 },
  { title: 'Your Name', stars: 5, date: 2016 }
]
// Usamos .find() para encontrar la película del año 2010
const foundMovie = movies.find((movie) => movie.date === 2010)
// Imprimimos el resultado
console.log(foundMovie)
// Resultado: {title: 'Origen', stars: 5, date: 2010}

//-------------------EJERCICIO 6.3--------------------------------
// Definimos el array aliens
const aliens = [
  { name: 'Zalamero', planet: 'Eden', age: 4029 },
  { name: 'Paktu', planet: 'Andromeda', age: 32 },
  { name: 'Cucushumushu', planet: 'Marte', age: 503021 }
]
// Definimos el array mutations
const mutations = [
  {
    name: 'Porompompero',
    description:
      'Hace que el alien pueda adquirir la habilidad de tocar el tambor'
  },
  {
    name: 'Fly me to the moon',
    description: 'Permite volar, solo y exclusivamente a la luna'
  },
  {
    name: 'Andando que es gerundio',
    description: 'Invoca a un señor mayor como Personal Trainer'
  }
]
// Usamos .find() para encontrar el alien llamado 'Cucushumushu'
const foundAlien = aliens.find((alien) => alien.name === 'Cucushumushu')
// Usamos .find() para encontrar la mutación llamada 'Porompompero'
const foundMutation = mutations.find(
  (mutation) => mutation.name === 'Porompompero'
)
// Fusionamos el alien y la mutación usando el spread operator, añadiendo la mutación como propiedad 'mutation'
const alienWithMutation = { ...foundAlien, mutation: { ...foundMutation } }
// Imprimimos el resultado
console.log(alienWithMutation)
// Resultado: {name: 'Cucushumushu', planet: 'Marte', age: 503021, mutation: {name: 'Porompompero', description: 'Hace que el alien pueda adquirir la habilidad de tocar el tambor'}}
