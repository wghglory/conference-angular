import { Component, OnInit, Inject, VERSION } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Title } from '@angular/platform-browser';

import { IEvent, CommonError } from '../shared/models/';

import { EventService } from '../shared/services';

import { TOASTR_TOKEN, Toastr } from '../core/services/toastr.service';
import { ToastrService } from '../core/toastr/toastr.service';

@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.scss'],
})
export class EventListComponent implements OnInit {
  constructor(
    private eventService: EventService,
    @Inject(TOASTR_TOKEN) private toastr: Toastr,
    private toastrService: ToastrService,
    private route: ActivatedRoute,
    private router: Router,
    private title: Title,
  ) {}

  events: IEvent[];

  // https://angular.io/api/common/NgForOf
  trackById(index: number, event: IEvent) {
    return event.id;
  }

  onEventClick(event) {
    this.toastr.success(event.name);
    this.toastrService.activate(event.name);
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
    // this.eventService
    //   .getEvents()
    //   .subscribe(
    //     (data: IEvent[]) => (this.events = data),
    //     (err: CommonError) => console.log(err.message),
    //     () => console.log('execute only after first para and no error.'),
    //   );

    // use resolver
    const resolvedData: IEvent[] | CommonError = this.route.snapshot.data['events'];

    if (resolvedData instanceof CommonError) {
      console.log(`Handling error here by UI message: ${resolvedData.message}`);
    } else {
      this.events = resolvedData;
    }

    // demo purpose
    this.getAuthorRecommendationAsync(1).catch((err) => console.error(err));

    this.title.setTitle(`Conference ${VERSION.full}`);
  }

  private async getAuthorRecommendationAsync(id: number): Promise<void> {
    /* way 1: handling error try catch
    let result = '';
    try {
      result = await this.eventService.getDataPromise(id);
      console.log(result);
    } catch (error) {
      console.log(error);
    } */

    /* way 2: handling error using caller.catch() */
    const result = await this.eventService.getDataPromise(id);
  }
}
