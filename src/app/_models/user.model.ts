import { FormControl, Validators } from '@angular/forms';

export class User {
    id = new FormControl('');
    status = new FormControl('active');
    accountType = new FormControl('');
    name = new FormControl('',Validators.required);
    password = new FormControl('',Validators.required);
    username = new FormControl('',Validators.required);
    email = new FormControl('',Validators.required);
    phone = new FormControl('',Validators.required);
    createdDate = new FormControl(new Date());
    agreed = new FormControl('');
}