import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { Doctor } from '../_models/doctor.model';
import { DoctorService } from '../_services/doctor.service';
declare var $;
@Component({
  selector: 'app-doctor-list',
  templateUrl: './doctor-list.component.html',
  styleUrls: ['./doctor-list.component.scss'],
})
export class DoctorListComponent implements OnInit {
  displayedColumns: string[] = ['status', 'name'];
  doctors: any;
  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private doctorService: DoctorService
  ) {
    this.getDoctors();
  }
  public getDoctors() {
    this.doctorService.getAllDoctors().subscribe((data: Doctor[]) => {
      this.doctors = data;
      console.log(data);
      $('#list-doctor-table').dataTable();
    });
  }

  ngOnInit(): void {}
}
