var score = 15;
var obstacles = [];

function drawCanvas() {
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  clearCanvas();
}
drawCanvas();

function clearCanvas() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
}

//-------------Background---------------//
var numberOfLines = 2;
var i = 0;
var j = 0;

var background = function() {
  // ctx.clearRect(0, 0, canvas.width, canvas.height);

  //sky
  ctx.fillStyle = "#AFE4DB";
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  //Sea
  for (var k = 0; k < numberOfLines; k++) {
    var offset = (i + k * 10) / 30;
    var y = 150;
    var cpy1 = (Math.sin(offset) + 1) * 100;
    var cpy2 = 150 - cpy1;
    ctx.beginPath();
    ctx.moveTo(0, y);
    ctx.bezierCurveTo(
      canvas.width / 3,
      cpy1,
      (2 * canvas.width) / 3,
      cpy2,
      canvas.width,
      y
    );
    ctx.lineTo(canvas.width, canvas.height);
    ctx.lineTo(0, canvas.height);
    ctx.closePath();
    ctx.fillStyle = "rgb(" + Math.floor(173 - k * 104) + ", 232, 242)";
    ctx.strokeStyle = "rgb(" + Math.floor(173 - k * 104) + ", 232, 242)";
    ctx.fill();
    ctx.stroke();
  }
  i++;

  //Sand
  ctx.beginPath();
  ctx.moveTo(0, 600);
  ctx.bezierCurveTo(
    canvas.width / 3,
    canvas.height,
    (2 * canvas.width) / 3,
    550,
    canvas.width,
    600
  );
  ctx.lineTo(1300, 700);
  ctx.lineTo(0, 700);
  ctx.closePath();
  ctx.fillStyle = "#E2E1C9";
  ctx.strokeStyle = "#E2E1C9";
  ctx.fill();
  ctx.stroke();
};
setInterval(background, 30);

//-------------SetInterval---------------//
var IntervalId = function() {
  cloud.move();
  octopus.move();
  orshins.move();
  merman.moveUp();
  merman.moveDown();
  star.move();
  // merman.collision();
  drawScore();
};

setInterval(IntervalId, 30);

//-------------Cloud---------------//

var imageCloud = new Image();
imageCloud.onload = updateCanvas;

var cloud = {
  imageCloud: imageCloud,
  x: 50,
  speedX: -0.25,

  move: function() {
    this.x += this.speedX;
    this.y += this.speedY;
  },

  draw: function() {
    ctx.drawImage(this.imageCloud, this.x, 20, 90, 50);
    ctx.drawImage(this.imageCloud, this.x + 550, -50, 150, 100);
    ctx.drawImage(this.imageCloud, this.x + 1220, -30, 150, 100);
  }
};
imageCloud.src = "./images/Cloud.png";

//-------------Octopus---------------//

var imageOctopus = new Image();
imageOctopus.onload = updateCanvas;

var octopus = {
  imageOctopus: imageOctopus,
  x: canvas.width,
  y: Math.floor(Math.random() * (600 - 200) + 200),
  width: 70,
  height: 70,
  left: this.x,
  right: this.x + this.width,
  speedX: -7,
  speedY: 0.1,
  collisionEffect: false,

  move: function() {
    this.x += this.speedX;
    this.y += this.speedY;
    if (this.x <= -100 || this.y <= 0) {
      this.x = canvas.width;
      this.y = Math.floor(Math.random() * (600 - 250) + 200);
    }
  },

  draw: function() {
    ctx.drawImage(this.imageOctopus, this.x, this.y, this.width, this.height);
    ctx.drawImage(
      this.imageOctopus,
      this.x - 50,
      this.y - 50,
      this.width,
      this.height
    );
    ctx.drawImage(
      this.imageOctopus,
      this.x - 100,
      this.y - 100,
      this.width,
      this.height
    );
  }
};

imageOctopus.src = "./images/Octopus.png";

//-------------Orshins---------------//

var imageOrshins = new Image();
imageOrshins.onload = updateCanvas;

var orshins = {
  imageOrshins: imageOrshins,
  x: 1400,
  y: Math.floor(Math.random() * (600 - 250) + 200),
  speedX: -6,
  speedY: 0.25,
  collisionEffect: false,

  move: function() {
    this.x += this.speedX;
    this.y += this.speedY;
    if (this.x <= -100 || this.y <= 0) {
      this.x = canvas.width;
      this.y = Math.floor(Math.random() * (600 - 250) + 200);
    }
  },
  draw: function() {
    ctx.drawImage(this.imageOrshins, this.x, this.y, 40, 40);
    ctx.drawImage(this.imageOrshins, this.x - 30, this.y - 50, 40, 40);
  }
};

