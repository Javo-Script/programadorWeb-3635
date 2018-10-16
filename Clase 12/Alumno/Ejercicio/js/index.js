var divNodes = $('.square');
var contador = 0;

divNodes.click(tateti);

function tateti() {
	contador++;
	console.log(contador);
	var divNode = $(this);

	if (!(contador % 10)) {
		divNodes.removeClass('cross');
		divNodes.removeClass('circle');
	} else if (divNode.hasClass('circle') || divNode.hasClass('cross')) {
		contador--;
	} else {
		if (contador % 2 == 0) {
			divNode.addClass('cross');
		} else {
			divNode.addClass('circle');
		}
	}
}
