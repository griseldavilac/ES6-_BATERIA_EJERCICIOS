/*
EJERCICIO 3 - SPREAD OPERATOR

3.1 Dado el siguiente array, crea una copia usando spread operators.
const pointsList = [32, 54, 21, 64, 75, 43]

3.2 Dado el siguiente objeto, crea una copia usando spread operators.
const toy = {name: 'Bus laiyiar', date: '20-30-1995', color: 'multicolor'};

3.3 Dado los siguientes arrays, crea un nuevo array juntandolos usando 
spread operatos.
const pointsList = [32, 54, 21, 64, 75, 43];
const pointsLis2 = [54,87,99,65,32];

3.4 Dado los siguientes objetos. Crea un nuevo objeto fusionando los dos 
con spread operators.
const toy = {name: 'Bus laiyiar', date: '20-30-1995', color: 'multicolor'};
const toyUpdate = {lights: 'rgb', power: ['Volar like a dragon', 'MoonWalk']}

3.5 Dado el siguiente array. Crear una copia de él eliminando la posición 2 
pero sin editar el array inicial. De nuevo, usando spread operatos.
const colors = ['rojo', 'azul', 'amarillo', 'verde', 'naranja'];
*/

//-------------------EJERCICIO 3.1--------------------------------
// Definimos el array pointsList
const pointsList = [32, 54, 21, 64, 75, 43]
// Creamos una copia del array usando spread operator , los 3 puntos
const pointsListCopy = [...pointsList]
// Imprimimos la copia para verificar
console.log(pointsListCopy) // Resultado: [32, 54, 21, 64, 75, 43]

//-------------------EJERCICIO 3.2--------------------------------
// Definimos el objeto toy
const toy = { name: 'Bus laiyiar', date: '20-30-1995', color: 'multicolor' }
// Creamos una copia del objeto usando spread operator
const toyCopy = { ...toy }
// Imprimimos la copia para verificar
console.log(toyCopy) // Resultado: {name: 'Bus laiyiar', date: '20-30-1995', color: 'multicolor'}

//-------------------EJERCICIO 3.3--------------------------------
// Definimos los arrays pointsList y pointsLis2
const pointsList1 = [32, 54, 21, 64, 75, 43]
const pointsLis2 = [54, 87, 99, 65, 32]
// Creamos un nuevo array combinando ambos usando spread operator
const combinedPoints = [...pointsList1, ...pointsLis2]
// Imprimimos el nuevo array para verificar
console.log(combinedPoints) // Resultado: [32, 54, 21, 64, 75, 43, 54, 87, 99, 65, 32]

//-------------------EJERCICIO 3.4--------------------------------
// Definimos los objetos toy y toyUpdate
const toyUpdate = { lights: 'rgb', power: ['Volar like a dragon', 'MoonWalk'] }
// Creamos un nuevo objeto fusionando ambos usando spread operator
const updatedToy = { ...toy, ...toyUpdate }
// Imprimimos el nuevo objeto para verificar
console.log(updatedToy)
// Resultado: {name: 'Bus laiyiar', date: '20-30-1995', color: 'multicolor', lights: 'rgb', power: ['Volar like a dragon', 'MoonWalk']}

//-------------------EJERCICIO 3.5--------------------------------
// Definimos el array colors
const colors = ['rojo', 'azul', 'amarillo', 'verde', 'naranja']
// Creamos una copia del array eliminando la posición 2 (índice 1) usando spread operator
const colorsCopy = [...colors.slice(0, 2), ...colors.slice(3)]
// Imprimimos la copia para verificar
console.log(colorsCopy) // Resultado: ['rojo', 'azul', 'verde', 'naranja']
