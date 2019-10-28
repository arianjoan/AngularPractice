import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http : HttpClient) { }

  register(user : User){
    console.log(user);
    this.http.post('https://utn2019-avanzada2-tp8.herokuapp.com/sign-up',user).toPromise();
  }
}
