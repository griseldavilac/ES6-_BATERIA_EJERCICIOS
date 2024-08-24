/*
EJERCICIO 8 - BONUS

8.1 Dado el siguiente javascript filtra los videojuegos por gender = 'RPG' usando .filter() y usa .reduce() para conseguir la media de sus .score. 
La función .find() también podría ayudarte para encontrar el género 'RPG' en el array .genders.

const videogames = [
    {name: 'Final Fantasy VII', genders: ['RPG'], score: 9.5},
    {name: 'Assasins Creed Valhala', genders: ['Aventura', 'RPG'], score: 4.5},
    {name: 'The last of Us 2', genders: ['Acción', 'Aventura'], score: 9.8},
    {name: 'Super Mario Bros', genders: ['Plataforma'], score: 8.5},
    {name: 'Genshin Impact', genders: ['RPG', 'Aventura'], score: 7.5},
    {name: 'Legend of Zelda: Breath of the wild', genders: ['RPG'], score: 10},
]
*/

// Definimos el array videogames
const videogames = [
  { name: 'Final Fantasy VII', genders: ['RPG'], score: 9.5 },
  { name: 'Assasins Creed Valhala', genders: ['Aventura', 'RPG'], score: 4.5 },
  { name: 'The last of Us 2', genders: ['Acción', 'Aventura'], score: 9.8 },
  { name: 'Super Mario Bros', genders: ['Plataforma'], score: 8.5 },
  { name: 'Genshin Impact', genders: ['RPG', 'Aventura'], score: 7.5 },
  { name: 'Legend of Zelda: Breath of the wild', genders: ['RPG'], score: 10 }
]

// Usamos .filter() para filtrar los videojuegos que tienen el género 'RPG'
const rpgGames = videogames.filter((game) =>
  game.genders.find((gender) => gender === 'RPG')
)

// Usamos .reduce() para calcular la media de los puntajes (score) de los juegos RPG
const averageRpgScore = rpgGames.reduce((accumulator, game, index, array) => {
  accumulator += game.score
  if (index === array.length - 1) {
    return accumulator / array.length
  }
  return accumulator
}, 0)

// Imprimimos el resultado
console.log(averageRpgScore)
// Resultado: 7.9
