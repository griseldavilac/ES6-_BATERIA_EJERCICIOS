/*
EJERCICIO 2 - DESTRUCTURING
2.1 En base al siguiente javascript, crea variables en base a las propiedades 
del objeto usando object destructuring e imprimelas por consola. Cuidado, 
no hace falta hacer destructuring del array, solo del objeto.

const game = {title: 'The last us 2', gender: ['action', 'zombie', 'survival'], year: 2020}

2.2 En base al siguiente javascript, usa destructuring para crear 3 variables 
llamadas fruit1, fruit2 y fruit3, con los valores del array. Posteriormente
imprimelo por consola.

const fruits = ['Banana', 'Strawberry', 'Orange'];

2.3 En base al siguiente javascript, usa destructuring para crear 2 
variables igualandolo a la función e imprimiendolo por consola.

const animalFunction = () => {
    return {name: 'Bengal Tiger', race: 'Tiger'}
};

2.4 En base al siguiente javascript, usa destructuring para crear las 
variables name y itv con sus respectivos valores. Posteriormente crea 
3 variables usando igualmente el destructuring para cada uno de los años 
y comprueba que todo esta bien imprimiendolo.

const car = {name: 'Mazda 6', itv: [2015, 2011, 2020] }
*/

//-------------------EJERCICIO 2.1--------------------------------
// Definimos el objeto game con sus propiedades
const game = {
  title: 'The last of us 2',
  gender: ['action', 'zombie', 'survival'],
  year: 2020
}
// Usamos object destructuring para extraer las propiedades del objeto en variables
const { title, gender, year } = game
// Imprimimos cada una de las variables extraídas
console.log(title) // Resultado: 'The last of us 2'
console.log(gender) // Resultado: ['action', 'zombie', 'survival']
console.log(year) // Resultado: 2020

//-------------------EJERCICIO 2.2--------------------------------
// Definimos el array fruits con tres elementos
const fruits = ['Banana', 'Strawberry', 'Orange']
// Usamos array destructuring para extraer los elementos del array en variables
const [fruit1, fruit2, fruit3] = fruits
// Imprimimos cada una de las variables extraídas
console.log(fruit1) // Resultado: 'Banana'
console.log(fruit2) // Resultado: 'Strawberry'
console.log(fruit3) // Resultado: 'Orange'

//-------------------EJERCICIO 2.3--------------------------------
// Definimos la función animalFunction que retorna un objeto
const animalFunction = () => {
  return { name: 'Bengal Tiger', race: 'Tiger' }
}
// Usamos object destructuring para extraer las propiedades del objeto retornado en variables
const { name, race } = animalFunction()
// Imprimimos cada una de las variables extraídas
console.log(name) // Resultado: 'Bengal Tiger'
console.log(race) // Resultado: 'Tiger'

//-------------------EJERCICIO 2.4--------------------------------
// Definimos el objeto car con sus propiedades
const car = { name: 'Mazda 6', itv: [2015, 2011, 2020] }
// Usamos object destructuring para extraer las propiedades name e itv del objeto
const { name: carName, itv } = car
// Usamos array destructuring para extraer los años del array itv
const [year1, year2, year3] = itv
// Imprimimos cada una de las variables extraídas
console.log(carName) // Resultado: 'Mazda 6'
console.log(itv) // Resultado: [2015, 2011, 2020]
console.log(year1) // Resultado: 2015
console.log(year2) // Resultado: 2011
console.log(year3) // Resultado: 2020
