import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { User } from '../user';
import { AuthService } from '../services/auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loggedInUser: User = new User();
  errors: object;

  constructor(private authService: AuthService, private _router: Router) { }

  ngOnInit() {
  }

  login(form: NgForm): void {
    console.log("Login User");
    this.authService.login(form.value)
    .then(user => {
      console.log(user);
      form.reset();
      this.loggedInUser = new User();
      this._router.navigate(['/dashboard']);
    }).catch(error => {
      console.log(error);
      this.errors = error;
    });
  }
}
