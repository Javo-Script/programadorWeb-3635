var emailNode = $('#email');
var buttonNode = $('#button');

// emailNode.click(validateEmail);
emailNode.blur(validateEmail);
// emailNode.input(validateEmail);

function validateEmail(event) {
	var inputNode = $(this);

	var value = inputNode.val();
	var regexEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

	if (regexEmail.test(value)) {
		inputNode.removeClass('is-invalid');
		// buttonNode.removeClass('btn-secondary');
		inputNode.addClass('is-valid');
		// buttonNode.addClass('btn-primary');
		// buttonNode.disabled = false;
	} else {
		inputNode.removeClass('is-invalid');
		// buttonNode.removeClass('btn-primary');
		inputNode.addClass('is-invalid');
		// buttonNode.addClass('btn-primary');
		// buttonNode.disabled = true;
	}
}
