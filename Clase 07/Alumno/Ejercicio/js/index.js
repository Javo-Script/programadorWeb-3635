// var testList = [
// 	{
// 		nombre: 'CARLOS',
// 		apellido: 'Velasco'
// 	},
// 	{
// 		nombre: 'GERONIMO',
// 		apellido: 'Fernandez'
// 	},
// 	{
// 		nombre: 'NICOLAS',
// 		apellido: 'Rodriguez'
// 	},
// 	{
// 		nombre: 'LUCAS',
// 		apellido: 'Castro'
// 	}
// ];

// var savedUsers = localStorage.getItem('usuarios');
// savedUsers = JSON.parse(savedUsers);

// if (testList !== savedUsers) {
// 	stringedTestList = JSON.stringify(testList);

// 	localStorage.setItem('usuarios', stringedTestList);
// }

// testList = localStorage.getItem('usuarios');
testList = [];
firstName = prompt('Ingresa un nombre.');
lastName = prompt('Ingresa un apellido');

function addUser(firstName, lastName, testList) {
	var savedUsers = localStorage.getItem('usuarios');
	savedUsers = JSON.parse(savedUsers);

	var user = [
		{
			nombre: firstName,
			apellido: lastName
		}
	];
	testList.push(user);

	if (testList !== savedUsers) {
		stringedTestList = JSON.stringify(testList);

		localStorage.setItem('usuarios', stringedTestList);
	}
}
// else{
//   return 'El usuario ya esta ingresado.'
// }

addUser(firstName, lastName, testList);
console.log(savedUsers);
console.log(stringedTestList);
