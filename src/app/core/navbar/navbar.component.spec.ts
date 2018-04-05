import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormsModule } from '@angular/forms';
import { SharedSpecModule } from '../../shared/shared.module';

import { NavbarComponent } from './navbar.component';

import { JQUERY_TOKEN } from '../services/jquery.service';
import { AuthService } from '../services/auth.service';
import { EventService } from '../../shared/services/event.service';

describe('NavbarComponent', () => {
  let component: NavbarComponent;
  let fixture: ComponentFixture<NavbarComponent>;

  beforeEach(
    async(() => {
      TestBed.configureTestingModule({
        imports: [SharedSpecModule, FormsModule],
        providers: [AuthService, EventService, { provide: JQUERY_TOKEN, useValue: {} }],
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
