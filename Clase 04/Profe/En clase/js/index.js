console.log('Init app clase 04')

// # 4 Funciones [Modulo A]

// - 4.1 ¿Que es una función?

// function showMessageHowAreYou () {
//   console.log('----------------')
//   console.log('Hola como andas?')
//   console.log('----------------')
// }

// showMessageHowAreYou()
// showMessageHowAreYou()
// showMessageHowAreYou()

// - 4.2 Parámetros que recibe una función

// function showMessageHowAreYou (name) {
//   var message = 'Hola ' + name + ',como andas?'
//   console.log(message)
// }

// showMessageHowAreYou('Adrián')
// showMessageHowAreYou('Pedro')

// function showMessageHowAreYou (name, cantNotifications) {
//   var message =
//     'Hola ' +
//     name +
//     ',como andas? Tenés ' +
//     cantNotifications +
//     ' notificaciones nuevas!'
//   console.log(message)
// }

// var firstName = prompt('Ingresá tu nombre')
// var secondName = prompt('Ingresá tu segundo nombre')

// showMessageHowAreYou(firstName, 12)

// showMessageHowAreYou(secondName, 19)

// var number = '10'

// var parsedNumber = parseFloat(number, 10)

// - 4.3 Valor de retorno de una función

// function square (number) {
//   var result = number * number

//   return result
// }

// var squareResult = square(2)

// console.log(squareResult)

// function evalDay (day) {
//   var message

//   switch (day) {
//     case 'Lunes':
//     case 'Martes':
//     case 'Miércoles':
//     case 'Jueves':
//     case 'Viernes':
//       message = 'Es un día habíl'
//       break
//     case 'Sábado':
//     case 'Domingo':
//       message = 'Es día de fin de semana'
//       break
//     default:
//       message = 'Ingresaste cualquier cosa!'
//       break
//   }

//   return message
// }

// var result1 = evalDay('Lunes')

// console.log(result1)
// console.log(evalDay('Sábado'))
// console.log(evalDay('Pato'))

// - 4.4 Scope global y scope local

// var firstName = 'Pedro'

// function showMessage (firstName) {
//   console.log('Adentro', firstName)
// }

// console.log('Antes', firstName)

// showMessage()

// console.log('Después', firstName)

// function showMessage () {
//   var firstName = 'Pedro'

//   console.log('Adentro', firstName)

//   return firstName
// }

// var name = showMessage()

// console.log('Después', name)

var studentsArray = [
  {
    firstName: 'Javier',
    age: 29
  },
  {
    firstName: 'Barbara',
    age: 25
  },
  {
    firstName: 'Adrián',
    age: 29
  }
]

function showStudentInfo (students) {
  var student

  for (var i = 0; i < students.length; i++) {
    student = students[i]
    showInfo(student)
  }
}

function showInfo (student) {
  console.log('Nome: ' + student.firstName)
}

showStudentInfo(studentsArray)

// var firstName = prompt('Ingresá tu nombre')

// studentsArray.push({
//   firstName: firstName
// })

// console.log('------------')

// showStudentInfo(studentsArray)
// Rescrita

// var student

// for (var i = 0; i < studentsArray.length; i++) {
//   student = studentsArray[i]
//   console.log(student)
// }

// showStudentInfo([
//   {
//     firstName: 'Pedro',
//     age: 29
//   },
//   {
//     firstName: 'Bilma',
//     age: 25
//   },
//   {
//     firstName: 'Pablo',
//     age: 29
//   }
// ])

// var array = [
//   {
//     firstName: 'Pedro',
//     age: 29
//   },
//   {
//     firstName: 'Bilma',
//     age: 25
//   },
//   {
//     firstName: 'Pablo',
//     age: 29
//   }
// ]

// var student

// for (var i = 0; i < array.length; i++) {
//   student = array[i]
//   console.log(student)
// }
