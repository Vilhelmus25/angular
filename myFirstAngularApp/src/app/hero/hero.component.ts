import { Component, NgModule, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/internal/Observable';
import { Hero } from '../model/hero';
import { HeroService } from '../serivce/hero.service';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss']
})
export class HeroComponent implements OnInit {

  heroList: Observable<Hero[]>/*  =  this.hService.getAll() */;     // ugyanaz, mint a konstruktorban
  constructor(private hService: HeroService, private router: Router) {
    this.heroList = hService.getAll();
  }

  ngOnInit(): void {
  }

  jumpToHero(hero: Hero): void {
    this.router.navigateByUrl(`/hero/${hero.id}`);
  }
}
