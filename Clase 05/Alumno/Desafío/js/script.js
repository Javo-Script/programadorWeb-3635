var students = [
	{
		firstName: 'Juan',
		lastName: 'Pérez',
		dni: 45678987,
		email: 'juan@gmail.com'
	},
	{
		firstName: 'Ana',
		lastName: 'Fernandez',
		dni: 45678989,
		email: 'ana@gmail.com'
	},
	{
		firstName: 'Pedro',
		lastName: 'Mármol',
		dni: 45678956,
		email: 'pedro@gmail.com'
	},
	{
		firstName: 'Javier',
		dni: 45678956,
		email: 'javier@gmail.com'
	},
	{
		lastName: 'Castanos',
		dni: 45678956,
		email: 'javier@gmail.com'
	}
];

function Student(firstName, lastName, dni, email) {
	var id = Math.random();

	this.firstName = firstName;
	this.lastName = lastName;
	this.dni = dni;
	this.email = email;

	this.getId = function() {
		return id;
	};

	this.getFullName = function() {
		if (firstName !== undefined && lastName !== undefined) {
			return firstName + ' ' + lastName;
		}
		if (firstName === undefined && lastName !== undefined) {
			return lastName;
		}
		if (firstName !== undefined && lastName === undefined) {
			return firstName;
		}
	};
}

var newStudents = [];
var newStudent;

for (var i = 0; i < students.length; i++) {
	var stud = new Student(students[i].firstName, students[i].lastName, students[i].dni, students[i].email);
	newStudent = stud.getFullName() + ' ' + students[i].dni + ' ' + students[i].email + ' ' + stud.getId();
	newStudents.push(newStudent);
}

for (var i = 0; i < students.length; i++) {
	console.log(newStudents[i]);
}
