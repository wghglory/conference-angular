import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { IEvent } from './event.model';

import { EventService } from './event.service';

@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.scss'],
})
export class EventListComponent implements OnInit {
  constructor(private eventService: EventService) {}

  events: IEvent[];

  ngOnInit() {
    this.eventService.getEvents().subscribe((res) => (this.events = res));
  }
}
