import { AbstractControl, ValidationErrors } from "@angular/forms";

export class CustomValidations {

    // This is synchronous 
    static unique(control: AbstractControl): ValidationErrors | null {
        return control.value === 'kold' ? { unique: true } : null;
        // return null;
    }

    // This is asynchronous
    static asyncUnique(control: AbstractControl): Promise<ValidationErrors | null> | null {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                control.value === 'kold' ? resolve({ asyncUnique: true }) : resolve(null);
            }, 5000);
        });
    }
}
