// Datos iniciales

var students = [
  {
    firstName: 'Pedro',

    dni: 22999333,
    email: 'juan@gmail.com'
  },
  {
    firstName: 'Ana',

    dni: 22999333,
    email: 'juan@gmail.com'
  },
  {
    firstName: 'María',

    dni: 22999333,
    email: 'juan@gmail.com'
  }
]

/**
 * createStudentNode es una función que devuelve un nodo li
 * con los datos del alumno pasado por parámetro
 * @param { Student } newStudent
 * @returns Node
 */
function createStudentNode (newStudent) {
  // Creo el nodo li
  var liNode = document.createElement('li')

  // Le setteo el id al nodo
  liNode.id = newStudent.dni

  // Le setteo la clase al nodo
  liNode.className = 'list-group-item'

  // Le agrego el contenido al nodo
  liNode.innerHTML =
    '<h1>' +
    newStudent.firstName +
    ' ' +
    newStudent.lastName +
    '</h1>' +
    '<h3>DNI:' +
    newStudent.dni +
    '</h3><p class="pepe">E-mail:' +
    newStudent.email +
    '</p>'

  // Devuelvo solo el nodo con todos sus datos
  return liNode
}
var mainListNode = document.getElementById('mainList')

var studentNode

for (var i = 0; i < students.length; i++) {
  // Creo un nodo para probar y le paso el objeto estudiante
  studentNode = createStudentNode(students[i])

  mainListNode.appendChild(studentNode)
}
