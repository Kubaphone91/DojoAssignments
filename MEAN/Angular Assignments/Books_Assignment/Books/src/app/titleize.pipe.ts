import { Pipe, PipeTransform, Injectable } from '@angular/core';

@Pipe({
  name: 'titleize'
})
@Injectable()
export class TitleizePipe implements PipeTransform{
  public static skipWords: Array<string> = ['a', 'of', 'an', 'and', 'for', 'by', 'the', 'in'];

  transform(sentence: string, args?: boolean | string[]): string{
    if(typeof sentence !== 'string'){
      return sentence;
    }

    const skipWords = Array.isArray(args) ? args : TitleizePipe.skipWords;
    console.log(args);
    const processSkipwords: boolean = args !== false;

    return sentence.replace(/\w[^-\s]*/g, (word, index) => {
      if(processSkipwords && index !== 0 && skipWords.includes(word)){
          return word.toLowerCase();
        }
      console.log(word);

      return word.charAt(0).toUpperCase() + word.substr(1);
    });
  }
}
