import { Component } from '@angular/core';
import { Employee } from 'class/Employee';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'TeamChat';
  employee:any={}

}
