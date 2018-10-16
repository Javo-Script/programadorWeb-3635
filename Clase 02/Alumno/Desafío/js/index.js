var genero = prompt('Ingrese su género: masculino, femenino u otro');
var edad = prompt('Ingrese su edad');

var mensaje;

switch (genero) {
	case 'masculino':
		mensaje = 'Sr. ';
		break;
	case 'femenino':
		mensaje = 'Sra. ';
		break;
	case 'otro':
		mensaje = 'Sx. ';
		break;
	default:
		mensaje = ' ';
		break;
}

if (edad < 18) {
	mensaje = mensaje + 'usted es menor de edad, no puede ingresar';
} else {
	mensaje = mensaje + 'usted es mayor de edad, puede ingresar';
}

console.log(mensaje);
