import { Component, OnInit,EventEmitter,Output } from '@angular/core';
import { NoteService } from 'src/app/services/noteService/note.service';

@Component({
  selector: 'app-get-all-notes',
  templateUrl: './get-all-notes.component.html',
  styleUrls: ['./get-all-notes.component.scss']
})
export class GetAllNotesComponent implements OnInit {
  NotesList:any;
   @Output() updatedisplay = new EventEmitter<string>();
  // @Output() changeNoteEvent = new EventEmitter<string>();

  constructor(private note:NoteService) { }

  ngOnInit(): void {
    console.log("hey there");
    this .getallNotes();
  }
  
 getallNotes(){
  this.note.getAllNotesService().subscribe((request:any) => {
     console.log("request data",request);
     this.NotesList=request.data
      console.log(this.NotesList);
      this.NotesList.reverse();
       this.NotesList = this.NotesList.filter((object:any) => object.isTrash == false && object.isArchive == false);
       console.log("after filtering",this.NotesList);
      return this.NotesList;
    })
 }
   
//for creating note
receiveMessage(event:any){
  console.log(event);
  this.getallNotes();
}

//update
updatedData(event:any) {
  console.log(event);
  this.getallNotes();
}

// for archive & trash
receivemessageDisplaytoGetAllnotes(event:any){
  console.log(event)
  this.getallNotes()
}

}
