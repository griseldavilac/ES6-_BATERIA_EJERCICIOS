/*
EJERCICIO 1
-----------
Crea una arrow function que tenga dos parametros a y b y 
que por defecto el valor de a = 10 y de b = 5. Haz que la función muestre 
por consola la suma de los dos parametros.

1.1 Ejecuta esta función sin pasar ningún parametro
1.2 Ejecuta esta función pasando un solo parametro
1.3 Ejecuta esta función pasando dos parametros
*/

// Definimos una función flecha que recibe dos parámetros: a y b
// Asignamos valores por defecto: a = 10 y b = 5
const sumar = (a = 10, b = 5) => {
  // Mostramos en consola la suma de los parámetros a y b
  console.log(a + b)
}

// 1.1 Ejecuta esta función sin pasar ningún parámetro
// Como no se pasan parámetros, la función usará los valores por defecto (a = 10, b = 5)
sumar() // Resultado: 15

// 1.2 Ejecuta esta función pasando un solo parámetro
// En este caso, pasamos solo el valor de a, por lo que b tomará su valor por defecto (5)
sumar(20) // Resultado: 25 (20 + 5)

// 1.3 Ejecuta esta función pasando dos parámetros
// Aquí pasamos valores para ambos parámetros, por lo que no se usan los valores por defecto
sumar(7, 3) // Resultado: 10 (7 + 3)
