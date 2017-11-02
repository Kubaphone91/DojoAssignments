import { Component } from '@angular/core';
import { Quote } from './quote';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = 'Quote Ranks';
  quotes: Array<Quote> = [];
  isValid: boolean =true;
  numberKey: number = 0;

  voteUp(quoteid){
    for(let i = 0; i < this.quotes.length; ++i){
      if(this.quotes[i].id == quoteid){
        return ++this.quotes[i].rating;
      }
    }
  }

  voteDown(quoteid){
    for(let i = 0; i < this.quotes.length; ++i){
      if(this.quotes[i].id == quoteid && this.quotes[i].rating > 0){
        return --this.quotes[i].rating;
      }
    }
  }

  delete(quoteid){
    for(let i = 0; i < this.quotes.length; ++i){
      if(this.quotes[i].id == quoteid){
        this.quotes.splice(i,1);
      }
    }
  }

  addquote(quote){
    let newquotearray = this.quotes
    newquotearray.push(quote);
    this.quotes = newquotearray;
    this.numberKey += 1;
  }
}
