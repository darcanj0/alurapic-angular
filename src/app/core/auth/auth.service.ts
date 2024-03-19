import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import EnvVariables from '../../config/http';
import { tap } from 'rxjs/operators';
import { TokenService } from './token.service';
import { Observable, Subject } from 'rxjs';
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

  getCurrentUser(): Observable<CurrentUser> {
    return this.userSubject.asObservable();
  }

  private userSubject = new Subject<CurrentUser>();

  private decodeAndNotify() {
    const currentUser = this.tokenService.decodeToken();
    this.userSubject.next(currentUser);
  }

  constructor(
    private readonly client: HttpClient,
    private readonly tokenService: TokenService
  ) {
    if (tokenService.getToken()) this.decodeAndNotify();
  }
}
