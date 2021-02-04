import { Component } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Hero } from './model/hero';
import { FootballService } from './serivce/football.service';
import { HeroService } from './serivce/hero.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'myFirstAngularApp';

  myHero: Hero = new Hero(); /* = {                    // itt hozom létre a myHero objektumot, aminek a hero osztályt be kellett importálni.
    name: "Magneto",                  // amit az app-componentben csinálok, az megy ki, az a kapocs a model-ek, componensek, egyéb elemek között és az oldal között.
    address: "New York",
    superpower: "magnetic"
  }; */

  listObservable: Observable<any>;           // kell egy observable objektum   <any> most nem tudjuk milyen adat lesz amit átad

  constructor(private fService: FootballService, private hService: HeroService) {

    this.listObservable = hService.getAll();

    /* this.hService.getAll().forEach(value => {
      console.log("All hero: ", value);     // lekértük az összes adatot
    });

    this.hService.getOne(1).forEach(value => {
      console.log("First Hero: ", value);
    });

    this.hService.add({ id: 10, name: "Jack", address: "Bp", superpower: "biking" })
      .forEach(value => {
        console.log("Added Hero: ", value);
      });

    this.hService.update({ id: 1, name: "Lucy", address: "Bp", superpower: "biking" })
      .forEach(value => {
        console.log("Updated Hero: ", value);
      });

    this.hService.remove(2).forEach(value => {
      console.log("Deleted Hero: ", value);
    }); */




    /* this.listObservable = new Observable(observer => {        // példányosítjuk.
      let to = setTimeout(() => {
        observer.next("Megjöttem...");                        // a nextet 15 sec után hívjuk meg
      }, 15000);
      let to2 = setTimeout(() => {
        observer.complete();                                  // a complete metódust 20 sec után hívom meg
      }, 20000);
    });
    this.listObservable.subscribe(                            // feliratkozom, figyeljük ezt az observable-t
      value => console.log(value),                            // ha van next, akkor kiiratjuk az értékét
      error => console.log(error),                            // ez a három fv mindig kell!
      () => console.log("complete")                           // zárás (complete)
    ); */
  }


  setHero(hero: Hero): void {
    this.myHero = hero;
  }

  //      !!!!!!!!!!!!!!!!!       --      npm i -g json-server    --                  json kiszolgáló server telepítése   !!!!!!!!!!!!!!!!!!!!!!!


}
