var inputText = $('#firstName');

inputText.blur(cambiarLiNames);

function cambiarLiNames(event) {
	var liNodes = $('li');
	var inputNode = $(event.target);
	var value = inputNode.val();

	liNodes.html(value);
}
