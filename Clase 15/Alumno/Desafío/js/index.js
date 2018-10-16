var mainListNode = $('#mainList');

var showMoreButton = $('#showMore');

getData('https://swapi.co/api/people/', showMe);

function showMe(error, data) {
	if (error) {
		console.log('Falló algo ', error);

		showMoreButton.remove;
	} else {
		var listaConsulta = data.results;

		var elementoConsulta;

		for (var i = 0; i < listaConsulta.length; i++) {
			elementoConsulta = listaConsulta[i];

			mainListNode.append('<li class="list-group-item">' + elementoConsulta.name + '</li>');
		}
		if (data.next) {
			showMoreButton.one('click', function() {
				getData(data.next, showMe);
			});
		} else {
			showMoreButton.remove();
		}
	}
}

// FUNCIONES GENERALES

function getData(url, cbk) {
	$.ajax(url)
		.done(function(data) {
			cbk(null, data);
		})
		.fail(function(error) {
			cbk(error);
		});
}
