import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-covid2',
  templateUrl: './covid2.component.html',
  styleUrls: ['./covid2.component.scss']
})
export class Covid2Component implements OnInit {

  constructor(private router:Router) { }

  goToPage(pageName:string):void{
    this.router.navigate([`${pageName}`]);
  }

  ngOnInit(): void {
  }

}
