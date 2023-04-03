import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Employee } from 'class/Employee';
import { Team } from 'class/Team';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  private apiServiceUrl=environment.apiBaseUrl;

  constructor(private http :HttpClient) { }
  //get Employees
  public getREmployees():Observable<Employee[]>{
    return this.http.get<Employee[]>(`${this.apiServiceUrl}/employee/all`)
  }
   //add Employee
   public addEmployee(employee:Employee):Observable<Employee>{
    return this.http.post<Employee>(`${this.apiServiceUrl}/employee/add`,employee);
  } 
  //GetEmployeeByName
  public getEmployeeByName(name:string):Observable<Employee[]>{
    return this.http.get<Employee[]>(`${this.apiServiceUrl}/employee/find/name?name=${name}`)
  }
  //GetEmployeeById
  public getEmployeeById(id:number):Promise<Employee>{
    return this.http.get<Employee>(`${this.apiServiceUrl}/employee/find/${id}`).toPromise()
  }
   //GetEmployeeById
  public deleteEmployeeById(id:number):Observable<void>{
    return this.http.delete<void>(`${this.apiServiceUrl}/employee/delete/${id}`)
  }
  //Get Teammates
  public getTeammates(id:number):Observable<Employee[]>{
    return this.http.get<Employee[]>(`${this.apiServiceUrl}/employee/teammates/${id}`)
  }
 
}
