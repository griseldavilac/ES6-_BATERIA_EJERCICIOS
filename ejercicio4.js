/*
EJERCICIO 4 - MAPS

4.1 Dado el siguiente array, devuelve un array con sus nombres utilizando .map().
const users = [
	{id: 1, name: 'Abel'},
	{id:2, name: 'Julia'},
	{id:3, name: 'Pedro'},
	{id:4, name: 'Amanda'}
];

4.2 Dado el siguiente array, devuelve una lista que contenga los valores de la propiedad .name y cambia el nombre a 'Anacleto' en caso de que empiece por 'A'.
const users = [
	{id: 1, name: 'Abel'},
	{id:2, name: 'Julia'},
	{id:3, name: 'Pedro'},
	{id:4, name: 'Amanda'}
];

4.3 Dado el siguiente array, devuelve una lista que contenga los valores de la propiedad .name y añade al valor de .name el string ' (Visitado)' cuando el valor de la propiedad isVisited = true.
const cities = [
	{isVisited:true, name: 'Tokyo'}, 
	{isVisited:false, name: 'Madagascar'},
	{isVisited:true, name: 'Amsterdam'}, 
	{isVisited:false, name: 'Seul'}
];
*/

//-------------------EJERCICIO 4.1--------------------------------
// Definimos el array users
const users = [
  { id: 1, name: 'Abel' },
  { id: 2, name: 'Julia' },
  { id: 3, name: 'Pedro' },
  { id: 4, name: 'Amanda' }
]
// Usamos .map() para crear un nuevo array con solo los nombres de los usuarios
const userNames = users.map((user) => user.name)
// Imprimimos el nuevo array para verificar
console.log(userNames) // Resultado: ['Abel', 'Julia', 'Pedro', 'Amanda']

//-------------------EJERCICIO 4.2--------------------------------
// Usamos .map() para crear un nuevo array con los nombres, cambiando a 'Anacleto' si el nombre empieza por 'A'
const modifiedNames = users.map((user) => {
  return user.name.startsWith('A') ? 'Anacleto' : user.name
})
// Imprimimos el nuevo array para verificar
console.log(modifiedNames) // Resultado: ['Anacleto', 'Julia', 'Pedro', 'Anacleto']

//-------------------EJERCICIO 4.3--------------------------------
// Definimos el array cities
const cities = [
  { isVisited: true, name: 'Tokyo' },
  { isVisited: false, name: 'Madagascar' },
  { isVisited: true, name: 'Amsterdam' },
  { isVisited: false, name: 'Seul' }
]
// Usamos .map() para crear un nuevo array que añade ' (Visitado)' a las ciudades visitadas
const visitedCities = cities.map((city) => {
  return city.isVisited ? `${city.name} (Visitado)` : city.name
})
// Imprimimos el nuevo array para verificar
console.log(visitedCities) // Resultado: ['Tokyo (Visitado)', 'Madagascar', 'Amsterdam (Visitado)', 'Seul']
