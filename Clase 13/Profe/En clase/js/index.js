console.log('Init app')

$(document).ready(function () {
  var titleNode = $('#title')

  titleNode.html('Pato')
  // - 13.1 Validar un formulario usando métodos de jQuery
  //  - `.append()`

  // var animals = [ 'Pato', 'Perro', 'Gato' ]

  // var listGroupNode = $('.list-group')

  // var animal

  // for (var i = 0; i < animals.length; i++) {
  //   animal = animals[i]
  //   listGroupNode.append(
  //     '<li id="' + animal + '" class="list-group-item">' + animal + '</li>'
  //   )
  // }

  //  - `.remove()`

  // $('.list-group-item').click(function () {
  //   $(this).remove()
  // })

  //  - `.next()`

  // $('.list-group-item').click(function () {
  //   $(this).next().next().remove()
  // })

  //  - `.on()`

  // $('.list-group-item').on('click mouseover', function (event) {
  //   console.log('Hola', event.type)
  // })

  //  - `.one()`

  // $('.list-group-item').one('click', function (event) {
  //   console.log('Hola', event.type)
  // })

  //  - `.parent()`

  // $('.list-group-item').click(function () {
  //   $(this).parent().remove()
  // })

  // var userNameNode = $('#userName')

  // userNameNode.one('blur', validateUserName)

  // function validateUserName (event) {
  //   console.log('Validando...', event.type)
  //   var inputNode = $(this)

  //   var value = inputNode.val()

  //   inputNode.next().remove()

  //   if (!value) {
  //     inputNode.removeClass('is-valid')
  //     inputNode.addClass('is-invalid')
  //     inputNode.parent().append('<div>El campo es requerido</div>')
  //   } else {
  //     inputNode.removeClass('is-invalid')
  //     inputNode.addClass('is-valid')
  //   }

  //   if (event.type === 'blur') {
  //     inputNode.on('input', validateUserName)
  //   }
  // }

  // $('#card1').on('input', function (event) {
  //   var inputNode = $(this)

  //   var value = inputNode.val()

  //   if (value && value.length === 4) {
  //     console.log('Focus in')
  //     $('#card2').focus()
  //   }
  // })
})
