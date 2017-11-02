import { Component, OnInit, Output } from '@angular/core';

import { Book } from '../books';
import { BOOKS } from '../data/book-data';
import { TitleizePipe } from '../titleize.pipe';

import { BookService } from '../services/book.service';

@Component({
  selector: 'books-list',
  templateUrl: './books-list.component.html',
  providers: [TitleizePipe]
})

export class BooksListComponent implements OnInit {

  books: Array<Book> = [];

  @Output() selectedBook: Book;

  constructor(private titleize: TitleizePipe, private bookService: BookService){

  }
  processBook(book: Book): void {
    console.log('book', book);

    this.books.push(book);
  }

  ngOnInit() {
    this.getBooks();
  }

  getBooks(): void{
    this.bookService.getBooks()
      .then(books => this.books = books)
      .then(() => this.capitalizeAuthors())
      .catch(console.log);
  }

  selectBook(book: Book): void{
    console.log("selecting book", book);
    this.selectedBook = (this.selectedBook === book) ? null : book;
  }

  removeBook(book: Book): void{
    this.bookService.removeBook(book)
      .then(() => this.books.splice(this.books.indexOf(book), 1))
      .catch(response => {
        console.log('Error removing book', response);
      })
  }

  onEvent(event: Event): void{
    event.stopPropagation();
  }

  capitalizeAuthors(): void{
    this.books.forEach(book => {
      book.author = this.titleize.transform(book.author, false);
    })
  }
}
