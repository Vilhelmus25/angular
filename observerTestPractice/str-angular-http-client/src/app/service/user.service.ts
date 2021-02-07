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

  /* *************     CRUD: Create; Delete; Update; Read         ********************** */

  get(user: User): Observable<User> {       // Read             Ezt össze lehetne vonni a getAll-al is akár, ha kapott embert
    return this.http.get<User>(`${this.jsonUrl}/${user.id}`);
  }

  create(user: User): Observable<User> {    // Create
    return this.http.post<User>(this.jsonUrl, user);
  }

  update(user: User): Observable<User> {      // Update
    /* const id: number = user.id || 0;
    const patchUser = ({ ...user });
    delete patchUser.id;                        // ez a három sor, azért van, hogy az id-t ne írhassuk felül. De ez a szerver dolga lenne. */
    return this.http.patch<User>(`${this.jsonUrl}/${user.id}`, user/* patchUser */);            // .patch csak a változást írja felül.  A párja a put, az meg a teljes objektumot átírja, arra amit átadok neki, ha üres adat van benne azt is.
  }

  remove(user: User): Observable<User> {    // Delete
    return this.http.delete<User>(`${this.jsonUrl}/${user.id}`);
  }
}
