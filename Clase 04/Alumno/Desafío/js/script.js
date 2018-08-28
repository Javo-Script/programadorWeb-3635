var studentsList = [
	{
		firstName: 'Juan',
		lastName: 'Pérez',
		dni: 45678987
	},
	{
		firstName: 'Ana',
		lastName: 'Fernandez',
		dni: 45678989
	},
	{
		firstName: 'Pedro',
		lastName: 'Mármol',
		dni: 45678956
	},
	{
		firstName: 'Pablo',
		lastName: 'Picapiedras',
		dni: 45678983
	}
];

// var busqueda = prompt('A quién buscas?');

// for (i = 0; i < studentsList.length; i++) {
// 	nombre = studentsList[i].firstName;
// 	apellido = studentsList[i].lastName;

// 	if (busqueda === nombre || busqueda === apellido) {
// 		console.log('El estudiante esta el la posición ' + i);
// 	} else {
// 		console.log('No existe un estudiante con ese nombre');
// 	}
// }

var busqueda = prompt('A quién buscas?');

function buscar(busqueda) {
	for (i = 0; i < studentsList.length; i++) {
		nombre = studentsList[i].firstName;
		apellido = studentsList[i].lastName;

		if (busqueda === nombre || busqueda === apellido) {
			return i;
		}
	}
	return -1;
}

if (buscar(busqueda) === -1) {
	console.log('No existe un alumno con ese nombre.');
} else {
	console.log('El alumno esta en al posicion ' + buscar(busqueda));
}
