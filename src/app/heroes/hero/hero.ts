import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  standalone: false,
  templateUrl: './hero.html',
  styleUrl: './hero.css'
})

export class HeroComponent {

  public name: string = 'superman';
  public age: number = 30;

  constructor() {
    console.log('HeroComponent initialized');
  }

  changeName(newName: string): void {
    this.name = newName;
    console.log(`Hero name changed to: ${this.name}`);
  }

  changeAge(newAge: number): void {
    this.age = newAge;
    console.log(`Hero age changed to: ${this.age}`);
  }
}
