import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { UserRoutingModule, routedComponents } from './user-routing.module';

@NgModule({
  imports: [CommonModule, ReactiveFormsModule, UserRoutingModule],
  declarations: [routedComponents],
})
export class UserModule {}
