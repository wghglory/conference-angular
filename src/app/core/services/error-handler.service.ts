import { Injectable, ErrorHandler } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';

import { CommonError } from '../../shared/models/error.model';

import { MessageService } from '../message/message.service';

@Injectable()
export class CommonErrorHandlerService implements ErrorHandler {
  constructor(private messageService: MessageService) {}

  handleError(err: any): void {
    const customError = new CommonError();
    customError.code = err.error.code || (<HttpErrorResponse>err).status;
    customError.message = err.error.message || (<HttpErrorResponse>err).message;

    this.messageService.updateMessage({
      message: customError.message,
    });
  }
}
