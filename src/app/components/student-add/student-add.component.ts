import { Component, OnInit, Input } from '@angular/core';
import { Student } from 'src/app/models/student';
import { StudentService } from 'src/app/services/student.service';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { StudentAsyncService } from 'src/app/services/student-async.service';
import { CustomValidator } from 'src/app/models/customValidator';
import { Router } from '@angular/router';
import { LocalStorageService } from 'src/app/services/storage/localStorage.service';

@Component({
  selector: 'app-student-add',
  templateUrl: './student-add.component.html',
  styleUrls: ['./student-add.component.css']
})
export class StudentAddComponent implements OnInit {

  student = new Student();
  studentForm : FormGroup;

  constructor(
    private studentService: StudentAsyncService,
    private router : Router, private fb : FormBuilder,
    private storage : LocalStorageService
    ) { }

  ngOnInit() {

    this.studentForm = this.fb.group ({
      'firstName' : [this.student.firstName,[CustomValidator.firstNameLenght()]],
      'lastName' : [this.student.lastName],
      'email' : [this.student.email],
      'dni' : [this.student.dni],
      'address' : [this.student.address]
    });

    console.log(this.storage.getFromStorage('title'));
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
