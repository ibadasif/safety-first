import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  loggedInUser:any;
  constructor(
    private router: Router
  ) {
    this.loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));
    
   }

  ngOnInit(): void {
    if (this.loggedInUser == null){
      this.router.navigate([''])
    }
  
  }

}
