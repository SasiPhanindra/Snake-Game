class Snake {
    constructor(ctx) {
        this.snake = [                      // creating snake of size 5
            { x: 150, y: 150 },
            { x: 140, y: 150 },
            { x: 130, y: 150 },
            { x: 120, y: 150 },
            { x: 110, y: 150 }
        ];
        this.changeDirection = false;
        this.ctx = ctx
        this.gameBoard = gameBoard;
        this.dx = 10;
        this.dy = 0;
    }

    init() {
        this.renderSnake();
        document.addEventListener("keydown", this.checkChangeDirection.bind(this)); // to handle the direction of the snake
    }
    renderSnake() {
        this.snake.forEach((snakePart) => {
            this.ctx.fillStyle = 'lightgreen';
            this.ctx.strokeStyle = 'darkgreen';             // draw the snake with rectangles

            this.ctx.fillRect(snakePart.x, snakePart.y, 10, 10);
            this.ctx.strokeRect(snakePart.x, snakePart.y, 10, 10);

        })
    }

    moveSnake(hit) {
        const head = { x: this.snake[0].x + this.dx, y: this.snake[0].y + this.dy };
        this.snake.unshift(head);                           // move the snake by removing the tail rect and adding a head in 
        if (!hit) {                                         // the direction it is heading
            this.snake.pop();
        }
        this.renderSnake();
    }

    checkChangeDirection(event) {
        const LEFT_KEY = 37,
            RIGHT_KEY = 39,
            UP_KEY = 38,
            DOWN_KEY = 40;

        if (this.changeDirection) return;
        this.changeDirection = true;

        const keyPressed = event.keyCode;

        const movingUp = this.dy === -10,
            movingDown = this.dy === 10,
            movingLeft = this.dx === -10,
            movingRight = this.dx === 10;

        if (keyPressed === LEFT_KEY && !movingLeft) {
            this.dx = -10;
            this.dy = 0;
        }

        else if (keyPressed === RIGHT_KEY && !movingRight) {
            this.dx = 10;
            this.dy = 0;
        }
        else if (keyPressed === UP_KEY && !movingUp) {
            this.dx = 0;
            this.dy = -10;
        }
        else if (keyPressed === DOWN_KEY && !movingDown) {
            this.dy = 10;
            this.dx = 0;
        }
    }
};