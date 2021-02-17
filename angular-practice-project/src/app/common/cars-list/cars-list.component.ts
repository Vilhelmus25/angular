import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs';
import { CarsService } from 'src/app/service/cars.service';
import { Cars } from '../cars';

@Component({
  selector: 'app-cars-list',
  templateUrl: './cars-list.component.html',
  styleUrls: ['./cars-list.component.scss']
})
export class CarsListComponent implements OnInit {

  carsList$: Observable<Cars[]>;

  columnKey: string = '';
  searchPhrase: string = '';

  constructor(private carsService: CarsService) {
    this.carsList$ = this.carsService.getAll();
  }

  ngOnInit(): void {
  }

  sortByCategory(key: string): void {
    this.columnKey = key;
  }

  onTypePhrase(ev: Event): void {
    this.searchPhrase = (ev.target as HTMLInputElement).value;
  }

}
