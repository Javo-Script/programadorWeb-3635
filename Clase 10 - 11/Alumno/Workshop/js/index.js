// Globales

var LOCAL_KEY = 'studentList';

// Carga inicial

var studentsList = getLocalList(LOCAL_KEY);

var mainListNode = document.getElementById('mainList');

var student;

for (var i = 0; i < studentsList.length; i++) {
	student = createStudentNode(studentsList[i]);

	mainListNode.appendChild(student);
}

// Validar los campos nombre y dni

var firstNameNode = document.getElementById('firstName');

firstNameNode.oninput = validateRequiredField;

var lastNameNode = document.getElementById('lastName');

lastNameNode.oninput = validateRequiredField;

var dniNode = document.getElementById('dni');

dniNode.oninput = validateDniField;

var emailNode = document.getElementById('email');

emailNode.oninput = validateEmail;

// Agregar el estudiante

var addStudentButtonNode = document.getElementById('addStudentButton');

addStudentButtonNode.onclick = addStudent;

function addStudent() {
	var firstNameValue = firstNameNode.value;
	var lastNameValue = lastNameNode.value;
	var dniValue = dniNode.value;
	var emailValue = emailNode.value;

	var student = {
		firstName: firstNameValue,
		lastName: lastNameValue,
		dni: dniValue,
		email: emailValue
	};

	studentsList.push(student);

	setLocalList(LOCAL_KEY, studentsList);

	student = createStudentNode(student);

	mainListNode.appendChild(student);

	firstNameNode.value = '';
	lastNameNode.value = '';
	dniNode.value = '';
	emailNode.value = '';
	addStudentButtonNode.disabled = true;
	firstNameNode.classList.remove('is-valid');
	lastNameNode.classList.remove('is-valid');
	dniNode.classList.remove('is-valid');
	emailNode.classList.remove('is-valid');
}

function searchStudentIndexByDni(dni, studentsList) {
	var student;

	for (var i = 0; i < studentsList.length; i++) {
		student = studentsList[i];
		if (dni === student.dni) {
			return i;
		}
	}

	return -1;
}

// ELIMINAR ESTUDIANTE

var deleteDniNode = document.getElementById('deleteDni');
var deleteStudentButtonNode = document.getElementById('deleteStudentButton');

deleteDniNode.oninput = validateDeleteDniFieldd;
deleteStudentButton.onclick = deleteStudentById;

function validateDeleteDniFieldd(event) {
	var deleteStudentButtonNode = document.getElementById('deleteStudentButton');
	var inputNode = event.target;

	var index = searchStudentIndexByDni(inputNode.value, studentsList);

	if (index > -1) {
		deleteStudentButtonNode.disabled = false;
	} else {
		deleteStudentButtonNode.disabled = true;
	}
}

function deleteStudentById() {
	var deleteDniValue = deleteDniNode.value;

	var index = searchStudentIndexByDni(deleteDniValue, studentsList);

	studentsList.splice(index, 1);

	// Busco en el dom el nodo y lo elimino

	var node = document.getElementById(deleteDniValue);
	mainListNode.removeChild(node);

	// Piso la local list
	setLocalList(LOCAL_KEY, studentsList);

	// Limpio el imput y deshabilito el boton
	deleteDni.value = '';
	deleteStudentButton.disabled = true;
}

// BUSCAR UN ESTUDIANTE
var searchStudentButtonNode = document.getElementById('searchStudentButton');

searchStudentButtonNode.onclick = searchStudent;

function searchStudent(event) {
	var textNode = document.getElementById('searchText');
	var searchListNode = document.getElementById('searchList');

	var index = searchStudentIndexByText(textNode.value, studentsList);
	var student = studentsList[index];

	searchListNode.innerHTML = '';

	if (student) {
		var studentNode = createStudentNode(student);
		searchListNode.appendChild(studentNode);
	}
}

// FUNCIONES

function searchStudentIndexByText(text, studentsList) {
	var student;

	for (var i = 0; i < studentsList.length; i++) {
		student = studentsList[i];
		if (includesText(text, student.firstName) || includesText(text, student.lastName)) {
			return i;
		}
	}

	return -1;
}

