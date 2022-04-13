import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '@nx-ng-mfe/shared/data-access/auth';

@Component({
  selector: 'nx-ng-mfe-login-shell',
  templateUrl: './shell.component.html',
})
export class ShellComponent {
  name: string | undefined;
  password: string | undefined;

  error = '';

  constructor(private authService: AuthService, private router: Router) {}

  login() {
    if (!this.name || this.name.trim() === '') {
      this.error = 'You must enter a name!';
      return;
    }

    if (!this.password || this.password.trim() === '') {
      this.error = 'You must enter a password!';
      return;
    }

    if (this.password !== 'password') {
      this.error = 'The password is password...';
      return;
    }

    this.authService.setUser(this.name);
    this.router.navigateByUrl('/');
  }
}
