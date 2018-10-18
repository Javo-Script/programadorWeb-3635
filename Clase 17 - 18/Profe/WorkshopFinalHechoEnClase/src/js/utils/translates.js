function genderTranslate (gender) {
  switch (gender) {
    case 'male':
      return 'Masculino'
      break
    case 'female':
      return 'Femenino'
      break
    case 'n/a':
      return 'n/a'
      break
    default:
      return gender
      break
  }
}

var TRANSLATES = {
  ES: {
    blue: 'Azules',
    yellow: 'Amarillos',
    red: 'Rojos',
    'blue-grey': 'Grisaceos'
  },
  EN: {
    blue: 'Blue',
    yellow: 'Yellow',
    red: 'Red'
  },
  PT: {
    blue: 'Azulciños',
    yellow: 'Amarilliños',
    red: 'Rejiziños'
  }
}

function eyeTranslate (lang, eyeColor) {
  return TRANSLATES[lang][eyeColor] || eyeColor
}

export { genderTranslate, eyeTranslate }
