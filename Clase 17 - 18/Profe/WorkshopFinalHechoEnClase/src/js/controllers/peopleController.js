import { getLocalList, setLocalList } from '../utils/localStorage'

import { genderTranslate, eyeTranslate } from '../utils/translates'

import { searchPeopleIndexByUrl } from '../utils/search'

import { getData } from '../utils/ajax'

function peopleController () {
  console.log('Se cargo el controller de People')

  var apiResults = []

  var localPeople = getLocalList('peopleList')

  var tableBodyNode = $('#tableBody')

  var seeMoreButton = $('#seeMore')

  getData('https://swapi.co/api/people/', showPeople)

  function showPeople (error, data) {
    if (error) {
      console.log('Falló algo ', error)
    } else {
      var people = data.results

      if (data.results) {
        apiResults = apiResults.concat(data.results)
      }

      var person

      for (var i = 0; i < people.length; i++) {
        person = people[i]

        var localIndex = searchPeopleIndexByUrl(person.url, localPeople)

        var url = person.url

        url = url.replace('https://swapi.co/api/people/', '')

        var id = url.replace('/', '')

        var addButton

        if (localIndex === -1) {
          addButton =
            '<button id="button' +
            id +
            '" type="button" class="btn btn-success">Guardar</button>'
        } else {
          addButton = ''
        }

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
            '</td><td>' +
            addButton +
            '</td></tr>'
        )

        $('#button' + id).click(function () {
          var button = $(this)

          var buttonId = button.attr('id')

          var id = buttonId.replace('button', '')

          var newUrl = 'https://swapi.co/api/people/' + id + '/'

          var index = searchPeopleIndexByUrl(newUrl, apiResults)

          if (index !== -1) {
            var personInfo = apiResults[index]

            localPeople.push(personInfo)

            setLocalList('peopleList', localPeople)

            button.remove()
          }
        })
      }
      if (data.next) {
        seeMoreButton.one('click', function () {
          getData(data.next, showPeople)
        })
      } else {
        seeMoreButton.remove()
      }
    }
  }
}

export default peopleController
