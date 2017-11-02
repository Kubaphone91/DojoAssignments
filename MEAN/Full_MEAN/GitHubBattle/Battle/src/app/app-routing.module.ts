import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ResultsComponent } from './results/results.component';
import { Player1Component } from './player1/player1.component';
import { Player2Component } from './player2/player2.component';
import { BattleFieldComponent } from './battle-field/battle-field.component';
import { HighScoreComponent } from './high-score/high-score.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', component: BattleFieldComponent},
  { path: 'battle', component: BattleFieldComponent},
  { path: 'results', component: ResultsComponent},
  { path: 'rankings', component: HighScoreComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
