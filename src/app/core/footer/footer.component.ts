import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { Observable } from 'rxjs';
import { CurrentUser } from '../auth/user';

@Component({
  selector: 'ap-footer',
  templateUrl: './footer.component.html',
})
export class FooterComponent implements OnInit {

  user$: Observable<CurrentUser>;
  constructor(private readonly userService: AuthService) { }

  ngOnInit() {
    this.user$ = this.userService.userChanges();
  }

}
