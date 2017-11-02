import { Injectable } from '@angular/core';
import { Player } from './player';
import { BehaviorSubject } from 'rxjs';
import { Http } from '@angular/http';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class PlayerService{
  playersObservable = new BehaviorSubject(null);

  constructor(private http: Http) { }

  updatePlayers(players: Array<Player>){
    this.playersObservable.next(players);
  }

  getPlayers(): Promise<Player[]> {
    return this.http.get('/api/players')
    .map(response => response.json())
    .toPromise();
  }

  getPlayer(id: String): Promise<Player>{
    return this.http.get(`/api/players/${ id }`)
    .map(response => response.json())
    .toPromise();
  }

  createPlayer(player: Player): Promise<Player>{
    return this.http.post('/api/players/addPlayer', player)
    .map(response => response.json())
    .toPromise();
  }

  updatePlayer(player: Player): Promise<Player>{
    console.log(player._id);
    return this.http.put(`/api/players/${ player._id }`, player)
    .map(response => response.json())
    .toPromise();
  }

  removePlayer(id: String): Promise<Player>{
    return this.http.delete(`/api/players/${ id }`)
    .map(response => response.json())
    .toPromise();
  }
}
