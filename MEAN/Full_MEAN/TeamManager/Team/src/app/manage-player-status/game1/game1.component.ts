import { Component, OnInit } from '@angular/core';
import { PlayerService } from '../../player.service';
import { Player } from '../../player';

@Component({
  selector: 'app-game1',
  templateUrl: './game1.component.html',
  styleUrls: ['./game1.component.css']
})
export class Game1Component implements OnInit {

  player: Player = new Player();
  playerList: Array<Player> = [];

  constructor(private _playerService: PlayerService) { }

  ngOnInit() {
    this._playerService.playersObservable.subscribe((players) => {
      this.playerList = players;
    });
    this.getPlayers();
  }

  playing(id: String){
    this._playerService.getPlayer(id)
    .then( player => {
      this.player = player;
      this.player.game1['playing'] = true;
      this.player.game1['notPlaying'] = false;
      this.player.game1['undecided'] = false;
      this._playerService.updatePlayer(player)
      .then(() => {
        this.getPlayers();
      }).catch((err) => {
        console.log(`Update player error: ${ err }`);
      });
    }).catch((err) => {
      console.log(`Couldn't find player: ${ err}`);
    });
  }

  notPlaying(id: String){
    this._playerService.getPlayer(id)
    .then( player => {
      this.player = player;
      this.player.game1['playing'] = false;
      this.player.game1['notPlaying'] = true;
      this.player.game1['undecided'] = false;
      this._playerService.updatePlayer(player)
      .then(() => {
        this.getPlayers();
      }).catch((err) => {
        console.log(`Update player error: ${ err }`);
      });
    }).catch((err) => {
      console.log(`Couldn't find player: ${ err}`);
    });
  }

  undecided(id: String){
    this._playerService.getPlayer(id)
    .then( player => {
      this.player = player;
      this.player.game1['playing'] = false;
      this.player.game1['notPlaying'] = false;
      this.player.game1['undecided'] = true;
      this._playerService.updatePlayer(player)
      .then(() => {
        this.getPlayers();
      }).catch((err) => {
        console.log(`Update player error: ${ err }`);
      });
    }).catch((err) => {
      console.log(`Couldn't find player: ${ err}`);
    });
  }

  getPlayers(){
    this._playerService.getPlayers()
    .then(players => {
      this.playerList = players;
      this._playerService.updatePlayers(this.playerList);
    }).catch(console.log);
  }
}
