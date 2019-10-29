import { Component, OnInit, Input } from '@angular/core';
import { Student } from 'src/app/models/student';
import { StudentService } from 'src/app/services/student.service';
import { FormGroup, FormControl } from '@angular/forms';
import { StudentAsyncService } from 'src/app/services/student-async.service';
import { CustomValidator } from 'src/app/models/customValidator';
import { Router } from '@angular/router';

@Component({
  selector: 'app-student-add',
  templateUrl: './student-add.component.html',
  styleUrls: ['./student-add.component.css']
})
export class StudentAddComponent implements OnInit {

  student = new Student();
  studentForm : FormGroup;
  studentFormFirstName : FormControl;

  constructor(private studentService: StudentAsyncService, private router : Router) { }

  ngOnInit() {

    this.studentForm = new FormGroup({
      'firstName' : new FormControl(this.student.firstName,[CustomValidator.firstNameLenght()],[]),
      'lastName' : new FormControl(this.student.lastName),
      'email' : new FormControl(this.student.email),
      'dni' : new FormControl(this.student.dni),
      'address' : new FormControl(this.student.address)
    });
  }

  get firstName(){
    return this.studentForm.get('firstName');
  }

  addStudent()
  {
    this.student = this.studentForm.value;
    this.studentService.add(this.student);
    alert("El usuario fue agregado con exito!");
    this.router.navigate(['/list']);
  }
}
