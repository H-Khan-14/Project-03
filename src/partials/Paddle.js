export default class Paddle {
  constructor(board, width, height, isLeft, up, down) {
    this.width = width;
    this.height = height;
    this.isLeft = isLeft;
    if (isLeft) {
      this.xPosition = 0;
    } else {
      this.xPosition = 1006;
    }
    this.board = board;
    this.yPosition = board.height / 2 - height / 2;
    this.speed = 20;
    document.addEventListener('keydown', event => {
      switch (event.keyCode) {
        case up:
          this.yPosition -= this.speed;
          this.yPosition = Math.max(0, this.yPosition);
          break;
        case down:
          this.yPosition += this.speed;
          this.yPosition = Math.min(board.height - this.height, this.yPosition);
          break;
      }
    });
  }

  coordinates() {
    let leftX = this.xPosition;
    let rightX = this.xPosition + this.width; //width of the paddle
    let topY = this.yPosition;
    let bottomY = this.yPosition + this.height; //height of the paddle
    return [leftX, rightX, topY, bottomY];
  }

  render() {
    document.getElementById('gameBoard').innerHTML += `<rect x="${
      this.xPosition
    }" y="${this.yPosition}" width="${this.width}" height="${this.height}" />`;
  }
}
