import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-event-address',
  templateUrl: './event-address.component.html',
  styleUrls: ['./event-address.component.scss'],
})
export class EventAddressComponent implements OnInit {
  constructor() {}

  @Input() address: any; // define address object, parent pass value to child
  @Output() buttonClick$ = new EventEmitter<string>();
  author = 'Guanghui Wang'; // child public property

  onClick() {
    this.buttonClick$.emit('I am from child component, should pass data to parent component');
  }

  getAuthor() {
    console.log(this.author);
  }

  ngOnInit() {}
}
