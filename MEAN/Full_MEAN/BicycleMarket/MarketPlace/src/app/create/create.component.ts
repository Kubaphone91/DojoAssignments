import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Bike } from '../bike';
import { BicycleService } from '../services/bicycle/bicycle.service';
import { AuthService } from '../services/auth/auth.service';
import { Ng2FileInputService, Ng2FileInputModule, Ng2FileInputAction } from 'ng2-file-input';
import { FileUploader } from 'ng2-file-upload';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  public uploader: FileUploader = new FileUploader({url: 'http://localhost:8000/api/bikes/upload'});

  bike: Bike = new Bike();
  bikeList: Array<Bike> = [];
  myBikeList: Array<Bike> = [];
  bikeImage: Boolean = false;
  savedFileName: string = "";
  id: string = "";

  constructor(private bikeService: BicycleService, private authService: AuthService) {
    this.bikeService.bikesObservable.subscribe((bikes) => {
      this.bikeList = bikes;
    });

    this.bikeService.updateMyBikes(this.myBikeList);
    this.bikeService.myBikesObservable.subscribe((mybikes) => {
      this.myBikeList = mybikes;
    });
  }

  ngOnInit() {
  }

  addListing(form: NgForm, uploader: object){
    console.log('AddListing called');
    if(uploader['queue'][0]['progress'] = 100 && this.bikeImage){
      this.id = this.authService.currentUserId();
      this.bikeService.createBike(this.id, this.bike)
      .then((bike) => {
        this.bikeList.push(bike);
        this.bikeService.updateBikes(this.bikeList);
        this.bike = new Bike();
        form.reset();
        this.savedFileName = "";
        this.bikeImage = false;
        this.bikeService.getMyBikes(this.id)
        .then(mybikes => {
          this.bikeService.updateMyBikes(mybikes);
        })
        .catch(error => {
          console.log(`Error retrieving myBikes in Create: ${ error }`);
        })
      })
      .catch(error => {
        console.log(`Create bike error in Create: ${ error }`);
      })
    }
  }

  upload(item: object){
    this.savedFileName = "../assets/images/" + item['file']['name'];
    this.bikeImage = true;
    this.bike.image = this.savedFileName;
  }

}
