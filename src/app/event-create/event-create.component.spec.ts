import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SharedSpecModule } from '../shared/shared.module';

import { EventCreateComponent } from './event-create.component';

import { EventService } from '../services';

describe('EventCreateComponent', () => {
  let component: EventCreateComponent;
  let fixture: ComponentFixture<EventCreateComponent>;

  beforeEach(
    async(() => {
      TestBed.configureTestingModule({
        imports: [SharedSpecModule],
        providers: [EventService],
        declarations: [EventCreateComponent],
      }).compileComponents();
    }),
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(EventCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
