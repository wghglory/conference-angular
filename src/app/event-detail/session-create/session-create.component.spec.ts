import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SessionCreateComponent } from './session-create.component';

import { SharedSpecModule } from './../../shared/shared.module';
import { CoreModule } from '../../core/core.module';

describe('SessionCreateComponent', () => {
  let component: SessionCreateComponent;
  let fixture: ComponentFixture<SessionCreateComponent>;

  beforeEach(
    async(() => {
      TestBed.configureTestingModule({
        imports: [CoreModule, SharedSpecModule],
        declarations: [SessionCreateComponent],
      }).compileComponents();
    }),
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(SessionCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
