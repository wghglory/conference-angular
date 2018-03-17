import { Component, OnInit, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-spinner',
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.scss'],
})
export class SpinnerComponent implements OnInit, OnChanges {
  constructor() {}

  @Input() fill = '#fff';
  @Input() height = 100;
  @Input() width = 100;
  @Input() isCenter = true;

  ngOnInit() {}

  ngOnChanges() {}
}
