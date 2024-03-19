import { Component } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { Observable } from 'rxjs';
import { CurrentUser } from '../auth/user';
import { Router } from '@angular/router';

@Component({
  selector: 'ap-header',
  templateUrl: './header.component.html',
})
export class HeaderComponent {

  user$: Observable<CurrentUser>;

  signout() {
    this.authService.signout();
    this.router.navigate(['']);
  }

  constructor(
    private readonly authService: AuthService,
    private router: Router,
  ) {
    this.user$ = this.authService.getCurrentUser();
  }
}
