import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventAddressComponent } from './event-address.component';

describe('EventAddressComponent', () => {
  let component: EventAddressComponent;
  let fixture: ComponentFixture<EventAddressComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventAddressComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventAddressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
