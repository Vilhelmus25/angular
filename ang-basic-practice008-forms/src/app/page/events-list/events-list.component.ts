import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
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
    private eventService: EventService,
  ) {
    this.eventList = eventService.getAll();
  }

  ngOnInit(): void { }

  removeEvent(id: number, event: Event): void {
    this.eventService.remove(id, event);
  }

  addNewEvent(): void {
    this.eventService.create(this.event);
  }

}
