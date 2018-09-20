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

// var textNodes = $('input')

// textNodes.blur(validateField)

// function validateField (event) {
//   var inputNode = $(event.target)
//   // Old S
//   // var value = event.target.value
//   // JQuery
//   var value = inputNode.val()

//   console.log(value)
// }

// var buttonNode = $('button')

// buttonNode.click(buttonClick)

// function buttonClick (event) {
//   var buttonNode = $(this)

//   var textNodes = $('input')

//   for (var i = 0; i < textNodes.length; i++) {
//     var nodoJs = textNodes[i]

//     console.log($(nodoJs).val())
//   }
// }

// var text1Node = $('#text1')

// text1Node.blur(validateRequiredField)

// function validateRequiredField () {
//   var inputNode = $(this)

//   var value = inputNode.val()

//   if (value) {
//     // inputNode.classList.add('is-valid')
//     inputNode.addClass('is-valid')
//     inputNode.removeClass('is-invalid')
//   } else {
//     inputNode.addClass('is-invalid')
//     inputNode.removeClass('is-valid')
//   }
// }

var divNode = $('div')

divNode.click(toggleRed)

function toggleRed () {
  var divNode = $(this)

  divNode.toggleClass('red')
}
