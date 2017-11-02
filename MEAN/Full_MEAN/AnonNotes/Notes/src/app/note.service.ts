import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Http } from '@angular/http';
import { Note } from './note';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class NoteService {
  notesObservable = new BehaviorSubject(null);

  constructor(private http: Http) { }

  updateNotes(notes: Array<Note>){
    this.notesObservable.next(notes);
  }

  getNotes(): Promise<Note[]>{
    return this.http.get('/notes')
    .map(response => response.json())
    .toPromise();
  }

  createNote(note: Note): Promise<Note>{
    return this.http.post('/notes', note)
    .map(response => response.json())
    .toPromise();
  }

}
