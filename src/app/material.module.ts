import { NgModule } from '@angular/core';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  MatCommonModule,
  MatButtonModule,
  MatCheckboxModule,
  MatCardModule,
  MatAutocompleteModule,
} from '@angular/material';

@NgModule({
  declarations: [],
  imports: [
    BrowserAnimationsModule,
    MatCommonModule,
    MatButtonModule,
    MatCheckboxModule,
    MatCardModule,
    MatAutocompleteModule,
  ],
  exports: [
    BrowserAnimationsModule,
    MatCommonModule,
    MatButtonModule,
    MatCheckboxModule,
    MatCardModule,
    MatAutocompleteModule,
  ],
  providers: [],
})
export class MaterialModule {}
