import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { FormsModule } from '@angular/forms';
import { SearchComponent } from './search/search.component';
import { LoginComponent } from './login/login.component';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { ViewEmployeesComponent } from './view-employees/view-employees.component';
import { ChatComponent } from './chat/chat.component';
import { HomeComponent } from './home/home.component';
const routes: Routes = [
  {path: 'admin', component: AdminComponent },
  {path: 'home', component: HomeComponent },
  {path: 'addEmployee', component: AddEmployeeComponent },
  {path: 'search', component: SearchComponent },
  {path: 'login', component: LoginComponent },
  {path: 'chat', component: ChatComponent },
  {path: 'admin/viewEmployees', component: ViewEmployeesComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes),FormsModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
