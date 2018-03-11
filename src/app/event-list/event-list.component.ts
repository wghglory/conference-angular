import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.scss'],
})
export class EventListComponent implements OnInit {
  constructor() {}

  event = {
    name: 'ngConf 2025',
    date: '3/1/2025',
    time: '8am',
    price: '599',
    location: { address: '123 Main St', city: 'Salt Lake City, UT', country: 'USA' },
  };

  fire(dataFromChild) {
    console.log(dataFromChild);
  }

  ngOnInit() {}
}
