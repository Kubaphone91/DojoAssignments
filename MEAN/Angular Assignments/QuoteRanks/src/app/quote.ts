export class Quote{
  text: string;
  author: string;
  rating: number;
  id: number;
  constructor(text: string, author: string, id: number){
    this.text = text;
    this.author = author;
    this.rating = 0;
    this.id = id;
  }
}
