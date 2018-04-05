import { Component, Input, OnChanges } from '@angular/core';

import { AuthService } from '../../core/services/auth.service';
import { VoteService } from '../../shared/services/vote.service';
import { ISession } from '../../shared/models';

@Component({
  selector: 'app-session-list',
  templateUrl: './session-list.component.html',
  styleUrls: ['./session-list.component.scss'],
})
export class SessionListComponent implements OnChanges {
  constructor(private voteService: VoteService, private authService: AuthService) {}

  @Input() sessions: ISession[];
  visibleSessions: ISession[] = [];
  @Input() filterBy: string;
  @Input() sortBy: string;
  @Input() eventId: number;

  // whenever the input variable changes
  ngOnChanges() {
    if (this.sessions) {
      this.filterSessions(this.filterBy);

      // another way is to use orderBy pipe
      this.sortBy === 'name'
        ? this.visibleSessions.sort(sortByNameAsc)
        : this.visibleSessions.sort(sortByVotesDesc);
    }
  }

  filterSessions(filter) {
    if (filter === 'all') {
      // this.visibleSessions = this.sessions;  //wrong, we want to make a copy
      this.visibleSessions = this.sessions.slice(0); // clone the arr, [...this.sessions]
    } else {
      this.visibleSessions = this.sessions.filter((s) => {
        return s.level.toLocaleLowerCase() === filter;
      });
    }
  }

  toggleVote(session: ISession) {
    if (this.userHasVoted(session)) {
      this.voteService.deleteVoter(this.eventId, session, this.authService.currentUser.username);
    } else {
      this.voteService.addVoter(this.eventId, session, this.authService.currentUser.username);
    }

    if (this.sortBy === 'votes') {
      this.visibleSessions.sort(sortByVotesDesc);
    }
  }

  userHasVoted(session: ISession) {
    return this.voteService.userHasVoted(session, this.authService.currentUser.username);
  }
}

function sortByNameAsc(s1: ISession, s2: ISession) {
  if (s1.name > s2.name) {
    return 1;
  } else if (s1.name === s2.name) {
    return 0;
  } else {
    return -1;
  }
}

function sortByVotesDesc(s1: ISession, s2: ISession) {
  return s2.voters.length - s1.voters.length;
}
