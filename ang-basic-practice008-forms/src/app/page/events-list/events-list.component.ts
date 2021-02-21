import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Event } from 'src/app/model/event';
import { EventService } from 'src/app/service/event.service';

@Component({
  selector: 'app-events-list',
  templateUrl: './events-list.component.html',
  styleUrls: ['./events-list.component.scss']
})
export class EventsListComponent implements OnInit {

  eventList: Observable<Event[]>;
  testEvent: Observable<Event> = this.eventService.get(1);
  event: Event = new Event();

  constructor(
    private eventService: EventService, private router: Router,
  ) {
    this.eventList = this.getEventeService();
  }


  getEventeService(): Observable<Event[]> {

    return this.eventService.getAll();;
  }

  ngOnInit(): void { }

  removeEvent(event: Event): void {
    this.eventService.remove(event).subscribe(isSuccessful => {
      if (isSuccessful) {
        // this.router.navigate(['']);
        this.eventService.getAll();
        console.log("The Delete was successful");
      } else {
        console.log("The Delete Operation was not successful");
      }
    });      // ekkor ugrik vissza a formra, a kreálás és az update után
    this.eventService.getAll().subscribe(() => console.log("success"));
    //this.eventService.remove(event).subscribe(() => this.eventService.getAll());  // itt iratkozzunk föl, ha megtörtént a törlés ,akkor frissüljön a form
    //this.eventList = this.eventService.getAll();

  }

  addNewEvent(): void {
    this.eventService.create(this.event);
  }

}
