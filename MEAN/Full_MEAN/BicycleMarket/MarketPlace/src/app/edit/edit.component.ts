import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Bike } from '../bike';
import { BicycleService } from '../services/bicycle/bicycle.service';
import { AuthService } from '../services/auth/auth.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  bike: Bike = new Bike();
  myBikeList: Array<Bike> = [];
  currentId: string = "";

  constructor(private _bikeService: BicycleService, private _authService: AuthService) { }

  ngOnInit() {
    this.currentId = this._authService.currentUserId();
    this._bikeService.myBikesObservable.subscribe((mybikes) => {
      this.myBikeList = mybikes;
    });
    this.getMyBikeListing();
  }

  getMyBikeListing(): void {
    this._bikeService.getMyBikes(this.currentId)
    .then(bikes => {
      this.myBikeList = bikes;
    }).catch(error => {
      console.log(`Error retrieving bikes in editComp: ${ error }`);
    });
  }

  delete(id: string): void{
    this._bikeService.removeBike(id)
    .then(() => {
      console.log('Bike deleted');
      this.getMyBikeListing();
    }).catch(error => {
      console.log(`Error deleting bike in browseComp: ${ error }`);
    });
  }

  updateListing(bike: Bike): void{
    console.log(bike);
    this._bikeService.updateBike(bike)
    .then(() => {
      console.log('bike updated');
      this.getMyBikeListing();
    }).catch(error => {
      console.log(`Error updating bike in BrowseComp: ${ error }`);
    });
  }

}
