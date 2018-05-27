import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { tap } from 'rxjs/operators';

import { ISession } from '../../shared/models';

import { EventService } from '../../shared/services';
import { AuthService } from './../services/auth.service';

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
  ) {
    this.menuItems = [
      { caption: 'All Events', link: ['/events'] },
      { caption: 'Create Event', link: ['/events/create'] },
      { caption: 'Vehicles', link: ['/vehicles'] },
      { caption: 'Admin', link: ['/admin'] },
    ];
  }

  menuItems: any[];
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
      .pipe(
        tap((data) => {
          this.router.navigate(['/login']);
        }),
      )
      .subscribe();
  }

  ngOnInit() {}
}
