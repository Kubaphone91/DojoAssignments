import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

import { AuthService } from '../services/auth/auth.service';

import { User } from '../user';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registeredUser: User = new User();
  confirmpw: String = "";
  errors: object;

  constructor(private authService: AuthService, private _router: Router) { }

  ngOnInit() {
  }

  registerUser(form: NgForm): void{
    console.log("registering user");
    this.authService.register(form.value)
    .then(() => {
      form.reset();
      this.registeredUser = new User();
      this._router.navigate(['/dashboard']);
    }).catch(error => {
      console.log(form.value);
      console.log(error);
      this.errors = error;
    });
  }
}
