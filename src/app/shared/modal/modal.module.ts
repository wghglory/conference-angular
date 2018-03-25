import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalComponent } from './modal.component';
import { ModalTriggerDirective } from './modal-trigger.directive';

@NgModule({
  imports: [CommonModule],
  declarations: [ModalComponent, ModalTriggerDirective],
  exports: [ModalComponent, ModalTriggerDirective],
})
export class ModalModule {}
