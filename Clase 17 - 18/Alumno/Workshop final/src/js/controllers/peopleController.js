import { getData } from '../utils/ajax';
import { genderTranslate, eyeTranslate } from '../utils/translate';
import { getLocalList, setLocalList } from '../utils/localStorage';
import { searchPeopleIndexByUrl } from '../utils/search';

function peopleController() {
	console.log('Se cargo el controller de los personajes');

	getData('https://swapi.co/api/people', showPeople);

	var apiResults = [];

	var localPeople = getLocalList('peopleList');

	var tableBodyNode = $('#tableBody');

	var seeMoreButton = $('#seeMore');

	function showPeople(error, data) {
		if (error) {
			console.log('Falló algo ', error);
		} else {
			var people = data.results;

			if (data.results) {
				apiResults = apiResults.concat(data.results);
				console.log(apiResults);
			}

			var person;

			for (var i = 0; i < people.length; i++) {
				person = people[i];

				var localIndex = searchPeopleIndexByUrl(person.url, localPeople);

				var url = person.url;

				url = url.replace('https://swapi.co/api/people/', '');

				var id = url.replace('/', '');

				var addButton;

				if (localIndex == -1) {
					addButton = '<button id="button' + id + '" type="button" class="btn btn-success">guardar</button>';
				} else {
					addButton = '';
				}

				// TODO: Para terminar las tablas
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
						eyeTranslate('ES', person.eye_color) +
						'</td><td>' +
						addButton +
						'</td></tr>'
				);

				$('#button' + id).click(function() {
					var button = $(this);

					var buttonId = button.attr('id');

					var id = buttonId.replace('button', '');

					var newUrl = 'https://swapi.co/api/people/' + id + '/';

					var index = searchPeopleIndexByUrl(newUrl, apiResults);

					if (index !== -1) {
						var personInfo = apiResults[index];

						localPeople.push(personInfo);

						setLocalList('peopleList', localPeople);

						button.remove();
					}
				});
			}
			if (data.next) {
				seeMoreButton.one('click', function() {
					getData(data.next, showPeople);
				});
			} else {
				seeMoreButton.remove();
			}
		}
	}
}

export default peopleController;
