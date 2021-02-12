import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EventsListComponent } from './common/events-list/events-list.component';

const routes: Routes = [
  {
    path: '', component: EventsListComponent,
  },
  {
    path: 'link', component: EventsListComponent,
  },
  {
    path: '**', redirectTo: '',             // ide ez után már ne írjunk semmit, sose, mert az nem megy végbe!
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
