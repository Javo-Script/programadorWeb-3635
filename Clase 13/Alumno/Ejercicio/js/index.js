var cuenta = 0;

$(window).keydown(function(event) {
	var contador = $('#counter');

	switch (event.which) {
		case 38:
			cuenta++;
			contador.html(cuenta);
			break;
		case 40:
			cuenta--;
			contador.html(cuenta);
			break;
		case 13:
			cuenta = 0;
			contador.html(cuenta);
			break;
		default:
			break;
	}
});
