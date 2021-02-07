import { Component } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { User } from './model/user';
import { ConfigService } from './service/config.service';
import { ITableCol } from './service/config.service';
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

  cols: ITableCol[] = this.config.tableCols;
  newUser: User = new User();

  constructor(
    private userService: UserService,
    private config: ConfigService
  ) {

  }

  onAdd(user: User): void {
    this.userService.create(user).subscribe(
      addedUser => console.log(addedUser)
    )
  }

  onUpdate(user: User): void {
    this.userService.update(user).subscribe(        // itt feliratkozunk az eseményre, hogy ha van adat, akkor update-elünk, vagy törlünk lent
      updatedUser => console.log(updatedUser)
    );
  }

  onDelete(user: User): void {
    this.userService.remove(user).subscribe(
      () => console.log('deleted')
    );
  }
}


