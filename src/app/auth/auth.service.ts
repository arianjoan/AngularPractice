import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { LocalStorageService } from '../services/storage/localStorage.service';

@Injectable({
  providedIn: 'root'
})

export class AuthService {

  constructor(private jwtHelper : JwtHelperService, private storage : LocalStorageService) { console.log('constructor')}

  public isAuthenticated() : boolean {
    const token = this.storage.getFromStorage('token');
    if (token){
      return !this.jwtHelper.isTokenExpired(token[0]);
    }else{
      return false;
    }
      
  }
}
