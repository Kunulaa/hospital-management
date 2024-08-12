import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdmindashComponent } from './admindash/admindash.component';
import { AppointmentComponent } from './appointment/appointment.component';

const routes: Routes = [
  {path:'', component:AdmindashComponent},
  {path:'appointmentlist', component:AppointmentComponent},
  {path:'admindash',component:AdmindashComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
