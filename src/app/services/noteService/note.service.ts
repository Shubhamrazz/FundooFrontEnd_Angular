import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
import { HttpService } from '../httpService/http.service';

@Injectable({
  providedIn: 'root'
})
export class NoteService {
  token: any;
  constructor(private httpservice: HttpService) {
    this.token = localStorage.getItem(`token`);
  }

  //CreateNote
  createnote(reqdata: any) {
    console.log(reqdata);

    let header = {
      headers: new HttpHeaders({
        'Content-type': 'application/json',
        'Authorization': 'Bearer ' + this.token,
      }),
    };
    return this.httpservice.postService(`/Note/AddNote`, reqdata, true, header)
  }

  // get all notes
  getAllNotesService() {
    let header = {
      headers: new HttpHeaders({
        'Content-type': 'application/json',
        'Authorization': "Bearer " + this.token
      })
    }
    return this.httpservice.getService(`/Note/GetALlNotes`, true, header);
  }

  //Update 
  updatenote(data: any, noteID: any) {
    console.log("note service", data)
    console.log("note id", noteID)
    console.log("token", this.token)
    let header = {
      headers: new HttpHeaders({
        'Content-type': 'application/json',
        'Authorization': "Bearer " + this.token
      })
    }
    return this.httpservice.postService(`/Note/UpdateNote/${noteID}`,data, true, header)
  }

  trashNote(noteId: number){
    console.log("note id", noteId)
    let header ={
      headers: new HttpHeaders({    
        'Content-type': 'application/json',
        'Authorization' : "Bearer " + this.token,
      }),
    };
    return this.httpservice.deleteService(`/Note/TrashNote/${noteId}`,true, header);
  }

  archive(noteId: number) {
    console.log("note id", noteId)
    let header = {
      headers: new HttpHeaders({
        'Content-type': 'application/json',
        'Authorization': "Bearer " + this.token,
      }),

    }
    return this.httpservice.deleteService(`/Note/ArchiveNote/${noteId}`, true, header)
  }

  // getAllnoteColorsService(noteId:number){
  //   let headers = {
  //     headers: new HttpHeaders({
  //       'Content-type': 'application/json',
  //       'Authorization': "Bearer " + this.token
  //     })
  //   }
  //   return this.httpservice.getService(`/Note/GetAllColors/${noteId}`, true, headers);
  // }

  updateColorsService(noteId:number,reqData:any){
    console.log("note service", reqData)
    console.log("note id", noteId)
    let headers = {
      headers: new HttpHeaders({
        'Content-type': 'application/json',
        'Authorization': "Bearer " + this.token
      })
    }
    return this.httpservice.postService(`/Note/UpdateColor/${noteId}`, reqData, true, headers);

  }

  permanentDelete(noteId: number) {
    console.log("note id", noteId)
    let header = {
      headers: new HttpHeaders({
        'Content-type': 'application/json',
        'Authorization': "Bearer " + this.token
      }),
    }
    return this.httpservice.deleteService(`/Note/DeleteNote/${noteId}`, true, header)
  }







}