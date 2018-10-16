var newStudent = {
	firstName: 'Juan',
	lastName: 'Pérez',
	dni: 45678987,
	email: 'juan@gmail.com'
};

function createStudentNode(newStudent) {
	var liNode = document.createElement('li');

	liNode.id = newStudent.dni;
	liNode.className = 'list-group-item';

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

	return liNode;
}

// function Student(firstName, lastName, dni, email) {
// 	var id = dni;

// 	this.fullName = firstName + ' ' + lastName;
// 	this.dni = dni;
// 	this.email = email;

// 	this.getId = function() {
// 		return id;
// 	};
// }

// var mainList = document.getElementById('mainList');

// var studentLi = document.createElement('li');
// studentLi.innerHTML = '<h1>' + fullName + '</h1><h3>DNI: ' + dni + '</h3><p>E-mail: ' + email + '</p>';
// studentLi.className = 'list-group-item';

// mainList.appendChild(studentLi);
