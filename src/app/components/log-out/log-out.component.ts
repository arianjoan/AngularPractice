import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from 'src/app/services/storage/localStorage.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-log-out',
  templateUrl: './log-out.component.html',
  styleUrls: ['./log-out.component.css']
})
export class LogOutComponent implements OnInit {

  constructor(private storage : LocalStorageService, private router : Router) { }

  ngOnInit() {
    this.logOut();
  }

  logOut(){
    this.storage.deleteStorage();
    this.router.navigate(['/login']);
  }

}
