import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SharedSpecModule } from './../shared/shared.module';
import { ModalModule } from '../shared/modal/modal.module';

import { NavbarComponent } from './navbar.component';

import { AuthService } from './../services/auth.service';
import { EventService } from './../services/event.service';
import { JQUERY_TOKEN } from '../shared/jquery.service';

describe('NavbarComponent', () => {
  let component: NavbarComponent;
  let fixture: ComponentFixture<NavbarComponent>;

  beforeEach(
    async(() => {
      TestBed.configureTestingModule({
        imports: [SharedSpecModule, ModalModule],
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
