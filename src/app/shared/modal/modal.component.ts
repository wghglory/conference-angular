import { Component, OnInit, Input, ElementRef, ViewChild, Inject } from '@angular/core';
import { JQUERY_TOKEN } from '../jquery.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
})
export class ModalComponent implements OnInit {
  @Input() title: string;
  @Input() elementId: string;
  @ViewChild('modalContainer') containerEl: ElementRef;
  @Input() closeOnBodyClick: string;

  constructor(@Inject(JQUERY_TOKEN) private $: any) {}

  closeModal() {
    if (this.closeOnBodyClick.toLocaleLowerCase() === 'true') {
      this.$(this.containerEl.nativeElement).modal('hide');
      // we can still use previous way like modal-trigger.directive.ts
    }
  }

  ngOnInit() {}
}
