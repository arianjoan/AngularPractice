import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { FormGroup, FormControl } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';
import { Student } from 'src/app/models/student';
import { CustomValidator } from 'src/app/models/customValidator';

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
    this.formUserGroup.get('password').setValidators(CustomValidator.equalPassword(this.formUserGroup.get('password_repeat')));
    this.formUserGroup.get('password_repeat').setValidators(CustomValidator.equalPassword(this.formUserGroup.get('password')));
  }

  register(){
    this.user = this.formUserGroup.value;
    this.userService.register(this.user);
  }

  get password_repeat(){
    return this.formUserGroup.get('password_repeat');
  }

  get password(){
    return this.formUserGroup.get('password');
  }



}