imageOrshins.src = "./images/Orshin.png";

//-------------Stars---------------//

var imageStars = new Image();
imageStars.onload = updateCanvas;

var star = {
  imageStars: imageStars,
  x: canvas.width,
  y: Math.floor(Math.random() * (600 - 200) + 200),
  speedX: -5,
  speedY: -0.05,

  move: function() {
    this.x += this.speedX;
    this.y += this.speedY;
    if (this.x <= -120 || this.y <= 0) {
      this.x = canvas.width;
      this.y = Math.floor(Math.random() * (600 - 200) + 200);
    }
  },

  draw: function() {
    ctx.drawImage(this.imageStars, this.x, this.y, 40, 40);
    ctx.drawImage(this.imageStars, this.x + 30, this.y + 30, 40, 40);
    ctx.drawImage(this.imageStars, this.x + 60, this.y + 60, 40, 40);
    ctx.drawImage(this.imageStars, this.x + 90, this.y + 90, 40, 40);
    ctx.drawImage(this.imageStars, this.x + 120, this.y + 120, 40, 40);
  }
};
imageStars.src = "./images/Star_game.png";

//-------------Merman---------------//

var imageMerman = new Image();
var imageMermanDown = new Image();
var imageMermanUp = new Image();
var imageMermanYes = new Image();

imageMerman.onload = updateCanvas;

var merman = {
  imageMerman: imageMerman,
  x: 100,
  y: 400,
  width: 250,
  height: 180,
  left: this.x,
  right: this.x + this.width,
  speedX: 0,
  speedY: 8,

  moveUp: function() {
    this.y -= this.speedY;
  },
  moveDown: function() {
    this.y += this.speedY;
  },
  draw: function() {
    ctx.drawImage(this.imageMerman, this.x, this.y, this.width, this.height);
  }
};

document.onkeydown = function(e) {
  if (e.keyCode == 38) {
    merman.moveUp();
  }
  if (e.keyCode == 40) {
    merman.moveDown();
  }
  if (e.keyCode == 40 || e.keyCode == 38) {
    if (imageMerman.src != imageMermanDown.src) {
      imageMerman.src = imageMermanDown.src;
    } else {
      imageMerman.src = imageMermanUp.src;
    }
  }
};

imageMerman.src = "./images/Merman_DOWN.png";
imageMermanDown.src = "./images/Merman_DOWN.png";
imageMermanUp.src = "./images/Merman_UP.png";
imageMermanYes.src = "./images/Merman_YES.png";

//-------------Obstacles---------------//
// var imageMermanNo = new Image();

function collision() {
  for (var i = 0; i < obstacles.length; i++) {
    if (obstacles[i].collisionEffect === false) {
      if (
        (merman.y <= obstacles[i].y &&
          merman.y + merman.height >= obstacles[i].y) ||
        (merman.y >= obstacles[i].y &&
          merman.y <= obstacles[i].y + obstacles[i].height)
      ) {
        if (merman.x + merman.width == obstacles[i].x) {
          // imageMerman.src = imageMermanNo.src;
          score -= 1;
          obstacles[i].collisionEffect = true;
        }
      }
    } else if (obstacles[i].x <= 50) {
      obstacles.splice(i, 1);
    } else if (obstacles[i].x === canvas.width) {
      obstacles[i].collisionEffect = false;
    }
  }
}
// imageMermanNo.src = "./images/Merman_N0.png";

//-------------Score---------------//

function drawScore() {
  var img = new Image();
  img.onload = function() {
    ctx.drawImage(img, 1250, 20, 40, 40);
  };
  img.src = "./images/Star_game.png";
  ctx.font = "24px wickedMouse";
  ctx.textBaseline = "top";
  ctx.textAlign = "left";
  ctx.fillStyle = "#F4A506";
  ctx.fillText(score, 1200, 22);
}

//-------------GameOver---------------//

function gameOver() {
  clearInterval(idIntervalle);
  var img = new Image();
  img.onload = function() {
    ctx.drawImage(img, 1250, 20, 40, 40);
  };
  img.src = "./images/Star_game.png";
}

//-------------Update---------------//

function updateCanvas() {
  // clearCanvas();
  drawScore();
  cloud.draw();
  octopus.draw();
  orshins.draw();
  obstacles = [octopus, orshins];
  star.draw();
  merman.draw();
  collision();
  console.log(score);
  requestAnimationFrame(updateCanvas);

  // console.log(obstacles);
}

// console.log(orshins.createObstacles());
