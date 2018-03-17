import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EventListComponent } from './event-list/event-list.component';
import { EventDetailComponent } from './event-detail/event-detail.component';
import { EventCreateComponent } from './event-create/event-create.component';

import { NotFoundComponent } from './not-found/not-found.component';

import { UserModule } from './user/user.module';

// AOT builds: have to export a function. Cannot directly write lambda function down
export function lazyLoadingUserModule() {
  return UserModule;
}

const routes: Routes = [
  // order matters
  { path: 'events/create', component: EventCreateComponent },
  { path: 'events', component: EventListComponent, pathMatch: 'full' },
  { path: 'events/:id', component: EventDetailComponent },
  { path: '', redirectTo: 'events', pathMatch: 'full' },
  { path: 'user', loadChildren: lazyLoadingUserModule }, // lazy loading
  // { path: 'user', loadChildren: './user/user.module#UserModule' }, // lazy loading, @angular-cli@1.7.2|3 bug
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
