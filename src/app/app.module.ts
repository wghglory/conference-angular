import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';
import { AppRoutingModule, routedComponents, routedServices } from './app-routing.module';

// app component
import { AppComponent } from './app.component';

// feature module components, some components below can be in its feature modules
import { EventThumbnailComponent } from './event-list/event-thumbnail/event-thumbnail.component';

import { SessionListComponent } from './event-detail/session-list/session-list.component';
import { VoteComponent } from './event-detail/vote/vote.component';

import { checkDirtyState } from './event-create/event-create.guard';
import { LocationValidatorDirective } from './event-create/location-validator.directive';

@NgModule({
  declarations: [
    AppComponent,

    routedComponents,

    EventThumbnailComponent,
    SessionListComponent,
    VoteComponent,
    LocationValidatorDirective,
  ],
  imports: [BrowserModule, CoreModule, SharedModule, AppRoutingModule],
  providers: [
    routedServices,

    {
      provide: 'canDeactivateCreateEvent',
      useValue: checkDirtyState,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
