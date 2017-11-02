import { Pipe, PipeTransform } from '@angular/core';
import { Quote } from '.././quote';

@Pipe({
  name: 'sort',
  pure: false
})
export class SortPipe implements PipeTransform{
  transform(quotes: Array<Quote>): Array<Quote> {
    quotes.sort((a: Quote, b: Quote) => {
      if(a.rating < b.rating){
        return 1;
      }
      else if(a.rating > b.rating){
        return -1;
      }
      else{
        return 0;
      }
    });
    return quotes;
  }
}
