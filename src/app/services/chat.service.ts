import { Injectable } from '@angular/core';
import { from, map, Observable } from 'rxjs';
import { HttpClient, HttpResponse } from '@angular/common/http';
import * as Stomp from 'stompjs';
import * as SockJS from 'sockjs-client';
import { Message } from 'class/Message';
import { environment } from 'src/environments/environment';
import { Team } from 'class/Team';
import { webSocket, WebSocketSubject } from 'rxjs/webSocket';
import { NgForm } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class ChatService {
  private stompClient:Stomp.Client;
  private messages:Message[]=[];
  private apiServiceUrl=environment.apiBaseUrl;
  private socket$: WebSocketSubject<any>;

  constructor(private http:HttpClient) {
    this.stompClient = Stomp.client('ws://localhost:8080/chat');
   }
  //get Team Of employee
  public getTeamById(id:number):Promise<Team>{
    return this.http.get<Team>(`${this.apiServiceUrl}/employee/findTeamById/${id}`).toPromise()
  }
  //Get Messages
  public getAllMessages(teamId:number):Observable<Message[]>{
    return this.http.get<Message[]>(`${this.apiServiceUrl}/chat/get/${teamId}`)
  }
   public SendMessage(teamId:number,employeeId:number,message:Message):Observable<Message>{
    return this.http.post<Message>(`${this.apiServiceUrl}/chat/send/${teamId}/${employeeId}`,message)
    
   }
  
  
}

