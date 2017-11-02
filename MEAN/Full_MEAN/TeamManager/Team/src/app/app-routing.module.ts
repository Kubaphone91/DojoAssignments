import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ManagePlayersComponent } from './manage-players/manage-players.component';
import { PlayerListComponent } from './manage-players/player-list/player-list.component';
import { AddPlayerComponent } from './manage-players/add-player/add-player.component';
import { ManagePlayerStatusComponent } from './manage-player-status/manage-player-status.component';
import { Game1Component } from './manage-player-status/game1/game1.component';
import { Game2Component } from './manage-player-status/game2/game2.component';
import { Game3Component } from './manage-player-status/game3/game3.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/players/list' },
  { path: 'manage', pathMatch: 'full', redirectTo: 'players/list' },
  { path: 'gamestatus', pathMatch: 'full', redirectTo: 'status/game/1' },
  { path: 'players', component: ManagePlayersComponent, children: [
    { path: 'list', component: PlayerListComponent },
    { path: 'addplayer', component: AddPlayerComponent }
  ]},
  { path: 'status', component: ManagePlayerStatusComponent, children: [
    { path: 'game/1', component: Game1Component },
    { path: 'game/2', component: Game2Component },
    { path: 'game/3', component: Game3Component },
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
