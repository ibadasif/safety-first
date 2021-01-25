import { FormControl, Validators } from "@angular/forms";

export class Covid1 {
    id = new FormControl('');
    disease = new FormControl('',Validators.required);
    geneticDisorder = new FormControl('',Validators.required);
    age = new FormControl('');
    gender = new FormControl('');
}
