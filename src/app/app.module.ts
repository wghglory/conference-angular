import './shared/rxjs-operators';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { EventListComponent } from './event-list/event-list.component';
import { EventThumbnailComponent } from './event-list/event-thumbnail/event-thumbnail.component';

import { EventService } from './event-list/event.service';

import { TOASTR_TOKEN, Toastr } from './shared/toastr.service';
export const toastr: Toastr = window['toastr'];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    EventListComponent,
    EventThumbnailComponent,
  ],
  imports: [BrowserModule, HttpClientModule, AppRoutingModule],
  providers: [EventService, { provide: TOASTR_TOKEN, useValue: toastr }],
  bootstrap: [AppComponent],
})
export class AppModule {}
