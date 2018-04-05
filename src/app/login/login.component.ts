import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { AuthService } from '../core/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  constructor(
    private authService: AuthService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
  ) {}
  loginInvalid = false;

  // (ngModel) one-way binding, but AOT builds need these props
  mouseoverLogin = false;
  username: string;
  password: string;

  // username and password are one-way binding (from template to control)

  private readonly redirectURL = this.activatedRoute.snapshot.queryParamMap.get('redirect') || '/';

  login(formValues) {
    this.authService.loginUser(formValues.username, formValues.password).subscribe((user) => {
      if (user) {
        // access previous page if any, or "/" page
        return this.router.navigateByUrl(this.redirectURL);
      } else {
        this.loginInvalid = true;
      }
    });
  }
}
