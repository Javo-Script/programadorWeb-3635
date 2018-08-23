console.log('Init app')

// console.log(1)
// console.log(2)
// console.log(3)
// console.log(4)
// console.log(5)
// console.log(6)
// console.log(7)
// console.log(8)
// console.log(9)
// console.log(10)

// While

// var counter = 1

// while (counter <= 20) {
//   console.log(counter)

//   if (counter === 11) {
//     console.log('Soy de once!')
//   }

//   counter = counter + 1
// }

// Do while

// var counter = 11

// do {
//   console.log(counter)
//   counter++
// } while (counter <= 10)

// var password1 = prompt('Ingresá contraseña 1')

// var password2

// var counter = 1

// do {
//   password2 = prompt('Ingresá la misma contraseña')
//   counter++
// } while (password1 !== password2 && counter <= 3)

// console.log(
//   'Salí del while con el valor de ambos password en ',
//   password1,
//   password2
// )

// for (var i = 0; i <= 10; i = i * 1.5) {
//   console.log(i)
// }

// var colors = [ 'red', 'blue', 'green', 'yellow', 'silver', 'gold' ]

// var color

// console.log('Los colores de pokémon que me acuerdo son los siguientes: ')

// for (var i = 0; i < colors.length; i++) {
//   color = colors[i]

//   console.log(color)
// }

var pokemons = [
  {
    name: 'bulbasaur',
    type: 'Planta'
  },
  {
    name: 'charmander',
    type: 'Fuego'
  },
  {
    name: 'squartle'
  }
]

var pokemon

console.log('Los pokémon que me acuerdo son los siguientes: ')

for (var i = 0; i < pokemons.length; i++) {
  pokemon = pokemons[i]

  console.log('Nombre: ' + pokemon.name, 'Tipo: ' + pokemon.type)
}

// Prueba
