import { Component } from '@angular/core';
import { AuthService } from '@nx-ng-mfe/shared/data-access/auth';
import { map } from 'rxjs';

@Component({
  selector: 'nx-ng-mfe-header',
  templateUrl: './header.component.html',
})
export class HeaderComponent {
  user$ = this.authService.user$;
  isLoggedIn$ = this.user$.pipe(map((user) => Boolean(user)));

  constructor(private authService: AuthService) {}
}
