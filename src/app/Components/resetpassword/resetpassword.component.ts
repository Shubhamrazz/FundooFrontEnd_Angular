import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/services/userService/user.service';

@Component({
  selector: 'app-resetpassword',
  templateUrl: './resetpassword.component.html',
  styleUrls: ['./resetpassword.component.scss']
})
export class ResetpasswordComponent implements OnInit {
  resetpasswordForm!: FormGroup;
  submitted=false;
  token:any;

  constructor(private formBuilder: FormBuilder,private user:UserService) { }

  ngOnInit(): void {
    this.resetpasswordForm =this.formBuilder.group({
      password:['',[Validators.required,Validators.minLength(6)]],
      confirmPassword:['',Validators.required],
    });
  }

  //return the values when form is been filled
get f() { return this.resetpasswordForm.controls; }

onSubmit() {
    this.submitted = true;
    
    if (this.resetpasswordForm.invalid) {
      return;
  }
  console.log(this.resetpasswordForm.value);

  if(this.resetpasswordForm.valid){
    let reqData ={
      
      password: this.resetpasswordForm.value.password,
      cPassword: this.resetpasswordForm.value.confirmPassword,
      
      
    }
    console.log(reqData);
    this.user.resetpassword(reqData,this.token).subscribe((response: any) =>{
      console.log(response);
    })
  }
}
}
