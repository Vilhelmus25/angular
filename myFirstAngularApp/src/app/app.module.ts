import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';                      // ide ezt fel kellett venni!

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { PrefixPipe } from './pipe/prefix.pipe';
import { DelayDirective } from './directive/delay.directive';
import { HighlightDirective } from './directive/highlight.directive';
import { FootballService } from './serivce/football.service';
import { HeroService } from './serivce/hero.service';

@NgModule({
  declarations: [
    AppComponent,
    HeroDetailComponent,
    PrefixPipe,
    DelayDirective,
    HighlightDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,                            // ide ezt fel kellett venni!

  ],
  providers: [FootballService,
    HeroService],                 // ide ezeket fel kellett venni!     azért kell, hogy be tudjuk injektálni a megfelelő komponenseinkbe!
  bootstrap: [AppComponent]
})
export class AppModule { }
