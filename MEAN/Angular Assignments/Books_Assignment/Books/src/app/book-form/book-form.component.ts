import { Component, Output, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';

import { Book } from '../books';

import { Router } from '@angular/router';

import { BookService } from '../services/book.service';

@Component({
  selector: 'books-form',
  templateUrl: './book-form.component.html',

})

export class BookFormComponent {
  book: Book = new Book();

  errorMessages: Array<string> = [];

  //@Output() bookEmitter = new EventEmitter<Book>();

  constructor(private bookService: BookService, private router: Router) {}

  onSubmit(form: NgForm){

    this.bookService.createBook(this.book)
    .then(book => {
      this.errorMessages = [];
      this.book = new Book();
      form.reset()
    })
    .catch(error => {
      this.errorMessages = error.json();
      console.log('failed to create', this.errorMessages);
    });
  }
}
