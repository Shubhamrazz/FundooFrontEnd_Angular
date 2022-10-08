import { Component, OnInit } from '@angular/core';
import { NoteService } from 'src/app/services/noteService/note.service';

@Component({
  selector: 'app-trashnote',
  templateUrl: './trashnote.component.html',
  styleUrls: ['./trashnote.component.scss']
})
export class TrashnoteComponent implements OnInit {
  trashNotes: any;

  constructor(private note: NoteService) { }

  ngOnInit(): void {
    console.log("Trash Data")
    this.TrashNotes();
  }

  TrashNotes() {
    this.note.getAllNotesService().subscribe((request: any) => {
      console.log("request data ", request);
      this.trashNotes = request.data;
      console.log("result: ", this.trashNotes);
      this.trashNotes.reverse();
      this.trashNotes = this.trashNotes.filter((object: any) => {
        return object.isTrash == true
      });

    })
  }

  receivemessagetoDisplaytoGetAllnotes($event:any) {
    console.log("event from display to getAllNotes", $event);
    this.TrashNotes();
  }
}



