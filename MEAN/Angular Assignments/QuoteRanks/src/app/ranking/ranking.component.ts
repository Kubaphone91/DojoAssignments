import { Component, OnInit, Input, Output, EventEmitter, SimpleChange } from '@angular/core';

@Component({
  selector: 'app-ranking',
  templateUrl: './ranking.component.html',
  styleUrls: ['./ranking.component.css']
})
export class RankingComponent implements OnInit {

  @Input() quotes;
  @Input() numberKey;
  @Output() up = new EventEmitter();
  @Output() down = new EventEmitter();
  @Output() deleteQuote = new EventEmitter();

  constructor() { }
  ngOnInit() {

  }

  ngOnChanges(changes: {[propKey: string]: SimpleChange}){
    this.quotes = this.quotes;
  }

  voteUp(quoteid: number){
    this.up.emit(quoteid);
  }

  voteDown(quoteid: number){
    this.down.emit(quoteid);
  }

  delete(quoteid: number){
    this.deleteQuote.emit(quoteid);
  }
}
