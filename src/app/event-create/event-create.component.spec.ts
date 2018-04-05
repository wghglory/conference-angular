import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoreModule } from './../core/core.module';
import { SharedSpecModule } from '../shared/shared.module';

import { EventCreateComponent } from './event-create.component';

import { EventService } from '../shared/services';
import { LocationValidatorDirective } from './location-validator.directive';

describe('EventCreateComponent', () => {
  let component: EventCreateComponent;
  let fixture: ComponentFixture<EventCreateComponent>;

  beforeEach(
    async(() => {
      TestBed.configureTestingModule({
        imports: [SharedSpecModule, CoreModule],
        providers: [EventService, LocationValidatorDirective],
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
