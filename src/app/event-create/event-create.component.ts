import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { CanComponentDeactivate } from './../core/services/deactivate.guard';

import { EventService } from '../shared/services';
import { IEvent } from '../shared/models';

import { LocationValidatorDirective } from './location-validator.directive';

@Component({
  selector: 'app-event-create',
  templateUrl: './event-create.component.html',
  styleUrls: ['./event-create.component.scss'],
  providers: [LocationValidatorDirective],
})
export class EventCreateComponent implements OnInit, CanComponentDeactivate {
  // in real scenario, use entity service's propertiesDiffer to determine isDirty
  isDirty = true;

  // (ngModel) one-way binding, but AOT builds need these props
  // name: string;
  // date: Date;
  // time: string;
  // price: number;
  // address: string;
  // city: string;
  // country: string;
  // onlineUrl: string;
  // imageUrl: string;

  // avoid writing all props, template ngModel=event.prop
  event: IEvent;

  get canDeactivate() {
    if (this.isDirty) {
      return confirm(`you haven't save the event. Are you sure to cancel?`);
    }
    return true;
  }

  constructor(private router: Router, private eventService: EventService) {}

  cancel() {
    this.router.navigate(['/events']);
  }

  saveEvent(formValues) {
    this.eventService.saveEvent(<IEvent>formValues).subscribe((e) => {
      this.isDirty = false;
      this.router.navigate(['/events']);
    });
  }

  ngOnInit() {}
}
