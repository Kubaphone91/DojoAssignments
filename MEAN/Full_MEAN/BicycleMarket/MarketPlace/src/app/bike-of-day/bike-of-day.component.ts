import { Component, OnInit } from '@angular/core';
import { Bike } from '../bike';
import { BicycleService } from '../services/bicycle/bicycle.service';

@Component({
  selector: 'app-bike-of-day',
  templateUrl: './bike-of-day.component.html',
  styleUrls: ['./bike-of-day.component.css']
})
export class BikeOfDayComponent implements OnInit {

  bike: Bike = new Bike();
  bikeList: Array<Bike> = [];
  bikePick: number = 0;

  constructor(private _bikeService: BicycleService) { }

  ngOnInit() {
    this._bikeService.bikesObservable.subscribe((bikes) => {
      this.bikeList = bikes;
    });
    this.getBikes();
  }

  getBikes(){
    this._bikeService.getBikes()
    .then(bikes => {
      this.bikeList = bikes;
      this._bikeService.updateBikes(this.bikeList);
      this.bikePick = Math.floor(Math.random() * this.bikeList.length);
      this.bike = this.bikeList[this.bikePick];
      console.log(this.bike);
    }).catch(error => {
      console.log(`Error with bike of day: ${ error}`);
    });
  }

}
