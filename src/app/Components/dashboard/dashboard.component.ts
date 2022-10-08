import { Component, Inject, Input, OnInit } from '@angular/core';
import {MediaMatcher} from '@angular/cdk/layout';
import {ChangeDetectorRef,  OnDestroy} from '@angular/core';
import { Router } from '@angular/router';
import { DataserviceService } from 'src/app/services/dataService/dataservice.service';
import { LabelService } from 'src/app/services/labelService/label.service';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';

import { EditLabelComponent } from '../edit-label/edit-label.component';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements
OnInit{
  
  isMenuOpen = true;
  contentMargin = 200;

  mobileQuery: MediaQueryList;
  token:any;
  labelArray:any;

//  labelname:any;
//  nodeId:any;
 
 message: any;
 subscription!: Subscription;

  fillerNav = Array.from({length: 50}, (_, i) => `Nav Item ${i + 1}`);


  fillerContent = Array.from(
    {length: 50},
    () =>
      `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
       labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
       laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
       voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
       cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`,
  );
    private _mobileQueryListener: () => void;


 

  constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher,private router:Router,private dataService:DataserviceService,private label: LabelService,public dialog: MatDialog,) { 
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
    

  }

  ngOnInit(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
    this.getalllabels()
    this.subscription = this.dataService.currentMessage.subscribe(message => this.message = message)
  }

  snavToggle() {
    this.isMenuOpen = !this.isMenuOpen;
    if (!this.isMenuOpen) {
      this.contentMargin = 50;
    }
    else {
      this.contentMargin = 400;
    }
  }
  
  logout()
  {
    this.token=localStorage.removeItem("token")
    this.router.navigateByUrl("/login");
  }

  referesh(){
    window.location.reload();
  }

  searchNote(event:any){
    console.log("noteSearch dashboard",event.target.value)
    this.dataService.changeMessage(event.target.value)
  }

  openDialog() {
    const dialogRef = this.dialog.open(EditLabelComponent, {
      
      width: '400px',
      
      height: '',
      data:this.labelArray,
    },
    );

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed', result)
    });
  }

  getalllabels() {
    this.label.getAllLabelService().subscribe((request: any) => {
      console.log("response ", request);
       this.labelArray = request.data;
       this.dataService.changeLabel(this.labelArray);
      console.log("get all label data from dashboard ",this.labelArray);
      // return this.labelArray;
    })
  }
  
  // addLevel(event:any){
  //   console.log("addLevel dashboard",event.target.value)
  //   this.dataService.changeMessage(event.target.value)
  // }
}

 
