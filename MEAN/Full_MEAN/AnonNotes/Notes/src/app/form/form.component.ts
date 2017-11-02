import { Component, OnInit } from '@angular/core';
import { NoteService } from '../note.service';
import { Note } from '../note';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  note: Note = new Note();
  notes: Array<Note> = [];

  constructor(private _noteService: NoteService) {
    this._noteService.notesObservable.subscribe((notes) => {
      this.notes = notes;
    })
  }

  ngOnInit() {
  }

  onSubmit(form: NgForm){
    this._noteService.createNote(this.note)
    .then(note => {
      this.notes.push(note);
      this._noteService.updateNotes(this.notes);
      console.log('Created note');
      form.reset();
      this.note = new Note();
    })
    .catch(err => {
      console.log(`Error: ${ err }`);
    });
  }
}
