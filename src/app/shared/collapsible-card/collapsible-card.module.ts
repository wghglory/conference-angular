import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CollapsibleCardComponent } from './collapsible-card.component';

@NgModule({
  imports: [CommonModule],
  declarations: [CollapsibleCardComponent],
  exports: [CollapsibleCardComponent],
})
export class CollapsibleCardModule {}
