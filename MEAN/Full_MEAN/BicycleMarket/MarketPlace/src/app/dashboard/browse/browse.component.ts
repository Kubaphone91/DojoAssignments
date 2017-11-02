import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth/auth.service';
import { BicycleService } from '../../services/bicycle/bicycle.service';
import { Bike } from '../../bike';

@Component({
  selector: 'app-browse',
  templateUrl: './browse.component.html',
  styleUrls: ['./browse.component.css']
})
export class BrowseComponent implements OnInit {

  bike: Bike = new Bike();
  bikeList: Array<Bike> = [];
  currentId: string = "";

  constructor(private _bikeService: BicycleService, private _authService: AuthService) { }

  ngOnInit() {
    this._bikeService.bikesObservable.subscribe((bikes) => {
      this.bikeList = bikes;
    });
    this.getBikes();
    this.currentId = this._authService.currentUserId();
  }

  getBikes(){
    this._bikeService.getBikes()
    .then(bikes => {
      this.bikeList = bikes;
      this._bikeService.updateBikes(this.bikeList);
    }).catch(console.log);
  }

  delete(id: string): void{
    this._bikeService.removeBike(id)
    .then(() => {
      console.log("Bike deleted");
      this.getBikes();
    }).catch(error => {
      console.log(`Error deleting bike in BrowseComp: ${ error }`);
    });
  }
}
