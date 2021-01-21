import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-covid1',
  templateUrl: './covid1.component.html',
  styleUrls: ['./covid1.component.scss']
})
export class Covid1Component implements OnInit {

  constructor(private router:Router) { }

  goToPage(pageName:string):void{
    this.router.navigate([`${pageName}`]);
  }

  ngOnInit(): void {
  }

  
}
