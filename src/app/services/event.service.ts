import { HttpClient } from '@angular/common/http';

import { Injectable } from '@angular/core';

import { IEvent } from '../models';

@Injectable()
export class EventService {
  constructor(private http: HttpClient) {}

  getEvents() {
    return this.http.get<IEvent[]>(`/api/events`);
  }
}
