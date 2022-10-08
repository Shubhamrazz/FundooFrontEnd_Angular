import { Component, EventEmitter, Inject, OnInit, Output } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { LabelService } from 'src/app/services/labelService/label.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-edit-label',
  templateUrl: './edit-label.component.html',
  styleUrls: ['./edit-label.component.scss']
})
export class EditLabelComponent implements OnInit {
  show = true;
  cursor: any;
   noteId:any;
 labelName:any;
  labelname: any;
  labelArray:any;
  item:any;
  value:any;
  

  @Output() messagetoDisplay = new EventEmitter<string>();

  constructor(private formBuilder: FormBuilder,private label: LabelService ,public dialogRef: MatDialogRef<EditLabelComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,private labelService:LabelService) {
      console.log("This data is coming from dashboard labelArray",data)

      
    }



  onNoClick():void{
    this.dialogRef.close();
  }

  ngOnInit(): void {
    console.log(this.data);
  }

  onOpen() {
    this.show = false;
  }
  onClose() {
    this.show = true;
  }

 

  onCreate() {
    
    console.log("this is ng onit ", this.value);
    
    this.show = true;
    let data = {
      labelname: this.labelname,
      
    };
    console.log("labelname ",data )
    this.labelService.createlabel(data).subscribe((response: any) => {
      console.log('New label created', response);
    },

    );
  }


  getalllabels() {
    this.label.getAllLabelService().subscribe((request: any) => {
      console.log("response ", request);
       this.labelArray = request.data;//.labelname
       this.labelArray.reverse();
      console.log("get all label data from dashboard ",this.labelArray);
      return this.labelArray;
    })
  }

  deleteNoteLabel(labelArray: any) {
    this.labelService.deleteLabel(labelArray.labelId).subscribe((response: any) => {
      console.log("Label Deleted Successfully", response);
    
      
      
    })
  }

  updateLabel(labelArray: any) {

    let noteUpdate = {
      LabelId: labelArray.labelId,
      Labelname: labelArray.labelname,//this.labelname
   
    }

    this.labelService.updateLabel(noteUpdate).subscribe((response: any) => {
      console.log(response)
      
    })
  
  }


}
