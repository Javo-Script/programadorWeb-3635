import crossroads from 'crossroads'

crossroads.addRoute('/', function () {
  $('#root').load('./partials/home.html', function () {
    console.log('Se cargo la home')
  })
})

crossroads.addRoute('#/people', function () {
  console.log('People page')
})

crossroads.addRoute('#/local-storage', function () {
  console.log('LS page')
})

crossroads.addRoute('#/contact', function () {
  $('#root').load('./partials/contact.html', function () {
    console.log('Se cargo contacto')
  })
})

// En cada cambio del # va a verificar las rutas
$(window).on('hashchange', function () {
  crossroads.parse(window.location.hash)
})

crossroads.parse(window.location.hash)
