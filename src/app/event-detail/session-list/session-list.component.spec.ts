import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CollapsibleCardModule } from './../../shared/collapsible-card/collapsible-card.module';
import { SharedModule } from './../../shared/shared.module';

import { SessionListComponent } from './session-list.component';

describe('SessionListComponent', () => {
  let component: SessionListComponent;
  let fixture: ComponentFixture<SessionListComponent>;

  beforeEach(
    async(() => {
      TestBed.configureTestingModule({
        imports: [CollapsibleCardModule, SharedModule],
        declarations: [SessionListComponent],
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
