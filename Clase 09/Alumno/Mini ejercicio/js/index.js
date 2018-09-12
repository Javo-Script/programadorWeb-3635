var ageNode = document.getElementById('age');

// ageNode.onclick = validateAge;
// ageNode.onblur = validateAge;
ageNode.oninput = validateAge;

function validateAge(event) {
	var inputNode = event.target;

	var value = inputNode.value;
	var parsedValue = parseInt(value, 10);

	if (isNaN(parsedValue)) {
		inputNode.classList.remove('is-valid');
		inputNode.classList.add('is-invalid');
	} else if (parsedValue < 18) {
		inputNode.classList.remove('is-valid');
		inputNode.classList.add('is-invalid');
	} else {
		inputNode.classList.add('is-valid');
		inputNode.classList.remove('is-invalid');
	}
}

// REGEX FOR PASSWORD
