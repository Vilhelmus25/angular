import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { User } from '../model/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {


  jsonUrl: string = "http://localhost:3000/users";

  constructor(private http: HttpClient) {

  }

  getAll(): Observable<User[]> {
    return this.http.get<User[]>(this.jsonUrl);
  }
}
