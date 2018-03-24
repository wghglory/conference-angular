import './shared/rxjs-operators';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { SpinnerModule } from './shared/spinner/spinner.module';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { EventListComponent } from './event-list/event-list.component';
import { EventThumbnailComponent } from './event-list/event-thumbnail/event-thumbnail.component';
import { EventDetailComponent } from './event-detail/event-detail.component';
import { EventCreateComponent } from './event-create/event-create.component';
import { NotFoundComponent } from './not-found/not-found.component';

import { EventService, AuthGuard } from './services';
import { AuthService } from './services/auth.service';

import { TOASTR_TOKEN, Toastr } from './shared/toastr.service';
export const toastr: Toastr = window['toastr'];

import { EventListResolverService } from './event-list/event-list-resolver.service';
import { EventDetailResolverService } from './event-detail/event-detail-resolver.service';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    EventListComponent,
    EventThumbnailComponent,
    NotFoundComponent,
    EventDetailComponent,
    EventCreateComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    SpinnerModule,
    AppRoutingModule,
  ],
  providers: [
    EventService,
    { provide: TOASTR_TOKEN, useValue: toastr },
    EventListResolverService,
    EventDetailResolverService,
    AuthService,
    AuthGuard,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
