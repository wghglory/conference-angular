import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-vote',
  templateUrl: './vote.component.html',
  styleUrls: ['./vote.component.scss'],
})
export class VoteComponent implements OnInit {
  constructor() {}
  @Input() count: number;
  iconColor: string;

  @Input()
  set voted(val) {
    this.iconColor = val ? 'red' : 'white';
  }
  @Output() vote = new EventEmitter();

  onClick() {
    this.vote.emit({});
  }

  ngOnInit() {}
}
