import { getLocalList, setLocalList } from '../utils/localStorage'

import { genderTranslate, eyeTranslate } from '../utils/translates'

import { searchPeopleIndexByUrl } from '../utils/search'

function localStorageController () {
  console.log('Se cargo el controller de LS')

  var localPeople = getLocalList('peopleList')

  var tableBodyNode = $('#tableBody')

  var person

  for (var i = 0; i < localPeople.length; i++) {
    person = localPeople[i]

    var url = person.url

    url = url.replace('https://swapi.co/api/people/', '')

    var id = url.replace('/', '')

    tableBodyNode.append(
      '<tr id="' +
        id +
        '"><th scope="row">' +
        id +
        '</th><td>' +
        person.name +
        '</td><td>' +
        genderTranslate(person.gender) +
        '</td><td>' +
        person.height +
        ' cm</td><td>' +
        person.mass +
        ' kg</td><td>' +
        eyeTranslate('PT', person.eye_color) +
        '</td><td><button id="button' +
        id +
        '" type="button" class="btn btn-danger">Eliminar</button></td></tr>'
    )

    $('#button' + id).click(function () {
      var button = $(this)

      var buttonId = button.attr('id')

      var id = buttonId.replace('button', '')

      var newUrl = 'https://swapi.co/api/people/' + id + '/'

      var index = searchPeopleIndexByUrl(newUrl, localPeople)

      if (index !== -1) {
        localPeople.splice(index, 1)

        setLocalList('peopleList', localPeople)

        button.parent().parent().remove()
      }
    })
  }
}

export default localStorageController
