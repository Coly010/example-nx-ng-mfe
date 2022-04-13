import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private user: { name: string } | undefined = undefined;

  user$ = new BehaviorSubject(this.user);

  setUser(name: string) {
    this.user = { name };
    this.user$.next(this.user);
  }
}
