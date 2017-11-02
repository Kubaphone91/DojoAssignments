import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  colors = [
    '#0000FF',
    '#5F9EA0',
    '#7FFF00',
    '#DC143C',
    '#A9A9A9',
    '#9400D3',
    '#FFFAF0',
    '#9ACD32',
    '#FAFAD2',
    '#DB7093'
  ]

  rand = function(){
    return this.colors[(Math.floor(Math.random() * 10))];
  }
}
