import { Component, OnInit } from '@angular/core';
import { NoteService } from '../note.service';
import { Note } from '../note';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.css']
})
export class NotesComponent implements OnInit {

  constructor(private _noteService: NoteService) {
    this._noteService.notesObservable.subscribe((notes) => {
      this.notes = notes;
    });
   }

  notes: Array<Note> = [];

  ngOnInit() {
    this.getNotes();
  }

  getNotes(){
    this._noteService.getNotes()
    .then(notes => {
      this.notes = notes;
      this._noteService.updateNotes(this.notes);
      console.log(this.notes);
    })
    .catch((err) => {
      console.log(`Error: ${ err }`);
    });
  }
}
