import { Component } from '@angular/core';
import { PlayerService } from './player.service';
import { BehaviorSubject } from 'rxjs';
import { Player } from './player';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  playersList: Array<Player> = [];

  constructor(private _playerService: PlayerService){
    this._playerService.updatePlayers(this.playersList);
    this._playerService.playersObservable.subscribe((players) => {
      this.playersList = players;
    });
  }
}
