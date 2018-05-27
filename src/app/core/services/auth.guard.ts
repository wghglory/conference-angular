import { Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Router,
  Route,
} from '@angular/router';

import { Observable } from 'rxjs';

import { AuthService } from './auth.service';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}

  canLoad(route: Route) {
    if (this.authService.isAuthenticated) {
      return true;
    }
    this.router.navigate(['/login'], { queryParams: { redirectTo: `/${route.path}` } });
    return this.authService.isAuthenticated;
  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot,
  ): Observable<boolean> | Promise<boolean> | boolean {
    const isAuthenticated = this.authService.isAuthenticated;

    if (!isAuthenticated) {
      this.router.navigate(['/login'], {
        queryParams: {
          redirect: state.url,
        },
      });
    }

    return isAuthenticated;
  }

  canActivateChild(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    return this.canActivate(route, state);
  }
}
