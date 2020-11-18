import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { from } from 'rxjs';
import { RegisterComponent } from './register/register.component';
import { ServicesComponent } from './services/services.component';
import { HomeComponent } from './home/home.component';
import { CovidComponent } from './covid/covid.component';
import { PrescriptionComponent } from './prescription/prescription.component';
import { EmergencyComponent } from './emergency/emergency.component';

const routes: Routes = [
  {path: 'register', component: RegisterComponent},
  {path: 'service', component: ServicesComponent},
  {path: '', component: HomeComponent},
  {path: 'Covid', component: CovidComponent},
  {path: 'Prescription', component: PrescriptionComponent},
  {path: 'Emergency', component: EmergencyComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
