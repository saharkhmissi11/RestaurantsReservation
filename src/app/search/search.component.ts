import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../services/employee.service';
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  constructor(private employeeSevice:EmployeeService) { }

  ngOnInit(): void {
  }
  search(nom:String){
    
  }

}
