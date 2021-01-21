import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Doctor } from '../_models/doctor.model';
import { DoctorService } from '../_services/doctor.service';

@Component({
  selector: 'app-doctor-form',
  templateUrl: './doctor-form.component.html',
  styleUrls: ['./doctor-form.component.scss']
})
export class DoctorFormComponent implements OnInit {
  doctorForm:FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private doctorService : DoctorService
  ) { 
    this.doctorForm = this.formBuilder.group(new Doctor());
  }
  get fields() {
    return this.doctorForm.controls;
  }
  onSubmit(){
    this.doctorForm.removeControl('id');
    console.log(this.doctorForm.value); 
  }

  ngOnInit(): void {
  }

}
