import { Component, OnDestroy, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Subscription } from 'rxjs';

import { ToastrService } from './toastr.service';

@Component({
  selector: 'app-toastr',
  templateUrl: './toastr.component.html',
  styleUrls: ['./toastr.component.scss'],
})
export class ToastrComponent implements OnDestroy, OnInit {
  private defaults = {
    title: '',
    message: 'May the Force be with You',
  };
  @ViewChild('toastrEle') toastrEle: ElementRef;

  // private toastrElement: any;
  private toastrSubscription: Subscription;

  title: string;
  message: string;
  timer1: any;
  timer2: any;

  constructor(private toastrService: ToastrService) {
    this.toastrSubscription = this.toastrService.toastrState$$.subscribe((toastr) => {
      // console.log(`activating toastr: ${toastr.message}`);
      this.activate(toastr.message);
    });
  }

  activate(message = this.defaults.message, title = this.defaults.title) {
    this.title = title;
    this.message = message;
    this.show();
  }

  ngOnInit() {
    // this.toastrElement = document.getElementById('toastr');
  }

  ngOnDestroy() {
    this.toastrSubscription.unsubscribe();
    clearTimeout(this.timer1);
    clearTimeout(this.timer2);
  }

  private show() {
    this.toastrEle.nativeElement.style.opacity = 1;
    this.toastrEle.nativeElement.style.zIndex = 9999;

    // this.toastrElement.style.opacity = 1;
    // this.toastrElement.style.zIndex = 9999;

    this.timer1 = setTimeout(() => this.hide(), 2500);
  }

  private hide() {
    this.toastrEle.nativeElement.style.opacity = 0;
    this.timer2 = setTimeout(() => (this.toastrEle.nativeElement.style.zIndex = 0), 400);

    // this.toastrElement.style.opacity = 0;
    // this.timer2 = setTimeout(() => (this.toastrElement.style.zIndex = 0), 400);
  }
}
