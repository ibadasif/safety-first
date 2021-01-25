import { Route } from '@angular/compiler/src/core';
import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { FormBuilder, FormGroup } from "@angular/forms";
import { User } from '../_models/user.model';
import { AuthserviceService } from '../_services/authservice.service';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;
  loggedInUser:any;

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private authService: AuthserviceService,
  ) {
    this.registerForm = this.formBuilder.group(new User());
    this.loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));
   }

  ngOnInit(): void {
    if (this.loggedInUser != null){
      this.router.navigate(['home'])
    }
  }
  get fields() {
    return this.registerForm.controls;
  }


  register(): void {
    this.registerForm.removeControl('id');//mace
    let user = this.registerForm.getRawValue();
    this.authService.register(user).subscribe(() => {
    this.router.navigate([''])});
    this.registerForm.reset();
  };


}
