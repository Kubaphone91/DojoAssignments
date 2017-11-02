import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

import { Router } from '@angular/router';

import { AuthService } from '../services/auth.service';

import { User } from '../user';

@Component({
  selector: 'books-home',
  templateUrl: './home.component.html'
})
export class HomeComponent {
  registerUser = new User();
  loginUser = new User();

  constructor(private auth: AuthService, private router: Router) {}

  login(form: NgForm): void {
    console.log(form);
  }

  register(form: NgForm): void {
    console.log(form, form.value);

    this.auth.register(form.value)
    .then(user => {
      this.router.navigate(['/books']);
    })
    .catch(error => console.log(error));
  }
}
