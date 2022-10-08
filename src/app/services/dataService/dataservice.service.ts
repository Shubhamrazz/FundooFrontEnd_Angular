import { Injectable } from '@angular/core';
import{ BehaviorSubject }from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataserviceService {
 
  private messaageSource=new BehaviorSubject('');
  currentMessage =this.messaageSource.asObservable();
  constructor() { }

  changeMessage(message:any){
    this.messaageSource.next(message)
  }

  //this is datasharing from dashboard to icon for addlabel 
  private labelData=new BehaviorSubject([]);
  currentLabel =this.labelData.asObservable();
  

  changeLabel(message:any){
    this.labelData.next(message)
  }
 
}
