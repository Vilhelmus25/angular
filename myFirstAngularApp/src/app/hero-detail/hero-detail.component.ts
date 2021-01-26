import { Component, Input, OnInit } from '@angular/core';
import { Hero } from '../model/hero';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.scss']
})
export class HeroDetailComponent implements OnInit {

  @Input()
  hero: Hero = new Hero;          // beállítjuk mint Input, vagyis, a html-ben a [] -közé hivetkozhatok rá, így tudok átadni adatot, szülőkomponensből a gyereknek. Az app-componensben




  constructor() { }

  ngOnInit(): void {
  }

}
