import { postData } from '../utils/ajax'

function contactController () {
  console.log('Se cargo el controller de Contact')

  // Busco los nodos que voy a utilizar
  var firstNameInputNode = $('#firstName')
  var emailInputNode = $('#email')
  var commentsInputNode = $('#comments')
  var submitButtonNode = $('#submitButton')

  firstNameInputNode.one('blur', validateEmptyField)

  emailInputNode.one('blur', validateEmailField)

  commentsInputNode.one('blur', validateEmptyField)

  /**
 * validateEmptyField es una función que el campo tenga un valor
 *
 * @param {HTMLEvent} event
 */

  function validateEmptyField (event) {
    var inputNode = $(this)

    var errorText = ''
    inputNode.next().remove()

    if (!inputNode.val()) {
      errorText = 'Campo requerido'
    }

    if (errorText) {
      inputNode.addClass('is-invalid')
      inputNode.removeClass('is-valid')

      var parentNode = inputNode.parent()

      parentNode.append('<div class="invalid-feedback">' + errorText + '</div>')
    } else {
      inputNode.addClass('is-valid')
      inputNode.removeClass('is-invalid')
    }

    if (event.type === 'blur') {
      inputNode.on('input', validateEmptyField)
    }

    validateButton()
  }

  /**
 * validateEmailField es una función que valida que el campo sea email
 *
 * @param {HTMLEvent} event
 */
  function validateEmailField (event) {
    var inputNode = $(this)

    var errorText = ''

    inputNode.next().remove()

    var value = inputNode.val()

    if (!value) {
      errorText = errorText + 'Campo requerido '
    } else {
      if (value.indexOf('@') === -1) {
        errorText = errorText + 'Debe contener arroba (@) '
      }
      if (value.indexOf('.') === -1) {
        errorText = errorText + 'Debe contener punto (.) '
      }
    }

    if (errorText) {
      inputNode.addClass('is-invalid')
      inputNode.removeClass('is-valid')

      var parentNode = inputNode.parent()

      parentNode.append('<div class="invalid-feedback">' + errorText + '</div>')
    } else {
      inputNode.addClass('is-valid')
      inputNode.removeClass('is-invalid')
    }

    if (event.type === 'blur') {
      inputNode.on('input', validateEmailField)
    }

    validateButton()
  }

  submitButtonNode.click(function () {
    var firstName = firstNameInputNode.val()
    var email = emailInputNode.val()
    var comments = commentsInputNode.val()

    var data = {
      firstName: firstName,
      email: email,
      comments: comments
    }

    postData('./simpleEmail.php', data, function (error, data) {
      if (!error) {
        window.location.hash = '#/contact/greetings'
      }
    })
  })

  /**
 * validateButton habilita el botón de submit si existen
 * al menos cuatro nodos con la clase is-valid
 */
  function validateButton () {
    var validInputNodes = $('.is-valid')

    if (validInputNodes.length === 3) {
      submitButtonNode.attr('disabled', false)
    } else {
      submitButtonNode.attr('disabled', true)
    }
  }
}

export default contactController
