import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { ISession } from '../models';

@Injectable()
export class VoteService {
  constructor(private http: HttpClient) {}

  deleteVoter(eventId: number, session: ISession, voterName: string) {
    session.voters = session.voters.filter((v) => v !== voterName);
    const url = `/api/events/${eventId}/sessions/${session.id}/voters/${voterName}`;
    return this.http.delete(url).subscribe();
    // when we don't care the returning result, use subscribe immediately is fine.
    // Otherwise it's better to call subscribe when you actually called the service.
  }

  addVoter(eventId: number, session: ISession, voterName: string) {
    session.voters.push(voterName);

    const url = `/api/events/${eventId}/sessions/${session.id}/voters/${voterName}`;

    return this.http.post(url, {}).subscribe();
  }

  userHasVoted(session: ISession, voterName: string) {
    return session.voters.some((v) => v === voterName);
  }
}
