import { ValidationErrors, ValidatorFn, AbstractControl } from '@angular/forms';

export class CustomValidators {
  static patternValidator(regex: RegExp, error: ValidationErrors): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } => {
      if (!control.value) {
        // if control is empty return no error
        return null;
      }

      // test the value of the control against the regexp supplied
      const valid = regex.test(control.value);

      // if true, return no error (no error), else return error passed in the second parameter
      return valid ? null : error;
    }
  }

  static emailMatchValidator(control: AbstractControl) {
    const email: string = control.get('address').value; // get password from our password form control
    const confirmEmail: string = control.get('confirm').value; // get password from our confirmPassword form control
    // compare is the password math
    if (email !== confirmEmail) {
      // if they don't match, set an error in our confirmPassword form control
      control.get('confirm').setErrors({ NoEmailMatch: true });
    }
  }
}