import { getData } from '../utils/ajax';

function peopleController() {
	console.log('Se cargo el controller de los personajes');

	getData('https://swapi.co/api/people', showPeople);

	var tableBodyNode = $('#tableBody');

	var seeMoreButton = $('#seeMore');

	function showPeople(error, data) {
		if (error) {
			console.log('Falló algo ', error);
		} else {
			var people = data.results;

			var person;

			for (var i = 0; i < people.length; i++) {
				person = people[i];

				var url = person.url;
				url = url.replace('https://swapi.co/api/people/', '');
				var id = url.replace('/', '');

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
						'</td><td><button type="button" class="btn btn-success">guardar</button></td></tr>'
				);
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

function genderTranslate(gender) {
	switch (gender) {
		case 'male':
			return 'masculino';
			break;
		case 'female':
			return 'femenino';
			break;
		case 'n/a':
			return 'n/a';
			break;
		default:
			return gender;
	}
}

var TRANSLATES = {
	ES: {
		blue: 'Azules',
		yellow: 'Amarillos',
		red: 'Rojos',
		'blue-gray': 'Azules grisaceos'
	},
	EN: {
		blue: 'Blue',
		yellow: 'Yellow',
		red: 'Red',
		'blue-gray': 'Blue-Gray'
	}
};
function eyeTranslate(lang, eyeColor) {
	return TRANSLATES[lang][eyeColor] || eyeColor;
}

export default peopleController;
