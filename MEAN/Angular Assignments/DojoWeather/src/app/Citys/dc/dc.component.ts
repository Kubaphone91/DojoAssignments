import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../../weather.service';

@Component({
  selector: 'app-dc',
  templateUrl: './dc.component.html',
  styleUrls: ['./dc.component.css']
})
export class DCComponent implements OnInit {

  weather;
  temp;
  high_temp;
  low_temp;
  humidity;
  status;

  constructor(private _weatherService: WeatherService) { }

  ngOnInit() {
    this.weather = this._weatherService.acquireWeather('washington+dc')
    .then(weather => {
      this.humidity = weather.main.humidity;
      this.temp = weather.main.temp;
      this.high_temp = weather.main.temp_max;
      this.low_temp = weather.main.temp_min;
      this.status = weather.weather[0].main
    });
  }
}
