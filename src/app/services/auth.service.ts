import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { IUser } from '../models';

@Injectable()
export class AuthService {
  constructor(private http: HttpClient) {}

  currentUser: IUser;

  get isAuthenticated() {
    return !!this.currentUser;
  }

  loginUser(username: string, password: string) {
    return this.http
      .post('/api/login', { username, password })
      .do((res: IUser) => {
        if (res) {
          this.currentUser = res;
        }
      })
      .catch((err) => {
        return Observable.of(false);
      });
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
