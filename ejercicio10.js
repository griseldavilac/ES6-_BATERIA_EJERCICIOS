/*
EJERCICIO 10
Dado el siguiente javascript usa for...of y for...in para hacer la media del 
volumen de todos los sonidos favoritos que tienen los usuarios.
*/

const users = [
  {
    name: 'Alberto',
    favoritesSounds: {
      waves: { format: 'mp3', volume: 50 },
      rain: { format: 'ogg', volume: 60 },
      firecamp: { format: 'mp3', volume: 80 }
    }
  },
  {
    name: 'Antonio',
    favoritesSounds: {
      waves: { format: 'mp3', volume: 30 },
      shower: { format: 'ogg', volume: 55 },
      train: { format: 'mp3', volume: 60 }
    }
  },
  {
    name: 'Pedro',
    favoritesSounds: {
      shower: { format: 'mp3', volume: 50 },
      train: { format: 'ogg', volume: 60 },
      firecamp: { format: 'mp3', volume: 80 }
    }
  },
  {
    name: 'Cristina',
    favoritesSounds: {
      waves: { format: 'mp3', volume: 67 },
      wind: { format: 'ogg', volume: 35 },
      firecamp: { format: 'mp3', volume: 60 }
    }
  }
]

// Variables para almacenar la suma de los volúmenes y el número total de sonidos
let totalVolume = 0
let totalSounds = 0

// Usamos for...of para recorrer cada usuario en el array users
for (const user of users) {
  // Usamos for...in para recorrer cada sonido favorito del usuario
  for (const sound in user.favoritesSounds) {
    // Sumar el volumen del sonido al totalVolume
    totalVolume += user.favoritesSounds[sound].volume
    // Incrementar el número total de sonidos
    totalSounds++
  }
}

// Calculamos la media del volumen
const averageVolume = totalVolume / totalSounds

// Imprimimos la media del volumen
console.log(averageVolume)
// Resultado esperado: 57.083333333333336
