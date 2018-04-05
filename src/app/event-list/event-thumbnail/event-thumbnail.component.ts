import { Component, OnInit, Input } from '@angular/core';
import { IEvent } from '../../shared/models/';

@Component({
  selector: 'app-event-thumbnail',
  templateUrl: './event-thumbnail.component.html',
  styleUrls: ['./event-thumbnail.component.scss'],
})
export class EventThumbnailComponent implements OnInit {
  constructor() {}

  @Input() event: IEvent;

  // ngClass can accept object, string, array !!!
  getClasses() {
    // const isEarly = this.event && this.event.time === '8:00 am';
    // return { yellow: isEarly, bold: isEarly };

    // if (this.event && this.event.time === '8:00 am') {
    //   return 'yellow bold';
    // }
    // return '';

    if (this.event && this.event.time === '8:00 am') {
      return ['yellow', 'bold'];
    }
    return [];
  }

  getStyles(): { [key: string]: string } {
    if (this.event && this.event.time === '8:00 am') {
      return { 'text-decoration': 'underline', 'font-style': 'italic' };
    }
    return {};
  }

  ngOnInit() {}
}
