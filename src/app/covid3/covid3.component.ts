import { analyzeAndValidateNgModules } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { CovidHighComponent } from '../covid-high/covid-high.component';
import { CovidMildComponent } from '../covid-mild/covid-mild.component';
import { CovidNormalComponent } from '../covid-normal/covid-normal.component';
import { Covid3 } from '../_models/covid3.model';

@Component({
  selector: 'app-covid3',
  templateUrl: './covid3.component.html',
  styleUrls: ['./covid3.component.scss'],
})
export class Covid3Component implements OnInit {
  covid3Form: FormGroup;
  dehydration: any;
  bloodPressure: any;
  face: any;
  covid1: any;
  covid2: any;
  covid3: any;

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    public dialog: MatDialog
  ) {
    this.covid3Form = this.formBuilder.group(new Covid3());
  }
  submitResult() {
    this.face = document.querySelector('input[name="face"]:checked');
    this.dehydration = document.querySelector(
      'input[name="dehydration"]:checked'
    );
    this.bloodPressure = document.querySelector(
      'input[name="bloodPressure"]:checked'
    );
    this.covid3Form.removeControl('id');
    this.covid3Form.controls['face'].setValue(this.face.value);
    this.covid3Form.controls['dehydration'].setValue(this.dehydration.value);
    this.covid3Form.controls['bloodPressure'].setValue(
      this.bloodPressure.value
    );
    console.log(this.covid3Form.value);
    //this.covidTestService.createCovid2(this.covid2Form.value).subscribe((data) => {
    //console.log(data);
    //});
  }

  checkResult() {
    //console.log(this.covid3Form.controls['face'].value);
    if (
      this.covid3Form.controls['face'].value == 'no' &&
      this.covid3Form.controls['dehydration'].value == 'no' &&
      this.covid3Form.controls['bloodPressure'].value == 'low'
    ) {
      console.log('Go to nearest Hospital ASAP');
      const dialogRef = this.dialog.open(CovidMildComponent);

      dialogRef.afterClosed().subscribe((result) => {
        console.log(`Dialog result: ${result}`);
      });
    }
    if (
      this.covid3Form.controls['face'].value == 'yes' &&
      this.covid3Form.controls['dehydration'].value == 'yes' &&
      this.covid3Form.controls['bloodPressure'].value == 'high'
    ) {
      console.log('Go to nearest Hospital ASAP');
      const dialogRef = this.dialog.open(CovidHighComponent);

      dialogRef.afterClosed().subscribe((result) => {
        console.log(`Dialog result: ${result}`);
      });
    }
    if (
      this.covid3Form.controls['face'].value == 'yes' &&
      this.covid3Form.controls['dehydration'].value == 'yes' &&
      this.covid3Form.controls['bloodPressure'].value == 'normal'
    ) {
      console.log('Go to nearest Hospital ASAP');
      const dialogRef = this.dialog.open(CovidHighComponent);

      dialogRef.afterClosed().subscribe((result) => {
        console.log(`Dialog result: ${result}`);
      });
    }
    if (
      this.covid3Form.controls['face'].value == 'no' &&
      this.covid3Form.controls['dehydration'].value == 'yes' &&
      this.covid3Form.controls['bloodPressure'].value == 'low'
    ) {
      console.log('Go to nearest Hospital ASAP');
      const dialogRef = this.dialog.open(CovidMildComponent);

      dialogRef.afterClosed().subscribe((result) => {
        console.log(`Dialog result: ${result}`);
      });
    }
    if (
      this.covid3Form.controls['face'].value == 'yes' &&
      this.covid3Form.controls['dehydration'].value == 'no' &&
      this.covid3Form.controls['bloodPressure'].value == 'high'
    ) {
      console.log('Go to nearest Hospital ASAP');
      const dialogRef = this.dialog.open(CovidHighComponent);

      dialogRef.afterClosed().subscribe((result) => {
        console.log(`Dialog result: ${result}`);
      });
    }

    if (
      this.covid3Form.controls['face'].value == 'no' &&
      this.covid3Form.controls['dehydration'].value == 'no' &&
      this.covid3Form.controls['bloodPressure'].value == 'high'
    ) {
      console.log('Go to nearest Hospital ASAP');
      const dialogRef = this.dialog.open(CovidMildComponent);

      dialogRef.afterClosed().subscribe((result) => {
        console.log(`Dialog result: ${result}`);
      });
    }

    if (
      this.covid3Form.controls['face'].value == 'no' &&
      this.covid3Form.controls['dehydration'].value == 'no' &&
      this.covid3Form.controls['bloodPressure'].value == 'high'
    ) {
      console.log('Go to nearest Hospital ASAP');
      const dialogRef = this.dialog.open(CovidMildComponent);

      dialogRef.afterClosed().subscribe((result) => {
        console.log(`Dialog result: ${result}`);
      });
    }

    if (
      this.covid3Form.controls['face'].value == 'no' &&
      this.covid3Form.controls['dehydration'].value == 'yes' &&
      this.covid3Form.controls['bloodPressure'].value == 'high'
    ) {
      console.log('Go to nearest Hospital ASAP');
      const dialogRef = this.dialog.open(CovidHighComponent);

      dialogRef.afterClosed().subscribe((result) => {
        console.log(`Dialog result: ${result}`);
      });
    }
    if (
      this.covid3Form.controls['face'].value == 'no' &&
      this.covid3Form.controls['dehydration'].value == 'no' &&
      this.covid3Form.controls['bloodPressure'].value == 'low'
    ) {
      console.log('Go to nearest Hospital ASAP');
      const dialogRef = this.dialog.open(CovidMildComponent);

      dialogRef.afterClosed().subscribe((result) => {
        console.log(`Dialog result: ${result}`);
      });
    }
    if (
      this.covid3Form.controls['face'].value == 'yes' &&
      this.covid3Form.controls['dehydration'].value == 'no' &&
      this.covid3Form.controls['bloodPressure'].value == 'low'
    ) {
      console.log('Go to nearest Hospital ASAP');
      const dialogRef = this.dialog.open(CovidMildComponent);

      dialogRef.afterClosed().subscribe((result) => {
        console.log(`Dialog result: ${result}`);
      });
    }
    if (
      this.covid3Form.controls['face'].value == 'no' &&
      this.covid3Form.controls['dehydration'].value == 'yes' &&
      this.covid3Form.controls['bloodPressure'].value == 'low'
    ) {
      console.log('Go to nearest Hospital ASAP');
      const dialogRef = this.dialog.open(CovidMildComponent);

      dialogRef.afterClosed().subscribe((result) => {
        console.log(`Dialog result: ${result}`);
      });
    }

    if (
      this.covid3Form.controls['face'].value == 'no' &&
      this.covid3Form.controls['dehydration'].value == 'yes' &&
      this.covid3Form.controls['bloodPressure'].value == 'normal'
    ) {
      console.log('Go to nearest Hospital ASAP');
      const dialogRef = this.dialog.open(CovidNormalComponent);

      dialogRef.afterClosed().subscribe((result) => {
        console.log(`Dialog result: ${result}`);
      });
    }
    if (
      this.covid3Form.controls['face'].value == 'no' &&
      this.covid3Form.controls['dehydration'].value == 'no' &&
      this.covid3Form.controls['bloodPressure'].value == 'normal'
    ) {
      console.log('Go to nearest Hospital ASAP');
      const dialogRef = this.dialog.open(CovidNormalComponent);

      dialogRef.afterClosed().subscribe((result) => {
        console.log(`Dialog result: ${result}`);
      });
    }
    if (
      this.covid3Form.controls['face'].value == 'yes' &&
      this.covid3Form.controls['dehydration'].value == 'no' &&
      this.covid3Form.controls['bloodPressure'].value == 'normal'
    ) {
      console.log('Go to nearest Hospital ASAP');
      const dialogRef = this.dialog.open(CovidNormalComponent);

      dialogRef.afterClosed().subscribe((result) => {
        console.log(`Dialog result: ${result}`);
      });
    }
    if (
      this.covid3Form.controls['face'].value == 'no' &&
      this.covid3Form.controls['dehydration'].value == 'yes' &&
      this.covid3Form.controls['bloodPressure'].value == 'Normal'
    ) {
      console.log('Go to nearest Hospital ASAP');
      const dialogRef = this.dialog.open(CovidNormalComponent);

      dialogRef.afterClosed().subscribe((result) => {
        console.log(`Dialog result: ${result}`);
      });
    }
  }

  ngOnInit(): void {}
}
