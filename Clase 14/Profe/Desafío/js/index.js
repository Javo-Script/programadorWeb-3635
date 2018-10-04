$(document).ready(function () {
  $('button').on('click', function () {
    var node = $(this)

    var id = node.attr('id')

    removeElementWithAnimation(id)
  })

  /**
 * removeElementWithAnimation es una función que recibe un evento
 * y elimina el nodo con una animación
 * @param {id} string
 */
  function removeElementWithAnimation (id) {
    $('#' + id).parent().parent().hide(2000, function () {
      $(this).remove()
    })
  }
})
