var cars = [
	{
		brand: 'Volkswagen',
		model: 'Suran',
		year: 2015
	},
	{
		brand: 'Audi',
		model: `TT`,
		year: 2017
	},
	{
		brand: 'Maserati',
		model: `Gran turismo`,
		year: 2018
	}
];

function Car(brand, model, year) {
	var id = Math.random();

	this.brand = brand;

	this.model = model;

	this.year = year;

	this.getId = function() {
		return id;
	};

	this.getCarName = function() {
		return brand + ' ' + model + ' ' + year;
	};
}

// var volkswagenSuran = new Car('Volksvagen', 'Suran', '2015');

var volkswagenSuran = new Car(cars[0].brand, cars[0].model, cars[0].year);
var audiTT = new Car(cars[1].brand, cars[1].model, cars[1].year);
var maserattiGT = new Car(cars[2].brand, cars[2].model, cars[2].year);

console.log(volkswagenSuran.getCarName(), volkswagenSuran.getId());
console.log(audiTT.getCarName(), audiTT.getId());
console.log(maserattiGT.getCarName(), maserattiGT.getId());
