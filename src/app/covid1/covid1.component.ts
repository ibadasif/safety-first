import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CovidtestService } from '../_services/covidtest.service';
import { Covid1 } from '../_models/covid1.model';

@Component({
  selector: 'app-covid1',
  templateUrl: './covid1.component.html',
  styleUrls: ['./covid1.component.scss'],
})
export class Covid1Component implements OnInit {
  covid1Form: FormGroup;
  age:any;
  gender:any;

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private covidTestService: CovidtestService
  ) {
    this.covid1Form = this.formBuilder.group(new Covid1());
  }

  get fields(){
    return this.covid1Form.controls;
  }

  goToPage(pageName: string): void {
  //  this.age = (<HTMLInputElement><unknown>document.getElementById("gender")).value;
  this.gender=document.querySelector('input[name="gender"]:checked');
  this.age=document.querySelector('input[name="age"]:checked');  
    this.covid1Form.removeControl("id");
    this.covid1Form.controls["age"].setValue(this.age.value);
    this.covid1Form.controls["gender"].setValue(this.gender.value);
    console.log(this.covid1Form.value);
    this.covidTestService.createCovid1(this.covid1Form.value).subscribe((data) => {
      //console.log(data);
      this.router.navigate([`${pageName}`]);
    });
    //this.router.navigate([`${pageName}`]);
  }
  

  ngOnInit(): void {}
}
