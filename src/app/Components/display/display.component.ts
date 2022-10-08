import { Component, OnInit,Input,EventEmitter,  Output } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog'; 
import { DataserviceService } from 'src/app/services/dataService/dataservice.service';
import { NoteService } from 'src/app/services/noteService/note.service';
import { UpdateComponent } from '../update/update.component';
@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.scss']
})
export class DisplayComponent implements OnInit {
  @Input() NoteArray:any; //input decorator to allow the data to be passed by templates(child componenet.ts)
  @Output() updatedisplay = new EventEmitter<string>();
  @Output() messageDisplaytoGetAllnotes = new EventEmitter<string>();
  @Output() changeColorOfNote = new EventEmitter<any>();

  searchString:any='';
  // message:any;
  // subscription: any;
  msg:any;
  constructor(private note:NoteService, public dialog: MatDialog,private dataservice:DataserviceService) { }   //called first time before the ngOnInit()


  ngOnInit(): void {
      this.dataservice.currentMessage.subscribe(message => {
        console.log("display",message)
        this.searchString=message
      })


    console.log('Allnotes',this.NoteArray);
  }

  openDialog(note:any): void {
    const dialogRef = this.dialog.open(UpdateComponent, {
      width: 'fit-content', height: 'fit-content',
      data: note,
      panelClass: 'my-custom-dialog-class'
    });

    dialogRef.afterClosed().subscribe((result:any) => {
      console.log('The dialog was closed');
      this.updatedisplay.emit(result);
      
    });
  }

  receivemessagetoDisplay($event: any) {
    console.log("event from icon to display", $event)
    this.msg = $event;
    console.log("msg", this.msg);

    this.messageDisplaytoGetAllnotes.emit(this.msg)
  }

  colourchanged(event:any){
    console.log(event);
    this.changeColorOfNote.emit("color")
    }

}
