import { Component, OnInit } from '@angular/core';
import { ApiService } from '../bicycle.service';
import { Router } from '@angular/router';
import { User } from '../user';
import { Bicycle } from '../bicycle';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginUser: User = new User();
  regUser: User = new User();
  loginError: String;
  regError: String;
  sample: Bicycle = new Bicycle();

  constructor(private _api: ApiService, private _router: Router) {
    _api.getRandomBike()
    .then((bike) => {
      this.sample = bike;
    }).catch((err) => {
      console.log(err);
    });
   }

  ngOnInit() {
  }

  validateLogin() {
    this._api.loginUser(this.loginUser)
    .then((user) => {
      this._router.navigate(['/dashboard']);
    }).catch((err) => {
      if(err.status == '401'){
        this.loginError = "No user registered with that email."
      }
      else if(err.status == '402'){
        this.loginError = "Password is incorect"
      }
    });
  }

  validateReg(){
    this._api.registerUser(this.regUser)
    .then(() => {
      this._router.navigate(['/dashboard']);
    }).catch((err) => {
      this.regError = "A user with that email already exists."
    });
  }
}
