import { NgModule, ModuleWithProviders } from '@angular/core';

import { CommonModule } from '@angular/common';
import { SpinnerModule } from './spinner/spinner.module';
import { CollapsibleCardModule } from './collapsible-card/collapsible-card.module';
import { BootstrapModalModule } from './modal-bootstrap/modal-bootstrap.module';

import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { DurationPipe } from './pipes/duration.pipe';
import { OrderByPipe } from './pipes/order-by.pipe';
import { InitCapitalPipe } from './pipes/init-capital.pipe';
import { PositiveNumberDirective } from './validators/positive-number-validator.directive';

import { EventService, VoteService } from './services';

@NgModule({
  imports: [CommonModule, SpinnerModule, CollapsibleCardModule, BootstrapModalModule],
  exports: [
    CommonModule,
    OrderByPipe,
    DurationPipe,
    SpinnerModule,
    CollapsibleCardModule,
    BootstrapModalModule,
  ],
  providers: [EventService, VoteService],
  declarations: [OrderByPipe, DurationPipe, PositiveNumberDirective, InitCapitalPipe],
})
export class SharedModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: SharedModule,
      providers: [],
    };
  }

  static forChild(): ModuleWithProviders {
    return {
      ngModule: SharedModule,
      providers: [],
    };
  }
}

@NgModule({
  imports: [SharedModule, RouterTestingModule, HttpClientTestingModule],
  exports: [SharedModule, RouterTestingModule, HttpClientTestingModule],
  declarations: [],
})
export class SharedSpecModule {}
