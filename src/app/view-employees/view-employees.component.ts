import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Employee } from 'class/Employee';
import { EmployeeService } from '../services/employee.service';

@Component({
  selector: 'app-view-employees',
  templateUrl: './view-employees.component.html',
  styleUrls: ['./view-employees.component.css']
})
export class ViewEmployeesComponent implements OnInit {
  employees:Employee[]=[]

  constructor(private employeeService:EmployeeService) { }

  ngOnInit(): void {
    this.getEmployees()
    
  }
  public getEmployees():void{
    this.employeeService.getREmployees().subscribe(
      (response:Employee[])=>{
        this.employees=response;
      },
      (error:HttpErrorResponse)=>{
        alert(error.message)
      }
    )

  }


}
