import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';                      // ide ezt fel kellett venni!
import { RouterModule, Routes } from '@angular/router';                       // A route-hoz ezt be kell importálni
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { PrefixPipe } from './pipe/prefix.pipe';
import { DelayDirective } from './directive/delay.directive';
import { HighlightDirective } from './directive/highlight.directive';
import { FootballService } from './serivce/football.service';
import { HeroService } from './serivce/hero.service';
import { HomeComponent } from './home/home.component';
import { HeroComponent } from './hero/hero.component';
import { NavComponent } from './nav/nav.component';


const appRoutes: Routes = [                     /*  itt létrehoztunk az appRoutes: Routes változót, amiben beállítjuk az utakat (Home,Hero, default("**") */
  {
    path: "", component: HomeComponent
  },
  {
    path: "hero", component: HeroComponent
  },
  {
    path: "hero/:id", component: HeroDetailComponent    /* Ebből fogja tudni, az :id-ből, hogy az adott HeroDetailComponentnek, mi az id-je*/
  },
  {
    path: "**", component: HomeComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    HeroDetailComponent,
    PrefixPipe,
    DelayDirective,
    HighlightDirective,
    NavComponent,
    HeroComponent,
    HeroDetailComponent,
    HomeComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    HttpClientModule,                            // ide ezt fel kellett venni!
    RouterModule.forRoot(appRoutes),              // a Routinghoz ezt be kell állítani, bár van feljebb kicsit egy AppRoutingModule
    FormsModule,

  ],
  providers: [FootballService,
    HeroService],                 // ide ezeket fel kellett venni!     azért kell, hogy be tudjuk injektálni a megfelelő komponenseinkbe!
  bootstrap: [AppComponent]
})
export class AppModule { }
