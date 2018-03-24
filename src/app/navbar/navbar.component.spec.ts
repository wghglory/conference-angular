import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SharedSpecModule } from './../shared/shared.module';

import { NavbarComponent } from './navbar.component';

import { AuthService } from './../services/auth.service';

describe('NavbarComponent', () => {
  let component: NavbarComponent;
  let fixture: ComponentFixture<NavbarComponent>;

  beforeEach(
    async(() => {
      TestBed.configureTestingModule({
        imports: [SharedSpecModule],
        providers: [AuthService],
        declarations: [NavbarComponent],
      }).compileComponents();
    }),
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
