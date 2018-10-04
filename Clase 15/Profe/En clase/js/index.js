$(document).ready(function () {
  console.log('Init app')

  // var AjaxCall = $.ajax('https://swapi.co/api/vehicles/6/')
  //   .done(function (data) {
  //     console.log('Ok ', data)
  //   })
  //   .fail(function (error) {
  //     console.log('Falló algo ', error)
  //   })

  function getData (url, cbk) {
    $.ajax(url)
      .done(function (data) {
        cbk(null, data)
      })
      .fail(function (error) {
        cbk(error)
      })
  }

  // getData('https://swapi.co/api/vehicles/6/', showVehicles)

  // function showVehicles (error, data) {
  //   if (error) {
  //     console.log('Falló algo ', error)
  //   } else {
  //     console.log('Ok los vehiculos son:', data)
  //   }
  // }

  // getData('https://swapi.co/api/planets/6/', showPlanets)

  // function showPlanets (error, data) {
  //   if (error) {
  //     console.log('Falló algo ', error)
  //   } else {
  //     console.log('Ok los planetas son:', data)
  //   }
  // }

  var mainListNode = $('#mainList')

  var showMoreButton = $('#showMore')

  getData('https://swapi.co/api/planets/', showVehicles)

  function showVehicles (error, data) {
    if (error) {
      console.log('Falló algo ', error)
    } else {
      console.log('Ok los vehiculos son:', data)
      var vehicles = data.results

      var vehicle

      for (var i = 0; i < vehicles.length; i++) {
        vehicle = vehicles[i]

        mainListNode.append(
          '<li class="list-group-item">' + vehicle.name + '</li>'
        )
      }
      if (data.next) {
        showMoreButton.one('click', function () {
          getData(data.next, showVehicles)
        })
      } else {
        showMoreButton.remove()
      }
    }
  }
})
