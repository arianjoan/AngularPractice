import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
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

  constructor(private userService : UserService, private fb : FormBuilder) { }


  ngOnInit() {
    this.formUserGroup = this.fb.group({
      email : [this.user.email,[],[CustomValidator.emailExists]],
      password : [this.user.password],
      password_repeat : [this.user.password]
    },{validator : CustomValidator.checkPasswords});
    
  }

  register(){
    this.user = this.formUserGroup.value;
    this.userService.register(this.user);
  }

}
