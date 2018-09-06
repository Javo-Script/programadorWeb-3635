console.log('Init app')

// # 8 DOM [Modulo B]

// - 8.1	¿Qué es el árbol de nodos?
// - 8.2	Objeto `document`
// - 8.3	Acceso a los nodos
//    - `getElementById()`

// var titleNodo = document.getElementById('title')

// var firstName = prompt('Ingresá tu nombre')

// titleNodo.innerHTML = 'Hola ' + firstName + ' ¿cómo andás?'

// console.log(titleNodo)

// setTimeout(function () {
//   var containerNode = document.getElementById('container')

//   var birthday = prompt('Ingresa el día de tu cumple')

//   containerNode.innerHTML =
//     '<h1>Tu cumpleaños es el día: ' + birthday + ' </h1>'
// }, 2000)

// setTimeout(function () {
//   var priceNode = document.getElementById('price')

//   var dolarToday = prompt('Cuanto está el dolar hoy?')

//   priceNode.innerHTML = '$ ' + 60 * dolarToday
// }, 2000)

//    - `getElementsByClassName()`

setTimeout(function () {
  var dolarToday = prompt('Dolar hoy?')

  var priceNodes = document.getElementsByClassName('price')

  var priceNode

  for (var i = 0; i < priceNodes.length; i++) {
    priceNode = priceNodes[i]

    priceNode.innerHTML = '$ ' + dolarToday * priceNode.id

    console.log(priceNode.id)
  }
}, 2000)

// - 8.4	Crear y eliminar nodos
//    - `createElement`
//    - `innerHTML`
//    - `appendChild`
//    - `parentNode`
//    - `removeChild`
// - 8.5	Propiedades de los nodos
