$(document).ready(function () {
  console.log('Init HP app')

  // - 15.1 Efectos y animaciones
  //  - `.show()`

  // $('#cover1').show(1000, function () {
  //   console.log('Finalizó de mostrarse')
  //   $(this).hide(1000)
  // })

  //  - `.hide()`

  // $('#cover2').hide(1000)

  // $('#cover1').click(function () {
  //   $(this).hide(2000, function () {
  //     $(this).remove()
  //   })
  // })

  // $('#cover2').click(function () {
  //   $(this).remove()
  // })

  //  - `.fadeIn()`

  //  - `.fadeOut()`

  // $('figure').click(function () {
  //   $(this).fadeOut(2000, function () {
  //     $(this).fadeIn(1000)
  //   })
  // })

  //  - `.slideUp()`

  // $('figure').click(function () {
  //   $(this).slideUp(2000, function () {
  //     $(this).slideDown(400)
  //   })
  // })

  //  - `.slideDown()`

  // $('#cover1').click(
  //   function () {
  //     $('#cover6').slideToggle(2000, function () {})
  //   }
  //   // function () {
  //   //   $('#cover6').slideDown(2000, function () {})
  //   // }
  // )

  var coverNode = $('#covers')

  var coversPosition = coverNode.position()

  var coversTopPosition = coversPosition.top

  $(window).scroll(function () {
    var scrollTop = $(this).scrollTop()

    if (scrollTop > coversTopPosition - 200) {
      coverNode.addClass('covers-show')
      coverNode.removeClass('covers-hide')
    } else if (scrollTop <= coversTopPosition - 200) {
      coverNode.removeClass('covers-show')
      coverNode.addClass('covers-hide')
    }
  })
})

// $(document).ready(function () {
//   $('#').hide(2000, function () {})
// })
