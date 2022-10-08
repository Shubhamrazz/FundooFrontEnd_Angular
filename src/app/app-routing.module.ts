import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegistrationComponent } from './Components/registration/registration.component';
import { LoginComponent } from './Components/login/login.component';
import { ForgetemailComponent } from './Components/forgetemail/forgetemail.component';
import { ResetpasswordComponent } from './Components/resetpassword/resetpassword.component';
import { DashboardComponent } from './Components/dashboard/dashboard.component';
import { GetAllNotesComponent } from './Components/get-all-notes/get-all-notes.component';
import { IconsComponent } from './Components/icons/icons.component';
import { UpdateComponent } from './Components/update/update.component';
import { ArchivenoteComponent } from './Components/archivenote/archivenote.component';
import { AuthenticationGuard } from './Authguard/authentication.guard';
import { TrashnoteComponent } from './Components/trashnote/trashnote.component';


const routes: Routes = [
  { path:'registration',component: RegistrationComponent },
  { path:'login',component: LoginComponent },
  { path:'forgetemail',component: ForgetemailComponent },
  { path:'resetpassword/:token',component: ResetpasswordComponent },
  {path : 'dashboard', component : DashboardComponent,canActivate:[AuthenticationGuard],
  
   children:[
    { path:'', redirectTo:"note", pathMatch:'full' },
    {path:'note', component : GetAllNotesComponent},
    {path:'archive',component:ArchivenoteComponent},
    {path:'trash',component:TrashnoteComponent},
    
    
   ]},
  // // //  {path:'icons',component:IconsComponent},
  // // //  {path:'update',component:UpdateComponent},
   
  
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
