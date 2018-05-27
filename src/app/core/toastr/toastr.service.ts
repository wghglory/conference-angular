import { Injectable, Optional, SkipSelf } from '@angular/core';
import { Subject } from 'rxjs';

export interface Toastr {
  message: string;
}

@Injectable({
  providedIn: 'root',
})
export class ToastrService {
  private toastrSubject = new Subject<Toastr>();

  toastrState$$ = this.toastrSubject.asObservable();

  constructor(
    @Optional()
    @SkipSelf()
    prior: ToastrService,
  ) {
    if (prior) {
      console.warn('toastr service already exists');
      return prior;
    } else {
      console.log('created toastr service');
    }
  }

  activate(message: string) {
    this.toastrSubject.next(<Toastr>{ message });
  }
}
