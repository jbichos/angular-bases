import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  standalone: false,
  // templateUrl: './counter.component.html',
  template: `
    <div>
      <h3>Counter: {{ counter }}</h3>
      <button (click)="increment()">+1</button>
      <button (click)="decrement()">-1</button>
      <hr>
      <button (click)="incrementBy(5)">+5</button>
      <button (click)="decrementBy(5)">-5</button>
      <hr>
      <button (click)="reset()">Reset</button>
    </div>
  `,
  // styleUrls: ['./counter.component.css']
})
export class CounterComponent {
  public counter: number = 10;

  constructor() {
    // Initialize counter or any other setup if needed
  }

  increment(): void {
    this.counter++;
  }

  decrement(): void {
    if (this.counter > 0) { // Prevent counter from going negative
      this.counter--;
    }
  }

  incrementBy(value: number): void {
    this.counter += value;
  }

  decrementBy(value: number): void {
    if (this.counter - value >= 0) { // Prevent counter from going negative
      this.counter -= value;
    }
  }

  reset(): void {
    this.counter = 10;
  }
}
