function genderTranslate(gender) {
	switch (gender) {
		case 'male':
			return 'masculino';
			break;
		case 'female':
			return 'femenino';
			break;
		case 'n/a':
			return 'n/a';
			break;
		case 'hermaphrodite':
			return 'Hermafrodita';
			break;
		default:
			return gender;
	}
}

var TRANSLATES = {
	ES: {
		blue: 'Azules',
		yellow: 'Amarillos',
		red: 'Rojos',
		'blue-gray': 'Azules grisaceos',
		black: 'Negros',
		brown: 'Marrones',
		hazel: 'Avellana',
		orange: 'Naranjas',
		pink: 'Rosas',
		unknown: 'Indefinido',
		'red, blue': 'Rojo y Azul',
		gold: 'Dorado',
		'green, yellow': 'Verde y Amarillo',
		white: 'Blancos',
		dark: 'Oscuros'
	},
	EN: {
		blue: 'Blue',
		yellow: 'Yellow',
		red: 'Red',
		'blue-gray': 'Blue-Gray',
		black: 'Black',
		brown: 'Brown',
		hazel: 'Hazel',
		orange: 'Naranjas',
		pink: 'Pink',
		unknown: 'Unknown',
		'red, blue': 'Red & blue',
		gold: 'Gold',
		'green, yellow': 'Green & yellow',
		white: 'White',
		dark: 'Dark'
	}
};
function eyeTranslate(lang, eyeColor) {
	return TRANSLATES[lang][eyeColor] || eyeColor;
}

export { genderTranslate, eyeTranslate };
