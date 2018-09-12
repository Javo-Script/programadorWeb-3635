var student = {
	firstName: 'Juan',
	lastName: 'Pérez',
	dni: 45678987,
	email: 'juan@gmail.com'
};

function Student(firstName, lastName, dni, email) {
	var id = dni;

	this.firstName = firstName;
	this.lastName = lastName;
	this.dni = dni;
	this.email = email;

	this.getId = function() {
		return id;
	};
}

var mainList = document.getElementById('mainList');

var studentLi = document.createElement('li');
studentLi.innerHTML = '<h1>Juan Peréz</h1>
<h3>
DNI: 22999333
</h3><p>
E-mail: juan@gmail.com
</p>'student;
studentLi.className = 'list-group-item';

mainList.appendChild(studentLi);

// for (var i = 0; i < studentList.length; i++) {
//   student = studentList[i]
//   newStudent = new Student(
//     student.firstName,
//     student.lastName,
//     student.dni,
//     student.email
//   )
//   console.log(newStudent.getId(), newStudent.getFullName())
// }

// 	newStudent.innerHTML = studentList[i];
// 	newStudent.className = 'list-group-item';

// 	mainList.appendChild(textLi);
// }
