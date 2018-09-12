var numbers = [ 1, 2, 3, 4, 5 ];

var del = prompt('que numero del 1 al 5 queres borrar?');
var parsedDel = parseFloat(del, 10);

var indice = numbers.indexOf(parsedDel);

var newNumbers = deleteElements(indice, numbers);

function deleteElements(indice, numbers) {
	if (Array.isArray(numbers) && indice !== -1) {
		var newNumbers = numbers.slice();
		newNumbers.splice(indice, 1);
		return newNumbers;
	}
}

console.log(numbers);
console.log(newNumbers);
