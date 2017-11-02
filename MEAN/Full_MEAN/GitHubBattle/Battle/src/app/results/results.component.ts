import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { User } from '../user';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent implements OnInit {

  gotUserOne: Boolean = false;
  gotUserTwo: Boolean = false;
  userOne: User = new User();
  userTwo: User = new User();
  winner: User = new User();
  loser: User = new User();

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
    this._userService.userOneObservable.subscribe((player1) => {
      this.userOne = player1;
    });
    this._userService.userTwoObservable.subscribe((player2) => {
      this.userTwo = player2;
    });
    this.getWinner();
  }

  getWinner(){
    if(this.userOne['score'] > this.userTwo['score']){
      this.winner = this.userOne;
      this.loser = this.userTwo;
      console.log(this.winner);
    }
    else{
      this.winner = this.userTwo;
      this.loser = this.userOne;
    }
  }
}
