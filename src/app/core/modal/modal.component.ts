import { Component, OnInit, ViewChild, ElementRef, OnDestroy } from '@angular/core';

import { ModalService } from './modal.service';

const KEY_ESC = 27;

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
})
export class ModalComponent implements OnInit, OnDestroy {
  timer: any;
  title: string;
  message: string;
  okText: string;
  cancelText: string;
  negativeOnClick: (e: any) => void;
  positiveOnClick: (e: any) => void;

  @ViewChild('globalModal') modalElement: ElementRef;
  @ViewChild('cancelButton') cancelButton: ElementRef;
  @ViewChild('okButton') okButton: ElementRef;
  private defaults = {
    title: 'Confirmation',
    message: 'Do you want to cancel your changes?',
    cancelText: 'Cancel',
    okText: 'OK',
  };

  constructor(private modalService: ModalService) {
    this.modalService.activate = this.activate.bind(this);
  }

  activate(title = this.defaults.title, message = this.defaults.message) {
    this.title = title;
    this.message = message;
    this.okText = this.defaults.okText;
    this.cancelText = this.defaults.cancelText;

    const promise = new Promise<boolean>((resolve, reject) => {
      this.negativeOnClick = (e: any) => resolve(false);
      this.positiveOnClick = (e: any) => resolve(true);
      this.show();
    });

    return promise;
  }

  private show() {
    document.onkeyup = null;

    if (!this.modalElement || !this.cancelButton || !this.okButton) {
      return;
    }

    this.modalElement.nativeElement.style.opacity = 1;
    this.modalElement.nativeElement.style.zIndex = 999;

    this.cancelButton.nativeElement.onclick = (e: any) => {
      e.preventDefault();
      if (!this.negativeOnClick(e)) {
        this.hideDialog();
      }
    };

    this.okButton.nativeElement.onclick = (e: any) => {
      e.preventDefault();
      if (!this.positiveOnClick(e)) {
        this.hideDialog();
      }
    };

    this.modalElement.nativeElement.onclick = () => {
      this.hideDialog();
      return this.negativeOnClick(null);
    };

    document.onkeyup = (e: any) => {
      if (e.which === KEY_ESC) {
        this.hideDialog();
        return this.negativeOnClick(null);
      }
    };
  }

  private hideDialog() {
    document.onkeyup = null;
    this.modalElement.nativeElement.style.opacity = 0;
    this.timer = setTimeout(() => (this.modalElement.nativeElement.style.zIndex = -1), 400);
  }

  ngOnInit() {}

  ngOnDestroy() {
    clearTimeout(this.timer);
  }
}
