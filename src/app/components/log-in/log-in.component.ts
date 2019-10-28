import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent implements OnInit {


  formGroupLogIn : FormGroup
  user : User = new User();

  constructor(private userService : UserService) { }

  ngOnInit() {
    this.formGroupLogIn = new FormGroup({
      email : new FormControl(this.user.email),
      password : new FormControl(this.user.password)
    })
  }

  logIn(){
    this.user = this.formGroupLogIn.value;
    console.log(this.user);
    let print = this.userService.logIn(this.user);
    print.then((response) => {
      console.log(response);
    })
    return print;
  }

}
