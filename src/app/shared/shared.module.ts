import { NgModule, ModuleWithProviders } from '@angular/core';

import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { DurationPipe } from './duration.pipe';
import { PositiveNumberDirective } from './validators/positive-number-validator.directive';

import { LogResponseInterceptor } from './interceptor.log-response';
import { AddHeaderInterceptor } from './interceptor.add-header';
import { CacheInterceptor } from './interceptor.cache';
import { providers } from './interceptor';

import { PlainLoggerService } from './logger-plain.service';
import { LoggerService } from './logger.service';
import { HttpCacheService } from './http-cache.service';

// import { ClarityModule } from '@clr/angular';
// import '@clr/icons/shapes/all-shapes';
import { TOASTR_TOKEN, Toastr } from './toastr.service';
import { JQUERY_TOKEN } from './jquery.service';
export const toastr: Toastr = window['toastr'];
export const jquery: any = window['$'];

@NgModule({
  imports: [CommonModule, RouterModule, FormsModule, ReactiveFormsModule, HttpClientModule],
  exports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,

    DurationPipe,

    // ClarityModule,
  ],
  providers: [
    HttpCacheService,
    LoggerService,
    PlainLoggerService,
    { provide: TOASTR_TOKEN, useValue: toastr },
    { provide: JQUERY_TOKEN, useValue: jquery },
    { provide: HTTP_INTERCEPTORS, useClass: LogResponseInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: AddHeaderInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: CacheInterceptor, multi: true },
    ...providers,
  ],
  declarations: [DurationPipe, PositiveNumberDirective],
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
  exports: [SharedModule, RouterTestingModule, HttpClientTestingModule],
  declarations: [],
})
export class SharedSpecModule {}
