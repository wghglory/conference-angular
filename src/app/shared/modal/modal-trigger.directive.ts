import { Directive, ElementRef, Input, Inject, OnInit } from '@angular/core';
import { JQUERY_TOKEN } from '../../core/services/jquery.service';

@Directive({
  selector: '[appModalId]',
})
export class ModalTriggerDirective implements OnInit {
  private el: HTMLElement;
  // @Input() modal-trigger: string  I want to write like this but typescript cannot compile dash...So use alias
  @Input('appModalId') appModalId: string;

  constructor(ref: ElementRef, @Inject(JQUERY_TOKEN) private $: any) {
    this.el = ref.nativeElement;
  }

  ngOnInit() {
    this.el.addEventListener('click', (e) => {
      // issue: we may have many modal windows for different purpose, so need to pass id dynamically
      // this.$('#simple-modal').modal({})

      this.$(`#${this.appModalId}`).modal({});
    });
  }
}
