import { Component, OnInit, createPlatformFactory } from '@angular/core';
import { FormBuilder, AbstractControl, EmailValidator, FormGroup } from '@angular/forms';
import { Validators } from '@angular/forms';
import { CustomValidators } from 'src/app/shared/custom-validators';
import { MatDatepickerModule } from '@angular/material/datepicker';


@Component({
  selector: 'app-name-editor',
  templateUrl: './name-editor.component.html',
  styleUrls: ['./name-editor.component.css']
})
export class NameEditorComponent implements OnInit {
  constructor(private fb: FormBuilder) { }

  nameForm: FormGroup;

  validationMessages = {
    'title': {
      'required': 'Title is required'
    },
    'firstName': {
      'required': 'First name is required',
      'pattern' : 'First name must consist of letters and spaces only'
    },
    'lastName': {
      'required': 'Last Name is required',
      'pattern' : 'Last name must consist of letters and spaces only'

    },
    'address': {
      'required': 'Email address is required',
      'email': 'Email address not valid'
    },
    'confirm': {
      'required': 'Confirm email is required',
      'MustMatch': 'Email not matched',
      'email': 'Email address not valid'
    },
    'birthDate': {
      'required': 'Date of birthday is required'
    },
    'phoneNum': {
      'required': 'Phone Number is required',
      'pattern': 'Incorrect phone number format (555-55555-555)'
    },
    'password': {
      'required': 'Password is required',
      'minLength(8)': 'Password must contain atleast 8 characters',
      'patternValidation': 'Password must contain a number',
      'pattern': 'Password must contain letters and numbers'
    }
  };

  formErrors = {
    'title':'',
    'firstName':'',
    'lastName':'',
    'address':'',
    'confirm':'',
    'birthDate':'',
    'phoneNum':'',
    'password':''

  };


  ngOnInit(): void {
    this.nameForm = this.fb.group
     ({
      title: ['', Validators.required],
      firstName: ['', [Validators.required, Validators.pattern('[a-zA-Z ]*')]],
      lastName: ['', [Validators.required, Validators.pattern('[a-zA-Z ]*')]],
      address: ['', [Validators.required, Validators.email]],
      confirm: ['', [Validators.required, Validators.email]],
      birthDate: ['', [Validators.required]],
      phoneNum: ['', [Validators.required, Validators.pattern(/^\d{3}-\d{5}-\d{3}$/)]],
      password: ['',[
        Validators.required,
        Validators.minLength(8),
      ]]
      
    });
    this.nameForm.valueChanges.subscribe((data) =>{
      this.logValidationErrors(this.nameForm);
    });
  }


  logValidationErrors(group: FormGroup = this.nameForm): void {
    Object.keys(group.controls).forEach((key: string) => {
      const abstractControl = group.get(key);
      if (abstractControl instanceof FormGroup) {
        this.logValidationErrors(abstractControl);
      } else {
        this.formErrors[key] = '';
        if (abstractControl && !abstractControl.valid && 
          (abstractControl.touched || abstractControl.dirty)) {
          const messages = this.validationMessages[key];

          for(const errorKey in abstractControl.errors) {
            if (errorKey) {
                this.formErrors[key] += messages[errorKey] + ' ';
            }
          }
        }
      }
    });
  }

  onLoadDataClick(): void {
    // this.logValidationErrors(this.nameForm);
    // console.log(this.formErrors);
  }


  onSubmit() {
    // TODO: Use EventEmitter with form value
    console.warn(this.nameForm.value);
    console.log(this.nameForm.touched);

    console.log(this.nameForm.controls.firstName.touched);
  }

  get firstName(){
    return this.nameForm.get('firstName')
  }

  get lastName(){
    return this.nameForm.get('lastName')
  }

}




function MustMatch(address: string, confirm: string) {
  return (formGroup: FormGroup) => {
      const control = formGroup.controls[address];
      const matchingControl = formGroup.controls[confirm];

      if (matchingControl.errors && !matchingControl.errors.mustMatch) {
          // return if another validator has already found an error on the matchingControl
          return;
      }

      // set error on matchingControl if validation fails
      if (control.value !== matchingControl.value) {
          matchingControl.setErrors({ mustMatch: true });
      } else {
          matchingControl.setErrors(null);
      }
  }
}

