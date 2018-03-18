import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';

import { EventService } from '../services';

@Injectable()
export class EventDetailResolverService implements Resolve<any> {
  constructor(private eventService: EventService) {}

  resolve(route: ActivatedRouteSnapshot) {
    // map() return Observable; subscribe() return subscription
    // in resolve, we need to return Observable, cannot call subscribe.
    // angular can watch Observable and see if it finishes
    return this.eventService.getEvent(+route.paramMap.get('id'));
  }
}
