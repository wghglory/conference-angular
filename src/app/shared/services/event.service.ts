import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { IEvent, CommonError, ISession, IEventNew } from '../models';

@Injectable()
export class EventService {
  constructor(private http: HttpClient) {}

  // components communication: this public prop and method can pass data between components
  propSharedForMultiComponents = 'Hello world';

  setProp(value: string) {
    this.propSharedForMultiComponents = value;
  }

  // promise demo: call in event-list.component.ts
  getDataPromise(id: number): Promise<string> {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (id > 0) {
          resolve('id is bigger than 0');
        } else {
          reject('Invalid id');
        }
      }, 2000);
    });
  }

  // moved to interceptor.ts
  // private handleHttpError(err: HttpErrorResponse): Observable<CommonError> {
  //   const dataError = new CommonError();
  //   dataError.code = err.error.code || err.status;
  //   dataError.message = err.error.message || err.message;

  //   return ErrorObservable.create(dataError);  // Observable.throw(dataError);
  // }

  getEvents() {
    return this.http.get<IEvent[]>(`/api/events`);
    // .pipe(catchError((err) => this.handleHttpError(err)));
  }

  getEvent(id: number) {
    return this.http.get<IEvent>(`/api/events/${id}`, {
      headers: new HttpHeaders({
        Accept: 'application/json',
        Authorization: 'my-token',
      }),
    });
  }

  getEventNew(id: number) {
    return this.http.get<IEvent>(`/api/events/${id}`).pipe(
      // data convert
      map(
        (b) =>
          <IEventNew>{
            eventDate: b.date,
            eventName: b.name,
          },
      ),
      // use converted data to do some logic
      tap((eventNew) => console.log(eventNew)),
    );
  }

  saveEvent(event: IEvent) {
    return this.http.post<IEvent>(`/api/events`, event);
  }

  searchSessions(searchTerm: string) {
    return this.http.get<ISession[]>(`/api/events/sessions?searchTerm=${searchTerm}`);
  }

  // return 201 if successful
  addEvent(event: IEvent): Observable<IEvent> {
    return this.http.post<IEvent>(`/api/events`, event, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
      // third param is optional
    });
  }

  // return 204 no content if successful
  updateEvent(event: IEvent): Observable<void> {
    return this.http.put<void>(`/api/events/${event.id}`, event, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
      // third param is optional
    });
  }

  // return 204 no content if successful
  deleteEvent(id: number): Observable<void> {
    return this.http.delete<void>(`/api/events/${id}`);
  }
}
