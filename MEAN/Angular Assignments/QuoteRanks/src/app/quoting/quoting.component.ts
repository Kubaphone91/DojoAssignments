import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Quote } from ".././quote";

@Component({
  selector: 'app-quoting',
  templateUrl: './quoting.component.html',
  styleUrls: ['./quoting.component.css']
})
export class QuotingComponent implements OnInit {

  newQuote: Quote;
  text: string = '';
  author: string = '';
  @Input() quotes;
  @Input() isValid;
  @Input() numberKey;
  @Output() addingquote = new EventEmitter();

  addquote(){
    this.newQuote = new Quote(this.text, this.author, this.numberKey);
    this.addingquote.emit(this.newQuote);
    this.text = this.author = '';
  }

  constructor() { }

  ngOnInit() {
  }

}
