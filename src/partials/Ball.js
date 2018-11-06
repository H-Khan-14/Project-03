// import sound from '.../public/sounds/pong-01.wav'
export default class Ball {
  constructor(radius, boardWidth, boardHeight) {
    this.radius = radius;
    this.wallSound = new Audio('/public/sounds/pong-01.wav');
    this.paddleSound = new Audio('/public/sounds/pong-02.wav');
    this.boardWidth = boardWidth;
    this.boardHeight = boardHeight;
    this.direction = 1;
    this.reset();
  }

  WallCollision() {
    if (this.yPosition <= this.radius) {
      this.vy = -this.vy;
      this.wallSound.play();
    }
    if (this.yPosition + this.radius >= this.boardHeight) {
      this.vy = -this.vy;
      this.wallSound.play();
    }
  }

  reset() {
    this.xPosition = this.boardWidth / 2;
    this.yPosition = this.boardHeight / 2;
    this.vy = 0;

    this.vy = Math.floor(Math.random() * 10 - 5);
    this.vx = this.direction * (6 - Math.abs(this.vy));
  }

  paddleCollision(player1, player2) {
    if (this.vx < 0) {
      let [leftX, rightX, topY, bottomY] = player1.coordinates(
        player1.xPosition,
        player1.yPosition,
        player1.width,
        player1.height
      );
      if (
        this.xPosition - this.radius <= rightX &&
        this.yPosition >= topY &&
        this.yPosition <= bottomY
      ) {
        this.vx = -this.vx;
        this.paddleSound.play();
      }
    } else {
      let [leftX, rightX, topY, bottomY] = player2.coordinates(
        player2.xPosition,
        player2.yPosition,
        player2.width,
        player2.height
      );
      if (
        this.xPosition + this.radius >= leftX &&
        this.yPosition >= topY &&
        this.yPosition <= bottomY
      ) {
        this.vx = -this.vx;
        this.paddleSound.play();
      }
    }
  }

  render(player1, player2) {
    this.xPosition += this.vx;
    this.yPosition += this.vy;
    this.WallCollision();
    this.paddleCollision(player1, player2);

    document.getElementById('gameBoard').innerHTML += `<circle cx="${
      this.xPosition
    }" cy="${this.yPosition}" r="${this.radius}"/>`;
  }
}
