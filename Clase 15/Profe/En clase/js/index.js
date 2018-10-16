$(document).ready(function() {
	console.log('Init app');

	function getData(url, cbk) {
		$.ajax(url)
			.done(function(data) {
				cbk(null, data);
			})
			.fail(function(error) {
				cbk(error);
			});
	}

	var tableBodyNode = $('#tableBody');

	var showMoreButton = $('#showMore');

	getData('https://swapi.co/api/planets/', showVehicles);

	function showVehicles(error, data) {
		if (error) {
			console.log('Falló algo ', error);
		} else {
			console.log('Ok los vehiculos son:', data);
			var vehicles = data.results;

			var vehicle;

			for (var i = 0; i < vehicles.length; i++) {
				vehicle = vehicles[i];

				tableBodyNode.append('<li class="list-group-item">' + vehicle.name + '</li>');
			}
			if (data.next) {
				showMoreButton.one('click', function() {
					getData(data.next, showVehicles);
				});
			} else {
				showMoreButton.remove();
			}
		}
	}
});
