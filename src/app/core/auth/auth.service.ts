import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import EnvVariables from '../../config/http';
import { tap } from 'rxjs/operators';
import { TokenService } from './token.service';

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
        this.tokenService.setToken(authToken);
      }));
  }

  constructor(
    private readonly client: HttpClient,
    private readonly tokenService: TokenService
  ) { }
}
