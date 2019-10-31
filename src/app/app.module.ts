import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { StudentAddComponent } from './components/student-add/student-add.component';
import { StudentListComponent } from './components/student-list/student-list.component';
import { StudentViewComponent } from './components/student-view/student-view.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { LogInComponent } from './components/log-in/log-in.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { StorageServiceModule } from 'ngx-webstorage-service';
import { AuthGuard } from './auth/auth.guard';
import { LocalStorageService } from './services/storage/localStorage.service';
import { JWT_OPTIONS, JwtHelperService } from '@auth0/angular-jwt';




@NgModule({
  declarations: [
    AppComponent,
    StudentAddComponent,
    StudentListComponent,
    StudentViewComponent,
    PageNotFoundComponent,
    LogInComponent,
    SignUpComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    StorageServiceModule,
  ],
  providers: [ 
    AuthGuard,
    LocalStorageService,
    {
      provide: JWT_OPTIONS,
      useValue: JWT_OPTIONS
     },
      JwtHelperService
   ],  
  bootstrap: [AppComponent]
})
export class AppModule { }
