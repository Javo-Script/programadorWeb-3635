var emailNode = document.getElementById('email');
var buttonNode = document.getElementById('button');

// emailNode.onclick = validateEmail;
emailNode.onblur = validateEmail;
// emailNode.oninput = validateEmail;

function validateEmail(event) {
	var inputNode = event.target;

	var value = inputNode.value;
	var regexEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

	if (regexEmail.test(value)) {
		inputNode.classList.remove('is-invalid');
		buttonNode.classList.remove('btn-secondary');
		inputNode.classList.add('is-valid');
		buttonNode.classList.add('btn-primary');
		buttonNode.disabled = false;
	} else {
		inputNode.classList.remove('is-invalid');
		buttonNode.classList.remove('btn-primary');
		inputNode.classList.add('is-invalid');
		buttonNode.classList.add('btn-primary');
		buttonNode.disabled = true;
	}
}
