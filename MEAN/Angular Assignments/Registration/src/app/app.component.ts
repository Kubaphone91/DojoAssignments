import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

import { User } from './user';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  user: User = new User();
  users = [];
  success: boolean = false;

  onSubmit(form: NgForm){
    console.log("Submitting information for user");
    this.success = true;
    console.log(this.user);
    this.users.push(this.user);
    this.user = new User();
  }
}
