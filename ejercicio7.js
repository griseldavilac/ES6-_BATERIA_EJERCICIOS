/*
EJERCICIO 7 - REDUCE

7.1 Dado el siguiente array, haz una suma de todos las notas de los examenes de 
los alumnos usando la función .reduce().
const exams = [
    {name: 'Yuyu Cabeza Crack', score: 5}, 
    {name: 'Maria Aranda Jimenez', score: 1}, 
    {name: 'Cristóbal Martínez Lorenzo', score: 6}, 
    {name: 'Mercedez Regrera Brito', score: 7},
    {name: 'Pamela Anderson', score: 3},
    {name: 'Enrique Perez Lijó', score: 6},
    {name: 'Pedro Benitez Pacheco', score: 8},
    {name: 'Ayumi Hamasaki', score: 4},
    {name: 'Robert Kiyosaki', score: 2},
    {name: 'Keanu Reeves', score: 10}
];

7.2 Dado el mismo array, haz una suma de todos las notas de los examenes de los 
alumnos que estén aprobados usando la función .reduce().

7.3 Dado el mismo array, haz la media de las notas de todos los examenes usando .reduce().
*/

//-------------------EJERCICIO 7.1--------------------------------
// Definimos el array exams
const exams = [
  { name: 'Yuyu Cabeza Crack', score: 5 },
  { name: 'Maria Aranda Jimenez', score: 1 },
  { name: 'Cristóbal Martínez Lorenzo', score: 6 },
  { name: 'Mercedez Regrera Brito', score: 7 },
  { name: 'Pamela Anderson', score: 3 },
  { name: 'Enrique Perez Lijó', score: 6 },
  { name: 'Pedro Benitez Pacheco', score: 8 },
  { name: 'Ayumi Hamasaki', score: 4 },
  { name: 'Robert Kiyosaki', score: 2 },
  { name: 'Keanu Reeves', score: 10 }
]

// Usamos .reduce() para sumar todas las notas
const totalScore = exams.reduce(
  (accumulator, exam) => accumulator + exam.score,
  0
)

// Imprimimos el resultado
console.log(totalScore) // Resultado: 52

//-------------------EJERCICIO 7.2--------------------------------
// Usamos .reduce() para sumar solo las notas de los alumnos aprobados (nota >= 5)
const totalApprovedScore = exams.reduce((accumulator, exam) => {
  return exam.score >= 5 ? accumulator + exam.score : accumulator
}, 0)

// Imprimimos el resultado
console.log(totalApprovedScore) // Resultado: 36

//-------------------EJERCICIO 7.3--------------------------------
// Usamos .reduce() para calcular la media de las notas
const averageScore = exams.reduce((accumulator, exam, index, array) => {
  accumulator += exam.score
  if (index === array.length - 1) {
    return accumulator / array.length
  }
  return accumulator
}, 0)

// Imprimimos el resultado
console.log(averageScore) // Resultado: 5.2
