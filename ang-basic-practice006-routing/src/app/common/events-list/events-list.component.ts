import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { EventService } from 'src/app/service/event.service';
import { Event } from 'src/app/common/event/event';

@Component({
  selector: 'app-events-list',
  templateUrl: './events-list.component.html',
  styleUrls: ['./events-list.component.scss']
})
export class EventsListComponent implements OnInit {

  //eventsList$: BehaviorSubject<Event[]> = this.eventService.arrayOfEvents$;

  //event: Event = new Event();

  constructor(private eventService: EventService,) { }

  ngOnInit(): void {
    //this.eventService.getAll();   // ettől kerül bele az adat a eventsList$-ba, mert eddig csak üres tömb volt, mint ami az inicializáláskor volt.
  }

}
