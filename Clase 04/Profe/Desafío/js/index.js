console.log('Init app')

var studentsList = [
  {
    firstName: 'Juan',
    lastName: 'Pérez',
    dni: 45678987
  },
  {
    firstName: 'Ana',
    lastName: 'Fernandez',
    dni: 45678989
  },
  {
    firstName: 'Pedro',
    lastName: 'Mármol',
    dni: 45678956
  },
  {
    firstName: 'Pablo',
    lastName: 'Picapiedras',
    dni: 45678983
  }
]

function searchStudentIndexByText (text, studentsList) {
  var student

  for (var i = 0; i < studentsList.length; i++) {
    student = studentsList[i]
    if (text === student.firstName || text === student.lastName) {
      return i
    }
  }

  return -1
}

var text = 'Ana'

var result = searchStudentIndexByText(text, studentsList)

if (result !== -1) {
  console.log('Encontré el usuario ' + text + ' en la posición ' + result)
} else {
  console.log('No encontré al usuario ' + text)
}

var text2 = 'Carlos'

var result2 = searchStudentIndexByText(text2, studentsList)

if (result2 !== -1) {
  console.log('Encontré el usuario ' + text2 + ' en la posición ' + result2)
} else {
  console.log('No encontré al usuario ' + text2)
}

//  Otra resolución
/*

// Datos de estudiantes para usar como carga incial

var studentsList = [
  {
    firstName: 'Juan',
    lastName: 'Pérez',
    dni: 45678987
  },
  {
    firstName: 'Ana',
    lastName: 'Fernandez',
    dni: 45678989
  },
  {
    firstName: 'Pedro',
    lastName: 'Mármol',
    dni: 45678956
  },
  {
    firstName: 'Pablo',
    lastName: 'Picapiedras',
    dni: 45678983
  }
]

*/

/**
 * searchStudentIndexByText permite buscar la posición de un estudiante en el array,
 * comparando nombre o apellido por valor exacto
 * @param {string} text nombre del estudiante
 * @param {Array} studentsList Array de estudiantes
 * @returns {number} posición del estudiante en el Array, si no lo encuentra -1
 */

/*

function searchStudentIndexByText (text, studentsList) {
  var index = -1
  for (var i = 0; i < studentsList.length; i++) {
    var student = studentsList[i]
    if (student.firstName === text || student.lastName === text) {
      index = i
      break
    }
  }
  return index
}

// PRUEBA: Hago una prueba para ver si la función hace lo que espero

// Pido el texto al usuario

var text = prompt('Ingrese un nombre')

// Llamo a la función definida anteriormente

var index = searchStudentIndexByText(text, studentsList)

// Evaluo el valor devuelto por la función y según eso muestro un mensaje en consola

if (index !== -1) {
  console.log('Se encontró el estudiante en la posición', index)
} else {
  console.log('No se pudo encontrar el estudiante')
}

*/
