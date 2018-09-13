var age = prompt('Ingresa tu edad')

if (age === '18') {
  console.log('tu edad es 18 años')
} else if (age === '21') {
  console.log('tu edad es 21 años')
} else if (age === '30') {
  console.log('tu edad es 30 años')
} else {
  console.log('tu edad no es es 18, 21 o 30 años')
}

switch (age) {
  case '18':
    console.log('tu edad es 18 años')
    break
  case '21':
    console.log('tu edad es 21 años')
    break
  case '30':
    console.log('tu edad es 30 años')
    break
  default:
    console.log('tu edad no es es 18, 21 o 30 años')
    break
}
