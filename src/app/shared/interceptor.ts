import { Provider, ClassProvider, FactoryProvider, Injectable } from '@angular/core';

import {
  HttpInterceptor,
  HttpHandler,
  HttpRequest,
  HttpErrorResponse,
  HTTP_INTERCEPTORS,
} from '@angular/common/http';

import { Router } from '@angular/router';

import { Observable } from 'rxjs/Observable';

import { CommonError } from '../models';
import { ErrorObservable } from 'rxjs/observable/ErrorObservable';

import { MessageService } from '../shared/message/message.service';

@Injectable()
export class ErrorHandlingInterceptor implements HttpInterceptor {
  constructor(private messageService: MessageService) {}

  private handleHttpError(err: HttpErrorResponse): Observable<any> {
    const dataError = new CommonError();
    dataError.code = err.error.code || err.status;
    dataError.message = err.error.message || err.message;

    this.messageService.updateMessage({
      message: dataError.message,
    });

    return ErrorObservable.create(dataError); // Observable.throw(dataError);
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<any> {
    return next.handle(req).catch((err: HttpErrorResponse) => {
      // return Observable.throw(err);
      return this.handleHttpError(err);
    });
  }
}

export class AuthInterceptor implements HttpInterceptor {
  constructor(private router: Router) {}

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    return next.handle(req).catch((event) => {
      if (event instanceof HttpErrorResponse) {
        const bounce = [
          event.status === 401, // unauthorized
          /\/api\//.test(req.url), // API endpoint to /api/*
          !/\/api\/login/.test(req.url), // not API calls for login

          // not API calls for userInfo, handled in UI level
          !/\/api\/user-info/.test(req.url),
        ].every(Boolean);

        if (bounce) {
          this.router.navigateByUrl('/login', {
            replaceUrl: true,
          });

          return Observable.empty();
        }
      }

      return Observable.throw(event);
    });
  }
}

export function AuthInspectorFactory(router: Router) {
  return new AuthInterceptor(router);
}

export const providers: Provider[] = [
  <ClassProvider>{
    provide: HTTP_INTERCEPTORS,
    useClass: ErrorHandlingInterceptor,
    multi: true,
  },

  // <FactoryProvider>{
  //   provide: HTTP_INTERCEPTORS,
  //   useFactory: AuthInspectorFactory,
  //   multi: true,
  //   deps: [Router],
  // },
];
