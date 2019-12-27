class Dot {
    constructor() {
        this.foodX = 0;     // initialization
        this.foodY = 0;

    }
    drawDot() {
        ctx.fillStyle = 'red';
        ctx.strokestyle = 'darkred';                        // rendering the dot
        ctx.fillRect(this.foodX, this.foodY, 10, 10);
        ctx.strokeRect(this.foodX, this.foodY, 10, 10);

    }
    createDot(gameBoard) {
        this.foodX = this.randomTen(0, gameBoard.width - 10),
            this.foodY = this.randomTen(0, gameBoard.height - 10);
    }

    randomTen(min, max) {
        return Math.round((Math.random() * (max - min) + min) / 10) * 10;
    }
}