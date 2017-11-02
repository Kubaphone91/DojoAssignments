import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-battle-field',
  templateUrl: './battle-field.component.html',
  styleUrls: ['./battle-field.component.css']
})
export class BattleFieldComponent implements OnInit {
  gotUserOne: Boolean = false;
  gotUserTwo: Boolean = false;

  constructor(private _userService: UserService) { }

  ngOnInit() {
    this._userService.gotUserOneObservable.subscribe((value) => {
      this.gotUserOne = value;
    });
    this._userService.gotUserTwoObservable.subscribe((value) => {
      this.gotUserTwo = value;
    });
    this._userService.setGotUserOne(false);
    this._userService.setGotUserTwo(false);
  }

}
