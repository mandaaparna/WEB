import { Component } from '@angular/core';
import { HighestScore } from './app.score.service';
import { KEYS, CODE_COLOR, PLANK_DIMENSION, GAME_MODES } from './app.constants';

@Component({
  selector: 'ng-snake',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  host: {
    '(document:keydown)': 'handleKeyboardEvents($event)'
  }
})
export class AppComponent {
  private lapse: number;
  private tpath: number;
  private active_mode = 'classic';
  private game_finish = false;

  public levels = GAME_MODES;
  public getKeys = Object.keys;
  public plank = [];
  public hurdles = [];
  public points = 0;
  public game_on = false;
  public highest_score = this.high_score.retrieve();
  temp_mode = 'classic';

  private snake = {
    path: KEYS.LKEY,
    coord: [
      {
        x: -1,
        y: -1
      }
    ]
  };

  private fruit = {
    x: -1,
    y: -1
  };

  constructor(
    private high_score: HighestScore
  ) {
    this.setPlank();
	
	
  }
  ngOnInit() {
	  document.getElementById("result").style.display="none";
	  document.getElementById("high_score_res").style.display="none";
	  
  }

  handleKeyboardEvents(e: KeyboardEvent) {
    if (e.keyCode === KEYS.LKEY && this.snake.path !== KEYS.RKEY) {
      this.tpath = KEYS.LKEY;
    } else if (e.keyCode === KEYS.UKEY && this.snake.path !== KEYS.DKEY) {
      this.tpath = KEYS.UKEY;
    } else if (e.keyCode === KEYS.RKEY && this.snake.path !== KEYS.LKEY) {
      this.tpath = KEYS.RKEY;
    } else if (e.keyCode === KEYS.DKEY && this.snake.path !== KEYS.UKEY) {
      this.tpath = KEYS.DKEY;
    }
  }

  setCellColor(col: number, row: number): string {
    if (this.game_finish) {
      return CODE_COLOR.EXIT;
    } else if (this.fruit.x === row && this.fruit.y === col) {
      return CODE_COLOR.FRUIT;
    } else if (this.snake.coord[0].x === row && this.snake.coord[0].y === col) {
      return CODE_COLOR.HEAD;
    } else if (this.plank[col][row] === true) {
      return CODE_COLOR.TAIL;
    } else if (this.active_mode === 'Obstacles' && this.checkHurdles(row, col)) {
      return CODE_COLOR.HURDLE;
    }

    return CODE_COLOR.PLANK;
  };

  updateCoords(): void {
    let newHead = this.ChangeHeadPosition();
    let ob = this;

    if (this.active_mode === 'classic' && this.edgeSmash(newHead)) {
      return this.end();
    } else if (this.active_mode === 'no_walls') {
      this.ChangeWallCoords(newHead);
    } else if (this.active_mode === 'Obstacles') {
      this.ChangeWallCoords(newHead);
      if (this.hurdleSmash(newHead)) {
        return this.end();
      }
    }
    if (this.selfSmash(newHead)) {
      return this.end();
    } else if (this.fruitSmash(newHead)) {
      this.getPoints();
    }

    let oldTail = this.snake.coord.pop();
    this.plank[oldTail.y][oldTail.x] = false;

    this.snake.coord.unshift(newHead);
    this.plank[newHead.y][newHead.x] = true;

    this.snake.path = this.tpath;

    setTimeout(() => {
      ob.updateCoords();
    }, this.lapse);
  }

  ChangeHeadPosition(): any {
    let newHead = Object.assign({}, this.snake.coord[0]);

    if (this.tpath === KEYS.LKEY) {
      newHead.x -= 1;
    } else if (this.tpath === KEYS.RKEY) {
      newHead.x += 1;
    } else if (this.tpath === KEYS.UKEY) {
      newHead.y -= 1;
    } else if (this.tpath === KEYS.DKEY) {
      newHead.y += 1;
    }

    return newHead;
  }

