$(document).ready(function () {
  // $('.btn-primary').click(function () {
  //   $(this).parent().parent().parent().hide(400)
  // })
  $('.btn-primary').click(function () {
    var buttonParentParent = $(this).parent().parent().parent()

    buttonParentParent.hide(300, function () {
      var node = $(this)

      node.remove()
    })

    // var id = buttonParentParent.attr('id')

    // removeElementWithAnimation(id)
  })
})

// function removeElementWithAnimation (id) {
//   $('#' + id)
// }
