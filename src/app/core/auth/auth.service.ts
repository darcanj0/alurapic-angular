import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import EnvVariables from '../../config/http';
import { tap } from 'rxjs/operators';
import { TokenService } from './token.service';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { CurrentUser } from './user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  signin(username: string, password: string) {
    return this.client.post(EnvVariables.API_BASE_URL + 'user/login', {
      userName: username, password
    }, { observe: 'response' },
    )
      .pipe(tap(res => {
        const authToken = res.headers.get('x-access-token');
        if (!authToken) return;
        this.tokenService.setToken(authToken);
        this.decodeAndNotify();
      }));
  }



  userChanges(): Observable<CurrentUser> {
    return this.userSubject.asObservable();
  }

  signout() {
    this.tokenService.removeToken();
    this.userSubject.next(null);
    this.username = null;
  }

  isSigned() {
    return !!this.tokenService.getToken();
  }

  username: string;

  getUsername() {
    return this.username;
  }

  private userSubject = new BehaviorSubject<CurrentUser>(null);

  private decodeAndNotify() {
    const currentUser = this.tokenService.decodeToken();
    this.userSubject.next(currentUser);
    this.username = currentUser.name;
  }

  constructor(
    private readonly client: HttpClient,
    private readonly tokenService: TokenService
  ) {
    if (tokenService.getToken()) this.decodeAndNotify();
  }
}
