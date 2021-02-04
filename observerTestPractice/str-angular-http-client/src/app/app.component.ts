import { Component } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { User } from './model/user';
import { UserService } from './service/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'str-angular-http-client';

  userList$: Observable<User[]> = this.userService.getAll();       // ez nem egy userList, hanem egy olyan Observable, ami userLista tömböt ad azoknak akik feliratkoznak
  // ez a $-jel csak jelölésbeli dolog, magunknak jelöljük, hogy ez nem egy sima userList, hanem Observable-s és addig várunk az eredményére, amíg azt meg nem kapjuk, ezért eszerint kell használni, azonnal nem használhatjuk, hanem csak ha megérkeztek

  constructor(private userService: UserService) {

  }
}


