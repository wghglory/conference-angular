import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalBootstrapComponent } from './modal-bootstrap.component';
import { ModalTriggerDirective } from './modal-trigger.directive';

@NgModule({
  imports: [CommonModule],
  declarations: [ModalBootstrapComponent, ModalTriggerDirective],
  exports: [ModalBootstrapComponent, ModalTriggerDirective],
})
export class BootstrapModalModule {}
