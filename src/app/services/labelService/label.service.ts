import { Injectable } from '@angular/core';
import { HttpService } from '../httpService/http.service';
import { HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class LabelService {
  token: any;

  constructor(private httpService: HttpService) {
    this.token = localStorage.getItem('token');
  }

addlabelservice(noteId:number,data:any) {
    console.log(noteId + data);
    let header = {
      headers: new HttpHeaders({
        'Content-type': 'application/json',
        'Authorization': "Bearer " + this.token
      })
    }
    return this.httpService.postService(`/Label/AddLabel/${noteId}`,data,true,header);
  }
  
createlabel(data: any) {
  
  let header = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': "Bearer " + this.token
    })
  }
  return this.httpService.postService(`/Label/CreateLabel`, data, true, header)
}

  getAllLabelService() {
    let header = {
      headers: new HttpHeaders({
        'Content-type': 'application/json',
        'Authorization': "Bearer " + this.token
      })
    }
    return this.httpService.getService(`/Label/GetAllLabels`, true, header);
  }
   // getallLabels(){
  //   let header = {
  //     headers: new HttpHeaders({
  //       'Content-Type': 'application/json',
  //       'Authorization': "Bearer " + this.token
  //     })
  //   }
  //   return this.httpService.getService(`/Label/GetAllLabels`, true, header)
  // }

  

  deleteLabel(labelId: any) {
    console.log(labelId)
    let header = {
      headers: new HttpHeaders({
        'Content-type': 'application/json',
        'Authorization': "Bearer " + this.token
      }),

    }
    return this.httpService.deleteService(`/Label/DeleteLabel/${labelId}`, true, header)
  }

  updateLabel(data: any) {

    let header = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': "Bearer " + this.token
      })
    }
    return this.httpService.postService(`/Label/UpdateLabel/${data.LabelId}/${data.Labelname}`, data, true, header)
  }

}