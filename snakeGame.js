let snake, snakeInitialLength = 4,
score = 0;

const gameBoard = document.getElementById('gameBoard'),
ctx = gameBoard.getContext('2d'),
BORDER_COLOUR = 'black',
BACKGROUND_COLOUR = "white";
createSnake();
_init();
createDot();



function _init() {
    if(!!didSnakeCollide()) {
        document.getElementById('msg').innerHTML = "Collide!";
        return;
    } 
    setTimeout(() => {
        snakeObj.changeDirection = false;
        clearAndDrawBox();
        dotObj.drawDot();
        const hit = didHitDot();
        if (hit) {
            score += 10;
            document.getElementById('score').innerHTML = score;
            createDot();
        }
        snakeObj.moveSnake(hit);
        _init();
    }, 500);


   // https://www.freecodecamp.org/news/think-like-a-programmer-how-to-build-snake-using-only-javascript-html-and-css-7b1479c3339e/ 
}

function clearAndDrawBox() {
    ctx.fillStyle = BACKGROUND_COLOUR;
    ctx.strokeStyle = BORDER_COLOUR;

    ctx.fillRect(0, 0, gameBoard.width, gameBoard.height);
    ctx.strokeRect(0, 0, gameBoard.width, gameBoard.height);

    // ctx.rect(0, 0, gameBoard.width, gameBoard.height);
    // ctx.stroke();
}

function createSnake() {
    snakeObj = new Snake(ctx);
    snakeObj.init();
    
    snakeInitialLength = snakeObj.snake.length;
}

function createDot() {
    dotObj = new Dot();
    dotObj.createDot(gameBoard);
    snakeObj.snake.forEach((pos) => {
        if (dotObj.foodX == pos.x && dotObj.foodY == pos.y) {
            createDot();
        }
    });
}

function didSnakeCollide() {
    let snake = snakeObj.snake;
    for (let i = snakeInitialLength; i < snake.length; i++) {
        if (snake[0].x === snake[i].x && snake[0].y === snake[i].y) return true;
    }
    return  snake[0].x < 0 || snake[0].x > gameBoard.width - 10 || snake[0].y < 0 || snake[0].y > gameBoard.height - 10;
};

function didHitDot () {
   return dotObj.foodX == snakeObj.snake[0].x && dotObj.foodY == snakeObj.snake[0].y;
}
