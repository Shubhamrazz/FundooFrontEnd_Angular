import { Component, OnInit,EventEmitter, Output } from '@angular/core';
import { Inject} from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { NoteService } from 'src/app/services/noteService/note.service';
@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.scss']
})
export class UpdateComponent implements OnInit {
  @Output() updatedisplay = new EventEmitter<string>();
  // @Output() changeNoteEvent = new EventEmitter<string>();
  isShow=false;
  title:any;
  description:any;
  noteID:any;
  bgcolor:any;
  constructor(public dialogRef: MatDialogRef<UpdateComponent>,
    @Inject(MAT_DIALOG_DATA) public data:any, private note:NoteService) 
    {
      this.title=this.data.title;
      this.description = this.data.description;
      this.noteID= this.data.noteId;//data.noteId is from fend id
      this.bgcolor = this.data.bgcolor
      console.log(this.data)
    }
    

  ngOnInit(): void {
    console.log("inside update" ,this.data);
  }

  onSubmit(){
    
    let data={
      title: this.title,
      description: this.description,
      bgcolor:'blue',
      isPin: true,
     isArchive: false,
     isTrash: false
    }
    this.note.updatenote(data,this.noteID).subscribe((res:any)=>{
      console.log("note is updated:  ",res);
      this.onNoClick();
      this.updatedisplay.emit(res);
    })
     
  }  

  onNoClick(): void {
    this.dialogRef.close();
  }
}
