var nameNode = document.getElementById('firstName');

// nameNode.onclick = validateName;
nameNode.onblur = validateName;
// nameNode.oninput = validateName;

function validateName(event) {
	var inputNode = event.target;

	var value = inputNode.value;
	var regexPassword = /^[a-zA-ZÀ-ÿ\u00f1\u00d1]+(\s*[a-zA-ZÀ-ÿ\u00f1\u00d1]*)*[a-zA-ZÀ-ÿ\u00f1\u00d1]+$/;

	if (regexPassword.test(value)) {
		inputNode.classList.remove('is-invalid');
		inputNode.classList.add('is-valid');
	} else {
		inputNode.classList.remove('is-valid');
		inputNode.classList.add('is-invalid');
	}
}
