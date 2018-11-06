import GameBoard from './GameBoard.js';
import Ball from './Ball.js';
import Paddle from './Paddle.js';
import ScoreBoard from './ScoreBoard.js';
import { KEYS } from '../settings';
export default class Game {
  constructor(element, width, height, pause) {
    this.element = element;
    this.width = width;
    this.height = height;
    this.board = new GameBoard(this.width, this.height);
    this.ball = new Ball(16, width, height);
    this.PaddleL = new Paddle(this.board, 16, 112, true, KEYS.a, KEYS.z);
    this.PaddleR = new Paddle(this.board, 16, 112, false, KEYS.up, KEYS.down);
    this.scoreBoard = new ScoreBoard(256, 768, 0, 0, this.ball);
    // Other code goes here...

    this.pause = false;
    this.pause = document.addEventListener('keydown', event => {
      switch (event.keyCode) {
        case KEYS.spaceBar:
          this.pause = !this.pause;
          console.log('pause');
          break;
      }
    });
  }

  render() {
    // More code goes here...
    if (this.pause) {
      return;
    }
    document.getElementById('game').innerHTML = '';
    document.getElementById('scoreBoard').innerHTML = '';

    this.board.render();
    this.ball.render(this.PaddleL, this.PaddleR);
    this.PaddleL.render();
    this.PaddleR.render();
    this.scoreBoard.render();
  }
}
