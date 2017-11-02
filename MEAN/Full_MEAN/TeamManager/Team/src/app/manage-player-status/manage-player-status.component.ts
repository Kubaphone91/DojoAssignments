import { Component, OnInit } from '@angular/core';
import { Player } from '../player';

@Component({
  selector: 'app-manage-player-status',
  templateUrl: './manage-player-status.component.html',
  styleUrls: ['./manage-player-status.component.css']
})
export class ManagePlayerStatusComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  selected: number = 1;

  setSelected(num: number){
    this.selected = num;
  }

}
