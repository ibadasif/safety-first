import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthserviceService } from '../_services/authservice.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  loggedInUser: any;
  accountType: any;
  constructor(private authService: AuthserviceService,private router: Router) {

  }
  logout() {
    this.authService.logout();
    this.router.navigate([""]);
  }

  ngOnInit(): void {
    this.loggedInUser = JSON.parse(localStorage.getItem('loggedInUser'));
    if (this.loggedInUser != null) {
      this.accountType = this.loggedInUser.user.accountType;
      console.log(this.accountType);
    }
  }
}
