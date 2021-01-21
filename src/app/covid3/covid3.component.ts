import { analyzeAndValidateNgModules } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-covid3',
  templateUrl: './covid3.component.html',
  styleUrls: ['./covid3.component.scss'],
})
export class Covid3Component implements OnInit {
  constructor() {}
  ngOnInit(): void {}

  clicked() {
    var element = <HTMLInputElement>document.getElementById('defaultCheck1');
    var isChecked = element.checked;
    if (isChecked === true) {
      console.log(isChecked);
    }
  }
}
