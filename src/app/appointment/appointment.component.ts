import { Component } from '@angular/core';
import { AppointmentService } from '../appointment.service';
import { Appointment } from '../appointment';

@Component({
  selector: 'app-appointment',
  templateUrl: './appointment.component.html',
  styleUrl: './appointment.component.css'
})
export class AppointmentComponent {
  appoint:Appointment[]=[]
  constructor(private appointmentService:AppointmentService){}
  getAppoint(){
   this.appointmentService.getAppointments().subscribe(data=>{
    this.appoint=data;
   })
  }

}
