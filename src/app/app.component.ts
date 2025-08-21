import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css'
})
// export class App {
//   protected readonly title = signal('bases');
// }

export class AppComponent {
  public readonly title: string = 'Mi primer componente en Angular <Bases>';
  public readonly description: string = 'Angular es un framework de desarrollo web';
  public counter: number = 10;

}
