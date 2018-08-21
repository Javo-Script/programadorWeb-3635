// # 2 Control de flujo [Modulo A]

// - 2.1 Condicionales
//    - `ìf`

// var light = true

// if (light) {
//   console.log('Lamparita encendida')
// } else {
//   console.log('Lamparita apagada')
// }

// console.log('Acá estoy afuera de if')

// var value = ''

// if (value) {
//   console.log('Valor verdadero')
// } else {
//   console.log('Valor falso')
// }

//    - `switch`
// - 2.2 Operadores de comparación
//    - `===`

// var age = prompt('Ingresá tu edad')

// var parsedAge = parseInt(age, 10)

// if (parsedAge === 18) {
//   console.log('Tenés 18 años')
// } else {
//   console.log('Tenés otra edad')
// }

//    - `!==`

// var firstName = prompt('Ingresá tu nombre')

// if (firstName !== 'Juan') {
//   console.log('Tu nombre no es Juan')
// } else {
//   console.log('Te llamas Juan')
// }

//    - `<`

// var age = prompt('Ingresá tu edad')

// if (age < 18) {
//   console.log('Sos menor de 18 años')
// }

//    - `>`

// var age = prompt('Ingresá tu edad')

// if (age > 18) {
//   console.log('Sos mayor de 18 años')
// }

//    - `>=`

// var age = prompt('Ingresá tu edad')

// if (age >= 18) {
//   console.log('Sos mayor o igual a 18 años')
// }

//    - `<=`

// var age = prompt('Ingresá tu edad')

// if (age <= 18) {
//   console.log('Sos menor o igual a 18 años')
// }

// - 2.3 Operadores lógicos

//    - `&&`

// var value = prompt('Cuanto pagaste el boleto en octubre?')

// if (14.25 <= value && value <= 16.5) {
//   console.log('El valor es correcto')
// } else {
//   if (14.25 > value) {
//     console.log('Valor muy barato')
//   } else {
//     console.log('Valor muy caro')
//   }
// }

//    - `||`

// var firstName = prompt('Ingresá tu nombre')

// if (
//   firstName === 'Bárbara' ||
//   firstName === 'bárbara' ||
//   firstName === 'Barbara' ||
//   firstName === 'barbara'
// ) {
//   console.log('Tu nombre es Barbara aunque lo haya escrito de otra manera')
// } else {
//   console.log('Tu nombre no es Barbara')
// }

//    - `!`

// var firstName = 'Pepe'

// console.log('Pepe negado', !firstName)

// var value = 0

// console.log('Cero doble negado', !!value, value)

// var firstName = prompt('Ingresá tu nombre')

// if (!firstName) {
//   console.log('Ingresalo de nuevo')
// }

var age = prompt('Ingresá tu edad')

// if (gameResult === 'Ganó') {
//   console.log('Sumas tres puntos')
// } else {
//   if (gameResult === 'Empató') {
//     console.log('Sumas 1 punto')
//   } else {
//     if (gameResult === 'Perdió') {
//       console.log('Sumas 0 puntos')
//     } else {
//       console.log('Resultado incorrecto')
//     }
//   }
// }

if (age >= 18) {
  var gameResult = prompt('Como salió el partido? Ganó, Perdió, Empató')

  switch (gameResult) {
    case 'gano':
    case 'ganó':
    case 'Gano':
    case 'Ganó':
      console.log('Sumas tres puntos')
      break
    case 'Empató':
      console.log('Sumas 1 punto')
      break
    case 'Perdió':
      console.log('Sumas 0 puntos')
      break
    default:
      console.log('Resultado incorrecto')
      break
  }
}
