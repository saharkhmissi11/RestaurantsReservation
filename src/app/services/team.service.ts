import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { Team } from 'class/Team';
import { Employee } from 'class/Employee';
@Injectable({
  providedIn: 'root'
})
export class TeamService {
  private apiServiceUrl=environment.apiBaseUrl;
  constructor(private http :HttpClient) { }
  public getTeams():Observable<Team[]>{
    return this.http.get<Team[]>(`${this.apiServiceUrl}/team/all`)
  }
  public addTeam(team:Team):Observable<Team>{
    return this.http.post<Team>(`${this.apiServiceUrl}/team/add`,team);
  } 
  public deleteTeamById(id:number):Observable<void>{
    return this.http.delete<void>(`${this.apiServiceUrl}/team/delete/${id}`)
  }
  public addEmployeeToTeam(id:number,employee:Employee):Observable<Team>{
    return this.http.put<Team>(`${this.apiServiceUrl}/team/${id}/employees`,employee)
    .pipe(
      map(event => event instanceof HttpResponse ? event.body : null)
    );
  }
  public findTeamByEmployee(employeeid:number):Promise<Team>{
    return this.http.get<Team>(`${this.apiServiceUrl}/employee/findTeamByEmployee/${employeeid}`).toPromise()
    
  }
}
