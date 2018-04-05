/* Shallow Integration Test: Don't bring child components, but create component with same api
  key is to set schemas: [NO_ERRORS_SCHEMA]
*/
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { DebugElement, NO_ERRORS_SCHEMA } from '@angular/core';
import { By } from '@angular/platform-browser';

import { SharedSpecModule } from './../../shared/shared.module';

import { SessionListComponent } from './session-list.component';
import { VoteComponent } from './../vote/vote.component';

import { AuthService } from '../../core/services/auth.service';
import { VoteService } from '../../shared/services/vote.service';

import { ISession } from '../../shared/models';

describe('SessionListComponent', () => {
  let component: SessionListComponent;
  let fixture: ComponentFixture<SessionListComponent>;
  // let mockAuthService, mockVoterService;

  let element: HTMLElement;
  let debugEl: DebugElement;

  beforeEach(
    async(() => {
      const mockAuthService = {
        isAuthenticated: true,
        currentUser: { userName: 'Joe' },
      };
      const mockVoteService = {
        userHasVoted: () => true,
      };

      TestBed.configureTestingModule({
        imports: [
          // CollapsibleCardModule,
          // note DurationPipe is included in SharedModule, which exist in SharedSpecModule
          SharedSpecModule,
        ],
        providers: [
          { provide: VoteService, useValue: mockVoteService },
          { provide: AuthService, useValue: mockAuthService },
        ],
        declarations: [
          SessionListComponent,
          // VoteComponent
        ],
        schemas: [NO_ERRORS_SCHEMA], // angular won't complain for non-standard html tag, e.g. <app-vote>
      }).compileComponents();
    }),
  );

  beforeEach(() => {
    // component = new SessionListComponent(mockAuthService, mockVoterService);

    fixture = TestBed.createComponent(SessionListComponent);
    component = fixture.componentInstance;

    debugEl = fixture.debugElement;
    element = fixture.nativeElement;

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('initial display', () => {
    it('should have the correct session title', () => {
      component.sessions = [
        {
          id: 3,
          name: 'Session 1',
          presenter: 'Joe',
          duration: 1,
          level: 'beginner',
          abstract: 'abstract',
          voters: ['john', 'bob'],
        },
      ];

      component.filterBy = 'all';
      component.sortBy = 'name';
      component.eventId = 4;

      component.ngOnChanges();
      fixture.detectChanges();

      expect(element.querySelector('[card-header]').textContent).toContain('Session 1');
      // or
      expect(debugEl.query(By.css('[card-header]')).nativeElement.textContent).toContain(
        'Session 1',
      );
    });
  });
});
