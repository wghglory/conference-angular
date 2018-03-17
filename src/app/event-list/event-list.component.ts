import { Component, OnInit, Inject } from '@angular/core';
import { Router } from '@angular/router';

import { IEvent } from '../models/';

import { EventService } from '../services';

import { TOASTR_TOKEN, Toastr } from './../shared/toastr.service';

@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.scss'],
})
export class EventListComponent implements OnInit {
  constructor(
    private eventService: EventService,
    @Inject(TOASTR_TOKEN) private toastr: Toastr,
    private router: Router,
  ) {}

  events: IEvent[];

  onEventClick(event) {
    this.toastr.success(event.name);
    this.router.navigate(['/events', event.id]);
  }

  ngOnInit() {
    this.eventService.getEvents().subscribe((res) => (this.events = res));
  }
}
