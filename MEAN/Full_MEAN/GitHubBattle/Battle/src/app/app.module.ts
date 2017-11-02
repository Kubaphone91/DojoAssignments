import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { UserService } from './user.service';

import { AppComponent } from './app.component';
import { BattleFieldComponent } from './battle-field/battle-field.component';
import { HighScoreComponent } from './high-score/high-score.component';
import { Player1Component } from './player1/player1.component';
import { Player2Component } from './player2/player2.component';
import { ResultsComponent } from './results/results.component';

@NgModule({
  declarations: [
    AppComponent,
    BattleFieldComponent,
    HighScoreComponent,
    Player1Component,
    Player2Component,
    ResultsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
