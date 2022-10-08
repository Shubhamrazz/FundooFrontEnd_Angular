import { Component, OnInit } from '@angular/core';
import { NoteService } from 'src/app/services/noteService/note.service';

@Component({
  selector: 'app-archivenote',
  templateUrl: './archivenote.component.html',
  styleUrls: ['./archivenote.component.scss']
})
export class ArchivenoteComponent implements OnInit {
  archiveNotes: any
  constructor(private note:NoteService) { }

  ngOnInit(): void {
    console.log("Archive data");
    this.ArchiveNotes()
  }

  ArchiveNotes(){
    this.note.getAllNotesService().subscribe((request: any)=>{
      console.log("request data ", request);
      this.archiveNotes = request.data;
      console.log("result: ", this.archiveNotes);
      this.archiveNotes.reverse();
      this.archiveNotes = this.archiveNotes.filter((object: any) => { 
        return object.isArchive == true});
      // console.log("after filtering", this.archiveNotes);
      // return this.archiveNotes;

    })

  }
  




  receivemessagetoDisplaytoGetAllnotes($event:any){
    console.log("event from display to getAllNotes",$event);
    this.ArchiveNotes();
  }


}
