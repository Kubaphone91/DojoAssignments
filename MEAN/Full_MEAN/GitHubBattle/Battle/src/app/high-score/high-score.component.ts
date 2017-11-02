import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-high-score',
  templateUrl: './high-score.component.html',
  styleUrls: ['./high-score.component.css']
})
export class HighScoreComponent implements OnInit {

  userList: Array<User> = [];
  userListSet: Set<User> = new Set();

  constructor(private _userService: UserService) { }

  ngOnInit() {
    this._userService.usersObservable.subscribe((users) => {
      this.userList = users;
    });
    this.getUsers();
  };

  getUsers(){
    this._userService.getUsers()
    .then(users => {
      this.userList = users;
      this._userService.updateUsers(this.userList);
      this.sortList();
    }).catch(console.log);
  };

  sortList(){
    this.userList.sort(function(a,b){
      return (b.score) - (a.score);
    });
    this.userListSet = new Set(this.userList);
    this._userService.updateUsers(this.userList);
  }
}
