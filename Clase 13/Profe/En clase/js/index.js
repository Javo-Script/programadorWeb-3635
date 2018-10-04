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

  // - 13.1 Responder a eventos del teclado
  //  - `.keydown()`
  //     - Enter: 13
  //     - Up: 38
  //     - Down: 40
  //     - Right: 39
  //     - Left: 37
  //     - Esc: 27
  //     - SpaceBar: 32
  //     - Ctrl: 17
  //     - Alt: 18
  //     - Shift: 16
  // $('input').keydown(function (event) {
  //   var inputNode = $(this)
  //   var inputNode2 = $(event.target)

  //   console.log(inputNode, inputNode2)

  //   switch (event.which) {
  //     case 13:
  //       event.preventDefault()
  //       console.log('Voy a buscar', inputNode.val())
  //       break
  //     case 27:
  //       inputNode.val('')
  //       break
  //     case 38:
  //       var value = inputNode.val()
  //       inputNode.val(value.toUpperCase())
  //       break
  //     case 40:
  //       var value = inputNode.val()
  //       inputNode.val(value.toLowerCase())
  //       break
  //     default:
  //       break
  //   }
  // })

  // $('#red').click(function (event) {
  //   var divNode1 = $(this)
  //   var divNode2 = $(event.target)
  //   console.log('Click sobre RED', divNode1, divNode2)
  // })

  // $('#blue').click(function (event) {
  //   event.stopPropagation()
  //   console.log('Click sobre BLUE')
  // })

  // $('#red').click(function (event) {
  //   console.log('Click sobre RED')
  // })

  $(window).keydown(function (event) {
    console.log('Apretó tecla')
  })
})
