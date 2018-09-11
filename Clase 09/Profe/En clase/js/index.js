// # 9 Eventos [Modulo B]

// - 9.1	¿Que son los eventos y para qué sirven?
// - 9.2	Eventos como atributos
// - 9.3	Eventos semánticos
// - 9.4	Evento click
// - 9.5	Evento blur

var submitButton = document.getElementById('button')

submitButton.onclick = validatePasword

function validatePasword () {
  var passwordNode = document.getElementById('password')

  var value = passwordNode.value

  if (value.length < 6) {
    console.log('Password muy corto', value)
  } else {
    console.log('Password correcto', value)
  }
}

// function showMessage (event) {
//   var emailNode = document.getElementById('email')

//   var value = emailNode.value

//   // if (value.length < 5) {
//   //   console.log('Email muy corto')
//   // } else {
//   //   console.log('Email correcto')
//   // }
// }
