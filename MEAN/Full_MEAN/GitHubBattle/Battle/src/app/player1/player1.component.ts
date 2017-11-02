import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-player1',
  templateUrl: './player1.component.html',
  styleUrls: ['./player1.component.css']
})
export class Player1Component implements OnInit {

  user: User = new User();
  userList: Array<User> = [];
  errors: Boolean = false;
  userName: String = "";
  gotUserOne: Boolean = false;

  constructor(private _userService: UserService) { }

  ngOnInit() {
    this._userService.usersObservable.subscribe((users) => {
      this.userList = users;
    });
    this._userService.gotUserOneObservable.subscribe((value) => {
      this.gotUserOne = value;
    });
  }

  getUser(user: User){
    this._userService.retrieveUser(this.user.username)
    .then( user => {
      this.errors = false;
      this.user = user;
      this.user['score'] = (this.user['public_repos'] + this.user['followers']) * 12;
      if(this.user['name'] == 'null' || this.user['name'] == null){
        this.user['name'] = this.user['login'];
      }
      this._userService.setGotUserOne(true);
      this._userService.saveUserOne(this.user);
      this._userService.createUser(this.user)
      .then(user => {
        this.userList.push(user);
        this._userService.updateUsers(this.userList);
      }).catch(err => {
        console.log(`Error updating list: ${ err }`)
      });
      console.log(this.user);
    }).catch(err => {
      this.errors = true;
      console.log(err);
    })
  }
}
