import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { User } from './user';
import { Http } from '@angular/http';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class UserService{
  usersObservable = new BehaviorSubject(null);
  gotUserOneObservable = new BehaviorSubject(null);
  gotUserTwoObservable = new BehaviorSubject(null);
  userOneObservable = new BehaviorSubject(null);
  userTwoObservable = new BehaviorSubject(null);

  constructor(private _http: Http) { }

  getUsers(): Promise<User[]>{
    return this._http.get('/api')
    .map(response => response.json())
    .toPromise();
  }

  createUser(user: User): Promise<User>{
    return this._http.post('/api/addUser', user)
    .map(response => response.json())
    .toPromise();
  }

  updateUsers(users: Array<User>){
    this.usersObservable.next(users);
  }

  saveUserOne(user: User){
    this.userOneObservable.next(user);
  }

  saveUserTwo(user: User){
    this.userTwoObservable.next(user);
  }

  setGotUserOne(value: Boolean){
    this.gotUserOneObservable.next(value);
  }

  setGotUserTwo(value: Boolean){
    this.gotUserTwoObservable.next(value);
  }

  retrieveUser(username){
    console.log("Retrieving user:", username);
    return this._http.get(`https://api.github.com/users/${ username }`)
    .map(data => data.json())
    .toPromise();
  }
}
