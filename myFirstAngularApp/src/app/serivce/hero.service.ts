import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Hero } from '../model/hero';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  //              json-server --watch .\src\assets\heroes.json               parancs kell kezdésnek
  // ezzel indít egy szervert

  jsonUrl: string = "http://localhost:3000/heroes";

  constructor(private http: HttpClient) { }

  getAll(): Observable<Hero[]> {
    return this.http.get<Hero[]>(this.jsonUrl);       //  http.get<Hero[]>      kell a <Hero[]> kell típust adni a get fv-nek, így lehet, mert egy Hero tömböt kapunk vissza
  }

  getOne(id: string | number): Observable<Hero> {
    return this.http.get<Hero>(`${this.jsonUrl}/${id}`);
  }

  add(hero: Hero): Observable<any> {
    return this.http.post<Observable<any>>(this.jsonUrl, hero);
  }

  update(hero: Hero): Observable<any> {
    return this.http.put(`${this.jsonUrl}/${hero.id}`, hero);
  }

  remove(hero: any): Observable<any> {
    hero = hero.id ? hero.id : hero;
    return this.http.delete(`${this.jsonUrl}/${hero}`);
  }

}
