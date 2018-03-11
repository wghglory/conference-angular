import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventListComponent } from './event-list.component';
import { EventAddressComponent } from './event-address/event-address.component';

describe('EventListComponent', () => {
  let component: EventListComponent;
  let fixture: ComponentFixture<EventListComponent>;

  beforeEach(
    async(() => {
      TestBed.configureTestingModule({
        declarations: [EventListComponent, EventAddressComponent],
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
