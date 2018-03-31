import { Component, OnInit, Inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { IEvent, CommonError } from '../models/';

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
    private route: ActivatedRoute,
    private router: Router,
  ) {}

  events: IEvent[];

  onEventClick(event) {
    this.toastr.success(event.name);
    this.router.navigate(['/events', event.id]);
  }

  deleteEvent(eventId: number): void {
    this.eventService.deleteEvent(eventId).subscribe(
      (data: void) => {
        console.log(`delete successfully`);
      },
      (err: any) => console.log(err),
    );
  }

  ngOnInit() {
    // this.eventService.getEvents().subscribe((res) => (this.events = res));

    // use resolver
    const resolvedData: IEvent[] | CommonError = this.route.snapshot.data['events'];

    if (resolvedData instanceof CommonError) {
      alert(`Handling error here by UI message: ${resolvedData.message}`);
    } else {
      this.events = resolvedData;
    }
  }
}
