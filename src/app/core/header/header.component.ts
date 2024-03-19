import { Component } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { Observable } from 'rxjs';
import { CurrentUser } from '../auth/user';

@Component({
  selector: 'ap-header',
  templateUrl: './header.component.html',
})
export class HeaderComponent {

  user$: Observable<CurrentUser>;
  currentUser: CurrentUser;

  constructor(
    private readonly authService: AuthService,
  ) {
    this.user$ = authService.getCurrentUser();
    this.user$.subscribe(user => this.currentUser = user);
  }
}
