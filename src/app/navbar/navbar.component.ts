import { AuthService } from './../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { ISession } from '../models';
import { EventService } from '../services';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  constructor(
    public authService: AuthService,
    private router: Router,
    private eventService: EventService,
  ) {}

  searchTerm = '';
  foundSessions: ISession[];

  searchSessions(searchTerm) {
    this.eventService.searchSessions(searchTerm).subscribe((sessions) => {
      this.foundSessions = sessions;
    });
  }

  logout() {
    this.authService
      .logout()
      .do((data) => {
        this.router.navigate(['/login']);
      })
      .subscribe();
  }

  ngOnInit() {}
}
