import { Component, OnInit, Input, ElementRef, ViewChild, Inject } from '@angular/core';
import { JQUERY_TOKEN } from '../../core/services/jquery.service';

@Component({
  selector: 'app-modal-bootstrap',
  templateUrl: './modal-bootstrap.component.html',
  styleUrls: ['./modal-bootstrap.component.scss'],
})
export class ModalBootstrapComponent implements OnInit {
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
