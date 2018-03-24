import { AuthService } from './../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  constructor(public authService: AuthService, private router: Router) {}

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
