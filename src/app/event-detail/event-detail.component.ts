import { Observable } from 'rxjs/Observable';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { EventService } from '../services';

import { IEvent } from '../models';

@Component({
  selector: 'app-event-detail',
  templateUrl: './event-detail.component.html',
  styleUrls: ['./event-detail.component.scss'],
})
export class EventDetailComponent implements OnInit {
  constructor(private eventService: EventService, private route: ActivatedRoute) {}

  event$: Observable<IEvent>;

  ngOnInit() {
    this.event$ = this.eventService.getEvent(+this.route.snapshot.paramMap.get('id'));
  }
}
