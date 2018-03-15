import { Component, OnInit, Inject } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { IEvent } from './event.model';

import { EventService } from './event.service';

import { TOASTR_TOKEN, Toastr } from './../shared/toastr.service';

@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.scss'],
})
export class EventListComponent implements OnInit {
  constructor(private eventService: EventService, @Inject(TOASTR_TOKEN) private toastr: Toastr) {}

  events: IEvent[];

  showToastr(name) {
    this.toastr.success(name);
  }

  ngOnInit() {
    this.eventService.getEvents().subscribe((res) => (this.events = res));
  }
}
