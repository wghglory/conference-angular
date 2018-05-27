import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { tap, catchError } from 'rxjs/operators';
import { Observable, of } from 'rxjs';

import { IUser } from '../models/user.model';

@Injectable()
export class AuthService {
  constructor(private http: HttpClient) {}

  currentUser: IUser;

  get isAuthenticated() {
    return !!this.currentUser;
  }

  loginUser(username: string, password: string) {
    return this.http.post('/api/login', { username, password }).pipe(
      tap((res: IUser) => {
        if (res) {
          this.currentUser = res;
        }
      }),
      catchError((err) => {
        return of(false);
      }),
    );
  }

  updateCurrentUser(firstName: string, lastName: string) {
    this.currentUser.firstName = firstName;
    this.currentUser.lastName = lastName;

    return this.http.put(`/api/users/${this.currentUser.id}`, this.currentUser);
  }

  checkAuthenticationStatus() {
    return this.http.get<IUser>('/api/userinfo').subscribe((res) => {
      this.currentUser = res;
    });
  }

  logout() {
    this.currentUser = undefined;

    return this.http.post('api/logout', {});
  }
}
