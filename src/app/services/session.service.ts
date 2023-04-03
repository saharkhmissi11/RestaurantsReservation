import { Injectable } from '@angular/core';
import { Employee } from 'class/Employee';

@Injectable({
  providedIn: 'root'
})
export class SessionService {
  private sessionActive: boolean = false;
  private currentUser: any={};


  constructor() { }
  startSession(employee: Employee) {
    this.sessionActive = true;
    this.currentUser = employee;
  }

  endSession() {
    this.sessionActive = false;
    this.currentUser = null;
  }

  isSessionActive(): boolean {
    return this.sessionActive;
  }
  getCurrentUser(): any {
    return this.currentUser;
  }
}
