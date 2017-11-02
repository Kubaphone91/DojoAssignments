import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs';

@Injectable()
export class HttpService {

  constructor(private _http: Http) { }
  findGitHubScore(username){
    console.log("made it");
    return this._http.get(`https://api.github.com/users/${username}`).map(data=>data.json()).toPromise();
  }
}
