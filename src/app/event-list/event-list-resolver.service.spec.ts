import { TestBed, inject } from '@angular/core/testing';

import { HttpClientTestingModule } from '@angular/common/http/testing';

import { EventListResolverService } from './event-list-resolver.service';
import { EventService } from '../services';

describe('EventListResolverService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [EventListResolverService, EventService],
    });
  });

  it(
    'should be created',
    inject([EventListResolverService], (service: EventListResolverService) => {
      expect(service).toBeTruthy();
    }),
  );
});
