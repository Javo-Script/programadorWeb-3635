console.log('Init Tic Tac Toe')

var playerNumber = 0

var squareNodes = $('.square')

squareNodes.click(squareClick)

function squareClick () {
  var squareNode = $(this)

  if (!squareNode.hasClass('circle') && !squareNode.hasClass('cross')) {
    playerNumber = playerNumber + 1
    if (playerNumber % 2) {
      squareNode.addClass('circle')
    } else {
      squareNode.addClass('cross')
    }
  }

  if (!(playerNumber % 10)) {
    squareNodes.removeClass('cricle')
    squareNodes.removeClass('cross')
  }
}

// // Creo una para saber quien juega
// var player = true

// // Busco todos los nodos con la clase square en el DOM
// var squareNodes = $('.square')

// // Les agrego a cada uno la función squareClick en el evento click
// squareNodes.click(squareClick)

// /**
//  * squareClick es una función que agrega la clase circle o cross según
//  * corresponda y alterna el turno para cambiar de jugador
//  * @param { HTMLEvent } event
//  */
// function squareClick (event) {
//   var squareNode = $(this)

//   if (!(squareNode.hasClass('circle') || squareNode.hasClass('cross'))) {
//     if (player) {
//       squareNode.addClass('circle')
//     } else {
//       squareNode.addClass('cross')
//     }

//     player = !player
//   }
// }
