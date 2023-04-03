import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Employee } from 'class/Employee';
import { AuthService } from '../services/auth.service';
import { EmployeeService } from '../services/employee.service';
import { SessionService } from '../services/session.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  employee:any={}
  valid=false
  error =false
  loggedEmployee:any={}
  constructor(private sessionService:SessionService,private authService:AuthService,private router:Router,private employeeService:EmployeeService) { }

  ngOnInit(): void {
  }
  setUser(){
    localStorage.setItem("id",this.loggedEmployee.id)
  }
  authentificate(addForm: NgForm){
    
    this.employeeService.getREmployees().subscribe(employees=>{
      for (let u of employees){
        if (this.employee.firstname==u.firstname && this.employee.lastname==u.lastname &&this.employee.password==u.password) {this.valid=true;this.loggedEmployee=u;this.setUser();}
        
      }
      if(this.valid==true){this.authService.setloggedEmployee(this.loggedEmployee);this.sessionService.startSession(this.loggedEmployee);;this.router.navigate(['/chat']); console.log(this.loggedEmployee)}
      else(this.error=true)
    });
}
  /*auth(addForm:NgForm){
    
     this.valid=this.authService.isValidUser(this.employee.firstname,this.employee.lastname,this.employee.password)
     console.log(this.valid)
     if (this.valid ){console.log(this.authService.loggedEmployee);this.router.navigate(['/chat'])}}*/
  }
 


