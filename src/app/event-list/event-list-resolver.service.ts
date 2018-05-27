import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';

import { catchError } from 'rxjs/operators';
import { Observable, of } from 'rxjs';

import { EventService } from '../shared/services';
import { CommonError, IEvent } from '../shared/models';

@Injectable()
export class EventListResolverService implements Resolve<IEvent[] | CommonError> {
  constructor(private eventService: EventService) {}

  resolve(route: ActivatedRouteSnapshot): Observable<IEvent[] | CommonError> {
    // map() return Observable; subscribe() return subscription
    // in resolve, we need to return Observable, cannot call subscribe.
    // angular can watch Observable and see if it finishes
    return this.eventService.getEvents().pipe(catchError((err) => of(err)));
  }
}
