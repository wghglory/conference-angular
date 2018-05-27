import { CanDeactivate } from '@angular/router';
import { Observable } from 'rxjs';

export interface CanComponentDeactivate {
  canDeactivate: boolean | Promise<boolean> | Observable<boolean>;
}

// EventCreateComponent uses this guard

// note that component should implement CanComponentDeactivate,
// with a property called canDeactivate
export class CanDeactivateGuard implements CanDeactivate<CanComponentDeactivate> {
  canDeactivate(
    component: CanComponentDeactivate,
  ): Observable<boolean> | Promise<boolean> | boolean {
    // run the function for canDeactivate and if its a promise or a boolean we handle it either way

    return component.canDeactivate;
  }
}
