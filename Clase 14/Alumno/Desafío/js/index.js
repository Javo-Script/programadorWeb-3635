console.log('hola');
$(document).ready(function() {
	$('#boton-eliminar').on('click', function() {
		var node = $(this);

		var id = node.attr('id');

		removeElementWithAnimation(id);
	});

	function removeElementWithAnimation(id) {
		$('#' + id).parent().parent().hide(500, function() {
			$(this).remove();
		});
	}
});
