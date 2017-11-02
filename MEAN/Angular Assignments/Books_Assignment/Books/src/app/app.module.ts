import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';
import { HttpModule } from '@angular/http';

import { CookieModule, CookieService } from 'ngx-cookie';

import { AppComponent } from './app.component';

import { HomeComponent } from './home/home.component';
import { BooksListComponent } from './books-list/books-list.component';
import { BookFormComponent } from './book-form/book-form.component';
import { BookDetailComponent } from './book-details/book-details.component';

import { TitleizePipe } from './titleize.pipe';

import { BookService } from './services/book.service';
import { AuthService } from './services/auth.service';

import { AppRoutingModule } from './app-routing.module';

import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    BookFormComponent,
    BooksListComponent,
    TitleizePipe,
    BookDetailComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    CookieModule.forRoot(),
  ],
  providers: [
    BookService,
    CookieService,
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
