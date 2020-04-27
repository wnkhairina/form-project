import { NgModule } from '@angular/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatFormFieldModule }from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@NgModule({
    imports: [
      MatDatepickerModule,
      BrowserAnimationsModule,
      MatFormFieldModule,
      MatInputModule
    ],
    exports: [
      MatDatepickerModule,
      BrowserAnimationsModule,
      MatFormFieldModule,
      MatInputModule
    ],
    providers: [ MatDatepickerModule ],
  })
  
  export class MaterialModule {}