  ChangeWallCoords(part: any): void {
    if (part.x === PLANK_DIMENSION) {
      part.x = 0;
    } else if (part.x === -1) {
      part.x = PLANK_DIMENSION - 1;
    }

    if (part.y === Math.floor(PLANK_DIMENSION/3)) {
      part.y = 0;
    } else if (part.y === -1) {
      part.y = Math.floor(PLANK_DIMENSION/3) ;
    }
  }

  addHurdles(): void {
    let x = this.randomNumber()/3;
    let y = Math.floor(this.randomNumber()/3);

    if (this.plank[y][x] === true || y === 8) {
      return this.addHurdles();
    }

    this.hurdles.push({
      x: x,
      y: y
    });
  }

  checkHurdles(x, y): boolean {
    let res = false;

    this.hurdles.forEach((val) => {
      if (val.x === x && val.y === y) {
        res = true;
      }
    });

    return res;
  }

  hurdleSmash(part: any): boolean {
    return this.checkHurdles(part.x, part.y);
  }

  edgeSmash(part: any): boolean {
    return part.x === PLANK_DIMENSION || part.x === -1 || part.y === Math.floor(PLANK_DIMENSION/3) || part.y === -1;
  }

  selfSmash(part: any): boolean {
    return this.plank[part.y][part.x] === true;
  }

  fruitSmash(part: any): boolean {
    return part.x === this.fruit.x && part.y === this.fruit.y;
  }

  changeFruitPos(): void {
    let x = this.randomNumber();
    let y = Math.floor(this.randomNumber()/3);
    if (this.plank[y][x] === true || this.checkHurdles(x, y)) {
      return this.changeFruitPos();
    }
    this.fruit = {
      x: x,
      y: y
    };
  }

  getPoints(): void {
    this.points++;

    let tail = Object.assign({}, this.snake.coord[this.snake.coord.length - 1]);

    this.snake.coord.push(tail);
    this.changeFruitPos();

    if (this.points % 5 === 0) {
      this.lapse -= 15;
    }
  }

  end(): void {
	  console.log('1');
    this.game_finish = true;
    this.game_on = false;
	
    let ob = this;

    if (this.points > this.highest_score) {
      this.high_score.store(this.points);
      this.highest_score = this.points;
	  document.getElementById("high_score_res").style.display="";
    }
	document.getElementById("result").style.display="";
    setTimeout(() => {
      ob.game_finish = false;
	  document.getElementById("play_button").style.visibility = "visible";
	document.getElementById("sel_mode").disabled=false;
	  document.getElementById("high_score_res").style.display="none";
	  document.getElementById("result").style.display="none";
	  
    }, 5000);

    this.setPlank();
	
  }

  randomNumber(): any {
    return Math.floor(Math.random() * PLANK_DIMENSION);
  }

  setPlank(): void {
    this.plank = [];

    for (let i = 0; i < PLANK_DIMENSION/3; i++) {
      this.plank[i] = [];
      for (let j = 0; j < PLANK_DIMENSION; j++) {
        this.plank[i][j] = false;
      }
    }
  }

  StartGame(): void {
	  
	  this.temp_mode = document.getElementById("sel_mode").value;
	  console.log(this.temp_mode);
    this.active_mode = this.temp_mode || 'classic';
    this.game_on = true;
	document.getElementById("play_button").style.visibility = "hidden" ;
	document.getElementById("sel_mode").disabled=true;
    this.points = 0;
    this.tpath = KEYS.LKEY;
    this.game_finish = false;
    this.lapse = 150;
    this.snake = {
      path: KEYS.LKEY,
      coord: []
    };
    for (let i = 0; i < 3; i++) {
      this.snake.coord.push({ x: 8 + i, y: 8 });
    }
    if (this.temp_mode === 'Obstacles') {
      this.hurdles = [];
      let j = 1;
      do {
        this.addHurdles();
      } while (j++ < 9);
    }

    this.changeFruitPos();
    this.updateCoords();
  }
}
