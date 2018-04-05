import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SharedSpecModule } from '../shared/shared.module';
import { CoreModule } from '../core/core.module';

import { EventService } from '../shared/services/event.service';
import { VoteService } from '../shared/services/vote.service';

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
        imports: [CoreModule, SharedSpecModule],
        declarations: [
          EventDetailComponent,
          SessionListComponent,
          SessionCreateComponent,
          VoteComponent,
        ],
        providers: [EventService, VoteService],
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
