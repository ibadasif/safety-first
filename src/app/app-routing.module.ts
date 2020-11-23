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

const routes: Routes = [
  {path: 'register', component: RegisterComponent},
  {path: 'service', component: ServicesComponent},
  {path: '', component: HomeComponent},
  {path: 'Prescription', component: PrescriptionComponent},
  {path: 'Emergency', component: EmergencyComponent},
  {path: 'Covid1', component: Covid1Component},
  {path: 'Covid2', component: Covid2Component},
  {path: 'Covid3', component: Covid3Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
