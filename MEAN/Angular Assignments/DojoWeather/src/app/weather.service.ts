import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs'

@Injectable()
export class WeatherService {

  constructor(private _http: Http) { }

  acquireWeather(city:string){
    return this._http.get(`http://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&APPID=91cb19f83c3e04d5e6e609c7e50987f6`)
    .map(data=>data.json())
    .toPromise();
  }
}
