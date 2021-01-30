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
    name: "Magneto",                  // amit az app-componentben csinálok, az megy ki, az a kapocs a model-ek, componensek, egyéb elemek között és az oldal között.
    address: "New York",
    superpower: "magnetic"
  };
}
