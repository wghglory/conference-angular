import { HttpClient } from '@angular/common/http';

import { Injectable } from '@angular/core';

import { IEvent } from '../models';

@Injectable()
export class EventService {
  constructor(private http: HttpClient) {}

  getEvents() {
    return this.http.get<IEvent[]>(`/api/events`);
  }

  getEvent(id: number) {
    return this.http.get<IEvent>(`/api/events/${id}`);
  }

  saveEvent(event: IEvent) {
    return this.http.post<IEvent>(`/api/events`, event);
  }
}
