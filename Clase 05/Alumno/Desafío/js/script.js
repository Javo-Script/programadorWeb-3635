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

var student1 = new Student(students[0].firstName, students[0].lastName, students[0].dni, students[0].email);
var student2 = new Student(students[1].firstName, students[1].lastName, students[1].dni, students[1].email);
var student3 = new Student(students[2].firstName, students[2].lastName, students[2].dni, students[2].email);
var student4 = new Student(students[3].firstName, students[3].lastName, students[3].dni, students[3].email);
var student5 = new Student(students[4].firstName, students[4].lastName, students[4].dni, students[4].email);

console.log(student1.getFullName(), student1.dni, student1.email, student1.getId());
console.log(student2.getFullName(), student2.dni, student2.email, student2.getId());
console.log(student3.getFullName(), student3.dni, student3.email, student3.getId());

console.log(student4.getFullName(), student4.dni, student4.email, student4.getId());
console.log(student5.getFullName(), student5.dni, student5.email, student5.getId());
