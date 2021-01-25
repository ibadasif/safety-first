import { FormControl, Validators } from "@angular/forms";

export class Covid2 {
    id = new FormControl('');
    breathing = new FormControl('');
    precautions = new FormControl('');
    symptomps = new FormControl('',Validators.required);
}
