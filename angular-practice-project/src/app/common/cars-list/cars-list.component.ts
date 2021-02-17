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

  constructor(private carsService: CarsService) {
    this.carsList$ = this.carsService.getAll();
  }

  ngOnInit(): void {
  }

}
