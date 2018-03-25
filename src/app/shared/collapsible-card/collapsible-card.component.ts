import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-collapsible-card',
  templateUrl: './collapsible-card.component.html',
  styleUrls: ['./collapsible-card.component.scss'],
})
export class CollapsibleCardComponent implements OnInit {
  constructor() {}

  @Input() classes;
  visible = true;

  toggleContent() {
    this.visible = !this.visible;
  }

  ngOnInit() {}
}
