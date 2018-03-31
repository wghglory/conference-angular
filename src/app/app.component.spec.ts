import { TestBed, async } from '@angular/core/testing';

import { SharedSpecModule } from './shared/shared.module';
import { SpinnerModule } from './shared/spinner/spinner.module';
import { ModalModule } from './shared/modal/modal.module';
import { MessageModule } from './shared/message/message.module';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';

import { AuthService } from './services/auth.service';
import { EventService } from './services/event.service';
import { JQUERY_TOKEN } from './shared/jquery.service';

describe('AppComponent', () => {
  beforeEach(
    async(() => {
      TestBed.configureTestingModule({
        imports: [SharedSpecModule, SpinnerModule, ModalModule, MessageModule],
        providers: [AuthService, EventService, { provide: JQUERY_TOKEN, useValue: {} }],
        declarations: [AppComponent, NavbarComponent],
      }).compileComponents();
    }),
  );

  it(
    'should create the app',
    async(() => {
      const fixture = TestBed.createComponent(AppComponent);
      const app = fixture.debugElement.componentInstance;
      expect(app).toBeTruthy();
    }),
  );

  /* it(
    `should have as title property = 'app'`,
    async(() => {
      const fixture = TestBed.createComponent(AppComponent);
      const app = fixture.debugElement.componentInstance;
      expect(app.title).toEqual('app');
    }),
  );

  it(
    'should render title in a h1 tag',
    async(() => {
      const fixture = TestBed.createComponent(AppComponent);
      fixture.detectChanges();
      const compiled = fixture.debugElement.nativeElement;
      expect(compiled.querySelector('h1').textContent).toContain('Welcome to app!');
    }),
  ); */
});
