import { Component, OnInit } from '@angular/core';

import { Character } from '../interfaces/character.interface';

@Component({
  selector: 'app-dbz-main-page',
  standalone: false,
  templateUrl: './main-page.component.html',
  // styleUrls: ['./main-page.component.css']
})

export class MainPageComponent implements OnInit {

  public characters: Character[] = [
    {
      name: 'Goku',
      power: 15000
    },
    {
      name: 'Vegeta',
      power: 7500
    },
    {
      name: 'Krillin',
      power: 2000
    }
  ];

  onNewCharacter(character: Character): void {
    console.log('Main page', character);
    this.characters.push(character);
  }

  constructor() { }

  ngOnInit() { }
}
