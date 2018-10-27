// window.onload = function() {
//     document.getElementById("start-button").onclick = function() {
//         //function start();
//     };
    
    // function Game() {}



    // donner les dimensions du canvas et ses caractéristiques

    // function startGame() {}
    // function drawCanvas() {}
    // function start() {}
    // function clear() {}
    // function score() {}
    // function gameOver() {}

    // function background() {}
    // function component() {}
    // function obstacles() {}
    
    // function update() {}

//}

var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');


//Seabed
function draw() {
    ctx.fillRect(0, 650, 1200, 50);
}
draw();