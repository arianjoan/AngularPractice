//student-view.component.ts
import { Component, OnInit } from '@angular/core';
import { StudentService } from 'src/app/services/student.service';
import { Student } from 'src/app/models/student';
import { ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';
import { StudentAsyncService } from 'src/app/services/student-async.service';

//student-view-component.ts
@Component({
  selector: 'app-student-view',
  templateUrl: './student-view.component.html',
  styleUrls: ['./student-view.component.css']
})
export class StudentViewComponent implements OnInit {
  
  private formViewStudent : FormGroup ;
  private student : Student;
  private studentId : number;

  constructor(private studentService: StudentAsyncService, private route: ActivatedRoute) { }

  

    ngOnInit() {
    this.studentId= Number(this.route.snapshot.paramMap.get('id'));
    this.studentService.getById(this.studentId).then((student) => {
      this.formViewStudent = new FormGroup({
        firstName : new FormControl(student.firstName),
        lastName : new FormControl(student.lastName),
        email : new FormControl(student.email),
        dni : new FormControl(student.dni),
        address : new FormControl(student.address)
      });
    });

  }

  editStudent(){
    this.student = this.formViewStudent.value;
    this.studentService.editStudent(this.student,this.studentId);
  }

}

