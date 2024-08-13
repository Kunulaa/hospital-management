import { createComponent, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdmindashComponent } from './admindash/admindash.component';
import { AppointmentComponent } from './appointment/appointment.component';
import { CreateAppointmentComponent } from './create-appointment/create-appointment.component';
import { AdminComponent } from './admin/admin.component';

const routes: Routes = [
  {path:'', component:AdminComponent},
  {path:'appointmentlist', component:AppointmentComponent},
  {path:'admindash',component:AdmindashComponent},
  {path:'create', component:CreateAppointmentComponent},
  {path:'pat',component:AdmindashComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
