import { Component, NgModule, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Inject }  from '@angular/core';
import { DOCUMENT } from '@angular/common'; 
import { NgForm } from '@angular/forms';
import { EmployeeService } from '../services/employee.service';
import { HttpErrorResponse } from '@angular/common/http';
import { Employee } from 'class/Employee';
import { TeamService } from '../services/team.service';
import { Team } from 'class/Team';
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  employee:any={}
  employees:Employee[]=[]
  teams:Team[]=[]
  team:any={}
  teamid:any;
  tab:any[]=[]
  sahar:boolean=false
  constructor(private router:Router,@Inject(DOCUMENT) document:Document,private employeeService:EmployeeService,private teamService:TeamService) { }
  
  ngOnInit(): void {
    this.getEmployees()
    this.getTeams()
    const element3 =document.getElementById('3');
    element3?.style.setProperty("display", "inherit")
    const element4 =document.getElementById('4');
    element4?.style.setProperty("display", "inherit")
  }
  setTeamId(id:any){
    this.teamid=id;
    console.log(this.teamid);
  }
  b(i:number){
    if(this.sahar===true)  {this.tab[i]=false}
    else{this.tab[i]=true}
  }
  // Add Employee
  addEmployee(addForm:NgForm){
    this.employeeService.addEmployee(addForm.value).subscribe(
      (response:Employee)=>{console.log(response)},
      (error:HttpErrorResponse)=>{alert(error.message)}
    )
    console.log(this.employee)
  } 
  //Add Team
  addTeam(addForm1:NgForm){
    this.teamService.addTeam(addForm1.value).subscribe(
      (response:Team)=>{console.log(response)},
      (error:HttpErrorResponse)=>{alert(error.message)}
    )
    console.log(this.team)
    location.reload();
  } 
  
  //Get Employees
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
  //Get Teams
  public getTeams():void{
    this.teamService.getTeams().subscribe(
      (response:Team[])=>{
        this.teams=response;
      },
      (error:HttpErrorResponse)=>{
        alert(error.message)
      }
    )
  }
  //Delete Employee
  deleteEmployeeById(id:number){
    this.employeeService.deleteEmployeeById(id).subscribe((res) => alert("employee deleted successfully"));
  }
  //Delete Team
  deleteTeamById(id:number){
    this.teamService.deleteTeamById(id).subscribe((res) => alert("team deleted successfully"));
  }
   //Add Employee to a team
   AddEmployeeToTeam(id:number,employee:Employee){
    this.teamService.addEmployeeToTeam(id,employee).subscribe(
      (response:Team)=>{console.log(response)},
      (error:HttpErrorResponse)=>{this.sahar=true;alert("hhhhhh");}
    )
    console.log(this.team)
  } 
 

















  navAddEmployee(){
    this.router.navigate(['/addEmployee'])
  }
  navaddemployees(){
    const element1 =document.getElementById('1');
    const element2 =document.getElementById('2');
    const element3 =document.getElementById('3');
    const element4 =document.getElementById('4');

    element1?.style.setProperty("display", "inherit")
    element2?.style.setProperty("display", "none")
    element3?.style.setProperty("display", "none")
    element4?.style.setProperty("display", "none")
  }
  navviewemployees(){
    const element1 =document.getElementById('1');
    const element2 =document.getElementById('2');
    const element3 =document.getElementById('3');
    const element4 =document.getElementById('4');

    element1?.style.setProperty("display", "none")
    element2?.style.setProperty("display", "inherit")
    element3?.style.setProperty("display", "none")
    element4?.style.setProperty("display", "none")
  }
  navaddteam(){
    const element1 =document.getElementById('1');
    const element2 =document.getElementById('2');
    const element3 =document.getElementById('3');
    const element4 =document.getElementById('4');
    element1?.style.setProperty("display", "none")
    element2?.style.setProperty("display", "none")
    element3?.style.setProperty("display", "inherit")
    element4?.style.setProperty("display", "inherit")
  }
  a(){
    location.reload()
  }

}
