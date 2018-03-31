import './shared/rxjs-operators';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { MessageModule } from './shared/message/message.module';
import { SpinnerModule } from './shared/spinner/spinner.module';
import { CollapsibleCardModule } from './shared/collapsible-card/collapsible-card.module';
import { ModalModule } from './shared/modal/modal.module';
import { SharedModule } from './shared/shared.module';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { EventListComponent } from './event-list/event-list.component';
import { EventThumbnailComponent } from './event-list/event-thumbnail/event-thumbnail.component';
import { EventDetailComponent } from './event-detail/event-detail.component';
import { EventCreateComponent } from './event-create/event-create.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { LoginComponent } from './login/login.component';
import { SessionCreateComponent } from './event-detail/session-create/session-create.component';
import { SessionListComponent } from './event-detail/session-list/session-list.component';

import { EventService, AuthGuard, AuthService, VoteService } from './services';

import { checkDirtyState } from './event-create/event-create.guard';
import { EventListResolverService } from './event-list/event-list-resolver.service';
import { EventDetailResolverService } from './event-detail/event-detail-resolver.service';
import { VoteComponent } from './event-detail/vote/vote.component';
import { LocationValidatorDirective } from './event-create/location-validator.directive';

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
    SessionCreateComponent,
    SessionListComponent,
    VoteComponent,
    LocationValidatorDirective,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    SpinnerModule,
    CollapsibleCardModule,
    ModalModule,
    SharedModule,
    MessageModule,
    AppRoutingModule,
  ],
  providers: [
    EventService,
    {
      provide: 'canDeactivateCreateEvent',
      useValue: checkDirtyState,
    },
    EventListResolverService,
    EventDetailResolverService,
    AuthService,
    AuthGuard,
    VoteService,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