function includesText(text, baseText) {
	// Valido que ambos parámetros sean string
	if (typeof text === 'string' && typeof baseText === 'string') {
		// Verifico si el primer parámetro se encuentra dentro del segundo
		var textUpperCase = text.toUpperCase();
		var baseTextUpperCase = baseText.toUpperCase();
		if (baseTextUpperCase.indexOf(textUpperCase) !== -1) {
			return true;
		} else {
			return false;
		}
	} else {
		return false;
	}
}

function searchIndexByText(text, baseText) {
	// Valido que ambos parámetros sean string
	if (typeof text === 'string' && typeof baseText === 'string') {
		// Verifico si el primer parámetro se encuentra dentro del segundo
		var textUpperCase = text.toUpperCase();
		var baseTextUpperCase = baseText.toUpperCase();
		if (baseTextUpperCase.indexOf(textUpperCase) !== -1) {
			return true;
		} else {
			return false;
		}
	} else {
		return false;
	}
}

function validateEmail(event) {
	var inputNode = event.target;

	var value = inputNode.value;
	var regexEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

	if (regexEmail.test(value)) {
		inputNode.classList.remove('is-invalid');
		inputNode.classList.add('is-valid');
	} else {
		inputNode.classList.remove('is-invalid');
		inputNode.classList.add('is-invalid');
	}
	validateSubmitButton();
}

function validateDniField(event) {
	var inputNode = event.target;

	var parsedValue = parseInt(inputNode.value, 10);

	var index = searchStudentIndexByDni(inputNode.value, studentsList);

	if (isNaN(parsedValue) || parsedValue <= 0 || index > -1) {
		inputNode.classList.remove('is-valid');
		inputNode.classList.add('is-invalid');
	} else {
		inputNode.classList.remove('is-invalid');
		inputNode.classList.add('is-valid');
	}
	validateSubmitButton();
}

function validateRequiredField(event) {
	var inputNode = event.target;

	if (!inputNode.value) {
		inputNode.classList.remove('is-valid');
		inputNode.classList.add('is-invalid');
	} else {
		inputNode.classList.remove('is-invalid');
		inputNode.classList.add('is-valid');
	}

	validateSubmitButton();
}

function validateSubmitButton() {
	var addStudentButtonNode = document.getElementById('addStudentButton');
	var inputFields = document.getElementsByClassName('is-valid');

	if (inputFields.length === 4) {
		addStudentButtonNode.disabled = false;
	} else {
		addStudentButtonNode.disabled = true;
	}
}

function createStudentNode(newStudent) {
	// Creo el nodo li
	var liNode = document.createElement('li');

	// Le setteo el id al nodo
	liNode.id = newStudent.dni;

	// Le setteo la clase al nodo
	liNode.className = 'list-group-item';

	// Le agrego el contenido al nodo
	liNode.innerHTML =
		'<h1>' +
		newStudent.firstName +
		' ' +
		newStudent.lastName +
		'</h1>' +
		'<h3>DNI:' +
		newStudent.dni +
		'</h3><p class="pepe">E-mail:' +
		newStudent.email +
		'</p>';

	// Devuelvo solo el nodo con todos sus datos
	return liNode;
}

function setLocalList(key, list) {
	// Verifico los parámetros recibidos
	if (typeof key === 'string' && Array.isArray(list)) {
		// Convierto a JSON el array
		var strList = JSON.stringify(list);
		// Guardo en el localStorage pisando la key
		localStorage.setItem(key, strList);
	}
}

function getLocalList(key) {
	// Valido que reciba un string
	if (typeof key === 'string') {
		// Trato de recuperar la lista del localStorage
		var localList = localStorage.getItem(key);
		if (localList) {
			// Si la lista existía la tranformo en JavaScript y la devuelvo
			var parsedList = JSON.parse(localList);
			return parsedList;
		} else {
			// Sino existía devuelvo un array vacío
			return [];
		}
	}
}
