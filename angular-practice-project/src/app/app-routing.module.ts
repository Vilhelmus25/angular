import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CarsListComponent } from './common/cars-list/cars-list.component';
import { HomeComponent } from './common/home/home.component';

const routes: Routes = [

  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'cars', component: CarsListComponent },
  { path: '**', component: HomeComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
