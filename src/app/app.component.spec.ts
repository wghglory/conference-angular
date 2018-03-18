import { TestBed, async } from '@angular/core/testing';

import { RouterTestingModule } from '@angular/router/testing';
import { SpinnerModule } from './shared/spinner/spinner.module';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';

describe('AppComponent', () => {
  beforeEach(
    async(() => {
      TestBed.configureTestingModule({
        imports: [RouterTestingModule, SpinnerModule],
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
