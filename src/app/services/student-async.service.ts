//student.service.ts
import { Injectable } from '@angular/core';
import { Student } from '../models/student';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class StudentAsyncService {
  constructor(private http: HttpClient) { }

  add(student: Student){
    console.log(student);
    this.http.post('https://utn2019-avanzada2-tp8.herokuapp.com/api/students',student,{
      headers: new HttpHeaders({'Content-Type': 'application/json'})
    }).toPromise();
  }

  getAll() : Promise<any>{
    return this.http.get('https://utn2019-avanzada2-tp8.herokuapp.com/api/students')
      .toPromise();
  }

  getById(studentId: number) : Promise<any>{
    return this.http.get('https://utn2019-avanzada2-tp8.herokuapp.com/api/students/'+studentId).toPromise()
  }  

  editStudent(student : Student, studentId : number){
    this.http.patch('https://utn2019-avanzada2-tp8.herokuapp.com/api/students/'+studentId,student).toPromise();
  }
}

