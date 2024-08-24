/*
EJERCICIO 13

Usando la función anterior benefíciate de poder conocer el índice del array 
para crear una función llamada removeItem que, pasándole un array y un texto 
como parámetros (los mismos parámetros que en el anterior ejercicio), llame a 
la función anteriormente creada findArrayIndex y obtén el índice para 
posteriormente usar la función de JavaScript .splice() para eliminar el 
elemento del array.

Finalmente, retorna el array.

De nuevo, haz varios ejemplos para practicar y comprueba que funcionan 
correctamente.
*/

// Función del ejercicio anterior para encontrar el índice
function findArrayIndex(array, text) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === text) {
      return i
    }
  }
  return -1
}

// Nueva función removeItem
function removeItem(array, text) {
  // Obtener el índice del elemento a eliminar usando findArrayIndex
  const index = findArrayIndex(array, text)

  // Si el índice es válido (diferente de -1), eliminamos el elemento
  if (index !== -1) {
    array.splice(index, 1)
  }

  // Retornamos el array modificado
  return array
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
console.log(removeItem(mainCharacters, 'Leia')) // Resultado: ['Luke', 'Han Solo', 'Chewbacca', 'Rey', 'Anakin', 'Obi-Wan']
console.log(removeItem(mainCharacters, 'Rey')) // Resultado: ['Luke', 'Han Solo', 'Chewbacca', 'Anakin', 'Obi-Wan']
console.log(removeItem(mainCharacters, 'Darth Vader')) // Resultado: ['Luke', 'Han Solo', 'Chewbacca', 'Anakin', 'Obi-Wan'] (no cambia porque no encuentra el elemento)
