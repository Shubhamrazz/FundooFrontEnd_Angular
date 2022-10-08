import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/services/userService/user.service';

@Component({
  selector: 'app-forgetemail',
  templateUrl: './forgetemail.component.html',
  styleUrls: ['./forgetemail.component.scss']
})
export class ForgetemailComponent implements OnInit {
  forgetemailForm!: FormGroup;
  submitted=false;
  

  constructor(private formBuilder: FormBuilder,private user:UserService){ }

  ngOnInit(): void {
    this.forgetemailForm =this.formBuilder.group({
      email:['',[Validators.required,Validators.email]],
    });
  }

  //return the values when form is been filled
get f() { return this.forgetemailForm.controls; }

onSubmit() {
    this.submitted = true;
    
    if (this.forgetemailForm.invalid) {
      return;
    }

    if(this.forgetemailForm.valid){
      let reqData ={
        Email: this.forgetemailForm.value.email,
        }
      // console.log(reqData);
      this.user.forgetemail(reqData).subscribe((response: any) =>{
        console.log(response);
      })
    }

}
}
