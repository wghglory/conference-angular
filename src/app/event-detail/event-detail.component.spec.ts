import '../shared/rxjs-operators';

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpinnerModule } from './../shared/spinner/spinner.module';
import { CollapsibleCardModule } from '../shared/collapsible-card/collapsible-card.module';
import { SharedSpecModule } from '../shared/shared.module';

import { EventService } from './../services/event.service';
import { VoteService } from './../services/vote.service';
import { AuthService } from './../services/auth.service';

import { SessionListComponent } from './session-list/session-list.component';
import { EventDetailComponent } from './event-detail.component';
import { SessionCreateComponent } from './session-create/session-create.component';
import { VoteComponent } from './vote/vote.component';

describe('EventDetailComponent', () => {
  let component: EventDetailComponent;
  let fixture: ComponentFixture<EventDetailComponent>;

  beforeEach(
    async(() => {
      TestBed.configureTestingModule({
        imports: [SpinnerModule, CollapsibleCardModule, SharedSpecModule],
        declarations: [
          EventDetailComponent,
          SessionListComponent,
          SessionCreateComponent,
          VoteComponent,
        ],
        providers: [EventService, VoteService, AuthService],
      }).compileComponents();
    }),
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(EventDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
