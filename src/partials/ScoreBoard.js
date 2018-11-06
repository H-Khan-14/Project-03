export default class ScoreBoard {
  constructor(width, height, P1Score, P2Score, ball) {
    this.width = width;
    this.height = height;
    this.P1Score = P1Score;
    this.P2Score = P2Score;
    this.ball = ball;
    this.endSound = new Audio('/public/sounds/pong-04.wav');
  }

  scoreCollision() {
    if (this.ball.xPosition <= this.ball.radius) {
      this.P2Score++;
      this.ball.reset();
    }
    if (this.ball.xPosition + this.ball.radius >= this.ball.boardWidth) {
      this.P1Score++;
      this.ball.reset();
    }

    if (this.P1Score == 10) {
      this.endSound.play();
      this.ball.reset();
      alert('PLAYER 1 WINS! PLAYER 2 LOSSES.');
    }
    if (this.P2Score == 10) {
      this.endSound.play();
      this.ball.reset();
      alert('PLAYER 2 WINS! PLAYER 1 LOSSES');
    }
  }
  render() {
    this.scoreCollision();
    document.getElementById(
      'scoreBoard'
    ).innerHTML += `<p>First Player Score: ${
      this.P1Score
    }</p><p>Second Player Score: ${this.P2Score}</p>`;
  }
}
