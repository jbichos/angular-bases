import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  standalone: false,
  templateUrl: './list.html',
  styleUrl: './list.css'
})
export class ListComponent {
  public heroNames: string[] = ['Superman', 'Batman', 'Spiderman', 'Ironman', 'Hulk'];
  public deletedHero?: string;

  constructor() {
    // Initialization logic can go here if needed
  }

  // getLastHero(): string {
  //   return this.heroNames.length > 0 ? this.heroNames[this.heroNames.length - 1] : 'No heroes available';
  // }

  removeLastHero(): void {
    // if (this.heroNames.length > 0) {
      this.deletedHero = this.heroNames.pop();
    // }
  }
}
