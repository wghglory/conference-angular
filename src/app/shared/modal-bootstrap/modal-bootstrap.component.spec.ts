import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JQUERY_TOKEN } from '../../core/services/jquery.service';

import { ModalBootstrapComponent } from './modal-bootstrap.component';

describe('ModalBootstrapComponent', () => {
  let component: ModalBootstrapComponent;
  let fixture: ComponentFixture<ModalBootstrapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ModalBootstrapComponent],
      providers: [{ provide: JQUERY_TOKEN, useValue: {} }],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalBootstrapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
