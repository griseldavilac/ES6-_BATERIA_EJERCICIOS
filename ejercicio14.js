/*
EJERCICIO 14

Crea una función llamada rollDice() que reciba como parámetro el número de caras 
que queramos que tenga el dado que deberá simular el código dentro de la función. 
Como hemos dicho, que la función use el parámetro para simular una tirada de dado 
y retornar el resultado. 
*/

// Definimos la función rollDice que recibe un parámetro faces, que representa el número de caras del dado que queremos simular.
function rollDice(faces) {
  // Generamos un número aleatorio entre 1 y el número de caras (inclusive) , utilizamos Math.random() para generar un número decimal aleatorio entre 0 (inclusive) y 1 (exclusivo). Multiplicamos el resultado de Math.random() por faces para escalar el valor al rango deseado (de 0 a faces-1).
  const result = Math.floor(Math.random() * faces) + 1
  //Usamos Math.floor() para redondear el número hacia abajo, obteniendo así un número entero. Sumamos 1 al resultado para que el rango final sea de 1 a faces.

  // Retornamos el resultado de la tirada, que será un número entre 1 y el número de caras especificado.
  return result
}

// Ejemplo de uso de la función
console.log(rollDice(6)) // Resultado: un número entre 1 y 6 (dado de 6 caras)
console.log(rollDice(12)) // Resultado: un número entre 1 y 12 (dado de 12 caras)
console.log(rollDice(20)) // Resultado: un número entre 1 y 20 (dado de 20 caras)
