export default class GameBoard {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }
  render() {
    document.getElementById('game').innerHTML = `<svg id="gameBoard" width="${
      this.width
    }" height="${this.height}"></svg>`;
    document.getElementById(
      'gameBoard'
    ).innerHTML += `<line stroke-dasharray="5" x1="512" y1="0" x2="517" y2="512" stroke="black"/>`;
  }
}
