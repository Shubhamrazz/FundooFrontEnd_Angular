import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { ArgumentOutOfRangeError } from 'rxjs';
import { NoteService } from 'src/app/services/noteService/note.service';
import { GetAllNotesComponent } from '../get-all-notes/get-all-notes.component';
import { DisplayComponent } from '../display/display.component';
import { TrashnoteComponent } from '../trashnote/trashnote.component';
import { ArchivenoteComponent } from '../archivenote/archivenote.component';
import { LabelService } from 'src/app/services/labelService/label.service';
import { DataserviceService } from 'src/app/services/dataService/dataservice.service';
import { Subscription } from 'rxjs';



@Component({
  selector: 'app-icons',
  templateUrl: './icons.component.html',
  styleUrls: ['./icons.component.scss']
})
export class IconsComponent implements OnInit {
  isTrash: boolean = false;
  isArchive: boolean = false;
  isDisplayComponent: boolean = false;
  // color: boolean = false;
  // colors: any;
  openLabel: boolean = false;
  labelArray: any;
  reqData: any;

  subscription!: Subscription;
  message: any;
  labelName: any;

  @Input() noteObj: any;
  @Output() messagetoDisplay = new EventEmitter<string>();
  allColours = [{ code: "#FFCC99", name: "lightorange" },
  { code: "#E2CFCF	", name: "rosybrown" },
  { code: "#D0CBCA", name: "lightgrey" },
  { code: "#FF907C", name: "tomato" },
  { code: "#AFFD71	", name: "lightgreen" },
  { code: "#FFF8AC", name: "lightYellow" },
  { code: "#92EDF1", name: "lightblue" },

  ]

  constructor(private note: NoteService, private route: ActivatedRoute, private label: LabelService, private dataService: DataserviceService) { }

  ngOnInit(): void {

    let Comp = this.route.snapshot.component;


    if (Comp == GetAllNotesComponent) {
      this.isDisplayComponent = true;
    }

    if (Comp == TrashnoteComponent) {
      this.isTrash = true;
    }

    if (Comp == ArchivenoteComponent) {
      this.isArchive = true;
    }

    this.dataService.currentLabel.subscribe(message => {this.message = message,console.log(this.message)})
    
  }

  trash() {
    // let data = {
    //   isTrash: true,
    // };
    console.log(this.noteObj);
    console.log('Note is trashed');
    this.note.trashNote(this.noteObj.noteId).subscribe((response: any) => {
      console.log('Trash Notes are :', response);
      this.messagetoDisplay.emit(response);
    });
  }

  Archive() {
    // let data={
    //    isArchive: true,
    // };
    console.log(this.noteObj);
    console.log('Note is archive');
    this.note.archive(this.noteObj.noteId).subscribe((response: any) => {
      console.log("Note Successfully archived", response);
      this.messagetoDisplay.emit(response);
    });
  }

  UnArchive() {
    // let data={
    //    isArchive: false,
    // };
    console.log(this.noteObj);
    console.log('Note is Unarchive');
    this.note.archive(this.noteObj.noteId).subscribe((response: any) => {
      console.log("Note Successfully Unarchived", response);
      this.messagetoDisplay.emit(response);
    });
  }


  setColor(color: any) {
    console.log("taken color", color);
    console.log(this.noteObj.noteId);
    let reqData = {
      bgcolor: color,
    }
    this.note.updateColorsService(this.noteObj.noteId, reqData).subscribe((response: any) => {
      console.log("all colors displayed", response);
      this.messagetoDisplay.emit(response);
    })

  }

  deleteForever() {
    this.note.permanentDelete(this.noteObj.noteId).subscribe((response: any) => {
      console.log("Note Deleted Successfully", response);
      this.messagetoDisplay.emit(response)
    })
  }

  // newMessage() {
  //   this.dataService.changeMessage("Hello from Sibling")
  // }



  onAddLevel() {
    let data = {
      labelname: this.message.labelName,
    };
    this.label.addlabelservice(this.noteObj.noteId, data).subscribe((response: any) => {
      console.log('label added to display note part', response);
      this.labelArray = response.data;
      console.log("All the label array", this.labelArray);
      //return this.labelArray;
    });
  }



}
