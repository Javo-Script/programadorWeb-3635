setTimeout(function() {
	var tituloNew = prompt('Elegi tu titulo');
	var textoNew = prompt('Elegi tu texto');

	var titulo = document.getElementById('title');

	titulo.innerHTML = tituloNew;

	var texto = document.getElementById('text');

	texto.innerHTML = textoNew;
}, 2000);
