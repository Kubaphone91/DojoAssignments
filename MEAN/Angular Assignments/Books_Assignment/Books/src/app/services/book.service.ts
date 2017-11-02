import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

import { Book } from '../books';

@Injectable()

export class BookService{

  //public static base = 'http://59498bce6d49df0011102cfc.mockapi.io/books';

  constructor(private http: Http) {}

  getBooks(): Promise<Book[]> {
    return this.http.get('/api/books')
      .map(response => response.json())
      .toPromise();
  }

  getBook(id: string): Promise<Book>{
    return this.http.get(`/api/books/${ id }`)
    .map(response => response.json())
    .toPromise();
  }

  createBook(book: Book): Promise<Book> {
    return this.http.post('/api/books', book)
    .map(response => response.json())
    .toPromise();
  }

  removeBook(book: Book): Promise<Book>{
    return this.http.delete(`/api/books/${book._id}`)
      .map(response => response.json())
      .toPromise();
  }

  updateBook(book: Book): Promise<Book>{
    console.log('updating book', book);
    return this.http.put(`/api/books/${ book._id }`, book)
    .map(response => response.json())
    .toPromise();
  }
}
