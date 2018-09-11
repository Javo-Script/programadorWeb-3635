// # 9 Eventos [Modulo B]

// - 9.1	¿Que son los eventos y para qué sirven?
// - 9.2	Eventos como atributos
// - 9.3	Eventos semánticos
// - 9.4	Evento click
// - 9.5	Evento blur

// var submitButton = document.getElementById('button')

// submitButton.onclick = validatePasword

// function validatePasword () {
//   var passwordNode = document.getElementById('password')

//   var value = passwordNode.value

//   if (value.length < 6) {
//     console.log('Password muy corto', value)
//   } else {
//     console.log('Password correcto', value)
//   }
// }

// function showMessage (event) {
//   var emailNode = document.getElementById('email')

//   var value = emailNode.value

//   // if (value.length < 5) {
//   //   console.log('Email muy corto')
//   // } else {
//   //   console.log('Email correcto')
//   // }
// }

// var buttonNode = document.getElementById('button')

// buttonNode.onclick = validateAge

// function validateAge () {
//   var ageNode = document.getElementById('age')

//   var value = ageNode.value

//   var parsedValue = parseInt(value, 10)

//   if (isNaN(parsedValue)) {
//     console.log('Valor inválido')
//   } else if (parsedValue >= 18) {
//     console.log('Mayor de edad')
//   } else {
//     console.log('Menor de edad')
//   }
// }

// var buttonNode = document.getElementById('button')

// buttonNode.onclick = validateAge

// var ageNode = document.getElementById('age')

// ageNode.onblur = validateAge

// var age2Node = document.getElementById('age2')

// age2Node.oninput = validateAge

// function validateAge (event) {
//   var inputNode = event.target

//   var value = inputNode.value

//   var parsedValue = parseInt(value, 10)

//   if (isNaN(parsedValue)) {
//     inputNode.classList.add('is-invalid')
//     inputNode.classList.remove('is-valid')
//   } else if (parsedValue < 18) {
//     inputNode.classList.add('is-invalid')
//     inputNode.classList.remove('is-valid')
//   } else {
//     inputNode.classList.add('is-valid')
//     inputNode.classList.remove('is-invalid')
//   }
// }

var passwordNode = document.getElementById('password')

passwordNode.oninput = validatePassword

function validatePassword (event) {
  var inputNode = event.target

  var value = inputNode.value

  var regexPassword = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/

  if (!regexPassword.test(value)) {
    inputNode.classList.add('is-invalid')
    inputNode.classList.remove('is-valid')
  } else {
    inputNode.classList.add('is-valid')
    inputNode.classList.remove('is-invalid')
  }
}
