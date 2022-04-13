import { Injectable } from '@angular/core';
import { CanActivate, CanLoad } from '@angular/router';
import { map } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanLoad, CanActivate {
  constructor(private authService: AuthService) {}

  canActivate() {
    return this.authService.user$.pipe(map((user) => Boolean(user)));
  }
  canLoad() {
    return this.authService.user$.pipe(map((user) => Boolean(user)));
  }
}
