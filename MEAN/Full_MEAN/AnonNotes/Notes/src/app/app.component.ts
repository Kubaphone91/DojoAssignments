import { Component } from '@angular/core';
import { NoteService } from './note.service';
import { BehaviorSubject } from 'rxjs';
import { Note } from './note';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  notes: Array<Note> = [];

  constructor(private _noteService: NoteService){
    this._noteService.updateNotes(this.notes);
    this._noteService.notesObservable.subscribe((notes) => {
      this.notes = notes;
    })
  }
}
