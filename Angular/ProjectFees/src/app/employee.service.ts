import { Injectable } from '@angular/core';
import { Fees } from './fees/student';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  url : string;
  student:Fees;
  stdArr:Fees[];

  constructor(private http:HttpClient) {
    this.url = "http://localhost:1400/student";
    this.student=new Fees();
    this.stdArr=[];

   }
   insertStudent( student : Fees){
    this.http.post<Fees>(this.url,student).subscribe();
    return "Student Fees Added!!!";
   }

   updateStudent(student : Fees){
    this.http.put<Fees>(this.url+"/"+student.id,student).subscribe();
    return "Student Fees Updated!!!";

   }

   deleteStudent(empId:number){
    this.http.delete<Fees>(this.url+"/"+empId).subscribe();
    return "Student Fees deleted!!!";

   }

   findStudent(empId:number){
    this.http.get<Fees>(this.url+"/"+empId).subscribe(data=>this.student = data);
    return this.student;

   }
   findallStudent(){
    this.http.get<Fees[]>(this.url).subscribe(data=>this.stdArr = data);
    return this.stdArr;

   }
}