$(document).ready(function() {
	console.log('Init app');

	var AjaxCall = $.ajax('https://swapi.co/api/planets/')
		.done(function(data) {
			console.log('Ok ', data);
		})
		.fail(function(error) {
			console.log('Falló algo ', error);
		});
});
