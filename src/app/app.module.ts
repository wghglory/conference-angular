import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';
import { AppRoutingModule } from './app-routing.module';

// app component
import { AppComponent } from './app.component';

// feature module components, some components below can be in its feature modules
import { EventListComponent } from './event-list/event-list.component';
import { EventThumbnailComponent } from './event-list/event-thumbnail/event-thumbnail.component';
import { EventListResolverService } from './event-list/event-list-resolver.service';

import { EventDetailComponent } from './event-detail/event-detail.component';
import { SessionCreateComponent } from './event-detail/session-create/session-create.component';
import { SessionListComponent } from './event-detail/session-list/session-list.component';
import { VoteComponent } from './event-detail/vote/vote.component';
import { EventDetailResolverService } from './event-detail/event-detail-resolver.service';

import { EventCreateComponent } from './event-create/event-create.component';
import { checkDirtyState } from './event-create/event-create.guard';
import { LocationValidatorDirective } from './event-create/location-validator.directive';

import { NotFoundComponent } from './not-found/not-found.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    EventListComponent,
    EventThumbnailComponent,
    NotFoundComponent,
    EventDetailComponent,
    EventCreateComponent,
    LoginComponent,
    SessionCreateComponent,
    SessionListComponent,
    VoteComponent,
    LocationValidatorDirective,
  ],
  imports: [BrowserModule, CoreModule, SharedModule, AppRoutingModule],
  providers: [
    EventListResolverService,
    EventDetailResolverService,
    {
      provide: 'canDeactivateCreateEvent',
      useValue: checkDirtyState,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
