import { Component } from '@angular/core';
import { Student } from './models/student';
import { LocalStorageService } from './services/storage/localStorage.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private storage : LocalStorageService){}

  isLoggedIn(){
    if (this.storage.getFromStorage('token')){
      return true;
    }else{
      return false;
    }
    
  }
  
}
