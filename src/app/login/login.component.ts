import { HttpResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from "@angular/router";
import { AuthserviceService } from '../_services/authservice.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  submitted = false;
  loggedInUser:any;

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private authService: AuthserviceService,
  ) {
    this.loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));
   }

  ngOnInit(): void {
    if (this.loggedInUser != null){
      this.router.navigate(['home'])
    }
  
    this.loginForm = this.formBuilder.group({
      phone: [""],
      password: [""],
      /* recaptchaReactive: [null, Validators.required] */
    });
  }
  
  get fields() {
    return this.loginForm.controls;
  }


  login(): void {
    this.submitted = true;
    if (this.loginForm.invalid) {
      return;
    }
    this.authService
      .login(this.fields.phone.value, this.fields.password.value)
      .subscribe((response: HttpResponse<any>) => {
        if (response.body.status != null && response.body.status == "SUCCESS") {
          localStorage.setItem("loggedInUser", JSON.stringify(response.body));
          this.router.navigate(['home']);
        } else {
          //TODO : ERROR HANDELING
          this.router.navigate(['register']);
        }
      });
  }

  
}
