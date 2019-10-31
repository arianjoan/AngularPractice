import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';
import { LocalStorageService } from 'src/app/services/storage/localStorage.service';
import { Token } from 'src/app/models/token';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent implements OnInit {


  formGroupLogIn : FormGroup
  user : User = new User();
  badCredentials : String = null;
  token : Token;

  constructor(private userService : UserService, private router : Router, private storage : LocalStorageService) { }

  ngOnInit() {
    this.formGroupLogIn = new FormGroup({
      email : new FormControl(this.user.email),
      password : new FormControl(this.user.password)
    })
  }

  logIn(){

    this.user = this.formGroupLogIn.value;
    let print = this.userService.logIn(this.user);

    print.then(( response ) => {
      this.storage.deleteStorage();

      this.token = new Token();
      this.token = Object.assign(this.token,response);

      this.storage.addToStorage('token',this.token.jwt);

      this.router.navigate(['/list']);
    }).catch(( error ) => {

      this.badCredentials = "Usuario y/o contraseña incorrecta";
      console.log(error);

    })
  }

}
