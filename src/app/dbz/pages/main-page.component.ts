import { Component } from '@angular/core';

import { dbzService } from '../services/dbz.service';
import { Character } from '../interfaces/character.interface';

@Component({
  selector: 'app-dbz-main-page',
  standalone: false,
  templateUrl: './main-page.component.html',
  // styleUrls: ['./main-page.component.css']
})

export class MainPageComponent {

  constructor( private dbzService: dbzService) { }

  get characters(): Character[] {
    return [...this.dbzService.characters];
  }

  onDeleteCharacterById(id: string): void {
    this.dbzService.deleteCharacterById(id);
  }

  onNewCharacter(character: Character): void {
    this.dbzService.addCharacter(character);
  }
}
