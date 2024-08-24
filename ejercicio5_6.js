// Definimos el array de streamers
const streamers = [
  { name: 'Rubius', age: 32, gameMorePlayed: 'Minecraft' },
  { name: 'Ibai', age: 25, gameMorePlayed: 'League of Legends' },
  { name: 'Reven', age: 43, gameMorePlayed: 'League of Legends' },
  { name: 'AuronPlay', age: 33, gameMorePlayed: 'Among Us' }
]

// Seleccionamos el input utilizando el atributo data-function
const input = document.querySelector('input[data-function="toFilterStreamers"]')

// Agregamos un event listener que se activará cuando el usuario escriba en el input
input.addEventListener('input', function () {
  // Obtenemos el valor actual del input
  const searchTerm = input.value.toLowerCase()

  // Usamos .filter() para encontrar los streamers que incluyan el término de búsqueda
  const filteredStreamers = streamers.filter((streamer) =>
    streamer.name.toLowerCase().includes(searchTerm)
  )

  // Mostramos los streamers filtrados en la consola
  console.log(filteredStreamers)
})
