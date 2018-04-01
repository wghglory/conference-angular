import { NgModule, ModuleWithProviders, Optional, SkipSelf, ErrorHandler } from '@angular/core';

import { throwIfAlreadyLoaded } from './module-import-guard';

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
import { HttpCacheServiceFactory } from './http-cache.factory.service';
import { CommonErrorHandlerService } from './error-handler.service';

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
    // {
    //   provide: LoggerService,
    //   useValue: {
    //     log: (message) => console.log(`MESSAGE: ${message}`),
    //     error: (message) => console.error(`PROBLEM: ${message}`),
    //   },
    // },
    { provide: HttpCacheService, useFactory: HttpCacheServiceFactory, deps: [LoggerService] },
    // HttpCacheService,
    // LoggerService,
    PlainLoggerService,
    { provide: LoggerService, useExisting: PlainLoggerService },
    { provide: TOASTR_TOKEN, useValue: toastr },
    { provide: JQUERY_TOKEN, useValue: jquery },
    { provide: HTTP_INTERCEPTORS, useClass: LogResponseInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: AddHeaderInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: CacheInterceptor, multi: true },
    ...providers,
    { provide: ErrorHandler, useClass: CommonErrorHandlerService },
  ],
  declarations: [DurationPipe, PositiveNumberDirective],
})
export class SharedModule {
  constructor(
    @Optional()
    @SkipSelf()
    parentModule: SharedModule,
  ) {
    throwIfAlreadyLoaded(parentModule, 'SharedModule');
  }

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
