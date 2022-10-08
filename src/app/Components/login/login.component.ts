import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/services/userService/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  submitted=false;
  

  constructor(private formBuilder: FormBuilder,private user:UserService,private router:Router) { }

  ngOnInit(): void {
    this.loginForm =this.formBuilder.group({
      email:['',[Validators.required,Validators.email]],
      password:['',[Validators.required,Validators.minLength(6)]],

  });
}
//return the values when form is been filled
get f() { return this.loginForm.controls; }

    onSubmit() {
        this.submitted = true;
        
        if (this.loginForm.invalid) {
          return;
      }

      console.log(this.loginForm.value)

      if(this.loginForm.valid){
        let reqData ={
          Email: this.loginForm.value.email,
          Password: this.loginForm.value.password,
          }
        // console.log(reqData);
        this.user.login(reqData).subscribe((response: any) =>{
          console.log(response);
          localStorage.setItem('token',response.data)
          this.router.navigate([`/dashboard`]);
        })
      }

    }
}
