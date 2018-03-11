import './shared/rxjs-operators';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { EventListComponent } from './event-list/event-list.component';
import { EventAddressComponent } from './event-list/event-address/event-address.component';

@NgModule({
  declarations: [AppComponent, NavbarComponent, EventListComponent, EventAddressComponent],
  imports: [BrowserModule, HttpClientModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
