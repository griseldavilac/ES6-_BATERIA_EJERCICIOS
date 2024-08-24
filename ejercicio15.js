/*
EJERCICIO 15

Crea una función llamada swap que reciba un array y dos parámetros que sean 
índices del array. La función deberá intercambiar la posición de los valores de 
los índices que hayamos enviado como parámetro. Retorna el array resultante.

Sugerencia de array:
const fantasticFour = [
  "La antorcha humana",
  "Mr. Fantástico",
  "La mujer invisible",
  "La cosa",
];
*/

// Definimos la función swap
function swap(array, index1, index2) {
  // Guardamos el valor en la posición index1 en una variable temporal
  const temp = array[index1]

  // Asignamos el valor en la posición index2 a la posición index1
  array[index1] = array[index2]

  // Asignamos el valor almacenado en temp a la posición index2
  array[index2] = temp

  // Retornamos el array modificado
  return array
}

// Ejemplo de uso de la función
const fantasticFour = [
  'La antorcha humana',
  'Mr. Fantástico',
  'La mujer invisible',
  'La cosa'
]

// Comprobamos algunos ejemplos
console.log(swap(fantasticFour, 0, 3))
// Resultado: ["La cosa", "Mr. Fantástico", "La mujer invisible", "La antorcha humana"]

console.log(swap(fantasticFour, 1, 2))
// Resultado: ["La cosa", "La mujer invisible", "Mr. Fantástico", "La antorcha humana"]

console.log(swap(fantasticFour, 2, 3))
// Resultado: ["La cosa", "La mujer invisible", "La antorcha humana", "Mr. Fantástico"]
