import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HttpClientTestingModule } from '@angular/common/http/testing';

import { EventListComponent } from './event-list.component';
import { EventThumbnailComponent } from './event-thumbnail/event-thumbnail.component';

import { EventService } from '../services';
import { TOASTR_TOKEN } from './../shared/toastr.service';

describe('EventListComponent', () => {
  let component: EventListComponent;
  let fixture: ComponentFixture<EventListComponent>;

  beforeEach(
    async(() => {
      TestBed.configureTestingModule({
        imports: [HttpClientTestingModule],
        declarations: [EventListComponent, EventThumbnailComponent],
        providers: [EventService, { provide: TOASTR_TOKEN, useValue: {} }],
      }).compileComponents();
    }),
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(EventListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
