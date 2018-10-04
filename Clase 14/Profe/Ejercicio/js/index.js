$(document).ready(function () {
  // $('.btn-primary').click(function () {
  //   $(this).parent().parent().parent().hide(400)
  // })
  $('.btn-primary').click(function () {
    var buttonParentParent = $(this).parent().parent()

    var id = buttonParentParent.attr('id')

    removeElementWithAnimation(id)
  })
})

function removeElementWithAnimation (id) {
  $('#' + id)
}
