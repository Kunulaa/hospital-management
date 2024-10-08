import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Appointment } from './appointment';

@Injectable({
  providedIn: 'root'
})
export class AppointmentService {

  constructor(private httpClient:HttpClient) { }
  private baseUrl="http://localhost:8080/api/v3"
  getAppointments():Observable<Appointment[]>{
      return this.httpClient.get<Appointment[]>(`${this.baseUrl}/getall`)
  }
  createAppointment(appointment:Appointment):Observable<Appointment>{
    return this.httpClient.post<Appointment>(`${this.baseUrl}/single`,appointment)
  }
  deleteAppointment(id:number):Observable<any>{
    return this.httpClient.delete(`${this.baseUrl}/${id}/dlt`, { responseType: 'text' })
  }

}
