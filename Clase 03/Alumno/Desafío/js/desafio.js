var operacion = prompt('Qué operación quiere hacer? (suma/resta/div/mult)');

var numero1 = prompt('Ingerese el primer número');
var parsedNumero1 = parseFloat(numero1, 10);

var numero2;
var parsedNumero2;

do {
	numero2 = prompt('Ingerese el segundo número');
	parsedNumero2 = parseFloat(numero2, 10);
} while (operacion === 'div' && parsedNumero2 === 0);

var resultado;

switch (operacion) {
	case 'suma':
		resultado = parsedNumero1 + parsedNumero2;
		break;
	case 'resta':
		resultado = parsedNumero1 - parsedNumero2;
		break;
	case 'div':
		resultado = parsedNumero1 / parsedNumero2;
		break;
	case 'mult':
		resultado = parsedNumero1 * parsedNumero2;
		break;
	default:
		resultado = 'Operación incorrecta';
		break;
}

var message = 'El resultado es: ' + resultado;

console.log(message);
