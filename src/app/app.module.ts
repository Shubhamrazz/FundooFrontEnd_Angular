import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {FormsModule} from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms'
import {MatButtonModule} from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RegistrationComponent } from './Components/registration/registration.component';
import { LoginComponent } from './Components/login/login.component';
import { ForgetemailComponent } from './Components/forgetemail/forgetemail.component';
import { ResetpasswordComponent } from './Components/resetpassword/resetpassword.component';
import { DashboardComponent } from './Components/dashboard/dashboard.component';
import { UpdateComponent } from './Components/update/update.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import {MatIconModule} from '@angular/material/icon';
import { FlexLayoutModule } from '@angular/flex-layout';
import { CreatenoteComponent } from './Components/createnote/createnote.component';
import { DisplayComponent } from './Components/display/display.component';
import { GetAllNotesComponent } from './Components/get-all-notes/get-all-notes.component';
import { IconsComponent } from './Components/icons/icons.component';
import { MatCardModule } from "@angular/material/card";
import {MatDialogModule} from '@angular/material/dialog';
import {MatMenuModule} from '@angular/material/menu';
import {MatTooltipModule} from '@angular/material/tooltip';
import { ArchivenoteComponent } from './Components/archivenote/archivenote.component';
import { TrashnoteComponent } from './Components/trashnote/trashnote.component';
import { AuthenticationGuard } from './Authguard/authentication.guard';
import { FilterPipe } from './Pipes/filter.pipe';

import { GetAllLabelComponent } from './Components/get-all-label/get-all-label.component';
import { EditLabelComponent } from './Components/edit-label/edit-label.component';



@NgModule({
  declarations: [
    AppComponent,
    RegistrationComponent,
    LoginComponent,
    ForgetemailComponent,
    ResetpasswordComponent,
    DashboardComponent,
    CreatenoteComponent,
    DisplayComponent,
    GetAllNotesComponent,
    IconsComponent,
    UpdateComponent,
    ArchivenoteComponent,
    TrashnoteComponent,
    FilterPipe,
   
    GetAllLabelComponent,
    EditLabelComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    MatCheckboxModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    HttpClientModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatIconModule,
    FlexLayoutModule,
    MatCardModule,
    MatDialogModule,
    MatMenuModule,
    MatTooltipModule,
    
   

  ],
  providers: [AuthenticationGuard],
  bootstrap: [AppComponent],
  entryComponents:[EditLabelComponent]
   
  })

export class AppModule { }


// ng module CreatelabelComponent, import { CreatelabelComponent } from './Components/createlabel/createlabel.component';