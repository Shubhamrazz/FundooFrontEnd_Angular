import { Injectable } from '@angular/core';
import { HttpService } from '../httpService/http.service';
import { HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  token: any;

  constructor(private httpService:HttpService) {
    this.token=localStorage.getItem("token")
   }

   //register
   registration(reqdata: any){
    console.log(reqdata);

    let header ={
      headers:new HttpHeaders({
        'Content-type':'application/json',
        //'Authorization':'token'
        
      })
    }
    return this.httpService.postService('/User/AddUser',reqdata,false,header)
   }

   //login
   login(reqdata: any){
    console.log(reqdata);

    let header ={
      headers:new HttpHeaders({
        'Content-type':'application/json',
        //'Authorization':'token'
        
      })
    }
    return this.httpService.postService('/User/LoginUser',reqdata,false,header)
   }
   
   //ForgetEmail (Sending email)
   forgetemail(reqdata: any){
    console.log(reqdata);

    let header ={
      headers:new HttpHeaders({
        'Content-type':'application/json',
        //'Authorization':'token'
        
      })
    }
    return this.httpService.postService(`/User/ForgetUser/${reqdata.Email}`,{},false,header)
   }
   
   //ResetPassword (Password & ConfirmPassword)
   resetpassword(reqdata:any,token:any){
    console.log(reqdata);

    let header ={
      headers:new HttpHeaders({
        'Content-type':'application/json',
        'Authorization':'Bearer'+token,
        
      }),
      body:reqdata
    }
    return this.httpService.putService(`User/ResetUser`,true,header)
   }

}
