import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Employee } from 'class/Employee';
import { timeStamp } from 'console';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { EmployeeService } from './employee.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiServiceUrl=environment.apiBaseUrl;
  loggedEmployee:any={}
  valid=false
  constructor(private http :HttpClient,private employeeService:EmployeeService) { }
  /*public isValidUser(username:string,lastname:string,password:string):Observable<boolean>{
    return this.http.get<boolean>(`${this.apiServiceUrl}/auth/login/${username}/${lastname}/${password}`)
  }*/
  public getEmployees():Observable<Employee[]>{
    return this.http.get<Employee[]>(`${this.apiServiceUrl}/employee/all`)
  }
  isValidUser(firstname:string,lastname:string,password:string){
    this.getEmployees().subscribe(employees=>{
      for (let u of employees){
        if (firstname==u.firstname && lastname==u.lastname && password==u.password) {this.valid=true;this.loggedEmployee=u;}
      }
    });
    console.log(this.loggedEmployee)
    return this.valid
}
setloggedEmployee(e:Employee):Employee{
  this.loggedEmployee=e
  return this.loggedEmployee
}


}
