import { Component, Input} from '@angular/core';

@Component({
  selector: 'app-square',
  template: `
    <p>
      square works!
      {{ rando }}
    </p>
    <button>{{value}}</button>
  `,
  styles: [],
})
export class SquareComponent {
  public rando: number = 0;
  @Input() value: 'X' | 'O' = 'O';
  constructor() {
    setInterval(() => (this.rando = Math.floor(Math.random() * 100)), 500);
  }
}
