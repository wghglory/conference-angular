// import './rxjs-operators';

import { NgModule, Optional, SkipSelf, ErrorHandler } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { MessageModule } from './message/message.module';
import { ToastrModule } from './toastr/toastr.module';
import { ModalModule } from './modal/modal.module';
import { SharedModule } from '../shared/shared.module';

import { throwIfAlreadyLoaded } from './services/module-duplicate-import.guard';

import { LogResponseInterceptor } from './interceptors/interceptor.log-response';
import { AddHeaderInterceptor } from './interceptors/interceptor.add-header';
import { CacheInterceptor } from './interceptors/interceptor.cache';
import { providers } from './interceptors/interceptor';

import { EntityService } from './services/entity.service';
import { PlainLoggerService } from './services/logger-plain.service';
import { LoggerService } from './services/logger.service';
import { HttpCacheService } from './services/http-cache.service';
import { HttpCacheServiceFactory } from './services/http-cache.factory.service';
import { CommonErrorHandlerService } from './services/error-handler.service';
import { AuthService } from './services/auth.service';
import { AuthGuard } from './services/auth.guard';

import { TOASTR_TOKEN, Toastr } from './services/toastr.service';
import { JQUERY_TOKEN } from './services/jquery.service';
export const toastr: Toastr = window['toastr'];
export const jquery: any = window['$'];

// import { ClarityModule } from '@clr/angular';
// import '@clr/icons/shapes/all-shapes';

import { NavbarComponent } from './navbar/navbar.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule,
    SharedModule,
  ],
  providers: [
    AuthGuard,
    AuthService,
    EntityService,
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
  declarations: [NavbarComponent],
  exports: [
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule,
    MessageModule,
    ToastrModule,
    ModalModule,
    NavbarComponent,
    // ClarityModule
  ],
})
export class CoreModule {
  constructor(
    @Optional()
    @SkipSelf()
    parentModule: CoreModule,
  ) {
    throwIfAlreadyLoaded(parentModule, 'CoreModule');
  }
}
