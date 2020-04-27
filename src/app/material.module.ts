import { NgModule } from '@angular/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatFormFieldModule }from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {MatGridListModule} from '@angular/material/grid-list';



@NgModule({
    imports: [
      MatDatepickerModule,
      BrowserAnimationsModule,
      MatFormFieldModule,
      MatInputModule,
      MatGridListModule,
    ],
    exports: [
      MatDatepickerModule,
      BrowserAnimationsModule,
      MatFormFieldModule,
      MatInputModule,
      MatGridListModule
    ],
    providers: [ MatDatepickerModule ],
  })
  
  export class MaterialModule {}