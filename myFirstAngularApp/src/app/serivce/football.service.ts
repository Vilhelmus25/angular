import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FootballService {

  jsonUrl: string = "https://raw.githubusercontent.com/openfootball/football.json/master/2016-17/en.1.clubs.json";

  constructor(private http: HttpClient) {
    // injektáljuk be ezt a service-t
    this.http.get(this.jsonUrl).subscribe(   // a http.get metódus observable-el tér vissza, ezért tudunk rá iratkozni.
      // 3 metódusunk van (mindig):
      list => console.log("football-list", list),
      error => console.log(error),
      () => console.log("Completed")
    );
  }
}
