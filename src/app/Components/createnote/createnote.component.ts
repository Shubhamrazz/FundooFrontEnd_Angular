import { outputAst } from '@angular/compiler';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NoteService } from 'src/app/services/noteService/note.service';

@Component({
  selector: 'app-createnote',
  templateUrl: './createnote.component.html',
  styleUrls: ['./createnote.component.scss']
})
export class CreatenoteComponent implements OnInit {
  @Output() messageEvent = new EventEmitter<string>(); 

  show = false
  noteForm!:FormGroup;
  constructor(private note:NoteService,private formBuilder:FormBuilder) { }

  ngOnInit(): void {
    this.noteForm=this.formBuilder.group({
      title:['',Validators.required],
      description:['',Validators.required],
    });
  }
  onOpen() {
    this.show = true;
  }
  onSubmit() {
    this.show = false;
    // stop here if form is invalid
    let reqdata = {
      title: this.noteForm.value.title,
      description: this.noteForm.value.description,
      bgcolor: "#FFFFFF",
     
      
    };
    this.note.createnote(reqdata).subscribe((response:any)=>{
      console.log("note create susscessful",response);
      this.messageEvent.emit(response)
    },
    (error:any)=>{
      console.log(error);
    
    })
  }
}
