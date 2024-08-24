/*
EJERCICIO 12

Crea una función llamada findArrayIndex que reciba como parámetros un array de textos y un texto, 
y devuelva la posición del array cuando el valor del array sea igual al valor del texto que enviaste como parámetro.

Haz varios ejemplos y compruébalos.

Sugerencia de función:
function findArrayIndex(array, text) {}

Ejemplo de array:
const mainCharacters = [
  "Luke",
  "Leia",
  "Han Solo",
  "Chewbacca",
  "Rey",
  "Anakin",
  "Obi-Wan",
];
*/

// Definimos la función findArrayIndex
function findArrayIndex(array, text) {
  // Usamos un bucle for para recorrer el array
  for (let i = 0; i < array.length; i++) {
    // Comprobamos si el elemento en la posición i es igual al texto
    if (array[i] === text) {
      // Si encontramos el texto, devolvemos la posición
      return i
    }
  }
  // Si no encontramos el texto en el array, devolvemos -1
  return -1
}

// Ejemplo de uso de la función
const mainCharacters = [
  'Luke',
  'Leia',
  'Han Solo',
  'Chewbacca',
  'Rey',
  'Anakin',
  'Obi-Wan'
]

// Comprobamos algunos ejemplos
console.log(findArrayIndex(mainCharacters, 'Luke')) // Resultado: 0
console.log(findArrayIndex(mainCharacters, 'Rey')) // Resultado: 4
console.log(findArrayIndex(mainCharacters, 'Han Solo')) // Resultado: 2
console.log(findArrayIndex(mainCharacters, 'Darth Vader')) // Resultado: -1 (no se encuentra en el array)
