import { Component } from '@angular/core';
import { PatientService } from '../patient.service';
import { Patient } from '../patient';

@Component({
  selector: 'app-admindash',
  templateUrl: './admindash.component.html',
  styleUrl: './admindash.component.css'
})
export class AdmindashComponent {
  patient:Patient[]=[]
  constructor(private patientService:PatientService){}
  ngOnInit():void{
    this.getPatients()
  }
  getPatients(){
    this.patientService.getPatientList().subscribe(data=>{
        this.patient=data;
    })
  }

}
