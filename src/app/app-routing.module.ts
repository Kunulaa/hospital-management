import { createComponent, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdmindashComponent } from './admindash/admindash.component';
import { AppointmentComponent } from './appointment/appointment.component';
import { CreateAppointmentComponent } from './create-appointment/create-appointment.component';
import { AdminComponent } from './admin/admin.component';
import { HomeComponent } from './home/home.component';
import { DocloginComponent } from './doclogin/doclogin.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { DocdashComponent } from './docdash/docdash.component';

const routes: Routes = [
  {path:'', component:HomeComponent},
  {path:'home',component:HomeComponent},
  {path:'appointmentlist', component:AppointmentComponent},
  {path:'admindash',component:AdmindashComponent},
  {path:'create', component:CreateAppointmentComponent},
  {path:'pat',component:AdmindashComponent},
  {path:'admin', component:AdminComponent},
  {path:'doclogin',component:DocloginComponent},
  {path:'adlogin',component:AdminloginComponent},
  {path:'docdash',component:DocdashComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
