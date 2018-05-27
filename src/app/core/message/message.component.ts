import { MessageService } from './message.service';
import { Component, OnInit, OnDestroy } from '@angular/core';

import { takeWhile } from 'rxjs/operators';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.scss'],
})
export class MessageComponent implements OnInit, OnDestroy {
  constructor(private messageService: MessageService) {}

  private alive = true;
  hasClose = true;
  message = '';
  messageClass = 'alert-danger';

  ngOnInit() {
    this.messageService.message$.pipe(takeWhile(() => this.alive)).subscribe((res) => {
      this.message = res.message;
      this.messageClass = res.messageClass;
      this.hasClose = res.hasClose;
    });
  }

  onClose() {
    this.message = '';
  }

  ngOnDestroy() {
    // takeWhile and alive prevent memory leaks.
    this.alive = false;
  }
}
