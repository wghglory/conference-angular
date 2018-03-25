import '../shared/rxjs-operators';

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { SpinnerModule } from './../shared/spinner/spinner.module';
import { CollapsibleCardModule } from '../shared/collapsible-card/collapsible-card.module';
import { SharedModule } from '../shared/shared.module';

import { EventService } from './../services/event.service';

import { SessionListComponent } from './session-list/session-list.component';
import { EventDetailComponent } from './event-detail.component';
import { SessionCreateComponent } from './session-create/session-create.component';

describe('EventDetailComponent', () => {
  let component: EventDetailComponent;
  let fixture: ComponentFixture<EventDetailComponent>;

  beforeEach(
    async(() => {
      TestBed.configureTestingModule({
        imports: [
          RouterTestingModule,
          HttpClientTestingModule,
          ReactiveFormsModule,
          SpinnerModule,
          CollapsibleCardModule,
          SharedModule,
        ],
        declarations: [EventDetailComponent, SessionListComponent, SessionCreateComponent],
        providers: [EventService],
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
