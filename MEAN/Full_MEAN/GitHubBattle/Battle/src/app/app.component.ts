import { Component } from '@angular/core';
import { UserService } from './user.service';
import { BehaviorSubject } from 'rxjs';
import { User } from './user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  usersList: Array<User> = [];
  gotUserOne: Boolean = false;
  gotUserTwo: Boolean = false;
  userOne: User = new User();
  userTwo: User = new User();

  constructor(private _userService: UserService) {
    this._userService.updateUsers(this.usersList);
    this._userService.setGotUserOne(this.gotUserOne);
    this._userService.gotUserOneObservable.subscribe((value) => {
      this.gotUserOne = value;
    });
    this._userService.setGotUserTwo(this.gotUserTwo);
    this._userService.gotUserTwoObservable.subscribe((value) => {
      this.gotUserTwo = value;
    });
    this._userService.usersObservable.subscribe((users) => {
      this.usersList = users;
    });
    this._userService.userOneObservable.subscribe((user) => {
      this.userOne = user;
    });
    this._userService.userTwoObservable.subscribe((user) => {
      this.userTwo = user;
    });
   }
}
