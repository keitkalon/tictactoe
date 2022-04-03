import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-board',
  template: ` <p>board works!</p> `,
  styles: [],
})
export class BoardComponent implements OnInit {
  squares: any[] = Array(9).fill(null);
  xIsNext: boolean  = true;
  winner: string = ""; 

  constructor() {}

  ngOnInit(): void {
    this.newGame();
  }
  newGame() {
    this.squares = Array(9).fill(null);
    this.winner = "";
    this.xIsNext = true;
  }
  get player() {
    return this.xIsNext ? 'X' : 'O';
  }
  makeMove(idx: number){
    if(!this.squares[idx]){
      
    }
  }
}
