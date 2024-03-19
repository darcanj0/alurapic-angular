import { Injectable } from '@angular/core';
import * as jwt_decode from 'jwt-decode';
import { CurrentUser } from './user';

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  static KEY = 'authToken';

  hasToken() {
    return !!this.getToken();
  }

  getToken(): string | null {
    return window.localStorage.getItem(TokenService.KEY);
  }

  setToken(token: string) {
    window.localStorage.setItem(TokenService.KEY, token);
  }

  removeToken() {
    window.localStorage.removeItem(TokenService.KEY);
  }

  decodeToken(): CurrentUser | null {
    const token = this.getToken();
    if (!token) return null;
    const payload = jwt_decode(token);
    return {
      email: payload.email,
      id: payload.id,
      name: payload.name
    };
  }

  constructor() { }
}
