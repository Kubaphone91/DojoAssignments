export class Player {
  _id: number;
  name: string;
  position: string;
  game1: object = {};
  game2: object = {};
  game3: object = {};

  constructor(){
    this.game1 = {
      playing: false,
      notPlaying: false,
      undecided: true
    };
    this.game2 = {
      playing: false,
      notPlaying: false,
      undecided: true
    };
    this.game3 = {
      playing: false,
      notPlaying: false,
      undecided: true
    };
  }
}
