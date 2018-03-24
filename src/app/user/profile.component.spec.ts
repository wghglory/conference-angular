import { ReactiveFormsModule } from '@angular/forms';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

// import { SharedSpecModule } from '../shared/shared.module';

import { ProfileComponent } from './profile.component';
import { LoginComponent } from './../login/login.component';
import { AuthService } from '../services/auth.service';
import { TOASTR_TOKEN } from './../shared/toastr.service';

import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';

describe('ProfileComponent', () => {
  let component: ProfileComponent;
  let fixture: ComponentFixture<ProfileComponent>;

  beforeEach(
    async(() => {
      // fix ERROR: 'Unhandled Promise rejection:', 'Cannot match any routes. URL Segment: 'login''
      // tslint:disable-next-line:max-line-length
      // It was caused by a call to router.navigate inside the ngOnInit/construtor method of a component. The test was trying to create the component, but inside ngOnInit it was attempting to navigate away from the component
      // RouterTestingModule.withRoutes([{ path: 'login', component: LoginComponent }]);

      TestBed.configureTestingModule({
        imports: [ReactiveFormsModule, RouterTestingModule, HttpClientTestingModule],
        providers: [AuthService, { provide: TOASTR_TOKEN, useValue: {} }],
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
