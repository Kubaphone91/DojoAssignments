import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-saiyan',
  templateUrl: './saiyan.component.html',
  styleUrls: ['./saiyan.component.css']
})
export class SaiyanComponent implements OnInit {

  @Input() saiyan_power;

  constructor() { }

  ngOnInit() {
  }

}
