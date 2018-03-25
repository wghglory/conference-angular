import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CollapsibleCardModule } from './../../shared/collapsible-card/collapsible-card.module';
import { SharedModule } from './../../shared/shared.module';

import { SessionListComponent } from './session-list.component';
import { VoteComponent } from './../vote/vote.component';

import { VoteService } from './../../services/vote.service';
import { AuthService } from './../../services/auth.service';

describe('SessionListComponent', () => {
  let component: SessionListComponent;
  let fixture: ComponentFixture<SessionListComponent>;

  beforeEach(
    async(() => {
      TestBed.configureTestingModule({
        imports: [CollapsibleCardModule, SharedModule],
        providers: [VoteService, AuthService],
        declarations: [SessionListComponent, VoteComponent],
      }).compileComponents();
    }),
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(SessionListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
