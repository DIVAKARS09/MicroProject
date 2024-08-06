import { Component } from '@angular/core';
import { Fees } from './fees/student';
import { EmployeeService } from './employee.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Ems';
  student : Fees;
  result : string;
  employeeArr:Fees[];
  flag:boolean;
  d:string;

  constructor(private service : EmployeeService){
    this.student = new Fees();
    this.result =" ";
    this.employeeArr=[];
    this.flag=false;
    this.d=" ";
  }

  insertStudent(data : any) {
    this.student.id = data.empId;
    this.student.empName = data.empName;
    this.student.empFees = data.empFees;
    alert(data.empId+" "+data.empName+" "+data.empFees);
    this.result = this.service.insertStudent(this.student);
  }

  updateStudent(data:any){
    this.student.id = data.empId;
    this.student.empName = data.empName;
    this.student.empFees = data.empFees;
    alert(data.empId+" "+data.empName+" "+data.empFees);
    this.result = this.service.updateStudent(this.student);
  }

  deleteStudent(data:any){
    this.result = this.service.deleteStudent(data.empId);
  }

  findStudent(data:any){
    this.student=this.service.findStudent(data.empId);
    this.result=this.student.empName+" "+this.student.empFees;
  }

  findallStudent(){
    this.employeeArr=this.service.findallStudent();
    this.flag=true;
  }
}