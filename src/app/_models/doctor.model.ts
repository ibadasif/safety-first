import { FormControl } from "@angular/forms";

export class Doctor {
    id= new FormControl(null);
    status = new FormControl('Active');
    name  = new FormControl(null); 

}
