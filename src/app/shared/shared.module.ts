import { NgModule, ModuleWithProviders } from '@angular/core';

import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

// import { ClarityModule } from '@clr/angular';
// import '@clr/icons/shapes/all-shapes';

@NgModule({
  imports: [CommonModule, RouterModule, FormsModule, ReactiveFormsModule, HttpClientModule],
  exports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,

    // ClarityModule,
  ],
  declarations: [],
})
export class SharedModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: SharedModule,
      providers: [],
    };
  }

  static forChild(): ModuleWithProviders {
    return {
      ngModule: SharedModule,
      providers: [],
    };
  }
}

@NgModule({
  imports: [SharedModule, RouterTestingModule, HttpClientTestingModule],
  exports: [SharedModule],
  declarations: [],
})
export class SharedSpecModule {}
