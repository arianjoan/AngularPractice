import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { FormGroup, FormControl } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';
import { Student } from 'src/app/models/student';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  private user : User = new User();
  private formUserGroup : FormGroup;

  constructor(private userService : UserService) { }

  ngOnInit() {
    this.formUserGroup = new FormGroup({
      email : new FormControl(this.user.email),
      password : new FormControl(this.user.password),
      password_repeat : new FormControl(this.user.password)
    });
  }

  register(){
    this.user = this.formUserGroup.value;
    this.userService.register(this.user);
  }

}
