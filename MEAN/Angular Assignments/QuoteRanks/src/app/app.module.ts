import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { QuotingComponent } from './quoting/quoting.component';
import { RankingComponent } from './ranking/ranking.component';
import { SortPipe } from './ranking/sort.pipe';

@NgModule({
  declarations: [
    AppComponent,
    QuotingComponent,
    RankingComponent,
    SortPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
