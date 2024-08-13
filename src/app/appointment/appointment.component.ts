import { Component } from '@angular/core';
import { AppointmentService } from '../appointment.service';
import { Appointment } from '../appointment';
import { Router } from '@angular/router';

@Component({
  selector: 'app-appointment',
  templateUrl: './appointment.component.html',
  styleUrl: './appointment.component.css'
})
export class AppointmentComponent {
  appoint:Appointment[]=[]
  constructor(private appointmentService:AppointmentService, private router:Router){}
  ngOnInit():void{
      this.getAppoint();
  }
  getAppoint(){
   this.appointmentService.getAppointments().subscribe(data=>{
    this.appoint=data;
   })
  }
  delete(id:number){
    this.appointmentService.deleteAppointment(id).subscribe(data=>{
      console.log(data);
      this.getAppoint();
    }
  )
  }
 

}
