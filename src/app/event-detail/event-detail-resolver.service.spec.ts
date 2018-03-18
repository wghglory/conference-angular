import { TestBed, inject } from '@angular/core/testing';

import { HttpClientTestingModule } from '@angular/common/http/testing';

import { EventDetailResolverService } from './event-detail-resolver.service';
import { EventService } from '../services';

describe('EventDetailResolverService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [EventDetailResolverService, EventService],
    });
  });

  it(
    'should be created',
    inject([EventDetailResolverService], (service: EventDetailResolverService) => {
      expect(service).toBeTruthy();
    }),
  );
});
