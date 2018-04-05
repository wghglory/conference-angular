import { CoreModule } from './../core/core.module';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SharedSpecModule } from './../shared/shared.module';

import { EventListComponent } from './event-list.component';
import { EventThumbnailComponent } from './event-thumbnail/event-thumbnail.component';

describe('EventListComponent', () => {
  let component: EventListComponent;
  let fixture: ComponentFixture<EventListComponent>;

  beforeEach(
    async(() => {
      TestBed.configureTestingModule({
        imports: [SharedSpecModule, CoreModule],
        declarations: [EventListComponent, EventThumbnailComponent],
        providers: [],
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
