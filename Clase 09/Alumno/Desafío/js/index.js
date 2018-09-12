var nameNode = document.getElementById('email');

// nameNode.onclick = validateEmail;
nameNode.onblur = validateEmail;
// nameNode.oninput = validateEmail;

function validateEmail(event) {
	var inputNode = event.target;

	var value = inputNode.value;
	var regexEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

	if (regexEmail.test(value)) {
		inputNode.classList.remove('is-invalid');
		inputNode.classList.add('is-valid');
	} else {
		inputNode.classList.remove('is-valid');
		inputNode.classList.add('is-invalid');
	}
}
