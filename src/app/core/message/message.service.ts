import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable()
export class MessageService {
  constructor() {}

  private messageSource = new Subject<MessageConfig.Message>();

  message$ = this.messageSource.asObservable();

  updateMessage({
    message,
    messageClass = 'alert-danger',
    hasClose = true,
  }: {
    message: string;
    messageClass?: string;
    hasClose?: boolean;
  }) {
    this.messageSource.next({
      message,
      messageClass,
      hasClose,
    });
  }

  clearMessage() {
    this.messageSource.next({
      message: '',
      messageClass: 'alert-danger',
      hasClose: true,
    });
  }
}

export namespace MessageConfig {
  export interface Message {
    message: string;
    messageClass: string;
    hasClose: boolean;
  }
}
