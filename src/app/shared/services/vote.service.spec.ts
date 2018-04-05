import { TestBed, inject } from '@angular/core/testing';

import { SharedSpecModule } from '../../shared/shared.module';

import { Observable } from 'rxjs/Observable';

import { VoteService } from './vote.service';
import { ISession } from '../models';

describe('VoteService', () => {
  let voterService: VoteService, mockHttp;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [SharedSpecModule],
      providers: [VoteService],
    });

    mockHttp = jasmine.createSpyObj('mockHttp', ['delete', 'post']);
    voterService = new VoteService(mockHttp);
  });

  it(
    'should be created',
    inject([VoteService], (service: VoteService) => {
      expect(service).toBeTruthy();
    }),
  );

  describe('deleteVoter', () => {
    it('should remove the voter from voters list', () => {
      const session = { id: 6, voters: ['joe', 'john'] };
      mockHttp.delete.and.returnValue(Observable.of(false));
      voterService.deleteVoter(3, <ISession>session, 'joe');

      expect(session.voters.length).toBe(1);
      expect(session.voters[0]).toBe('john');
    });

    it('should call http.delete with right url', () => {
      const session = { id: 6, voters: ['joe', 'john'] };
      mockHttp.delete.and.returnValue(Observable.of(false));

      voterService.deleteVoter(3, <ISession>session, 'joe');

      expect(mockHttp.delete).toHaveBeenCalledWith(`/api/events/3/sessions/6/voters/joe`);
    });
  });

  describe('addVoter', () => {
    it('should call http.post with right url', () => {
      const session = { id: 6, voters: ['john'] };
      mockHttp.post.and.returnValue(Observable.of(false));

      voterService.addVoter(3, <ISession>session, 'joe');

      expect(mockHttp.post).toHaveBeenCalledWith(`/api/events/3/sessions/6/voters/joe`, Object({}));
    });
  });
});
