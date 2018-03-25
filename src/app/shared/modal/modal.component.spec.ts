import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JQUERY_TOKEN } from '../jquery.service';

import { ModalComponent } from './modal.component';

describe('ModalComponent', () => {
  let component: ModalComponent;
  let fixture: ComponentFixture<ModalComponent>;

  beforeEach(
    async(() => {
      TestBed.configureTestingModule({
        declarations: [ModalComponent],
        providers: [{ provide: JQUERY_TOKEN, useValue: {} }],
      }).compileComponents();
    }),
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
