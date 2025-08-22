import { Component } from '@angular/core';

import { dbzService } from '../services/dbz.service';

@Component({
  selector: 'app-dbz-main-page',
  standalone: false,
  templateUrl: './main-page.component.html',
  // styleUrls: ['./main-page.component.css']
})

export class MainPageComponent {

  constructor( publicdbzService: dbzService) { }

}
