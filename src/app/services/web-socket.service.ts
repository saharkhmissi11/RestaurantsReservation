import { Injectable } from '@angular/core';
import {  Client, Message } from '@stomp/stompjs';
import * as io from 'socket.io-client';

import { RxStompService } from '@stomp/ng2-stompjs';
import { Subject } from 'rxjs';
import { ChatMessage } from "class/ChatMessage"

@Injectable({
  providedIn: 'root'
})
export class WebSocketService {
  private socket;

  private client: Client;
  public messageSubject: Subject<ChatMessage> = new Subject<ChatMessage>();

  constructor(private rxStompService: RxStompService) { 
  }



}