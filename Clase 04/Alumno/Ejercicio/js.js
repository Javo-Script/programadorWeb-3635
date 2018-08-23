var valores = [ 7, 5, 6, 4, 3, 2, 8 ];

function calcular(valores) {
	for (var i = 0; i < valores.length; i++) {
		var valor = 0;
		var valor = valor + valores[i];
	}
	var promedio = valor / valores.length;
	return promedio;
}

console.log('El promedio es de: ' + calcular(valores));
