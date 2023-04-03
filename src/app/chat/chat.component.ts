import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Employee } from 'class/Employee';
import { Message } from 'class/Message';
import { Team } from 'class/Team';
import { AuthService } from '../services/auth.service';
import { ChatService } from '../services/chat.service';
import { EmployeeService } from '../services/employee.service';
import { SessionService } from '../services/session.service';
import { TeamService } from '../services/team.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {
  employee:any={}
  message:any={}
  employees:Employee[]=[]
  teammates:Employee[]=[]
  messages:Message[]=[]
  team:any={}
  isSessionActive=false;
  constructor(private sessionService:SessionService,private authService:AuthService,private employeeService:EmployeeService,private chatService:ChatService,private teamService:TeamService) { }

   async ngOnInit(): Promise<void> {
    const em = await this.employeeService.getEmployeeById(parseInt(localStorage.getItem("id")))
    this.employee=em
    console.log(this.employee)
    /*this.isSessionActive=this.sessionService.isSessionActive()
    console.log(this.employee)    
   //console.log(parseInt(localStorage.getItem("id")))*/
   
   this.getTeammates(this.employee.id)
   const tm=await this.teamService.findTeamByEmployee(this.employee.id)
   this.team=tm
   console.log(this.team)
   const msgs=await this.chatService.getAllMessages(this.team.id).toPromise()
   this.messages=msgs
   console.log(this.team)
   //this.getMessages()
   console.log(this.messages)
   console.log(this.employee)
  
}
  
  //get teammates
  public getTeammates(employeeid:number):void{
    this.employeeService.getTeammates(employeeid).subscribe(
      (response:Employee[])=>{
        this.teammates=response;
      },
      (error:HttpErrorResponse)=>{
        alert(error.message)
      }
    )
  }
   //Get Messages
   public getMessages():void{
    this.chatService.getAllMessages(this.team.id).subscribe(
      (response:Message[])=>{
        this.message=response;
      },
      (error:HttpErrorResponse)=>{
        alert(error.message)
      }
    )
  }
  //Send Mrssage
 sendMessage(addForm:NgForm){
    this.chatService.SendMessage(this.team.id,this.employee.id,addForm.value).subscribe(
      (response:Message)=>{console.log(response)},
      (error:HttpErrorResponse)=>{alert(error.message)}
    )
    console.log(this.employee)
  }
  //this.authService.loggedEmployee.id

  

}
