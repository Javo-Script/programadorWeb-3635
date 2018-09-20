console.log('Init app')

// Old

// var mainTitleNode = document.getElementById('mainTitle')

// mainTitleNode.innerHTML = 'Soy un título'

// New

// var mainTitleNode = $('#mainTitle')

// mainTitleNode.html('Pato')

// Old

// var liNodes = document.getElementsByClassName('liNode')

// for (var i = 0; i < liNodes.length; i++) {
//   liNodes[i].innerHTML = 'Perro'
// }

// New

// var liNodes = $('.liNode')

// liNodes.html('Pepito clavo un clavito que clavito clavo pepito?')

// var liNodes = $('.liNode')

// liNodes.html('<p>Peritos saltando</p>')

// var mainListNode = $('#mainList')

// mainListNode.append('<li id="perrito"><h1>Peritos saltando</h1></li>')

var textNode = $('#text')

textNode.blur(validateField)

function validateField (event) {
  var inputNode = $(event.target)
  // Old S
  // var value = event.target.value
  // JQuery
  var value = inputNode.val()

  console.log(value)
}
