import { Component, OnInit, createPlatformFactory } from '@angular/core';
import { FormBuilder, AbstractControl, EmailValidator, FormGroup } from '@angular/forms';
import { Validators } from '@angular/forms';
import { CustomValidators } from './custom-validators';
import { MatDatepickerModule } from '@angular/material/datepicker';


@Component({
  selector: 'app-name-editor',
  templateUrl: './name-editor.component.html',
  styleUrls: ['./name-editor.component.css']
})
export class NameEditorComponent implements OnInit {
  constructor(private fb: FormBuilder) { }

  nameForm: FormGroup;

  ngOnInit(): void {
    this.nameForm = this.fb.group
     ({
      title: ['', Validators.required],
      firstName: ['', [Validators.required, Validators.pattern('[a-zA-Z ]*')]],
      lastName: ['', [Validators.required, Validators.pattern('[a-zA-Z ]*')]],
      address: ['', Validators.required, Validators.email, Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')],
      confirm: ['', Validators.required, Validators.email],
      birthDate: ['', Validators.required],
      phoneNum: ['', Validators.required, Validators.pattern(/^\d{3}-\d{5}-\d{3}$/)],
      password: ['',Validators.compose([
        Validators.required,
        Validators.minLength(8),
        CustomValidators.patternValidator(/^[a-zA-Z0-9]*$/, { hasNumber: true })
      ])
      ]
    })
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



