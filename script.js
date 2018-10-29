
    document.getElementById("start-btn").onclick = function() {
        document.getElementById("container").style.display = "none"; 
        document.getElementById("game-board").style.display = "block";
    };

    var canvas = document.getElementById('canvas');
    var ctx = canvas.getContext('2d');
    
    function drawCanvas() {
        canvas.width = 1300;
        canvas.height = 700;
        document.getElementById("game-board").append(canvas);
    }
    drawCanvas();

    var score = 0;

    //Sky
    function drawSky() {
        ctx.beginPath();
        ctx.moveTo(0, 100);
        ctx.bezierCurveTo(canvas.width/2, canvas.height/3, 2*canvas.width/3, 50, canvas.width, 100);
        ctx.lineTo(1300, 0);
        ctx.lineTo(0,0);
        ctx.closePath();
        ctx.fillStyle ="#AFE4DB";
        ctx.strokeStyle ="#AFE4DB";
        ctx.fill();
        ctx.stroke();
    }
    drawSky();

    //cloud 
    function drawCloud() {
        var img = new Image();
        img.onload = function() {
            ctx.drawImage(img, 50, 20, 90, 50);
            ctx.drawImage(img, 600, -50, 150, 100);
            ctx.drawImage(img, 1200, -30, 150, 100);
        };
    img.src = "./images/Cloud.png";
    }
    drawCloud();

    //SeaForeground
    // Reste à animer les courbes de Bezier
    function drawSeaForeground() {
        ctx.beginPath();
        ctx.moveTo(0, 100);
        ctx.bezierCurveTo(canvas.width/2, canvas.height/3, 2*canvas.width/3, 50, canvas.width, 100);
        ctx.lineTo(1300, 600);
        ctx.lineTo(0, 700);
        ctx.closePath();
        ctx.fillStyle ="#68EAED";
        ctx.strokeStyle ="#68EAED";
        ctx.fill();
        ctx.stroke();
    }
    drawSeaForeground();

    //SeaBackground
    // Reste à animer les courbes de Bezier
    function drawSeaBackground() {
        ctx.beginPath();
        ctx.moveTo(0, 100);
        ctx.bezierCurveTo(canvas.width/2, 50, 2*canvas.width/3, canvas.height/3, canvas.width, 100);
        ctx.lineTo(1300, 600);
        ctx.lineTo(0, 700);
        ctx.closePath();
        ctx.fillStyle ="#45E8F2";
        ctx.strokeStyle ="#45E8F2";
        ctx.fill();
        ctx.stroke();
    }
    drawSeaBackground();

    //Reef (a creer si le temps)


    //Sand
    function drawSand() {
        ctx.beginPath();
        ctx.moveTo(0, 600);
        ctx.bezierCurveTo(canvas.width/3, canvas.height, 2*canvas.width/3, 550, canvas.width, 600);
        ctx.lineTo(1300, 700);
        ctx.lineTo(0, 700);
        ctx.closePath();
        ctx.fillStyle ="#E2E1C9";
        ctx.strokeStyle ="#E2E1C9";
        ctx.fill();
        ctx.stroke();
    }
    drawSand();

    function drawMerman() {
        var img = new Image();
        img.onload = function() {
            ctx.drawImage(img, 100, 400, 200, 100);
        };
    img.src = "./images/Merman_game.png";
    }
    drawMerman();

    function drawScore() {
        var img = new Image();
        img.onload = function() {
            ctx.drawImage(img, 1250, 20, 40, 40);
        };
        img.src = "./images/Star_game.png";
        ctx.font = "36px Pacifico";
        ctx.textBaseline = "top";
        ctx.textAlign = "left";
        ctx.fillStyle="#F4A506";
        ctx.fillText(score, 1220, 22);
    }
    drawScore();

    function gameOver() {
        clearInterval(idIntervalle);
        var img = new Image();
        img.onload = function() {
            ctx.drawImage(img, 1250, 20, 40, 40);
        };
        img.src = "./images/Star_game.png";
    }
    gameOver();

    function Component(width, height, image, x, y) {
        this.image = new Image();
        this.image.src = image;
        this.width = width;
        this.height = height;
        this.x = x;
        this.y = y;
    }

