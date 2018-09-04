// # 6 Métodos de String y Array [Modulo B]

// - 6.1	Validación de tipo de valor mediante `typeof`

// var firstName = 'Bea'

// if (typeof firstName === 'string') {
//   console.log('Soy un string! Seguro!')
// }

// - 6.2	Métodos de String
//    - `length`

// var password = prompt('Ingresá un password')

// if (typeof password === 'string') {
//   while (password.length < 8) {
//     password = prompt('Contraseña muy corta ingresala de nuevo')
//   }

//   console.log('Contraseña segura')
// }

//    - `indexOf`

// var email = prompt('Ingresá un email')

// if (typeof email === 'string') {
//   while (email.indexOf('@') === -1 || email.indexOf('.com') === -1) {
//     email = prompt('Ingresá un email que sea valido, osea con .com y @')
//   }

//   console.log('El mail ' + email + ' es correcto')
//   // if (email.indexOf('@') !== -1 && email.indexOf('.com') !== -1) {
//   //   console.log('El mail ' + email + ' es correcto')
//   // }
// }

//    - `toUpperCase`
//    - `toLowerCase`

// var firstName = prompt('Ingresá tu nombre')

// if (typeof firstName === 'string') {
//   var firstNameUpperCase = firstName.toUpperCase()
//   console.log(firstNameUpperCase)
// }

//    - `split`

// var studentsNames = prompt('Ingresa alumnos separados por coma')

// console.log('Lo ingreso el usuario', studentsNames)

// if (typeof studentsNames === 'string') {
//   var studentsNamesArray = studentsNames.split(',')
//   for (var i = 0; i < studentsNamesArray.length; i++) {
//     console.log(studentsNamesArray[i].trim())
//   }
// }

// - 6.3	Validación de Array mediante `Array.isArray()`

// var students = []

// if(Array.isArray(students)){

// }

// - 6.4	Métodos de Array
//    - `length`
//    - `toString`

// var colors = [ 'red', 'blue', 'yellow' ]

// if (Array.isArray(colors)) {
//   console.log(colors.toString())
// }

//    - `join`

// var colors = [ 'red', 'blue', 'yellow' ]

// if (Array.isArray(colors)) {
//   console.log(colors.join(' | '))
// }

//    - `push`

// var colors = [ 'red', 'blue', 'yellow' ]

// if (Array.isArray(colors)) {
//   var newColor = prompt('Ingresá color')

//   colors.push(newColor)

//   console.log(colors)
// }

//    - `slice`

// var colors = [ 'red', 'blue', 'yellow' ]

// if (Array.isArray(colors)) {
//   var newColors = colors.slice()

//   colors.push('white')

//   newColors.push('black')

//   console.log('Colores original ', colors)
//   console.log('Colores nuevos ', newColors)
// }

// var firstName = 'Juan'

// var firstName2 = firstName

// firstName = 'Pedro'

// console.log(firstName, firstName2)

//    - `splice`

// var colors = [ 'red', 'blue', 'yellow' ]

// var askColor = prompt('Ingresá el valor a eliminar')

// var index = colors.indexOf(askColor)

// if (index !== -1) {
//   colors.splice(index, 1)

//   console.log(colors)
// }

//    - `sort`

// var colors = [ 'yellow', 'Ñandú', 'Red', 'blue', '1234' ]

// console.log(colors.sort())

function deleteElement (index, numbersArray) {
  // Copiar el Array
  // Eliminar el elemento
  // Devolver el array
}

var numbers = [ 1, 2, 3, 4, 5 ]

var result = deleteElement(2, numbers) // Devuelve un nuevo Array [1,2,4,5]

console.log(numbers)
console.log(result)
