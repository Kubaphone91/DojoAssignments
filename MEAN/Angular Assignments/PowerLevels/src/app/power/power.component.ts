import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-power',
  templateUrl: './power.component.html',
  styleUrls: ['./power.component.css']
})
export class PowerComponent implements OnInit {

   power_level = {
    power: 0
  }

  constructor() { }

  ngOnInit() {
  }

}
