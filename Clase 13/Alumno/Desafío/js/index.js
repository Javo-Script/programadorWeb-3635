var firstNameInputNode = $('#firstName');
var emailInputNode = $('#email');
var commentsInputNode = $('#comments');
var submitButtonNode = $('#submitButton');

firstNameInputNode.blur(validateEmptyField);

emailInputNode.blur(validateEmail);

commentsInputNode.blur(validateEmptyField);

function validateEmptyField(event) {
	var inputNode = $(this);

	var errorText = '';
	inputNode.next().remove();

	if (!inputNode.val()) {
		errorText = 'Campo requerido';
	}

	if (errorText) {
		inputNode.addClass('is-invalid');
		inputNode.removeClass('is-valid');

		var parentNode = inputNode.parent();

		parentNode.append('<div class="invalid-feedback">' + errorText + '</div>');
	} else {
		inputNode.addClass('is-valid');
		inputNode.removeClass('is-invalid');
	}

	if (event.type === 'blur') {
		inputNode.on('input', validateEmptyField);
	}

	validateButton();
}

function validateEmail(event) {
	var inputNode = $(this);

	var value = inputNode.val();
	var regexEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

	if (regexEmail.test(value)) {
		inputNode.removeClass('is-invalid');
		inputNode.addClass('is-valid');
	} else {
		inputNode.removeClass('is-invalid');
		inputNode.addClass('is-invalid');
	}

	validateButton();
}

function validateButton() {
	var validInputNodes = $('.is-valid');

	if (validInputNodes.length === 3) {
		submitButtonNode.attr('disabled', false);
	} else {
		submitButtonNode.attr('disabled', true);
	}
}
