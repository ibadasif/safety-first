import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NavbarComponent } from './navbar/navbar.component';
import { SliderComponent } from './slider/slider.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { ServicesComponent } from './services/services.component';
import { MatCardModule } from '@angular/material/card';
import { MatTabsModule } from '@angular/material/tabs';
import { MatInputModule } from '@angular/material/input';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { PrescriptionComponent } from './prescription/prescription.component';
import { EmergencyComponent } from './emergency/emergency.component';
import { MatDialogModule } from '@angular/material/dialog';

import { AboutComponent } from './about/about.component';
import { Covid1Component } from './covid1/covid1.component';
import { Covid2Component } from './covid2/covid2.component';
import { Covid3Component } from './covid3/covid3.component';
import { LoginComponent } from './login/login.component';
import { from } from 'rxjs';
import { DengueComponent } from './dengue/dengue.component';
import { TyphoidComponent } from './typhoid/typhoid.component';
import { TuberculosisComponent } from './tuberculosis/tuberculosis.component';
import { HypertensionComponent } from './hypertension/hypertension.component';
import { DiabetesComponent } from './diabetes/diabetes.component';
import { HepatitisComponent } from './hepatitis/hepatitis.component';
import { BraintumorComponent } from './braintumor/braintumor.component';
import { MultiplesclerosisComponent } from './multiplesclerosis/multiplesclerosis.component';
import { AllergyComponent } from './allergy/allergy.component';
import { AsthamaComponent } from './asthama/asthama.component';
import { LiverdiseaseComponent } from './liverdisease/liverdisease.component';
import { AlzheimerComponent } from './alzheimer/alzheimer.component';
import { InfluenzaComponent } from './influenza/influenza.component';
import { AppendixComponent } from './appendix/appendix.component';
import { AcnescarsComponent } from './acnescars/acnescars.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { CovidMildComponent } from './covid-mild/covid-mild.component';
import { CovidHighComponent } from './covid-high/covid-high.component';
import { CovidNormalComponent } from './covid-normal/covid-normal.component';
import { DoctorFormComponent } from './doctor-form/doctor-form.component';
import { DoctorListComponent } from './doctor-list/doctor-list.component';
import { CdkTableModule} from '@angular/cdk/table';
import { DataSource } from '@angular/cdk/table';
import { MatTableModule } from '@angular/material/table'
import { CommonModule } from '@angular/common';   
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SliderComponent,
    ServicesComponent,
    RegisterComponent,
    HomeComponent,
    PrescriptionComponent,
    EmergencyComponent,
    Covid1Component,
    Covid2Component,
    Covid3Component,
    LoginComponent,
    DengueComponent,
    TyphoidComponent,
    TuberculosisComponent,
    HypertensionComponent,
    DiabetesComponent,
    HepatitisComponent,
    BraintumorComponent,
    MultiplesclerosisComponent,
    AllergyComponent,
    AsthamaComponent,
    LiverdiseaseComponent,
    AlzheimerComponent,
    InfluenzaComponent,
    AppendixComponent,
    AcnescarsComponent,
    CovidMildComponent,
    CovidHighComponent,
    CovidNormalComponent,
    DoctorFormComponent,
    DoctorListComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgbModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MatTabsModule,
    MatInputModule,
    MatDialogModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    CdkTableModule,
    MatTableModule,
    CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
