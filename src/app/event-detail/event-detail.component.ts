import { Observable } from 'rxjs/Observable';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { EventService } from '../services';

import { IEvent, ISession } from '../models';

@Component({
  selector: 'app-event-detail',
  templateUrl: './event-detail.component.html',
  styleUrls: ['./event-detail.component.scss'],
})
export class EventDetailComponent implements OnInit {
  constructor(private eventService: EventService, private route: ActivatedRoute) {}

  event$: Observable<IEvent>;

  event: IEvent;
  addMode = false;
  filterBy = 'all';
  sortBy = 'votes'; // default sortBy votes

  addSession() {
    this.addMode = true;
  }

  saveNewSession(session: ISession) {
    // find max id, and newSession id should = id + 1
    // const maxId = Math.max.apply(null, this.event.sessions.map(s => s.id))
    const maxId = Math.max(...this.event.sessions.map((s) => s.id));

    session.id = maxId + 1;
    this.event.sessions.push(session);
    this.eventService.saveEvent(this.event);
    this.addMode = false;
  }

  cancelAddSession() {
    this.addMode = false;
  }

  ngOnInit() {
    // 1. no resolver, use snapshot
    // this.event$ = this.eventService.getEvent(+this.route.snapshot.paramMap.get('id'));

    // 2. no resolver, use params to watch changes
    // this.route.params.forEach((params: Params) => {
    //   // this.eventService.getEvent(+params['id']).subscribe((res) => {
    //   //   this.event = res;
    //   //   this.addMode = false;
    //   //   this.filterBy = 'all';
    //   //   this.sortBy = 'votes';
    //   // });

    //   this.event$ = this.eventService.getEvent(+params['id']);
    //   this.event$.subscribe((res) => {
    //     this.addMode = false;
    //     this.filterBy = 'all';
    //     this.sortBy = 'votes';
    //   });
    // });

    // 3. use resolver and snapshot
    // this.event$ = Observable.of(this.route.snapshot.data['event']);

    // this.event$.subscribe((res) => {
    //   this.event = res;
    // });

    // 4. use resolver and data watch
    this.route.data.forEach((data) => {
      this.event$ = Observable.of(data['event']); // In this case, better not use async pipe

      this.event = data['event'];
      this.addMode = false;
      this.filterBy = 'all';
      this.sortBy = 'votes';
    });
  }
}
