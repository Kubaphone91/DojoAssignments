import { Component } from '@angular/core';
import { HttpService } from './../http.service';

@Component({
  selector: 'app-score',
  templateUrl: './score.component.html',
  styleUrls: ['./score.component.css']
})
export class ScoreComponent {

  username: string = null;
  score: number = 0;
  status: Array<string> = [];



  constructor(private _httpService: HttpService) { }

  getGitHubScore(){
    this._httpService.findGitHubScore(this.username)
    .then( (user) => {
        this.score = user.public_repos + user.followers;
        console.log("Score Calculates as: ", this.score)
        if(this.score < 20){
          this.status[0] = "red";
          this.status[1] = "Needs Work!";
          this.status[2] = "success";
        }
        else if(this.score < 50){
          this.status[0] = "orange";
          this.status[1] = "A Decent Start!";
          this.status[2] = "success";
        }
        else if(this.score < 100){
          this.status[0] = "black";
          this.status[1] = "Doing Good!";
          this.status[2] = "success";
        }
        else if(this.score < 200){
          this.status[0] = "green";
          this.status[1] = "Great Job!";
          this.status[2] = "success";
        }
        else{
          this.status[0] = "blue";
          this.status[1] = "GitHub Elite!";
          this.status[2] = "success";
        }
      })
    .catch(err => {
      console.log(err);
      this.status[0] = "red";
      this.status[1] = "Can't find that username, try again...";
      this.status[2] = "error";
    })
  }
}

