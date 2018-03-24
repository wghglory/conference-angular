import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SharedSpecModule } from '../shared/shared.module';

import { LoginComponent } from './login.component';

import { AuthService } from './../services/auth.service';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(
    async(() => {
      TestBed.configureTestingModule({
        imports: [SharedSpecModule],
        providers: [AuthService],
        declarations: [LoginComponent],
      }).compileComponents();
    }),
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
