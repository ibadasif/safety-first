import { FormControl, Validators } from '@angular/forms';

export class User {
    id = new FormControl('');
    status = new FormControl('active');
    accountType = new FormControl('');
    name = new FormControl('');
    password = new FormControl('');
    confirmPassword = new FormControl('');
    username = new FormControl('');
    email = new FormControl('');
    phone = new FormControl('');
    createdDate = new FormControl(new Date());
    agreed = new FormControl('');
}