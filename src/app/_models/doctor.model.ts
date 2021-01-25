import { FormControl, Validators } from "@angular/forms";

export class Doctor {
    id= new FormControl('');
    status = new FormControl('Active');
    name  = new FormControl('',Validators.required); 
    email = new FormControl('',Validators.required);
    qualifications = new FormControl('',Validators.required);
    phone = new FormControl('',Validators.required);
    hospitals = new FormControl('',Validators.required);
    clinic = new FormControl('',Validators.required);
}
