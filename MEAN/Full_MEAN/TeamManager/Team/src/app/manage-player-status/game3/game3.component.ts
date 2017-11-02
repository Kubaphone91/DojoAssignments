import { Component, OnInit } from '@angular/core';
import { PlayerService } from '../../player.service';
import { Player } from '../../player';

@Component({
  selector: 'app-game3',
  templateUrl: './game3.component.html',
  styleUrls: ['./game3.component.css']
})
export class Game3Component implements OnInit {

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
      this.player.game3['playing'] = true;
      this.player.game3['notPlaying'] = false;
      this.player.game3['undecided'] = false;
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
      this.player.game3['playing'] = false;
      this.player.game3['notPlaying'] = true;
      this.player.game3['undecided'] = false;
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
      this.player.game3['playing'] = false;
      this.player.game3['notPlaying'] = false;
      this.player.game3['undecided'] = true;
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
