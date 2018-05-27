import { providers } from './../interceptors/interceptor';
import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { throwIfAlreadyLoaded } from '../services/module-duplicate-import.guard';

import { ToastrComponent } from './toastr.component';
import { ToastrService } from './toastr.service';

@NgModule({
  imports: [CommonModule],
  exports: [ToastrComponent],
  declarations: [ToastrComponent],
  providers: [ToastrService],
})
export class ToastrModule {
  constructor(
    @Optional()
    @SkipSelf()
    parentModule: ToastrModule,
  ) {
    throwIfAlreadyLoaded(parentModule, 'ToastrModule');
  }
}
