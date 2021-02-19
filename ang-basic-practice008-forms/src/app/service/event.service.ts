import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { Event } from '../model/event';

@Injectable({
  providedIn: 'root'
})
export class EventService {

  // private list: Event[] = this.getAll();
  private url: string = "http://localhost:3000/event";

  //list$: BehaviorSubject<Event[]> = new BehaviorSubject<Event[]>(this.get);

  constructor(private http: HttpClient) { }

  /* getAll(): void {
    this.list$.next(this.list);
  } */
  getAll(): Observable<Event[]> {
    return this.http.get<Event[]>(this.url);
  }

  get(id: number): Observable<Event> {
    id = typeof id === 'string' ? parseInt(id, 10) : id;

    //const ev: Event | undefined = this.http.get<Event>(`${this.url}/${id}`);
    if (id !== 0) {
      return this.http.get<Event>(`${this.url}/${id}`);
    }

    return of(new Event());
    //return this.http.get<Event>(`${this.url}/${id}`);
    /*  const ev: Event | undefined = this.list.find(item => item.id === id);
     if (ev) {
       return of(ev);
     }
 
     return of(new Event()); */
  }

  update(event: Event): Observable<Event> {
    return this.http.put<Event>(`${this.url}/${event.id}`, event);
    /* const index: number = this.list.findIndex(item => item.id === event.id);
    this.list.splice(index, 1, event);
    this.getAll();
    return of(this.list[index]); */
  }

  create(event: Event): /* void */ Observable<any> | Event {
    if (event.id === 0) {
      return this.http.post<Observable<any>>(`${this.url}/0`, event);
    }
    event = new Event();
    return event;
    /*  const index: number = this.list.findIndex(item => item.id === event.id);
     if (index === -1) {
       this.list.push(new Event());
     }
     this.getAll(); */
  }

  remove(id: Number, event: any): Observable<any> {
    id = typeof id === 'string' ? parseInt(id, 10) : id;
    event = event.id ? event.id : event;
    return this.http.delete(`${this.url}/${event}`);
    /* const ev: number = this.list.findIndex(item => item.id === event.id);
    this.list.splice(ev, 1);
    this.getAll(); */
  }
}
