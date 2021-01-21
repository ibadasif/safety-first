import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss'],
})
export class ServicesComponent implements OnInit {
  loggedInUser:any;
  constructor(private router: Router) {
    this.loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));
  }

  goToPage(pageName: string): void {
    this.router.navigate([`${pageName}`]);
  }

  ngOnInit(): void {
    if (this.loggedInUser == null){
      this.router.navigate([''])
    }
  
  }
}
