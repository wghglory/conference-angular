import { Component, OnInit, Inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { AuthService } from '../services/auth.service';
import { TOASTR_TOKEN, Toastr } from '../shared/toastr.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {
  constructor(
    private authService: AuthService,
    private router: Router,
    @Inject(TOASTR_TOKEN) private toastr: Toastr,
  ) {}

  profileForm: FormGroup = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
  });
  private firstName: FormControl = new FormControl('');
  private lastName: FormControl = new FormControl('');

  get isFirstNameValid() {
    return this.firstName.valid || this.firstName.untouched;
  }

  get isLastNameValid() {
    return this.lastName.valid || this.lastName.untouched;
  }

  ngOnInit() {
    // // If not using guard
    // if (!this.authService.isAuthenticated) {
    //   this.router.navigate(['/login'], {
    //     queryParams: {
    //       redirect: this.router.url,
    //     },
    //   });
    //   return;
    // }
    if (!this.authService.isAuthenticated) {
      return;
    }

    this.firstName = new FormControl(this.authService.currentUser.firstName, [
      Validators.required,
      Validators.pattern('[a-zA-Z].*'),
    ]);
    this.lastName = new FormControl(this.authService.currentUser.lastName, Validators.required);

    this.profileForm = new FormGroup({
      firstName: this.firstName,
      lastName: this.lastName,
    });
  }

  saveProfile(formValues) {
    if (this.profileForm.valid) {
      this.authService
        .updateCurrentUser(formValues.firstName, formValues.lastName)
        .subscribe(() => {
          this.toastr.success('Profile saved successfully!');
        });
      // this.router.navigate(['events'])
    }
  }

  cancel() {
    this.router.navigate(['/events']);
  }

  logout() {
    this.authService.logout().subscribe(() => {
      this.router.navigate(['/login']);
    });
  }
}
