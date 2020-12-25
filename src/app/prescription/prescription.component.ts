import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { from } from 'rxjs';
import { DengueComponent } from '../dengue/dengue.component';
import {HypertensionComponent } from '../hypertension/hypertension.component';
import {InfluenzaComponent} from '../influenza/influenza.component';
import {LiverdiseaseComponent} from '../liverdisease/liverdisease.component';
import {MultiplesclerosisComponent} from '../multiplesclerosis/multiplesclerosis.component';
import{TyphoidComponent}  from '../typhoid/typhoid.component';
import {HepatitisComponent} from '../hepatitis/hepatitis.component';
import {AllergyComponent} from '../allergy/allergy.component';
import {AlzheimerComponent} from '../alzheimer/alzheimer.component';
import {AsthamaComponent} from '../asthama/asthama.component';
import {AppendixComponent} from '../appendix/appendix.component';
import {BraintumorComponent} from '../braintumor/braintumor.component';
import {DiabetesComponent} from '../diabetes/diabetes.component';
import {TuberculosisComponent} from '../tuberculosis/tuberculosis.component';


@Component({
  selector: 'app-prescription',
  templateUrl: './prescription.component.html',
  styleUrls: ['./prescription.component.scss']
})
export class PrescriptionComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  opendengue() {
    const dialogRef = this.dialog.open(DengueComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  openhypertension() {
    const dialogRef = this.dialog.open(HypertensionComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
  openinfluenza() {
    const dialogRef = this.dialog.open(InfluenzaComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
  openliver() {
    const dialogRef = this.dialog.open(LiverdiseaseComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
  openmultiple() {
    const dialogRef = this.dialog.open(MultiplesclerosisComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
  opentyphoid() {
    const dialogRef = this.dialog.open(TyphoidComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
  openhepatitis() {
    const dialogRef = this.dialog.open(HepatitisComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
  openallergy() {
    const dialogRef = this.dialog.open(AllergyComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
  openalzhemier() {
    const dialogRef = this.dialog.open(AlzheimerComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
  openasthama() {
    const dialogRef = this.dialog.open(AsthamaComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
  openappendix() {
    const dialogRef = this.dialog.open(AppendixComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
  openbrain() {
    const dialogRef = this.dialog.open(BraintumorComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
 
  opendiabetes() {
    const dialogRef = this.dialog.open(DiabetesComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
  opentuber() {
    const dialogRef = this.dialog.open(TuberculosisComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

}  