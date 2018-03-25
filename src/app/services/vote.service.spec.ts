import { TestBed, inject } from '@angular/core/testing';

import { SharedSpecModule } from './../shared/shared.module';

import { VoteService } from './vote.service';

describe('VoteService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [SharedSpecModule],
      providers: [VoteService],
    });
  });

  it(
    'should be created',
    inject([VoteService], (service: VoteService) => {
      expect(service).toBeTruthy();
    }),
  );
});
