/*
EJERCICIO 11

Dado el siguiente javascript usa for...of y for...in para saber cuántas veces ha 
sido cada sonido agregado por los usuarios a favorito.

Para ello, recorre la lista de usuarios y usa for...in para recoger el nombre 
de los sonidos que el usuario tenga como favoritos.

Una vez accedas a ellos, piensa en la mejor forma de hacer un conteo de cada 
vez que ese sonido se repita como favorito en cada usuario.
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

// Creamos un objeto para almacenar el conteo de cada sonido
const soundCount = {}

// Usamos for...of para recorrer cada usuario en el array users
for (const user of users) {
  // Usamos for...in para recorrer cada sonido favorito del usuario
  for (const sound in user.favoritesSounds) {
    // Si el sonido ya está en soundCount, incrementamos el contador
    if (soundCount[sound]) {
      soundCount[sound]++
    } else {
      // Si el sonido no está en soundCount, lo inicializamos en 1
      soundCount[sound] = 1
    }
  }
}

// Imprimimos el objeto con el conteo de cada sonido
console.log(soundCount)
// Resultado esperado: { waves: 3, rain: 1, firecamp: 3, shower: 2, train: 2, wind: 1 }
