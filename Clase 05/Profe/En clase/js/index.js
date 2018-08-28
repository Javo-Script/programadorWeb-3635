console.log('Clase 05')

// 1. ¿Qué es un objeto?

var student = {
  firstName: 'Pepe',
  lastName: 'Perez',
  dni: 11445566
}

// 2. Función constructora y `new`

// function Student (firstName, lastName, dni) {
//   // Cuerpo de la función
//   this.firstName = firstName
//   this.lastName = lastName

//   this.fullName = firstName + ' ' + lastName

//   this.dni = dni

//   this.getFirstName = function () {
//     return firstName
//   }
// }

// var newStudent1 = new Student('Pepe', 'Perez', 11445566)

// var firstName1 = newStudent1.getFirstName()

// console.log(firstName1)

// var showMessage = function () {
//   console.log('Soy un mensaje')
// }

// showMessage()

// var newStudent2 = new Student('Ana', 'Martin', 33456789)

// console.log(newStudent2)

// var date = new Date()

// console.log(date.getFullYear())

// 3. Propiedades de los objetos

// 4. Métodos de los objetos
// 5. Uso del `this` para público y privado

// function Student (firstName, lastName) {
//   // Cuerpo

//   var id = Math.random()

//   this.lastName = lastName

//   this.getFirstName = function () {
//     return firstName
//   }

//   this.getId = function () {
//     return id
//   }
// }

// var newStudent = new Student('Ana', 'Martinez')

// console.log(newStudent, newStudent.getId())

// var newStudent2 = new Student('Ana', 'Martinez')

// console.log(newStudent2, newStudent2.getId())

// console.log('Objeti creado', newStudent.lastName)

// newStudent.lastName = 'Lopez'

// console.log('Objeti creado', newStudent.lastName)

function Car (color, brand, year) {
  var id = Math.random()

  this.color = color

  this.getBrand = function () {
    return brand
  }

  this.getYear = function () {
    return year
  }

  this.getId = function () {
    return id
  }

  this.setBrand = function (newBrand) {
    brand = newBrand
  }
}

var toyotaEtios = new Car('Rojo', 'Toyota', 2016)

console.log(
  toyotaEtios.color,
  toyotaEtios.getBrand(),
  toyotaEtios.getYear(),
  toyotaEtios.getId()
)

toyotaEtios.color = 'Naranja'
toyotaEtios.setBrand('Ford')
toyotaEtios.getYear(2000)
toyotaEtios.id = 'Pato'

console.log(
  toyotaEtios.color,
  toyotaEtios.getBrand(),
  toyotaEtios.getYear(),
  toyotaEtios.getId()
)
