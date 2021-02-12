import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Hero } from '../model/hero';
import { HeroService } from '../serivce/hero.service';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.scss']
})
export class HeroDetailComponent implements OnInit {

  //@Input() hero: Hero = new Hero;          // beállítjuk mint Input, vagyis, a html-ben a [] -közé hivetkozhatok rá, így tudok átadni adatot, szülőkomponensből a gyereknek. Az app-componensben

  hero: Hero = new Hero();
  superPowers: Array<String> = [
    "magnetic",
    "really smart",
    "rich",
    "hard",
    "biking",         // ezt a változót egy osztályba kéne tenni, úgy szép, de most nem.
  ]

  constructor(private hService: HeroService, private ar: ActivatedRoute) {
    this.ar.params.subscribe(params => {
      hService.getOne(params.id).forEach(hero => {
        this.hero = hero
      });         // feliratkoztunk arra, hogy változik az URL, ha változik az URl, akkor az ActiveRoute is változni fog, amiker ez megtörténik akkor megkapjuk az új paramétert és a paraméterben mindig benne lesz mindig az URL végén található, :id tehát az a szám. hero/10, hero/14 stb.
      // a szám ismeretében már le tudjuk kérni a konkrét hero-t
    })
  }

  ngOnInit(): void {
  }

  onSubmit(): void {
    this.hService.update(this.hero)
      .forEach(value => {
        console.log("Updated Hero: ", value);
      });
  }
}
