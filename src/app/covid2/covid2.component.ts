import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Covid2 } from '../_models/covid2.model';
import { CovidtestService } from '../_services/covidtest.service';

@Component({
  selector: 'app-covid2',
  templateUrl: './covid2.component.html',
  styleUrls: ['./covid2.component.scss']
})
export class Covid2Component implements OnInit {
  covid2Form: FormGroup;
  breathing:any;
  precautions:any;
  

  constructor(private router:Router,
    private formBuilder: FormBuilder,
    private covidTestService: CovidtestService) {
    this.covid2Form = this.formBuilder.group(new Covid2());
   }

   get fields(){
    return this.covid2Form.controls;
  }

  goToPage(pageName:string):void{
    this.breathing=document.querySelector('input[name="breathing"]:checked');
    this.precautions=document.querySelector('input[name="precautions"]:checked');  
      this.covid2Form.removeControl("id");
      this.covid2Form.controls["breathing"].setValue(this.breathing.value);
      this.covid2Form.controls["precautions"].setValue(this.precautions.value);
      console.log(this.covid2Form.value);
      this.covidTestService.createCovid2(this.covid2Form.value).subscribe((data) => {
        //console.log(data);
        this.router.navigate([`${pageName}`]);
      });
      //this.router.navigate([`${pageName}`]);
    
    //this.router.navigate([`${pageName}`]);
  }

  ngOnInit(): void {
  }

}
