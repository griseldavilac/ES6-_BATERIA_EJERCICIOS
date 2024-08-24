/*
EJERCICIO 9

Dado el siguiente javascript usa for...of para recorrer el array de películas, genera un nuevo array con las categorías de las películas e imprime por consola el array de categorías. Ten en cuenta que las categorías no deberían repetirse.

const movies = [
  {
    title: "Bracula: Condemor II",
    duration: 192,
    categories: ["comedia", "aventura"],
  },
  {
    title: "Spider-Man: No Way Home",
    duration: 122,
    categories: ["aventura", "acción"],
  },
  {
    title: "The Voices",
    duration: 223,
    categories: ["comedia", "thriller"],
  },
  {
    title: "Shrek",
    duration: 111,
    categories: ["comedia", "aventura", "animación"],
  },
];
*/

// Definimos el array movies
const movies = [
  {
    title: 'Bracula: Condemor II',
    duration: 192,
    categories: ['comedia', 'aventura']
  },
  {
    title: 'Spider-Man: No Way Home',
    duration: 122,
    categories: ['aventura', 'acción']
  },
  {
    title: 'The Voices',
    duration: 223,
    categories: ['comedia', 'thriller']
  },
  {
    title: 'Shrek',
    duration: 111,
    categories: ['comedia', 'aventura', 'animación']
  }
]

// Creamos un nuevo array para almacenar las categorías únicas
const categories = []

// Usamos for...of para recorrer el array de películas
for (const movie of movies) {
  // Recorremos cada categoría de la película
  for (const category of movie.categories) {
    // Verificamos si la categoría ya está en el array categories
    if (!categories.includes(category)) {
      // Si no está, la agregamos al array categories
      categories.push(category)
    }
  }
}

// Imprimimos el array de categorías únicas
console.log(categories)
// Resultado: ['comedia', 'aventura', 'acción', 'thriller', 'animación']
