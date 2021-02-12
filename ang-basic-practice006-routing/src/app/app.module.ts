import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './common/navigation/navigation.component';
import { EventService } from './service/event.service';
import { EventsListComponent } from './common/events-list/events-list.component';


@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    EventsListComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
