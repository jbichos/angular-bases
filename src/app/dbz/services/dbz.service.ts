import { Injectable } from '@angular/core';

import { Character } from '../interfaces/character.interface';

@Injectable({providedIn: 'root'})
export class dbzService {
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
    this.characters.push(character);
  }

  onDeleteCharacter(index: number): void {
    this.characters.splice(index, 1);
  }

}
