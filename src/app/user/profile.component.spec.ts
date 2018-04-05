import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileComponent } from './profile.component';
import { LoginComponent } from './../login/login.component';

import { SharedSpecModule } from '../shared/shared.module';
import { CoreModule } from '../core/core.module';

describe('ProfileComponent', () => {
  let component: ProfileComponent;
  let fixture: ComponentFixture<ProfileComponent>;

  beforeEach(
    async(() => {
      // fix ERROR: 'Unhandled Promise rejection:', 'Cannot match any routes. URL Segment: 'login''
      // tslint:disable-next-line:max-line-length
      // It was caused by a call to router.navigate inside the ngOnInit/constructor method of a component. The test was trying to create the component, but inside ngOnInit it was attempting to navigate away from the component
      // RouterTestingModule.withRoutes([{ path: 'login', component: LoginComponent }]);

      TestBed.configureTestingModule({
        imports: [SharedSpecModule, CoreModule],
        declarations: [ProfileComponent],
      }).compileComponents();
    }),
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
