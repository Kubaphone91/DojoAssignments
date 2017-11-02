import { Component, OnInit, OnDestroy } from '@angular/core';
import { Book } from '../books';

import { ActivatedRoute, Router } from '@angular/router';

import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs/Subscription';
import 'rxjs/add/operator/switchMap';

import { BookService } from '../services/book.service';

@Component({
  selector: 'books-details',
  templateUrl: './book-details.component.html'
})

export class BookDetailComponent implements OnInit, OnDestroy{
  book: Book;
  sub: Subscription;

  constructor(
    private bookService: BookService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(){
    this.sub = this.route.paramMap
    .switchMap(param => {
      return this.bookService.getBook(param.get('id'))
    })
    .subscribe(book => this.book = book, console.log);
  }

  onSubmit(form: NgForm): void {
    console.log('updating book', this.book);

    this.bookService.updateBook(this.book)
    .then( () => {
      console.log('updated book');
      this.router.navigate(['/books']);
    })
    .catch(console.log);
  }

  ngOnDestroy(){
    this.sub.unsubscribe();
  }
}
