import { Component, OnInit, Input } from '@angular/core';
import { Student } from 'src/app/models/student';
import { StudentService } from 'src/app/services/student.service';
import { StudentAsyncService } from 'src/app/services/student-async.service';
import { LocalStorageService } from 'src/app/services/storage/localStorage.service';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {

  studentList : Student[];

  constructor(private studentService: StudentAsyncService, private storage : LocalStorageService) { }

  ngOnInit() {
    this.studentService.getAll().subscribe((arrayOfStudents) => {
      this.studentList = arrayOfStudents as Student[];
    },(error) => {
      console.log("Error al traer los estudiantes>> " + error);
    });

    console.log(this.storage.getFromStorage('title'));
  }

}
