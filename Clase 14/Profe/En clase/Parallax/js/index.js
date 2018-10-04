$(document).ready(function () {
  console.log('Init app')
  // $('#background3').hide()
  $(window).scroll(function () {
    var scrollTop = $(this).scrollTop()

    // console.log('El usuario scrollea', scrollTop)
    // if (scrollTop > 200) {
    //   $('#background3').fadeIn(2000)
    // }
    // Prueba
    $('#background1').css('top', scrollTop * 1.5 + 'px')
    $('#background2').css('top', -(scrollTop * 1.5) + 'px')
    $('#background3').css('top', -(scrollTop * 0.5) + 'px')
  })
})
