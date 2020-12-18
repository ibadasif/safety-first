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
import {MatCardModule} from '@angular/material/card';
import { MatTabsModule } from '@angular/material/tabs';
import { MatInputModule } from '@angular/material/input';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { PrescriptionComponent } from './prescription/prescription.component';
import { EmergencyComponent } from './emergency/emergency.component';

import { AboutComponent } from './about/about.component';
import { Covid1Component } from './covid1/covid1.component';
import { Covid2Component } from './covid2/covid2.component';
import { Covid3Component } from './covid3/covid3.component';
import { LoginComponent } from './login/login.component';
 

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
    LoginComponent
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
    MatInputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
