import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cars } from '../common/cars';

@Injectable({
  providedIn: 'root'
})
export class CarsService {

  url: string = "http://localhost:3000/cars";

  listOfCars$: Observable<Cars[]> = this.getAll();

  constructor(private httpClient: HttpClient) { }

  getAll(): Observable<Cars[]> {
    return this.httpClient.get<Cars[]>(this.url);
  }
}
