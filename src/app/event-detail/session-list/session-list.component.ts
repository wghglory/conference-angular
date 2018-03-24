import { Component, OnInit, Input } from '@angular/core';
import { ISession } from '../../models';

@Component({
  selector: 'app-session-list',
  templateUrl: './session-list.component.html',
  styleUrls: ['./session-list.component.scss'],
})
export class SessionListComponent implements OnInit {
  constructor() {}
  @Input() sessions: ISession[];

  ngOnInit() {}
}
