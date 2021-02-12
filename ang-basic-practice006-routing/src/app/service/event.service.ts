import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Event } from '../common/event/event';


@Injectable({
  providedIn: 'root'
})
export class EventService {

  eventList: Event[] = [
    { name: 'Concert', date: '2021.01.16.', time: '21:00:00', location: new Location() },
    { name: 'Parade', date: '2021.01.17.', time: '18:00:00', location: new Location() },
    { name: 'Traditional event', date: '2021.01.18.', time: '09:00:00', location: new Location() },
  ];
  arrayOfEvents$: BehaviorSubject<Event[]> = new BehaviorSubject<Event[]>([]);

  constructor() { }

  getAll(): void {
    this.arrayOfEvents$.next(this.eventList);
  }
}
