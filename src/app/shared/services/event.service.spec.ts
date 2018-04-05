import { TestBed, inject } from '@angular/core/testing';

import {
  HttpClientTestingModule,
  HttpTestingController,
  TestRequest,
} from '@angular/common/http/testing';

import { EventService } from './event.service';

import { IEvent, CommonError } from '../models';

describe('EventService', () => {
  let eventService: EventService;
  let httpTestingController: HttpTestingController;

  const events: IEvent[] = [
    {
      id: 1,
      name: 'Angular Connect',
      date: new Date('9/26/2036'),
      time: '10:00 am',
      price: 599.99,
      imageUrl: '/assets/images/angularconnect-shield.png',
      location: {
        address: '1057 DT',
        city: 'London',
        country: 'England',
      },
      sessions: [],
    },
    {
      id: 2,
      name: 'ng-nl',
      date: new Date('4/15/2037'),
      time: '9:00 am',
      price: 950.0,
      imageUrl: '/assets/images/ng-nl.png',
      onlineUrl: 'http://github.com',
      sessions: [],
    },
  ];

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [EventService],
    });

    eventService = TestBed.get(EventService);
    httpTestingController = TestBed.get(HttpTestingController);
  });

  afterEach(() => {
    httpTestingController.verify();
  });

  it(
    'should be created',
    inject([EventService], (service: EventService) => {
      expect(service).toBeTruthy();
    }),
  );

  it('should GET all events', () => {
    eventService.getEvents().subscribe((data: IEvent[]) => {
      expect(data.length).toBe(2);
    });

    const eventsRequest: TestRequest = httpTestingController.expectOne('/api/events');
    expect(eventsRequest.request.method).toEqual('GET');

    eventsRequest.flush(events);
  });

  it('should return a CommonError', () => {
    eventService.getEvents().subscribe(
      (data: IEvent[]) => fail('this should have been an error'),
      (err: any) => {
        expect(err.error.code).toEqual(500);
        expect(err.error.message).toEqual('An error occurred retrieving data.');
      },
    );

    const eventsRequest: TestRequest = httpTestingController.expectOne('/api/events');

    eventsRequest.flush(
      {
        code: 500,
        message: 'An error occurred retrieving data.',
      },
      {
        status: 500,
        statusText: 'Server Error',
      },
    );
  });
});
