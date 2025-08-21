import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  standalone: false,
  templateUrl: './counter.component.html',
  // styleUrls: ['./counter.component.css']
})
export class CounterComponent {
  public counter: number = 0;

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
    this.counter = 0;
  }
}
