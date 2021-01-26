import { Component } from '@angular/core';
import { Hero } from './model/hero';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'myFirstAngularApp';

  myHero: Hero = {                    // itt hozom létre a myHero objektumot, aminek a hero osztályt be kellett importálni.
    name: "Magneto",
    address: "New York",
    superpower: "magnetic"
  };
}
