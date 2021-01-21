import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { from } from 'rxjs';
import { RegisterComponent } from './register/register.component';
import { ServicesComponent } from './services/services.component';
import { HomeComponent } from './home/home.component';
import { PrescriptionComponent } from './prescription/prescription.component';
import { EmergencyComponent } from './emergency/emergency.component';
import { Covid1Component } from './covid1/covid1.component';
import { Covid2Component } from './covid2/covid2.component';
import { Covid3Component } from './covid3/covid3.component';
import { AboutComponent } from './about/about.component';
import { LoginComponent } from './login/login.component';
import { DoctorFormComponent } from './doctor-form/doctor-form.component';

const routes: Routes = [
  {path: 'register', component: RegisterComponent},
  {path: 'service', component: ServicesComponent},
  {path: '', component: LoginComponent},
  {path: 'prescription', component: PrescriptionComponent},
  {path: 'emergency', component: EmergencyComponent},
  {path: 'covid1', component: Covid1Component},
  {path: 'covid2', component: Covid2Component},
  {path: 'covid3', component: Covid3Component},
  {path: 'about', component: AboutComponent},
  {path: 'home', component: HomeComponent},
  {path: 'doctor-form',component: DoctorFormComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
